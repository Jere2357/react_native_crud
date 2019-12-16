import React from 'react';
import {Card, CardItem, Body, Text, List} from 'native-base';

const ReadCard = ({readData}) => {
  return (
    <List
      dataArray={readData}
      listKey="1.1"
      keyExtractor={(rowData, sectionID) => sectionID.toString()}
      renderRow={rowData => (
        <Card>
          <CardItem>
            <Body>
              <Text>name: {rowData.name}</Text>
              <Text>temperature: {rowData.temperature}</Text>
              <Text>location: {rowData.location}</Text>
              <Text>height: {rowData.height}</Text>
              <Text>difficulty: {rowData.difficulty}</Text>
              <Text>about: {rowData.about}</Text>
              <Text>duration: {rowData.duration}</Text>
              <Text>water: {rowData.water}</Text>
              <Text>image: {rowData.image}</Text>
            </Body>
          </CardItem>
        </Card>
      )}
    />
  );
};

export default ReadCard;
