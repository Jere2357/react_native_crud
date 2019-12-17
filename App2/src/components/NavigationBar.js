import React from 'react';
import {Container, Header, Body, Tab, Tabs, Title} from 'native-base';
import ReadCard from './ReadCard';
import ActionInput from './ActionInput';
import ActionButton from './ActionButton';
import DropDown from './DropDown';

const NavigationBar = ({
  name,
  temperature,
  location,
  height,
  difficulty,
  about,
  duration,
  water,
  image,
  handleCreate,
  handleInputChange,
  readData,
  readDataDropdown,
  handleChangeDropDown,
  handleChangeTab,
  handleDelete,
  handleUpdate,
  valid,
  selectedDestination,
}) => {
  return (
    <Container>
      <Header hasTabs>
        <Body>
          <Title>Destinations</Title>
        </Body>
      </Header>
      <Tabs onChangeTab={handleChangeTab}>
        <Tab heading="Create">
          <ActionInput
            name={name}
            temperature={temperature}
            location={location}
            height={height}
            difficulty={difficulty}
            about={about}
            duration={duration}
            water={water}
            image={image}
            handler={handleCreate}
            valid={valid}
            handleInputChange={handleInputChange}
            type={'Create'}
          />
        </Tab>
        <Tab heading="Read">
          <ReadCard readData={readData} />
        </Tab>
        <Tab heading="Update">
          <Header />
          <DropDown
            type={'Update'}
            readDataDropdown={readDataDropdown}
            handleChangeDropDown={handleChangeDropDown}
            selectedDestination={selectedDestination}
          />
          <ActionInput
            name={name}
            temperature={temperature}
            location={location}
            height={height}
            difficulty={difficulty}
            about={about}
            duration={duration}
            water={water}
            image={image}
            handler={handleUpdate}
            valid={valid}
            handleInputChange={handleInputChange}
            type={'Update'}
          />
        </Tab>
        <Tab heading="Delete">
          <Header />
          <DropDown
            type={'Delete'}
            readDataDropdown={readDataDropdown}
            handleChangeDropDown={handleChangeDropDown}
            selectedDestination={selectedDestination}
          />
          <ActionButton type={'Delete'} handler={handleDelete} />
        </Tab>
      </Tabs>
    </Container>
  );
};

export default NavigationBar;
