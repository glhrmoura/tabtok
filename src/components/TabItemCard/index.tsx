import React from 'react';

import { Icon } from '../Icon';
import { Container, Content, UserName, Title, OptionContainer, Option, CreatedAt, Overlay, Info } from './styles';

import { TabItem } from '@/types';

import { calcTime } from '@/util';

interface TabItemProps {
  item: TabItem;
  backgroundColor: string;
  onCommentary?: () => void;
}

const TabItemCard = React.memo(({ item, onCommentary = () => { }, backgroundColor }: TabItemProps) => {
  return (
    <a href={`https://www.tabnews.com.br/${item.owner_username}/${item.slug}`} target="_blank" rel="noreferrer">
      <Container style={{ backgroundColor }}>
        <Overlay>
          <OptionContainer onClick={(event) => event.preventDefault()}>
            <a
              target="_blank"
              onClick={(event) => event.stopPropagation()}
              href={`https://www.tabnews.com.br/${item.owner_username}/${item.slug}`}
            >
              <Option>
                <Icon.Like width={28} />
                <span>{Math.max(0, item.tabcoins)}</span>
              </Option>
            </a>
            <Option onClick={onCommentary}>
              <Icon.Commentary width={28} />
              <span>{item.children_deep_count}</span>
            </Option>
            {/* <Option>
          <Icon.Share width={28} />
        </Option> */}
          </OptionContainer>
          <Content>
            <Icon.Logo />
            <Title>{item.title}</Title>
            <Info>
              <a
                target="_blank"
                onClick={(event) => event.stopPropagation()}
                href={`https://www.tabnews.com.br/${item.owner_username}`}
              >
                <UserName>{item.owner_username}</UserName>
              </a>
              <CreatedAt>{calcTime(item.created_at)}</CreatedAt>
            </Info>
          </Content>
        </Overlay>
      </Container>
    </a>
  );
}, (prevProps, nextProps) => JSON.stringify(prevProps.item) === JSON.stringify(nextProps.item));

export { TabItemCard };