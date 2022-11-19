import { useState } from "react";
import { FlatList } from "react-native";
import { useRoute } from "@react-navigation/native";
import { Container, Form, HeaderList, NumberOfPlayers } from "./styles";

import { Header } from "@components/Header";
import { HighLight } from "@components/HighLight";
import { Input } from "@components/Input";
import { Filter } from "@components/Filter";
import { ButtonIcon } from "@components/ButtonIcon";
import { PlayerCard } from "@components/PlayerCard";
import { ListEmpty } from "@components/ListEmpty";
import { Button } from "@components/Button";

type RouteParams = {
  group: string;
}


export function Players() {

  const [team, setTeam] = useState('Time C');
  const [players, setPlayers] = useState([]);

  const route = useRoute();
  const { group } = route.params as RouteParams;

  return (
    <Container>
      <Header showBackButton />

      <HighLight
        title={group}
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
            onRemove={() => { }}
          />
        )}
        ListEmptyComponent={() => (
          <ListEmpty
            message='Não há pessoas nesse time'
          />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          { paddingBottom: 100 },
          players.length === 0 && { flex: 1 }
        ]}
      />

      <Button 
        title="Remover turma"
        type='SECONDARY'
      />

    </Container>
  );
}