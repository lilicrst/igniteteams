import AsyncStorage from "@react-native-async-storage/async-storage";

import { AppError } from "@utils/AppError";
import { PLAYER_COLLECTION } from "@storage/storageConfig";
import { PlayerStorageDTO } from './PlayerStorageDTO';
import { playerGetByGroup } from './playerGetByGroup';

export async function PlayerAddByGroup(newPlayer:PlayerStorageDTO, group: string) {
  try {

    const storedPlayers = await playerGetByGroup(group);

    const playerAlreadExists = storedPlayers.filter(player => player.name === newPlayer.name);

    if (playerAlreadExists.length > 0) {
      throw new AppError('Essa pessoa já está adicionada em um time.');
    }

    const storage = JSON.stringify([...storedPlayers, newPlayer]);
    
    await AsyncStorage.setItem(`${PLAYER_COLLECTION}-${group}`, storage);

  } catch (error) {
    throw(error);
  }
  
}
