import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { BrowserRouter } from 'react-router-dom';

import { GlobalStyles } from './styles/GlobalStyles';
import Router from './Router';

export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Router />
      <ToastContainer position="bottom-center" />
    </BrowserRouter>
  );
}
