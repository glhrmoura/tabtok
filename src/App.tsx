import { useRef, useState } from 'react';

import { SwiperRef } from 'swiper/react';

import { http } from '@/http';

import { Container, Content } from '@/styles';

import { GlobalStyle } from '@/theme/global';

import { TabItem } from '@/types';

import { VerticalScroller } from '@/components/VerticalScroller';

const App = () => {
  const verticalScrollerRef = useRef<SwiperRef>(null);

  const [page, setPage] = useState<number>(1);
  const [tabItemList, setTabItemList] = useState<TabItem[]>([]);

  const load = async () => {
    const { data } = await http.get(`/contents?page=${page}&per_page=10&strategy=new`);

    setPage(prevPage => prevPage + 1);
    setTabItemList(state => [...state, ...data]);
  };

  return (
    <Container>
      <GlobalStyle />
      <Content>
        <VerticalScroller
          ref={verticalScrollerRef}
          tabItemList={tabItemList}
          onLoadMore={load}
        />
      </Content>
    </Container>
  );
};

export default App;