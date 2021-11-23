import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Host = () => {
  useEffect(() => {
    getStorageValue();
  }, []);

  const getStorageValue = async () => {
    await AsyncStorage.setItem('TEST', 'VALUE');
    console.log(await AsyncStorage.getItem('TEST'));
  };

  return (
    <View>
      <Text>HOST</Text>
    </View>
  );
};

export default Host;

const styles = StyleSheet.create({});
