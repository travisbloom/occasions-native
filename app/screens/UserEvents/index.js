import React from 'react'
import Relay from 'react-relay'

import { View, Text } from '../../components'
import UserRoute from '../../relayRoutes/UserRoute'

class PersonEvents extends React.Component {
    static route = {
      navigationBar: {
        visible: false,
      }
    }

    render() {
        const { page } = this.state
        return (
            <View style={{flex: 1}}>
                <Text>{user.username}</Text>
            </View>
        )
    }
}

const containerComponent = Relay.createContainer(PersonEvents, {
  fragments: {
    user: () => Relay.QL`
      fragment on User {
          username
          transactions {
              edges {
                  node {
                      associatedEvent {
                          event {
                              name
                          }
                      }
                  }
              }
          }
      }
    `,
  },
})

export default () => (
    <Relay.RootContainer
      Component={containerComponent}
      route={UserRoute}
    />
)
