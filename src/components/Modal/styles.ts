import styled from 'styled-components';

export const Container = styled.div<{ $isOpen?: boolean }>`
  display: flex;
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  z-index: 1000;
`;

export const Overlay = styled.div<{ $isOpen?: boolean }>`
  position: relative;
  display: flex;
  background-color: rgba(0, 0, 0, 0.7);
  justify-content: center;
  align-items: center;
  z-index: 20;
  height: 100%;
  width: 100%;
  transition: background-color .4s;
  background-color: ${({ $isOpen }) => ($isOpen ? 'rgba(0, 0, 0, 0.5)' : 'transparent')};

  @media (max-width: 500px) {
    width: 100%;
  }
`;

export const Content = styled.div<{ $isOpen?: boolean }>`
  position: absolute;
  left: 0px;
  background-color: #121212;
  border-radius: 8px;
  width: 100%;
  transition: bottom .4s;
  bottom: ${({ $isOpen }) => ($isOpen ? '0%' : '-100%')};
`;

export const Child = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 0px 16px;
`;

export const Head = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px;
`;

export const Title = styled.h3`
  font-size: 14px;
  font-weight: 600;
  margin: 0px;  
`;

export const Close = styled.div`
  border: none;
  font-size: 24px;
  cursor: pointer;
`;