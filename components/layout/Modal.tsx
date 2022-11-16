import { ComponentPropsWithoutRef, ReactNode, useRef } from "react";
import styled from "styled-components";
import { useOutsideClick } from "../../utils/hooks/useOutsideClick";

const StyledModal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 18px;
  position: absolute;
  min-width: 170px;
  background: #ffffff;
  box-shadow: 0px 0px 64px rgba(91, 91, 91, 0.32);
  border-radius: 16px;
  right: 0;
  z-index: 1;
  top: calc(100% - 8px);
  display: none;

  &.active {
    display: block;
  }

  h2 {
    font-weight: 600;
    font-size: 16px;
    line-height: 23px;
    text-align: center;
    letter-spacing: 0.01em;
  }
`;

type Props = {
  children?: ReactNode;
  opened: boolean;
  handleClosing: Function;
};

const Modal = ({
  opened,
  children,
  className,
  handleClosing,
  ...rest
}: Props & ComponentPropsWithoutRef<"div">) => {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  useOutsideClick(wrapperRef, () => handleClosing());

  return (
    <StyledModal className={opened ? "active" : ""} ref={wrapperRef}>
      {children}
    </StyledModal>
  );
};

export default Modal;
