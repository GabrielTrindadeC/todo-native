import styled from "styled-components/native";

export const Header = styled.View`
  height: 40px;
  padding: 10px;
  background-color: #24a19c;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  flex-direction: row;
  justify-content: space-between;
`;

export const Content = styled.View`
  flex: 1;
  padding-top: 10px;
`;

export const TaskBodyContainer = styled.View`
  flex: 1;
  margin-bottom: 10px;
`;

export const TaskBody = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.XL};
  font-family: ${({ theme }) => theme.FONT_FAMILY.MEDIUM};
  padding-left: 10px;
  padding-right: 10px;
  color: ${({ theme }) => theme.COLORS.FONT_COLOR};
`;

export const SubtitleWrapper = styled.View`
  border-top-color: #e0e5ed;
  border-top-width: 1px;
  align-items: flex-end;
  padding: 10px;
`;

export const TaskSubtitle = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD};
  font-family: ${({ theme }) => theme.FONT_FAMILY.MEDIUM};
  color: #888;
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.XXL};
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  color: ${({ theme }) => theme.COLORS.FONT_COLOR};
`;
