import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled(motion.div)`
  position: fixed;
  width: 350px;
  top: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  background: var(--dark-gray);
  box-shadow: 0 5px 0 var(--violet);
  z-index: 998;

  @media (max-width: 540px) {
    width: 100%;
  }
`;

export const CloseButton = styled.button`
  align-self: flex-end;
  padding: 12px;
  border-radius: 8px;
  margin: 8px;
  background-color: var(--salmoon);
  color: #fff;
`;

export const DrawerOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: -1;
  background: #0007;
`;

export const DrawerBody = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  place-content: center;
  place-items: center;
`;
