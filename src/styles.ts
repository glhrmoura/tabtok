import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

export const Content = styled.div`
  position: relative;
  height: 700px;
  width: 400px;
  background-color: #161b22;

  @media (max-width: 768px) {
    height: 100dvh;
    width: 100%;
  }
`;