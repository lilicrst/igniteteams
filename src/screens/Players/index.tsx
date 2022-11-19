import { useState } from "react";

import { Header } from "@components/Header";
import { HighLight } from "@components/HighLight";
import { Input } from "@components/Input";
import { Filter } from "@components/Filter";
import { ButtonIcon } from "@components/ButtonIcon";
import { PlayerCard } from "@components/PlayerCard";

import { FlatList } from "react-native";
import { Container, Form, HeaderList, NumberOfPlayers } from "./styles";

export function Players() {

  const [team, setTeam] = useState('Time C');
  const [players, setPlayers] = useState(['Levy Nascimento', 'Lisandra Cristina']);

  return (
    <Container>
      <Header showBackButton />

      <HighLight
        title="Nome da turma"
        subtitle="adicione a galera e sapare os times"
      />
      <Form>
        <Input
          placeholder="Nome do participante"
          autoCorrect={false}
        />

        <ButtonIcon
          icon="add"
        />

      </Form>

      <HeaderList>
        <FlatList
          data={['Time A', 'Time B', 'Time C']}
          keyExtractor={item => item}
          renderItem={({ item }) => (
            <Filter
              title={item}
              isActive={item === team}
              onPress={() => setTeam(item)}
            />
          )}
          horizontal
        />

        <NumberOfPlayers>
          {players.length}
        </NumberOfPlayers>
      </HeaderList>

      <FlatList
        data={players}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <PlayerCard
            name={item}
            onRemove={() => {}}
          />
        )}
      />

    </Container>
  );
}