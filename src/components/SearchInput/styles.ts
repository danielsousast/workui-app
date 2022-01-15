import styled from "styled-components/native";
import { Feather, Octicons } from "@expo/vector-icons";

export const Container = styled.View`
  width: 100%;
  height: 48px;
  border-radius: 16px;
  flex-direction: row;
  align-items: center;
  padding-left: 17px;
  padding-top: 6px;
  padding-bottom: 6px;
  margin-top: 48px;
  background: ${({ theme }) => theme.colors.black_700};
`;

export const SearchIcon = styled(Feather).attrs(({ theme }) => ({
  size: 22,
  name: "search",
  color: theme.colors.cyan_700,
}))``;

export const SettingsIcon = styled(Octicons).attrs(({ theme }) => ({
  size: 22,
  name: "settings",
  color: theme.colors.cyan_700,
}))`
  margin-left: 12px;
`;

export const Input = styled.TextInput.attrs(({ theme }) => ({
  placeholderTextColor: theme.colors.cyan_500,
}))`
  width: 70%;
  margin-left: 16px;
  margin-right: 16px;
  color: ${({ theme }) => theme.colors.white};
`;

export const Separator = styled.View`
  width: 1px;
  height: 100%;
  background: ${({ theme }) => theme.colors.cyan_900};
`;
