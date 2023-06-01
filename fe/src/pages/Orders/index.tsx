import Header from '../../components/Header';
import OrdersList from '../../components/OrdersList';

export default function Orders() {
  return (
    <>
      <Header title="Pedidos" description="Acompanhe os pedidos dos clientes" />
      <OrdersList />
    </>
  );
}
