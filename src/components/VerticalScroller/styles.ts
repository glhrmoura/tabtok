import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  height: 100%;
  background-color: red;
  overflow: hidden;
`;

export const CommentaryContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 12px;
  height: 400px;
  overflow: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`;