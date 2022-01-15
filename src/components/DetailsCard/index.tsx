import React from "react";

import {
  ClockIcon,
  Container,
  DollarIcon,
  Label,
  LevelIcon,
  Value,
} from "./styles";

type Icon = "clock" | "dollar" | "level";

interface DetailsCardProps {
  label: string;
  value: string;
  icon: Icon;
}

export const DetailsCard: React.FC<DetailsCardProps> = ({
  label,
  value,
  icon,
}) => {
  function getIcon(param: Icon) {
    switch (param) {
      case "clock":
        return <ClockIcon />;

      case "dollar":
        return <DollarIcon />;

      default:
        return <LevelIcon />;
    }
  }

  return (
    <Container>
      {getIcon(icon)}
      <Label>{label}</Label>
      <Value>{value}</Value>
    </Container>
  );
};
