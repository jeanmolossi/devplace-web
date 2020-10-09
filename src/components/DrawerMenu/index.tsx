import React from "react";
import ReactDOM from "react-dom";
import { FiX } from "react-icons/fi";
import { Container, CloseButton, DrawerOverlay, DrawerBody } from "./styles";

interface DrawerProps {
  isOpen: boolean;
  onClose(): void;
}

const variants = {
  out: { x: "-100%" },
  enter: { x: "0" },
};

const overlayVariants = {
  out: { zIndex: 0, opacity: 0 },
  enter: { zIndex: 997, opacity: 1 },
};

const DrawerComponent: React.FC<DrawerProps> = (props) => {
  const { isOpen, onClose, children } = props;

  return (
    <DrawerOverlay
      variants={overlayVariants}
      initial="out"
      animate={isOpen ? "enter" : "out"}
      exit="out"
      onClick={onClose}
    >
      <Container
        variants={variants}
        initial="out"
        animate={isOpen ? "enter" : "out"}
        exit="out"
        transition={{
          type: "tween",
          duration: 0.2,
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <CloseButton onClick={onClose}>
          <FiX />
        </CloseButton>
        <DrawerBody>{children}</DrawerBody>
      </Container>
    </DrawerOverlay>
  );
};

const DrawerMenu: React.FC<DrawerProps> = (props) => {
  const { isOpen } = props;

  const container =
    document.getElementById("root-app") ??
    document.getElementById("root") ??
    document.createElement("div");

  return ReactDOM.createPortal(
    isOpen ? <DrawerComponent {...props} /> : "",
    container
  );
};

export default DrawerMenu;
