import { forwardRef } from 'react';

import { Swiper, SwiperSlide, SwiperRef } from 'swiper/react';

import { Mousewheel } from 'swiper/modules';

import { Container } from './styles';

import { TabItem } from '@/types';

import { TabItemCard } from '@/components/TabItemCard';

interface VerticalScrollerProps {
  tabItemList: TabItem[];
  onLoadMore: () => void;
}

const VerticalScroller = forwardRef<SwiperRef, VerticalScrollerProps>(({ tabItemList, onLoadMore }, ref) => {
  return (
    <Container>
      <Swiper
        ref={ref}
        slidesPerView={1}
        modules={[Mousewheel]}
        direction='vertical'
        mousewheel
        onReachEnd={onLoadMore}
        touchReleaseOnEdges={true}
      >
        {tabItemList.map((item: TabItem) => (
          <SwiperSlide key={item.id}>
            <TabItemCard item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
});

export { VerticalScroller };
