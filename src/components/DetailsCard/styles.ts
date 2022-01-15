import styled from "styled-components/native";
import { Feather, Ionicons } from "@expo/vector-icons";

export const Container = styled.View`
  padding: 12px 20px;

  border-radius: 16px;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.colors.black_500};
`;

export const Label = styled.Text`
  font-size: 14px;
  margin-top: 8px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.cyan_500};
`;

export const Value = styled.Text`
  margin-top: 8px;
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.white};
`;

export const DollarIcon = styled(Feather).attrs(({ theme }) => ({
  name: "dollar-sign",
  size: 24,
  color: theme.colors.purple,
}))``;

export const ClockIcon = styled(Feather).attrs(({ theme }) => ({
  name: "clock",
  size: 24,
  color: theme.colors.purple,
}))``;

export const LevelIcon = styled(Feather).attrs(({ theme }) => ({
  name: "bar-chart-2",
  size: 24,
  color: theme.colors.purple,
}))``;
