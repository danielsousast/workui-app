import { Dimensions } from "react-native";
import styled from "styled-components/native";

const { width } = Dimensions.get("window");
const CARD_WIDTH = width / 2;

interface TagProps {
  tagColor: any;
}

export const Container = styled.TouchableOpacity`
  width: ${CARD_WIDTH}px;
  height: ${CARD_WIDTH + 100}px;
  border-radius: 24px;
  margin-right: 16px;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.black_700};
`;

export const Logo = styled.Image`
  width: 66px;
  height: 66px;
`;

export const Title = styled.Text`
  font-size: 18px;
  margin-top: 24px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.white};
`;

export const Description = styled.Text`
  margin-top: 8px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.cyan_500};
`;

export const Label = styled.Text`
  margin-top: 8px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.cyan_700};
`;

export const TagsWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  width: 90%;
  margin-top: 24px;
  justify-content: space-around;
`;

export const Tag = styled.View<TagProps>`
  height: 26px;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  padding: 0 12px;
  background: ${({ theme, tagColor }) => tagColor ?? theme.colors.cyan_500};
`;

export const TagText = styled.Text`
  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.black_500};
`;
