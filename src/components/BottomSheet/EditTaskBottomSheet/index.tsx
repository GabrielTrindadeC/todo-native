import { BottomSheet, Button, Input, CheckBox } from "@rneui/base";
import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { ITodo } from "../../../types/todo.types";
import { useTodo } from "../../../hooks/useTodo";
import { Container } from "./style";

interface Props {
  isVisible: boolean;
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
  selectedTodo: ITodo;
}

export const EditTaskBottomSheet = ({
  isVisible,
  setIsVisible,
  selectedTodo,
}: Props) => {
  const [title, setTitle] = useState(selectedTodo?.title);
  const [description, setDescription] = useState(selectedTodo?.description);
  const [done, setDone] = useState(selectedTodo?.done);
  const { dispatch, showToast } = useTodo();
  useEffect(() => {
    setTitle(selectedTodo?.title);
    setDescription(selectedTodo?.description);
    setDone(selectedTodo?.done);
  }, [selectedTodo]);

  const resetAndClose = () => {
    setIsVisible(false);
  };

  const handleSubmit = () => {
    if (title && description && selectedTodo?.id) {
      const data: ITodo = {
        title,
        description,
        done,
        id: selectedTodo.id,
        createadAt: selectedTodo.createadAt,
      };
      showToast("Tarefa atualizada");
      dispatch({ type: "att-todo", payload: data });
      resetAndClose();
    }
  };
  return (
    <BottomSheet isVisible={isVisible} onBackdropPress={resetAndClose}>
      <Container>
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
        <CheckBox
          title="Concluído"
          checked={done}
          onPress={() => setDone((prev) => !prev)}
        />
        <View>
          <Button title="Atualizar" onPress={handleSubmit} />
        </View>
      </Container>
    </BottomSheet>
  );
};
