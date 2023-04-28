import styled from 'styled-components';

export const Container = styled.header`
  background: #D73035;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1216px;
  height: 198px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  .page-details {
    h1 {
      color: #fff;
      font-size: 32px;
    }

    h2 {
      margin-top: 6px;

      color: #fff;
      font-weight: 400;
      font-size: 16px;
      opacity: 0.9;
    }
  }
`;
