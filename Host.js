import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CodeSplit from './CodeSplit';

const Host = () => {
  useEffect(() => {
    getStorageValue();
  }, []);

  const getStorageValue = async () => {};

  return (
    <View>
      <Text>HOST</Text>
      <CodeSplit />
    </View>
  );
};

export default Host;

const styles = StyleSheet.create({});
