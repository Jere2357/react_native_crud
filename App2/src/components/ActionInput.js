import React from 'react';
import {Container, Content, Item, Input, Label} from 'native-base';
import {Text, StyleSheet} from 'react-native';
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
  valid,
  onPress,
  handleInputChange,
  type,
}) => {
  return (
    <Container>
      <Content>
        <Item inlineLabel error={onPress && !name ? true : false}>
          <Label>name:</Label>
          <Input
            value={name}
            onChangeText={e => handleInputChange('name', e)}
          />
        </Item>
        {onPress && !name ? (
          <Text style={styles.helperText}>name is required</Text>
        ) : null}
        <Item inlineLabel error={onPress && !temperature ? true : false}>
          <Label>temperature:</Label>
          <Input
            value={temperature}
            onChangeText={e => handleInputChange('temperature', e)}
          />
        </Item>
        {onPress && !temperature ? (
          <Text style={styles.helperText}>temperature is required</Text>
        ) : null}
        <Item inlineLabel error={onPress && !location ? true : false}>
          <Label>location:</Label>
          <Input
            value={location}
            onChangeText={e => handleInputChange('location', e)}
          />
        </Item>
        {onPress && !location ? (
          <Text style={styles.helperText}>location is required</Text>
        ) : null}
        <Item inlineLabel error={onPress && !height ? true : false}>
          <Label>height:</Label>
          <Input
            keyboardType="numeric"
            value={height}
            onChangeText={e => handleInputChange('height', e)}
          />
        </Item>
        {onPress && !height ? (
          <Text style={styles.helperText}>height is required</Text>
        ) : null}
        <Item inlineLabel error={onPress && !difficulty ? true : false}>
          <Label>difficulty:</Label>
          <Input
            keyboardType="numeric"
            value={difficulty}
            onChangeText={e => handleInputChange('difficulty', e)}
          />
        </Item>
        {onPress && !difficulty ? (
          <Text style={styles.helperText}>difficulty is required</Text>
        ) : null}
        <Item inlineLabel error={onPress && !about ? true : false}>
          <Label>about:</Label>
          <Input
            value={about}
            onChangeText={e => handleInputChange('about', e)}
          />
        </Item>
        {onPress && !about ? (
          <Text style={styles.helperText}>about is required</Text>
        ) : null}
        <Item inlineLabel error={onPress && !duration ? true : false}>
          <Label>duration:</Label>
          <Input
            value={duration}
            onChangeText={e => handleInputChange('duration', e)}
          />
        </Item>
        {onPress && !duration ? (
          <Text style={styles.helperText}>duration is required</Text>
        ) : null}
        <Item inlineLabel error={onPress && !water ? true : false}>
          <Label>water:</Label>
          <Input
            keyboardType="numeric"
            value={water}
            onChangeText={e => handleInputChange('water', e)}
          />
        </Item>
        {onPress && !water ? (
          <Text style={styles.helperText}>water is required</Text>
        ) : null}
        <Item inlineLabel error={onPress && !image ? true : false}>
          <Label>image:</Label>
          <Input
            value={image}
            onChangeText={e => handleInputChange('image', e)}
          />
        </Item>
        {onPress && !image ? (
          <Text style={styles.helperText}>image is required</Text>
        ) : null}
        <ActionButton handler={handler} type={type} />
      </Content>
    </Container>
  );
};

const styles = StyleSheet.create({
  helperText: {
    color: 'red',
    textAlign: 'center',
  },
});

export default ActionInput;
