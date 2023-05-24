import styled from 'styled-components';

export const Board = styled.div`
  padding: 16px;
  border: 1px solid rgba(204, 204, 204, 0.4);
  border-radius: 16px;

  display: flex;
  flex-direction: column;
  align-items: center;

  flex: 1;

  > header {
    padding: 8px;
    font-size: 14px;

    display: flex;
    align-items: center;
    gap: 8px;
  }
`;

export const OrdersContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  margin-top: 24px;

  button {
    background: #fff;
    height: 128px;
    border: 1px solid rgba(204, 204, 204, 0.4);
    border-radius: 16px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    outline: none;

    & + button {
      margin-top: 24px;
    }

    strong {
      font-weight: 500;
      font-size: 16px;
    }

    span {
      font-weight: 400;
      font-size: 14px;
    }
  }
`;
