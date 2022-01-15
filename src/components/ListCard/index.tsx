import React from "react";
import { Container, Content, Description, Logo, Tag, Title } from "./styles";

interface ListCardProps {
  job: {
    title: string;
    description: string;
    tag: string;
    logo: any;
  };
}

export const ListCard: React.FC<ListCardProps> = ({ job }) => {
  return (
    <Container>
      <Logo source={job?.logo} resizeMode="contain" />
      <Content>
        <Title>{job?.title}</Title>
        <Description>{job?.description}</Description>
      </Content>
      <Tag>{job?.tag}</Tag>
    </Container>
  );
};
