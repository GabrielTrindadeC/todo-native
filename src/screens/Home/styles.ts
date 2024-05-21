import styled from "styled-components/native";
interface FilterButtonProps {
  active: boolean;
}
export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
`;

export const TaskCardContainer = styled.TouchableOpacity`
  align-self: "center";
  background-color: ${({ theme }) => theme.COLORS.CARD_COLOR};
  border-radius: 10px;
  margin-bottom: 10px;
  height: 130px;
`;
export const FilterContainer = styled.View`
  width: 90%;
  flex-direction: row;
  margin-bottom: 20px;
  gap: 10px;
  align-self: center;
`;

export const FilterButton = styled.TouchableOpacity<FilterButtonProps>`
  flex: 1;
  border-radius: 10px;
  align-items: center;
  padding: 10px;
  background-color: ${(props) => (props.active ? "#24a19c" : "#ebebeb")};
`;
export const FilterButtonText = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.XL};
  color: ${({ theme }) => theme.COLORS.FONT_COLOR_SECONDARY};
`;
export const Title = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.XXXXXXL};
  color: ${({ theme }) => theme.COLORS.FONT_COLOR};
  padding: 10px;
`;
