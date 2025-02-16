import { forwardRef } from 'react';

import { Mousewheel } from 'swiper/modules';
import { Swiper, SwiperSlide, SwiperRef } from 'swiper/react';

import { Container } from './styles';

import { TabItem } from '@/types';

import { getRandomColor } from '@/util';

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
            <TabItemCard item={item} backgroundColor={getRandomColor()} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
});

export { VerticalScroller };
