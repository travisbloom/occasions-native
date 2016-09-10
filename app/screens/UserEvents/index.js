import React from 'react'
import Relay from 'react-relay'

import { View, Text } from '../../components'
import UserRoute from '../../relayRoutes/UserRoute'

class PersonEvents extends React.Component {
    static route = {
        navigationBar: {
            visible: false,
        },
    }
    render() {
        const { user } = this.props
        return (
            <View style={{ flex: 1, justifyContent: 'center' }}>
                {user.transactions.edges.map((transaction) =>
                    <Text
                        style={{ textAlign: 'center' }}
                        key={transaction.node.id}
                    >
                        {transaction.node.id}
                    </Text>
                )}
                <Text style={{ textAlign: 'center' }}>
                    {user.username}
                </Text>
            </View>
        )
    }
}

const containerComponent = Relay.createContainer(PersonEvents, {
    fragments: {
        user: () => Relay.QL`
        fragment on UserNode {
            username
            transactions(first: 10) {
                edges {
                    node {
                        id
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
