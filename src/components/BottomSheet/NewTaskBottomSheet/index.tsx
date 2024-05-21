import { BottomSheet, Button, Input } from "@rneui/base";
import React, { Dispatch, SetStateAction, useState } from "react";
import { View } from "react-native";
import { ITodo } from "../../../types/todo.types";
import uuid from "react-native-uuid";
import { useTodo } from "../../../hooks/useTodo";
import { Container } from "./style";
interface Props {
  isVisible: boolean;
  setIsVisible: Dispatch<SetStateAction<boolean>>;
}
export const NewTaskBottomSheet = ({ isVisible, setIsVisible }: Props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { dispatch } = useTodo();
  const resetAndClose = () => {
    setIsVisible(false);
    setTitle("");
    setDescription("");
  };

  const handleSubmit = () => {
    const data: ITodo = {
      title,
      description,
      done: false,
      id: uuid.v4() as string,
      createadAt: new Date(),
    };

    dispatch({ type: "add-todo", payload: data });
    resetAndClose();
  };
  return (
    <BottomSheet isVisible={isVisible} onBackdropPress={resetAndClose}>
      <Container style={{ padding: 10, backgroundColor: "white" }}>
        <Input
          multiline
          label="Titulo"
          placeholder="Titulo da tarefa"
          value={title}
          onChangeText={setTitle}
          autoFocus
        />
        <Input
          multiline
          label="Descrição"
          placeholder="Descrição da tarefa"
          value={description}
          onChangeText={setDescription}
        />
        <View>
          <Button title="Adicionar" onPress={handleSubmit} />
        </View>
      </Container>
    </BottomSheet>
  );
};
