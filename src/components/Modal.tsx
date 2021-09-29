import React, { FC, ReactNode } from "react";
import { CenterModal, ModalTitle } from "react-spring-modal";
import "react-spring-modal/styles.css";

interface ModalProps {
  isOpen: boolean;
  onDismiss: () => void;
  title?: string;
  children: ReactNode;
}
const Modal: FC<ModalProps> = (props: ModalProps) => {
  const { isOpen, onDismiss, title, children } = props;
  return (
    <CenterModal isOpen={isOpen} onDismiss={onDismiss}>
      {title && <ModalTitle>{title}</ModalTitle>}
      {children}
    </CenterModal>
  );
};

export default Modal;
