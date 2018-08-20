import React from 'react';

import { Card, Image } from 'semantic-ui-react';

function Tweet(props) {
  return (
    <Card>
      <Card.Content>
        <Image
          floated="left"
          size="mini"
          src="https://react.semantic-ui.com/images/avatar/large/jenny.jpg"
        />
        <Card.Header>DisplayName</Card.Header>
        <Card.Meta>@TwitterHandle · Aug 20</Card.Meta>
        <Card.Description>
          My thoughts are important the the world needs to hear them, dammit!
        </Card.Description>
      </Card.Content>
      {/* <Card.Content extra>
      <a>
        <Icon name='user' />
        22 Friends
      </a>
    </Card.Content> */}
    </Card>
  );
}

export default Tweet;
