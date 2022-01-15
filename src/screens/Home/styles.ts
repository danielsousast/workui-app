import styled from "styled-components/native";

export const Container = styled.ScrollView.attrs({
  contentContainerStyle: {
    paddingVertical: 16,
  },
})`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.black_900};
`;

export const Content = styled.View`
  padding: 21px;
  padding-top: 22px;
`;

export const Wrapper = styled.View``;

export const Header = styled.SafeAreaView`
  flex-direction: row;
  align-items: center;
  margin-top: 24px;
  justify-content: space-between;
`;

export const Title = styled.Text`
  font-size: 28px;
  line-height: 42px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.white};
`;

export const HorizontalList = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: {
    paddingLeft: 16,
  },
})``;

export const VerticalList = styled.View`
  padding: 16px;
  justify-content: center;
`;
