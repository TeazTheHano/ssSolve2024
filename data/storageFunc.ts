import Storage from 'react-native-storage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { get } from 'react-native/Libraries/TurboModule/TurboModuleRegistry';
import { Alert } from 'react-native';
import { UserFormat } from './data';

const storage = new Storage({
  // maximum capacity, default 1000 key-ids
  size: 1000,

  // Use AsyncStorage for RN apps, or window.localStorage for web apps.
  // If storageBackend is not set, data will be lost after reload.
  storageBackend: AsyncStorage, // for web: window.localStorage

  // expire time, default: 1 day (1000 * 3600 * 24 milliseconds).
  // can be null, which means never expire.
  defaultExpires: null,

  // cache data in the memory. default is true.
  enableCache: true,

  // if data was not found in storage or expired data was found,
  // the corresponding sync method will be invoked returning
  // the latest data.
  sync: {
    // Sync method for retrieving data from the server
  },
});

export default storage;

/**
 * Saves the user data to storage.
 *
 * @param data - The user data to be saved.
 * @returns A promise that resolves to `true` if the data was saved successfully, or `false` if there was an error.
 */
export const saveUser = async (data: UserFormat) => {
  try {
    await storage.save({
      key: 'user',
      data: data,
    });
    return true;
  } catch (error) {
    Alert.alert('Failed to save user');
    return false;
  }
};

/**
 * Retrieves the user data from storage.
 *
 * @returns {Promise<UserFormat | false>} A promise that resolves to the user data if found, or `false` if an error occurs.
 */
export const getUser = async (): Promise<UserFormat | false> => {
  try {
    const ret: UserFormat = await storage.load({
      key: 'user',
    });
    return ret;
  } catch (error) {
    return false;
  }
};

/**
 * Asynchronously removes the user data from storage.
 *
 * @returns {Promise<boolean>} A promise that resolves to `true` if the user data was successfully removed,
 *                             or `false` if an error occurred during the removal process.
 */
export const removeUser = async (): Promise<boolean> => {
  try {
    await storage.remove({
      key: 'user',
    });
    return true;
  } catch (error) {
    return false;
  }
};

// END OF DEFAULT STORAGE FUNCTIONS ______________________________________________________

