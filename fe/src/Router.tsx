import { useRoutes } from 'react-router-dom';
import Orders from './pages/Orders';
import Dashboard from './pages/Dashboard';

export default function Router() {
  const router = useRoutes([
    {
      path: '/',
      element: <Orders />,
    },
    {
      path: '/admin',
      element: <Dashboard />,
    }
  ]);

  return router;
}
