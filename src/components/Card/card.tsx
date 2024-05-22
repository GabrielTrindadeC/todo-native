import React from 'react';

import {
  Content,
  Header,
  SubtitleWrapper,
  TaskBody,
  TaskBodyContainer,
  TaskSubtitle,
  Title,
} from './style';
import { Dialog, Icon } from '@rneui/base';
import { Text, TouchableOpacity, View } from 'react-native';
import { useTodo } from '../../hooks/useTodo';

interface ITaskCardProps {
  title: string;
  description: string;
  subtitle: string;
  id: string;
}

export const TaskCard = ({
  title,
  description,
  subtitle,
  id,
}: ITaskCardProps) => {
  const { dispatch } = useTodo();
  const [height, setHeight] = React.useState<number | null>(null);
  const [isVisible, setIsVisible] = React.useState(false);
  const toggleDialog = () => {
    setIsVisible(!isVisible);
  };
  const handleDelete = (id: string) => {
    dispatch({ type: 'remove-todo', payload: id });
  };
  return (
    <View
      style={{ height }}
      onLayout={(event) => setHeight(event.nativeEvent.layout.height)}
    >
      <Header>
        <Title>{title}</Title>
        <TouchableOpacity onPress={toggleDialog}>
          <Icon color={'white'} name="trash" type="evilicon" />
        </TouchableOpacity>
      </Header>
      <Content>
        <TaskBodyContainer>
          <TaskBody>{description}</TaskBody>
        </TaskBodyContainer>
        <SubtitleWrapper>
          <TaskSubtitle>{subtitle}</TaskSubtitle>
        </SubtitleWrapper>
        <Dialog isVisible={isVisible} onBackdropPress={toggleDialog}>
          <Text style={{ color: 'white', padding: 10 }}>
            Tem Certeza que deseja deletar?
          </Text>
          <Dialog.Actions>
            <Dialog.Button onPress={() => handleDelete(id)}>Sim</Dialog.Button>
            <Dialog.Button onPress={toggleDialog}>Não</Dialog.Button>
          </Dialog.Actions>
        </Dialog>
      </Content>
    </View>
  );
};
