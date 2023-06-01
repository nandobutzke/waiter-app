import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Overlay } from './styles';
import { AiOutlineClose } from 'react-icons/ai';
import { MdBorderColor, MdAdminPanelSettings } from 'react-icons/md';
import { IoIosArrowBack } from 'react-icons/io';
import ReactPortal from '../ReactPortal';
import useAnimatedUnmount from '../../hooks/useAnimatedUnmount';

interface SidebarProps {
  onCloseSideBar: () => void;
  openSideBar: boolean;
}

export default function Sidebar({ onCloseSideBar, openSideBar }: SidebarProps) {
  const { shouldRender, animatedRefElement } = useAnimatedUnmount(openSideBar);
  const [isActive, setIsActive] = useState(false);

  if (!shouldRender) {
    return null;
  }

  return (
    <ReactPortal containerId='sidebar-root'>
      <Overlay isLeaving={!openSideBar} ref={animatedRefElement}>
        <Container isActive={isActive} isLeaving={!openSideBar}>
          <div className="close-icon">
            <AiOutlineClose size={32} color="#D73035" onClick={onCloseSideBar} />
          </div>
          <div className="links">
            <Link to="/">
              <span><MdBorderColor size={24} />Pedidos</span>
            </Link>
            <button type="button" onClick={() => setIsActive((prevState) => !prevState)}>
              <span><MdAdminPanelSettings size={24} />Administração</span>
              <IoIosArrowBack className="toggle-icon" size={16} />
            </button>
            {isActive && (
              <div className="accordion-links">
                <Link to="/admin">Produtos</Link>
                <Link to="/admin">Categorias</Link>
              </div>
            )}
          </div>
        </Container>
      </Overlay>
    </ReactPortal>
  );
}
