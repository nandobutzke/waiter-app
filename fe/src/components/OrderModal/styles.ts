import styled from 'styled-components';

export const Overlay = styled.div`
  width: 100%;
  left: 0px;
  top: 0px;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(4.5px);
  position: fixed;
  bottom: 0px;
  right: 0px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalBody = styled.div`
  background-color: #fff;
  width: 480px;
  padding: 32px;
  border-radius: 8px;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    strong {
      font-size: 24px;
    }

    button {
      background-color: transparent;
      border: none;
    }
  }

  .status-container {
    margin-top: 32px;

    small {
      opacity: 0.8;
      font-size: 14px;
    }

    div {
      display: flex;
      align-items: center;
      gap: 8px;
    }
  }
`;

export const OrderDetails = styled.div`
  margin-top: 32px;

  .items-container-title {
    font-size: 14px;
    opacity: 0.8;
  }

  .order-items {
    margin-top: 16px;

    .item {
      display: flex;
      align-items: self-start;
      gap: 12px;

      img {
        border-radius: 6px;
      }

      & + .item {
        margin-top: 16px;
      }

      .quantity {
        color: #666;
        display: block;
      }

      div {
        justify-content: space-between;

        strong {
          display: block;
          font-size: 16px;
        }

        span {
          font-size: 14px;
          color: #666666;
        }
      }
    }

    .total {
      margin-top: 24px;

      display: flex;
      align-items: center;
      justify-content: space-between;

      small {
        color: #333333;
        font-size: 14px;
      }

      strong {
        font-size: 16px;
      }
    }
  }

`;

export const Actions = styled.footer`
  margin-top: 32px;
  display: flex;
  flex-direction: column;

  button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .primary {
    padding: 12px 24px;
    background: #333333;
    border: none;
    border-radius: 48px;
    color: #fff;

    display: flex;
    align-items: center;
    justify-content: center;

    gap: 4px;
  }

  .secondary {
    margin-top: 12px;

    background-color: transparent;
    border: none;
    padding: 14px 24px;
    color: #D73035;
  }
`;
