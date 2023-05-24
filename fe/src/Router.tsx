import { useRoutes } from 'react-router-dom';
import Home from './pages/Home';

export default function Router() {
  const router = useRoutes([
    {
      path: '/',
      element: <Home />,
    }
  ]);

  return router;
}
