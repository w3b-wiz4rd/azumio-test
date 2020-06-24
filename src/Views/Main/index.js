import React, { useState } from 'react';
/* Typography */
import { Hero, Subhero } from 'typography';
/* Styled Components */
import { Container, Header, Footer, Areas, Area, Dots, Dot, Text } from './styled';
/* Utils */
import areasData from '../../utils/areas';

function Main() {
  const [areas, setAreas] = useState(areasData);

  const handleChecked = areaToUpdate => {
    const updatedAreas = areas.map(area =>
      area.id === areaToUpdate.id ? { ...area, isChecked: !area.isChecked } : area
    );
    setAreas(updatedAreas);
  };

  return (
    <Container>
      <Header>
        <Hero>What are your main areas of focus?</Hero>
        <Subhero>This will help us build a personalized experience of you</Subhero>
      </Header>
      <Areas>
        {areas.map(area => (
          <Area key={area.id} isChecked={area.isChecked} onClick={() => handleChecked(area)}>
            {area.name}
          </Area>
        ))}
      </Areas>
      <Footer>
        <Text>Back</Text>
        <Dots>
          <Dot />
          <Dot />
          <Dot />
          <Dot />
          <Dot active />
        </Dots>
        <Text highlight>Done</Text>
      </Footer>
    </Container>
  );
}

export default Main;
