import React from "react";
import { useModal } from "../../utils/useModal";
import { DrawerMenu } from "../../components";
import { FiBarChart2, FiFilter } from "react-icons/fi";
import {
  Container,
  Header,
  OpenMenuButton,
  ImageContainer,
  CardBoard,
  CardHeader,
  FilterButton,
  ProjectsContent,
  ProjectsList,
  ProjectCard,
  ProjectsDetails,
  DetailsCardRow,
  Image,
  EmploymentInfo,
  ProjectBadges,
  Badge,
  DetailHeader,
  DetailContent,
} from "./styles";
import {
  ProjectsList as SampleProjectsList,
  ProjectDetail as SampleProjectDetail,
} from "./sampledata";

import Person from "../../assets/person.png";

const FakeSrc = "https://api.adorable.io/avatars/60/placeholder.png";

const buttonAnimations = {
  whileHover: { scale: 1.03 },
  whileTap: { scale: 1.08 },
};

const Home: React.FC = () => {
  const { isOpen, onClose, onOpen } = useModal();

  return (
    <Container>
      <Header>
        <OpenMenuButton type="button" onClick={onOpen} {...buttonAnimations}>
          <FiBarChart2 />
        </OpenMenuButton>
        <h1>DevPlace</h1>
      </Header>

      <ImageContainer>
        <img src={Person} alt="Imagem" />
      </ImageContainer>
      <CardBoard>
        <CardHeader>
          <FilterButton {...buttonAnimations}>
            <FiFilter /> Filtrar
          </FilterButton>

          <h1>O que você busca ?</h1>
        </CardHeader>

        <ProjectsContent>
          <ProjectsList>
            {SampleProjectsList.map((project) => (
              <ProjectCard key={project.id}>
                <DetailsCardRow>
                  <Image src={FakeSrc} />
                  <div>
                    <h3>{project.employment}</h3>
                    <h4>{project.location}</h4>
                  </div>
                </DetailsCardRow>
                <ProjectBadges>
                  {project.badges.map((badge) => (
                    <Badge key={badge.id}>{badge.name}</Badge>
                  ))}
                </ProjectBadges>
              </ProjectCard>
            ))}
          </ProjectsList>

          <ProjectsDetails>
            <DetailHeader></DetailHeader>
            <DetailContent>
              <EmploymentInfo>
                <Image src={FakeSrc} />

                <h1>{SampleProjectDetail.employment}</h1>
              </EmploymentInfo>

              <span>{SampleProjectDetail.location}</span>

              <div className="info-box"></div>

              <div className="overview">
                <h3>Visão geral da vaga</h3>

                <p>{SampleProjectDetail.overview}</p>
              </div>

              <div className="work-description">
                <h3>Descrição do trabalho</h3>

                <ul>
                  {SampleProjectDetail.workDescription.map((item, index) => (
                    <li key={index.toString()}>{item}</li>
                  ))}
                </ul>
              </div>
            </DetailContent>
          </ProjectsDetails>
        </ProjectsContent>
      </CardBoard>

      <DrawerMenu isOpen={isOpen} onClose={onClose}>
        Um drawer menu irado!
      </DrawerMenu>
    </Container>
  );
};

export default Home;
