import { Container } from './styles';

import { Header } from '@components/Header';
import { HighLight } from '@components/HighLight';
import { GroupCard } from '@components/GroupCard';
import { ListEmpty } from '@components/ListEmpty';
import { Button } from '@components/Button';

import { GroupsGetAll } from '@storage/group/groupsGetAll';

import { useCallback, useEffect, useState } from 'react';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { FlatList, Alert } from 'react-native';
import { Loading } from '@components/Loading';


export function Groups() {
  const [isLoading, setIsLoading] = useState(true);
  const [groups, setGroups] = useState<string[]>(['Grupo rocket']);

  const navigation = useNavigation();

  function handleNewGroup() {
    navigation.navigate('new');
  }

  async function fetchGroups() {
    try {
      setIsLoading(true);

      const data = await GroupsGetAll();
      setGroups(data);

    } catch (error) {
      console.log(error);
      Alert.alert('Turmas', 'Não foi possível carregar as turmas.');
    } finally {
      setIsLoading(false);
    }
  }

  function handleOpenGroup(group: string) {
    navigation.navigate('players', { group });
  }

  useFocusEffect(useCallback(() => {
    fetchGroups();
  }, []));

  return (
    <Container>
      <Header />

      <HighLight
        title='Turmas'
        subtitle='jogue com a sua turma'
      />

      {
        isLoading ? <Loading /> :
          <FlatList
            data={groups}
            keyExtractor={item => item}
            renderItem={({ item }) => (
              <GroupCard
                title={item}
                onPress={() => handleOpenGroup(item)}
              />
            )}
            contentContainerStyle={groups.length === 0 && { marginTop: 100 }}
            ListEmptyComponent={() => (
              <ListEmpty
                message='Que tal cadastrar a primeira turma?'
              />
            )}
          />
      }

      <Button
        title='Criar nova turma'
        onPress={handleNewGroup}
      />
    </Container>
  )
}
