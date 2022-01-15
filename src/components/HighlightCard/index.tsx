import React from "react";
import {
  Container,
  Description,
  Label,
  Logo,
  Tag,
  TagsWrapper,
  TagText,
  Title,
} from "./styles";

interface TagData {
  color: any;
  text: string;
}

interface Job {
  title: string;
  description: string;
  label: string;
}

interface HighlightCardProps {
  logo: any;
  job: Job;
  firstTag: TagData;
  secondTag: TagData;
  onPress: () => void;
}

export const HighlightCard: React.FC<HighlightCardProps> = ({
  logo,
  job,
  firstTag,
  secondTag,
  onPress,
}) => {
  return (
    <Container onPress={onPress}>
      <Logo source={logo} />
      <Title>{job?.title}</Title>
      <Description>{job?.description}</Description>
      <Label>{job?.label}</Label>

      <TagsWrapper>
        <Tag tagColor={firstTag?.color}>
          <TagText>{firstTag?.text}</TagText>
        </Tag>
        <Tag tagColor={secondTag?.color}>
          <TagText>{secondTag?.text}</TagText>
        </Tag>
      </TagsWrapper>
    </Container>
  );
};
