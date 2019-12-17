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
  handleInputChange,
  type,
}) => {
  return (
    <Container>
      <Content>
        <Item floatingLabel error={valid}>
          <Label>name</Label>
          <Input
            value={name}
            onChangeText={e => handleInputChange('name', e)}
          />
        </Item>
        <Item floatingLabel error={valid}>
          <Label>temperature</Label>
          <Input
            value={temperature}
            onChangeText={e => handleInputChange('temperature', e)}
          />
        </Item>
        <Item floatingLabel error={valid}>
          <Label>location</Label>
          <Input
            value={location}
            onChangeText={e => handleInputChange('location', e)}
          />
        </Item>
        <Item floatingLabel error={valid}>
          <Label>height</Label>
          <Input
            keyboardType="numeric"
            value={height}
            onChangeText={e => handleInputChange('height', e)}
          />
        </Item>
        <Item floatingLabel error={valid}>
          <Label>difficulty</Label>
          <Input
            keyboardType="numeric"
            value={difficulty}
            onChangeText={e => handleInputChange('difficulty', e)}
          />
        </Item>
        <Item floatingLabel error={valid}>
          <Label>about</Label>
          <Input
            value={about}
            onChangeText={e => handleInputChange('about', e)}
          />
        </Item>
        <Item floatingLabel error={valid}>
          <Label>duration</Label>
          <Input
            value={duration}
            onChangeText={e => handleInputChange('duration', e)}
          />
        </Item>
        <Item floatingLabel error={valid}>
          <Label>water</Label>
          <Input
            keyboardType="numeric"
            value={water}
            onChangeText={e => handleInputChange('water', e)}
          />
        </Item>
        <Item floatingLabel error={valid}>
          <Label>image</Label>
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
