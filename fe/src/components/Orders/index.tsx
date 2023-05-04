import { Order } from '../../types/Order';
import { Container } from '../Orders/styles';
import OrdersBoard from '../OrdersBoard';

const orders: Order[] = [
  {
    '_id': '644a6d01da20e41e1082c90b',
    'table': '3',
    'status': 'WAITING',
    'products': [
      {
        'product': {
          'name': 'Pizza quatro queijos',
          'imagePath': '1682547820830-quatro-queijos.png',
          'price': 40,
        },
        'quantity': 1,
        '_id': '644a6d01da20e41e1082c90c'
      },
      {
        'product': {
          'name': 'Coca-cola',
          'imagePath': '1682556688408-coca-cola.png',
          'price': 7,
        },
        'quantity': 2,
        '_id': '644a6d01da20e41e1082c90d'
      }
    ],
  }
];

export default function Orders() {
  return (
    <Container>
      <OrdersBoard icon="🕑" title="Fila de espera" orders={orders} />
      <OrdersBoard icon="🧑‍🍳" title="Em preparação" orders={[]} />
      <OrdersBoard icon="✅" title="Pronto!" orders={[]} />
    </Container>
  );
}
