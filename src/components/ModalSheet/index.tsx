import React from "react";
import Modal from "react-native-modal";

import Button from "../Button";
import { DetailsCard } from "../DetailsCard";
import { SectionTitle } from "../SectionTitle";
import {
  BottomSheetBody,
  TitleContainer,
  Title,
  styles,
  Logo,
  IconsWrapper,
  CommentIcon,
  SaveIcon,
  Description,
  CardWrapper,
  DetailsText,
  TextWrapper,
  Footer,
  Shadow,
} from "./styles";

interface ModalSheetProps {
  visible: boolean;
  title?: string;
  onRequestClose(): void;
}

const ModalSheet: React.FC<ModalSheetProps> = ({
  visible,
  children,
  onRequestClose,
}) => {
  return (
    <Modal
      style={styles.modal}
      isVisible={visible}
      statusBarTranslucent
      swipeDirection={["down"]}
      useNativeDriverForBackdrop
      onSwipeComplete={onRequestClose}
      onBackdropPress={onRequestClose}
      onBackButtonPress={onRequestClose}
    >
      <BottomSheetBody>
        <IconsWrapper>
          <CommentIcon />
          <SaveIcon />
        </IconsWrapper>
        <Logo source={require("../../assets/google.png")} />
        <TitleContainer>
          <Title>UI designer SR</Title>
        </TitleContainer>
        <Description>Google, Sao Paulo - SP</Description>
        <CardWrapper>
          <DetailsCard label="Salário" value="R$ 8.500,00" icon="dollar" />
          <DetailsCard label="Tipo" value="Integral" icon="clock" />
          <DetailsCard label="Posição" value="Sênior" icon="level" />
        </CardWrapper>

        <SectionTitle title="Sobre a vaga" />

        <TextWrapper>
          <DetailsText>
            Estamos buscando um UX Product Designer PL/SR para compor ao nosso
            time. Se você tem o desejo de oferecer uma experiência de alta
            qualidade aos usuários, é uma pessoa curiosa, gosta de contribuir
            com seus conhecimentos e tem uma visão sistêmica sobre os produtos
            em que atua, a VP é o lugar certo para você! impactantes;
          </DetailsText>
          <DetailsText>
            Estamos buscando um UX Product Designer PL/SR para compor ao nosso
            time. Se você tem o desejo de oferecer uma experiência de alta
            qualidade aos usuários, é uma pessoa curiosa, gosta de contribuir
            com seus conhecimentos e tem uma visão sistêmica sobre os produtos
            em que atua, a VP é o lugar certo para você! impactantes;
          </DetailsText>
        </TextWrapper>
        <Shadow colors={["#bd1111cc", "transparent"]} />
        <Footer>
          <Button />
        </Footer>
      </BottomSheetBody>
    </Modal>
  );
};

export default ModalSheet;
