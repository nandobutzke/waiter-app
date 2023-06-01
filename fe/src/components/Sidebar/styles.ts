import styled, { css, keyframes } from 'styled-components';

const sidebarIn = keyframes`
  from {
    transform: translateX(-350px);
  }
  to {
    transform: translateX(0px);
  }
`;

const sidebarOut = keyframes`
  from {
    transform: translateX(0px);
  }
  to {
    transform: translateX(-350px);
  }
`;

const overlayIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const overlayOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

interface StyledSideBarProps {
  isLeaving: boolean;
  isActive?: boolean;
}

export const Overlay = styled.div<StyledSideBarProps>`
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(3px);
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  animation: ${overlayIn} 0.5s forwards;

  ${({ isLeaving }) => isLeaving && css` animation: ${overlayOut} 0.5s forwards; `};
`;

export const Container = styled.aside<StyledSideBarProps>`
  background: #fff;
  width: 350px;
  height: 100vh;
  animation: ${sidebarIn} 0.5s forwards;

  ${({ isLeaving }) => isLeaving && css` animation: ${sidebarOut} 0.5s forwards; `};

  display: flex;
  flex-direction: column;

  svg {
    cursor: pointer;
  }

  .close-icon {
    display: flex;
    justify-content: end;
    padding: 12px;
  }

  .links {
    display: flex;
    flex-direction: column;
    margin-top: 24px;

    a, button {
      text-decoration: none;
      color: #D73035;
      padding: 12px;

      border: none;
      background: none;
      outline: none;

      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;

      span {
        display: flex;
        align-items: center;
        font-size: 20px;

        svg {
          margin-right: 8px;
        }
      }

      .toggle-icon {
        transition: transform 0.2s;
        transform: ${({ isActive }) => isActive ? 'rotate(-90deg);' : 'rotate(0deg);'};
      }

      transition: background 0.2s;

      &:hover {
        background: #ddd;
      }
    }

    .accordion-links {
      a {
        padding-left: 48px;
      }
    }
  }
`;
