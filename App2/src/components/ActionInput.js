import React from 'react';
import {Container, Content, Item, Input, Label} from 'native-base';
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
        <Item inlineLabel error={onPress && !temperature ? true : false}>
          <Label>temperature:</Label>
          <Input
            value={temperature}
            onChangeText={e => handleInputChange('temperature', e)}
          />
        </Item>
        <Item inlineLabel error={onPress && !location ? true : false}>
          <Label>location:</Label>
          <Input
            value={location}
            onChangeText={e => handleInputChange('location', e)}
          />
        </Item>
        <Item inlineLabel error={onPress && !height ? true : false}>
          <Label>height:</Label>
          <Input
            keyboardType="numeric"
            value={height}
            onChangeText={e => handleInputChange('height', e)}
          />
        </Item>
        <Item inlineLabel error={onPress && !difficulty ? true : false}>
          <Label>difficulty:</Label>
          <Input
            keyboardType="numeric"
            value={difficulty}
            onChangeText={e => handleInputChange('difficulty', e)}
          />
        </Item>
        <Item inlineLabel error={onPress && !about ? true : false}>
          <Label>about:</Label>
          <Input
            value={about}
            onChangeText={e => handleInputChange('about', e)}
          />
        </Item>
        <Item inlineLabel error={onPress && !duration ? true : false}>
          <Label>duration:</Label>
          <Input
            value={duration}
            onChangeText={e => handleInputChange('duration', e)}
          />
        </Item>
        <Item inlineLabel error={onPress && !water ? true : false}>
          <Label>water:</Label>
          <Input
            keyboardType="numeric"
            value={water}
            onChangeText={e => handleInputChange('water', e)}
          />
        </Item>
        <Item inlineLabel error={onPress && !image ? true : false}>
          <Label>image:</Label>
          <Input
            value={image}
            onChangeText={e => handleInputChange('image', e)}
          />
        </Item>
        <ActionButton handler={handler} type={type} />
      </Content>
    </Container>
  );
};

export default ActionInput;
