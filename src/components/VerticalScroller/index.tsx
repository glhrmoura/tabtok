import { useRef, useState } from 'react';

import { Mousewheel } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { http } from '@/http';

import { CommentaryContainer, Container } from './styles';
import { CommentaryItem } from '../Commentary';

import { Commentary, TabItem } from '@/types';

import { getRandomColor } from '@/util';

import { Modal, ModalRef } from '@/components/Modal';
import { TabItemCard } from '@/components/TabItemCard';

interface VerticalScrollerProps {
  tabItemList: TabItem[];
  onLoadMore: () => void;
}

const VerticalScroller = ({ tabItemList, onLoadMore }: VerticalScrollerProps) => {
  const modal = useRef<ModalRef | null>(null);
  const [commentaryList, setCommentary] = useState<Commentary[]>([]);

  const loadComentaries = async (index: number) => {
    const tabItem = tabItemList[index];
    const { data } = await http.get(`/contents/${tabItem.owner_username}/${tabItem.slug}/children`);
    setCommentary(data);
  };

  const onSlideChange = (swiper: any) => {
    loadComentaries(swiper.activeIndex);
  };

  return (
    <Container>
      <Swiper
        mousewheel
        slidesPerView={1}
        modules={[Mousewheel]}
        direction='vertical'
        onReachEnd={onLoadMore}
        touchReleaseOnEdges={true}
        onSlideChange={onSlideChange}
      >
        {tabItemList.map((item: TabItem) => (
          <SwiperSlide key={item.id}>
            <TabItemCard item={item} backgroundColor={getRandomColor()} onCommentary={() => modal?.current?.open()} />
          </SwiperSlide>
        ))}
      </Swiper>
      <Modal title="Comentários" ref={modal} onClose={() => modal?.current?.close()}>
        <CommentaryContainer>
          {commentaryList.map((item) => (
            <CommentaryItem key={item.id} item={item} />
          ))}
        </CommentaryContainer>
      </Modal>
    </Container>
  );
};

export { VerticalScroller };
