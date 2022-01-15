import { StyleSheet, SafeAreaView, Dimensions } from "react-native";
import styled from "styled-components/native";
import { Fontisto, Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const { height } = Dimensions.get("window");

export const BottomSheetBody = styled(SafeAreaView)`
  background: ${({ theme }) => theme.colors.black_700};
  border-top-right-radius: 16px;
  border-top-left-radius: 16px;
  height: ${height - 150}px;
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
  align-items: center;
`;

export const IconsWrapper = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 36px;
`;

export const CommentIcon = styled(Fontisto).attrs(({ theme }) => ({
  name: "comment",
  size: 24,
  color: theme.colors.purple,
}))``;

export const SaveIcon = styled(Ionicons).attrs(({ theme }) => ({
  name: "bookmark",
  size: 28,
  color: theme.colors.purple,
}))``;

export const TitleContainer = styled.View`
  align-items: flex-start;
  padding: 16px;
`;

export const Logo = styled.Image`
  width: 56px;
  height: 56px;
  margin-top: 36px;
`;

export const Title = styled.Text`
  text-align: center;
  font-size: 18px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.white};
`;

export const Description = styled.Text`
  text-align: center;
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.cyan_500};
`;

export const CardWrapper = styled.View`
  width: 100%;
  margin-top: 32px;
  flex-direction: row;
  padding: 0 14px;
  justify-content: space-around;
`;

export const TextWrapper = styled.View`
  padding: 12px 13px;
`;

export const DetailsText = styled.Text`
  color: ${({ theme }) => theme.colors.cyan_500};
`;

export const Footer = styled.View`
  width: 100%;
  padding: 32px 16px;
  position: absolute;
  bottom: 0;
  background: ${({ theme }) => theme.colors.black_700};
`;

export const Shadow = styled(LinearGradient).attrs(({ theme }) => ({
  colors: ["red", "blue", "orange"],
}))`
  width: 100%;

  z-index: 999;
`;

export const styles = StyleSheet.create({
  modal: {
    margin: 0,
    justifyContent: "flex-end",
  },
});
