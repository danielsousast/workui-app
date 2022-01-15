import React, { useEffect, useState } from "react";
import { Animated, Easing, StatusBar } from "react-native";
import { useTheme } from "styled-components/native";
import { Avatar } from "../../components/Avatar";
import { DetailsModal } from "../../components/DetailsModal";
import { HighlightCard } from "../../components/HighlightCard";
import { ListCard } from "../../components/ListCard";
import ModalSheet from "../../components/ModalSheet";
import SearchInput from "../../components/SearchInput";
import { SectionTitle } from "../../components/SectionTitle";
import { highlight } from "../../mock/highlight";
import { vacancies } from "../../mock/vacancies";
import {
  Container,
  Content,
  Header,
  HorizontalList,
  Title,
  VerticalList,
  Wrapper,
} from "./styles";

export const Home: React.FC = () => {
  const theme = useTheme();

  const [visible, setVisible] = useState(false);
  const [scale, setScale] = useState(new Animated.Value(1));
  const [opacity, setOpacity] = useState(new Animated.Value(1));

  useEffect(() => {
    if (visible) {
      Animated.timing(scale, {
        toValue: 0.9,
        duration: 300,
        easing: Easing.in(),
        useNativeDriver: true,
      }).start();

      Animated.spring(opacity, {
        toValue: 0.5,
        useNativeDriver: true,
      }).start();

      StatusBar.setBarStyle("dark-content", true);
    }

    if (!visible) {
      Animated.timing(scale, {
        toValue: 1,
        duration: 300,
        easing: Easing.in(),
        useNativeDriver: true,
      }).start();
      Animated.spring(opacity, {
        toValue: 1,
        useNativeDriver: true,
      }).start();

      StatusBar.setBarStyle("light-content", true);
    }
  }, [visible]);

  return (
    <>
      <Container>
        <Animated.View
          style={{
            transform: [{ scale: scale }],
            opacity: opacity,
          }}
        >
          <Content>
            <Header>
              <Title>{`Encontre o seu\nnovo trabalho`}</Title>
              <Avatar />
            </Header>
            <SearchInput />
          </Content>
          <Wrapper>
            <SectionTitle title="Recomendados" onViewMorePress={() => {}} />
            <HorizontalList>
              {highlight.map((card) => (
                <HighlightCard
                  key={card.key}
                  logo={card.logo}
                  job={card.job}
                  firstTag={card.firstTag}
                  secondTag={card.secondTag}
                  onPress={() => setVisible(true)}
                />
              ))}
            </HorizontalList>
            <SectionTitle title="Vagas aplicadas" />
            <VerticalList>
              {vacancies.map((card) => (
                <ListCard key={card.key} job={card} />
              ))}
            </VerticalList>
          </Wrapper>
        </Animated.View>
      </Container>

      <ModalSheet visible={visible} onRequestClose={() => setVisible(false)} />
    </>
  );
};
