import React from 'react';

import { Icon } from '../Icon';
import { Container, Content, Status, Title, OptionContainer, Option, CreatedAt, Overlay } from './styles';

import { TabItem } from '@/types';

import { calcTime } from '@/util';

interface TabItemProps {
  item: TabItem;
  backgroundColor: string;
}

const TabItemCard = React.memo(({ item, backgroundColor }: TabItemProps) => {
  return (
    <Container style={{ backgroundColor }}>
      <Overlay>
        <OptionContainer>
          <a href={`https://www.tabnews.com.br/${item.owner_username}/${item.slug}`} target="_blank" rel="noreferrer">
            <Option>
              <Icon.Like width={28} />
              <span>{item.tabcoins}</span>
            </Option>
          </a>
          <a href={`https://www.tabnews.com.br/${item.owner_username}/${item.slug}`} target="_blank" rel="noreferrer">
            <Option>
              <Icon.Commentary width={28} />
              <span>{item.children_deep_count}</span>
            </Option>
          </a>
          {/* <Option>
          <Icon.Share width={28} />
        </Option> */}
        </OptionContainer>
        <Content>
          <Status>Publicado</Status>
          <a href={`https://www.tabnews.com.br/${item.owner_username}/${item.slug}`} target="_blank" rel="noreferrer">
            <Title>{item.title}</Title>
          </a>
          <CreatedAt>{calcTime(item.created_at)}</CreatedAt>
        </Content>
      </Overlay>
    </Container>
  );
}, (prevProps, nextProps) => JSON.stringify(prevProps.item) === JSON.stringify(nextProps.item));

export { TabItemCard };