import { Board, OrdersContainer } from './styles';

import { Order }from '../../types/Order';
import OrderModal from '../OrderModal';
import { useState } from 'react';
import { api } from '../../utils/api';
import { toast } from 'react-toastify';

interface OrdersBoardProps {
  icon: string,
  title: string,
  orders: Order[],
  onCancelOrder: (orderId: string) => void
  onChangeOrderStatus: (orderId: string, status: Order['status']) => void;
}

export default function OrdersBoard({ icon, title, orders, onCancelOrder, onChangeOrderStatus }: OrdersBoardProps) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<null | Order>(null);
  const [isLoading, setIsLoading] = useState(false);

  function handleOpenModal(order: Order) {
    setIsModalVisible(true);
    setSelectedOrder(order);
  }

  function handleCloseModal() {
    setIsModalVisible(false);
    setSelectedOrder(null);
  }

  async function handleChangeOrderStatus() {
    setIsLoading(true);

    const status = selectedOrder?.status === 'WAITING'
      ? 'IN_PRODUCTION'
      : 'DONE';

    await api.patch(`/orders/${selectedOrder?._id}`, { status });

    onChangeOrderStatus(selectedOrder!._id, status);
    setIsModalVisible(false);
    setIsLoading(false);
    toast.success(`O status do pedido da mesa ${selectedOrder?.table} foi alterado!`);
  }

  async function handleCancelOrder() {
    setIsLoading(true);

    await api.delete(`/orders/${selectedOrder?._id}`);

    onCancelOrder(selectedOrder!._id);
    setIsModalVisible(false);
    setIsLoading(false);
    toast.success(`O pedido da mesa ${selectedOrder?.table} foi cancelado!`);
  }

  return (
    <Board>
      <OrderModal
        visible={isModalVisible}
        order={selectedOrder}
        onClose={handleCloseModal}
        isLoading={isLoading}
        onCancelOrder={handleCancelOrder}
        onChangeOrderStatus={handleChangeOrderStatus}
      />

      <header>
        <span>{icon}</span>
        <strong>{title}</strong>
        <span>(1)</span>
      </header>

      <OrdersContainer>
        {orders.length > 0 && orders.map((order) => (
          <button key={order._id} type="button" onClick={() => handleOpenModal(order)}>
            <strong>Mesa {order.table}</strong>
            <span>{order.products.length} itens</span>
          </button>
        ))}
      </OrdersContainer>
    </Board>
  );
}
