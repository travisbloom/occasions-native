import React from 'react'
import Relay from 'react-relay'

import { View, Text } from '../../components'

class EventSummary extends React.Component {
    render() {
        const { name, eventType, dateStart, timeStart } = this.props.event
        return (
            <View style={{flex: 1}}>
                <View><Text>{name}</Text></View>
                <View><Text>{eventType}</Text></View>
                <View><Text>{dateStart}</Text></View>
            </View>
        )
    }
}

export default Relay.createContainer(EventSummary, {
  fragments: {
    event: () => Relay.QL`
      fragment on Event {
          name
          eventType
          dateStart
          timeStart
      }
    `,
  },
});
