import { OrderDetails, ModalBody, Overlay, Actions } from './styles';
import closeIcon from '../../assets/images/close-icon.svg';
import { Order } from '../../types/Order';
import formatCurrency from '../../utils/formatCurrency';
import { useEffect } from 'react';
import useAnimatedUnmount from '../../hooks/useAnimatedUnmount';

interface OrderModalProps {
  visible: boolean,
  order: Order | null,
  onClose: () => void,
  isLoading: boolean
  onCancelOrder: () => void
  onChangeOrderStatus: () => void;
}

export default function OrderModal({ visible, order, onClose, isLoading, onCancelOrder, onChangeOrderStatus }: OrderModalProps) {
  const { shouldRender, animatedRefElement } = useAnimatedUnmount(visible);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        onClose();
      }
    }

    document.addEventListener('keydown', onKeyDown);

    return () => document.removeEventListener('keydown', onKeyDown);
  }, []);

  if (!shouldRender) {
    return null;
  }

  let total = 0;
  if (order) {
    total = order.products.reduce((total, { quantity, product }) => {
      return total + product.price * quantity;
    }, 0);
  }

  return (
    <Overlay isLeaving={!visible} ref={animatedRefElement}>
      <ModalBody isLeaving={!visible}>
        <header>
          <strong>Mesa {order?.table}</strong>
          <button type="button" onClick={onClose}>
            <img src={closeIcon} alt="Ícone de fechar" />
          </button>
        </header>

        <div className="status-container">
          <small>Status do pedido</small>
          <div>
            <span>
              {order?.status === 'WAITING' && '🕑'}
              {order?.status === 'IN_PRODUCTION' && '🧑‍🍳'}
              {order?.status === 'DONE' && '✅'}
            </span>
            <strong>
              {order?.status === 'WAITING' && 'Fila de espera'}
              {order?.status === 'IN_PRODUCTION' && '🧑Em produção'}
              {order?.status === 'DONE' && 'Pronto!'}
            </strong>
          </div>
        </div>

        <OrderDetails>
          <strong className="items-container-title">Itens</strong>

          <div className="order-items">
            {order?.products.map(({ _id, product, quantity }) => (
              <div className="item" key={_id}>
                <img
                  src={`http://localhost:3001/uploads/${product.imagePath}`}
                  alt="Imagem do produto"
                  width="48"
                  height="40"
                />

                <small className="quantity">{quantity}x</small>

                <div>
                  <strong>{product.name}</strong>
                  <span>{formatCurrency(product.price)}</span>
                </div>
              </div>
            ))}
            <div className="total">
              <small>Total</small>
              <strong>{formatCurrency(total)}</strong>
            </div>
          </div>
        </OrderDetails>

        <Actions>

          {order?.status !== 'DONE' && (
            <button
              type="button"
              className="primary"
              disabled={isLoading}
              onClick={() => onChangeOrderStatus()}
            >
              <span>
                {order?.status === 'WAITING' && '🧑‍🍳'}
                {order?.status === 'IN_PRODUCTION' && '✅'}
              </span>
              <strong>
                {order?.status === 'WAITING' && 'Iniciar Produção'}
                {order?.status === 'IN_PRODUCTION' && 'Concluir Pedido'}
              </strong>
            </button>
          )}
          <button
            type="button"
            className="secondary"
            onClick={() => onCancelOrder()}
            disabled={isLoading}
          >
            <strong>Cancelar Pedido</strong>
          </button>
        </Actions>
      </ModalBody>
    </Overlay>
  );
}
