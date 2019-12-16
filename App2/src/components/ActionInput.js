import React from 'react';
import {Container, Content, Item, Input, Label} from 'native-base';
import {StyleSheet, View} from 'react-native';
import ActionButton from './ActionButton';

const ActionInput = ({
  name,
  temperature,
  location,
  height,
  difficulty,
  about,
  duration,
  water,
  image,
  handler,
  handleInputChange,
  type,
}) => {
  return (
    <Container>
      <Content>
        <View style={styles.inputContainer}>
          <Item floatingLabel>
            <Label>name</Label>
            <Input
              value={name}
              onChangeText={e => handleInputChange('name', e)}
            />
          </Item>
        </View>
        <View style={styles.inputContainer}>
          <Item floatingLabel>
            <Label>temperature</Label>
            <Input
              value={temperature}
              onChangeText={e => handleInputChange('temperature', e)}
            />
          </Item>
        </View>
        <View style={styles.inputContainer}>
          <Item floatingLabel>
            <Label>location</Label>
            <Input
              value={location}
              onChangeText={e => handleInputChange('location', e)}
            />
          </Item>
        </View>
        <View style={styles.inputContainer}>
          <Item floatingLabel>
            <Label>height</Label>
            <Input
              keyboardType="numeric"
              value={height}
              onChangeText={e => handleInputChange('height', e)}
            />
          </Item>
        </View>
        <View style={styles.inputContainer}>
          <Item floatingLabel>
            <Label>difficulty</Label>
            <Input
              keyboardType="numeric"
              value={difficulty}
              onChangeText={e => handleInputChange('difficulty', e)}
            />
          </Item>
        </View>
        <View style={styles.inputContainer}>
          <Item floatingLabel>
            <Label>about</Label>
            <Input
              value={about}
              onChangeText={e => handleInputChange('about', e)}
            />
          </Item>
        </View>
        <View style={styles.inputContainer}>
          <Item floatingLabel>
            <Label>duration</Label>
            <Input
              value={duration}
              onChangeText={e => handleInputChange('duration', e)}
            />
          </Item>
        </View>
        <View style={styles.inputContainer}>
          <Item floatingLabel>
            <Label>water</Label>
            <Input
              keyboardType="numeric"
              value={water}
              onChangeText={e => handleInputChange('water', e)}
            />
          </Item>
        </View>
        <View style={styles.inputContainer}>
          <Item floatingLabel>
            <Label>image</Label>
            <Input
              value={image}
              onChangeText={e => handleInputChange('image', e)}
            />
          </Item>
        </View>
        <ActionButton handler={handler} type={type} />
      </Content>
    </Container>
  );
};

const styles = StyleSheet.create({
  inputField: {
    borderColor: 'gray',
    color: 'red',
  },
  inputContainer: {
    padding: 3,
  },
});

export default ActionInput;
