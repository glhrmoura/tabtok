import React, {
  forwardRef,
  useRef,
  useImperativeHandle,
  useState,
  useEffect,
} from 'react';

import {
  Container,
  Overlay,
  Content,
  Close,
  Head,
  Title,
  Child
} from './styles';

import { Icon } from '@/components/Icon';

interface ModalProps {
  title?: string;
  head?: boolean;
  open?: boolean;
  onClose?: () => void;
  children: React.ReactNode;
}

export interface ModalRef {
  open: () => void;
  close: () => void;
}

export const Modal = forwardRef<ModalRef, ModalProps>(({ 
  title, 
  head = true, 
  onClose, 
  children,
  open = false,
}, ref) => {
  const [isOpen, setIsOpen] = useState(open);
  const modalRef = useRef<HTMLDivElement | null>(null);
  const [containerHeight, setContainerHeight] = useState('0px');

  useImperativeHandle(ref, () => ({
    open: () => {
      setIsOpen(true);
    },
    close: () => {
      setIsOpen(false);
    },
  }));

  useEffect(() => {
    if (isOpen) {
      setContainerHeight('100%');
    } else {
      setTimeout(() => setContainerHeight('0px'), 400);
    }

  }, [isOpen]);

  return (
    <Container ref={modalRef} $isOpen={isOpen} style={{ height: containerHeight }}>
      <Overlay $isOpen={isOpen} onClick={onClose}>
        <Content $isOpen={isOpen} onClick={(e) => e.stopPropagation()}>
          {head && <Head>
            <Title>{title}</Title>
            <Close onClick={onClose}>
              <Icon.Close width={20} />
            </Close>
          </Head>}
          <Child>{children}</Child>
        </Content>
      </Overlay>
    </Container>
  );
});