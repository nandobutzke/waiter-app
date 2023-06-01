import { useLocation } from 'react-router-dom';
import logo from '../../assets/images/logo.svg';
import { Container, Content } from './styles';
import { useState, useEffect, useCallback } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import Sidebar from '../Sidebar';

interface HeaderProps {
  title: string;
  description: string;
}

export default function Header({ title, description }: HeaderProps) {
  const [openSideBar, setOpenSideBar] = useState(false);
  const location = useLocation();

  function handleShowSideBar() {
    setOpenSideBar(true);
  }

  function handleCloseSideBar() {
    setOpenSideBar(false);
  }

  useEffect(() => {
    setOpenSideBar(false);
  }, [location]);

  return (
    <>
      <Container>
        <AiOutlineMenu size={32} color="#FFF" onClick={handleShowSideBar} />
        <Content>
          <div className="page-details">
            <h1>{title}</h1>
            <h2>{description}</h2>
          </div>

          <img src={logo} alt="WAITERAPP" />
        </Content>
        <Sidebar onCloseSideBar={handleCloseSideBar} openSideBar={openSideBar} />
      </Container>
    </>
  );
}
