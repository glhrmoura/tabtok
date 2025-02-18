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
  justify-content: flex-start;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  padding: 16px;
`;

export const Title = styled.h2`
  font-size: 28px;
  margin: 0px;
  margin-top: 24px;
  margin-right: 32px;
  line-height: 36px;
`;

export const UserName = styled.span`
  font-size: 12px;
  padding: 4px;
  border-radius: 4px;
  background-color: #6e7681;
  display: inline-block;
  font-weight: 600;
`;

export const OptionContainer = styled.div`
  position: absolute;
  bottom: 150px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 16px;
  cursor: default;
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
  font-size: 12px;
`;

export const Info = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

