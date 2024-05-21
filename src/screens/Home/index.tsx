import React, { useCallback, useEffect, useMemo, useState } from "react";
import {
  Container,
  FilterButton,
  FilterButtonText,
  FilterContainer,
  TaskCardContainer,
  Title,
} from "./styles";

import { TaskCard } from "../../components/Card/card";
import { FAB } from "@rneui/base";

import { NewTaskBottomSheet } from "../../components/BottomSheet/NewTaskBottomSheet";
import { useTodo } from "../../hooks/useTodo";
import { formatDate } from "../../utils/formatDate";
import { FlatList, View } from "react-native";
import { ITodo } from "../../types/todo.types";
import { EditTaskBottomSheet } from "../../components/BottomSheet/EditTaskBottomSheet";

export function Home() {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [edit, setEdit] = useState<boolean>(false);
  const { todos } = useTodo();
  const [selectedTodo, setSelectedTodo] = useState<ITodo>({} as ITodo);
  const [filter, setFilter] = useState("");
  const handleEdit = (todo: ITodo) => {
    setSelectedTodo(todo);
    setEdit(true);
  };
  const filteredTodos = useMemo(() => {
    const sortedTodos = [...todos].sort((todoA, todoB) => {
      if (filter === "done") {
        return todoA.done ? -1 : 1;
      }
      if (filter === "date") {
        return todoA.createadAt > todoB.createadAt ? -1 : 1;
      }
      return 0;
    });
    return sortedTodos;
  }, [todos, filter]);
  const toggleDoneFilter = () => {
    if (filter === "" || filter !== "done") {
      return setFilter("done");
    }
    setFilter("");
  };
  const toggleDateFilter = () => {
    if (filter === "" || filter !== "date") {
      return setFilter("date");
    }
    setFilter("");
  };
  const renderItem = useCallback(
    ({ item }: { item: ITodo }) => (
      <TaskCardContainer
        key={item.id}
        onPress={() => handleEdit(item)}
        activeOpacity={0.5}
      >
        <TaskCard
          id={item.id}
          title={item.title}
          description={item.description}
          subtitle={`${item.done ? "Concluído" : "Pendente"} - ${formatDate(
            item.createadAt
          )}`}
        />
      </TaskCardContainer>
    ),
    [handleEdit, formatDate]
  );
  return (
    <>
      <Container>
        <Title>Tarefas</Title>
        <FilterContainer>
          <FilterButton onPress={toggleDoneFilter} active={filter === "done"}>
            <FilterButtonText>Status</FilterButtonText>
          </FilterButton>
          <FilterButton onPress={toggleDateFilter} active={filter === "date"}>
            <FilterButtonText>Data</FilterButtonText>
          </FilterButton>
        </FilterContainer>

        <FlatList
          data={filteredTodos}
          style={{ width: "87.25%", display: "flex", flexDirection: "column" }}
          keyExtractor={(item) => item.id}
          ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
          renderItem={renderItem}
        />
        <NewTaskBottomSheet isVisible={isVisible} setIsVisible={setIsVisible} />
        {selectedTodo && (
          <EditTaskBottomSheet
            selectedTodo={selectedTodo}
            isVisible={edit}
            setIsVisible={setEdit}
          />
        )}
      </Container>
      <FAB
        visible={true}
        icon={{ name: "add", color: "white" }}
        size="large"
        placement="right"
        onPress={() => setIsVisible(true)}
      />
    </>
  );
}
