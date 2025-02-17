import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  height: 100%;
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

export const EmptyCommentary = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  line-height: 22px;
  height: 100%;

  a {
    text-decoration: underline;
    text-underline-offset: 2px;
  }
`;