import React from 'react';
import {Button, Text} from 'native-base';
import {StyleSheet, View} from 'react-native';

const ActionButton = ({handler, type}) => {
  return (
    <View style={styles.actionButton}>
      <Button rounded onPress={handler} style={styles.buttonStyle}>
        <Text>{type}</Text>
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  actionButton: {
    alignItems: 'center',
  },
});

export default ActionButton;
