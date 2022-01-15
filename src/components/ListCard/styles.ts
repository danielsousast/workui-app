import styled from "styled-components/native";

export const Container = styled.View`
  height: 74px;
  width: 100%;
  border-radius: 16px;
  flex-direction: row;
  align-self: center;
  padding: 16px;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
  background: ${({ theme }) => theme.colors.black_700};
`;

export const Logo = styled.Image`
  width: 32px;
  height: 32px;
  margin-right: 16px;
`;

export const Content = styled.View`
  flex: 1;
`;

export const Title = styled.Text`
  font-size: 15px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.white};
`;

export const Description = styled.Text`
  font-size: 13px;
  margin-top: 4px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.cyan_900};
`;

export const Tag = styled.Text`
  font-size: 12px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.purple};
`;
