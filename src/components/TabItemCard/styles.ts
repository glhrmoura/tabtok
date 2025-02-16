import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  height: 100%;
  width: 100%;
  z-index: 100;
  position: relative;
  background-color: #161b22;
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const Content = styled.div`
  width: 100%;
  padding: 16px;
  margin-bottom: 24px;
`;

export const Title = styled.h2`
  font-size: 24px;
  margin: 0px;
`;

export const Status = styled.span`
  font-size: 12px;
  padding: 4px;
  border-radius: 4px;
  background-color: #3fb950;
  display: inline-block;
  margin-bottom: 12px;
  font-weight: 600;
`;

export const OptionContainer = styled.div`
  position: absolute;
  bottom: 200px;
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 16px;
`;

export const Option = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  gap: 8px;
  align-items: center;
  flex-direction: column;
  font-size: 12px;
`;

export const CreatedAt = styled.span`
  display: inline-block;
  margin-top: 8px;
  font-size: 12px;
`;

