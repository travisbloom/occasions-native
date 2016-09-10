import Relay from 'react-relay'

export class createUserMutation extends Relay.Mutation {
    static fragments = {
        viewer: () => Relay.QL`fragment on User {
          id
          firstName
          lastName
          username
        }`,
    };

    static getMutation() {
        return Relay.QL`mutation{createUser}`
    }

    getVariables() {
        const { firstName, lastName, username, password } = this.props
        return { firstName, lastName, username, password }
    }

    static getFatQuery() {
        return Relay.QL`
          fragment on createUserPayload {
            user
          }
        `
    }
    //
    // getConfigs() {
    //     return [
    //         {
    //             type: 'RANGE_ADD',
    //             parentID: this.props.viewer.id,
    //             connectionName: 'todos',
    //             edgeName: 'changedTodoEdge',
    //             rangeBehaviors: {
    //                 '': 'prepend'
    //             }
    //         }
    //     ];
    // }

}
