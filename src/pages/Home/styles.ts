import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1080px;
  width: 100%;
  margin: 0 auto;
`;

export const Header = styled.div`
  display: flex;
  width: 100%;
  column-gap: 18px;
  margin: 24px;

  > h1 {
    font-family: Roboto;
    font-weight: bold;
  }
`;

export const OpenMenuButton = styled(motion.button)`
  width: 45px;
  height: 45px;
  background-color: var(--violet);
  color: white;
  border-radius: 50%;
  font-size: 20px;
  display: flex;
  place-items: center;
  place-content: center;

  > svg {
    transform: rotate(90deg);
    transform-origin: center center;
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  max-width: 450px;
  min-height: 238px;
  max-height: 315px;

  margin-bottom: -38px;
  z-index: 3;

  > img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const CardBoard = styled.div`
  background-color: var(--dark-gray);
  width: 100%;
  max-width: 1080px;
  border-radius: 24px;
`;

export const CardHeader = styled.div`
  margin: 24px 0;
  display: grid;
  grid-template-columns: 120px auto;

  > h1 {
    display: block;
    width: 100%;
    text-align: center;

    @media (max-width: 540px) {
      padding: 0 16px;
    }
  }
`;

export const FilterButton = styled(motion.button)`
  justify-self: center;
  padding: 10px 12px;
  border-radius: 8px;
  color: var(--gray);
  font-size: 16px;
  background: var(--dark);
  display: flex;
  align-items: center;
  align-self: center;
  column-gap: 8px;
`;

export const ProjectsContent = styled.div`
  display: flex;
  padding: 24px;

  justify-content: space-between;
  align-items: stretch;

  column-gap: 24px;
  row-gap: 12px;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;

export const ProjectsList = styled.div`
  max-width: 330px;
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 16px;
`;

export const ProjectCard = styled(motion.div)`
  padding: 8px;
  border-radius: 16px;
  background: var(--mid-gray);
  flex: 1;
  box-shadow: 5px 5px 0 var(--dark);
  color: var(--dark);
  flex-grow: 0;
`;

export const DetailsCardRow = styled.div`
  display: flex;
`;

export const Image = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 8px;
  margin: 4px 12px 8px 4px;
`;

export const ProjectBadges = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-shrink: 0;
  column-gap: 8px;
  row-gap: 8px;

  @media (max-width: 540px) {
    justify-content: center;
  }
`;

export const Badge = styled.div`
  color: white;
  background: var(--dark);
  padding: 4px 8px;
  border-radius: 8px;
`;

export const ProjectsDetails = styled.div`
  flex: 1;
  background: var(--light-gray);
  border-radius: 16px;
  color: var(--dark);

  @media (max-width: 540px) {
    margin-top: 4px;
  }
`;

export const EmploymentInfo = styled.div`
  display: flex;

  > img {
    margin-top: -39px;
    width: 70px;
    height: 70px;
    box-shadow: 5px 5px 0 var(--gray);
  }
`;

export const DetailHeader = styled.div`
  width: 100%;
  height: 100px;
  background: var(--mid-gray);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
`;

export const DetailContent = styled.div`
  padding: 8px 12px;

  > span {
    font-weight: 100;
  }

  > div {
    margin: 16px 0;
  }

  h3 {
    color: var(--violet);
    font-weight: 500;
    margin-bottom: 8px;
  }

  > .info-box {
  }

  > .overview {
    > p {
      line-height: 24px;
    }
  }

  > .work-description {
    > ul {
      list-style: none;

      > li {
        padding: 4px 8px;
      }
    }
  }
`;
