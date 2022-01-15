import React from "react";
import { Button, ButtonText, Container, Title } from "./styles";

interface SectionTitleProps {
  title: string;
  onViewMorePress?: () => void;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  onViewMorePress,
}) => {
  function handleViewMorePress() {
    onViewMorePress && onViewMorePress();
  }

  return (
    <Container onPress={handleViewMorePress}>
      <Title>{title ?? "Default title"}</Title>
      {onViewMorePress && (
        <Button>
          <ButtonText>Ver todos</ButtonText>
        </Button>
      )}
    </Container>
  );
};
