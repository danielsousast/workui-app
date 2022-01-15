import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 56px;
  align-self: center;
  border-radius: 16px;
  background: ${({ theme }) => theme.colors.orange};
`;

export const Title = styled.Text`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.cyan_500};
  font-family: ${({ theme }) => theme.fonts.bold};
`;
