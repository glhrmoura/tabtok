import { getRandomColor } from '@/util';
import { Container, UserImage, Body, ImageContainer, Content, Replay, BodyContainer, UserName } from './styles';

import { Commentary } from '@/types';

interface CommentaryProps {
  item: Commentary;
}

const CommentaryItem = ({ item }: CommentaryProps) => {
  return (
    <Container>
      <Content>
        <ImageContainer>
          <UserImage style={{ backgroundColor: getRandomColor() }}>
            {item.owner_username?.slice(0, 2).toUpperCase()}
          </UserImage>
        </ImageContainer>
        <BodyContainer>
          <UserName>{item.owner_username}</UserName>
          <Body>{item.body}</Body>
          <Replay>
            {item?.children.map((child) => (
              <CommentaryItem item={child} />
            ))}
          </Replay>
        </BodyContainer>
      </Content>
    </Container>
  );
};

export { CommentaryItem };