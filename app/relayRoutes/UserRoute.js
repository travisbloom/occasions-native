import Relay from 'react-relay'

class UserRoute extends Relay.Route {
    static queries = {
        user: () => Relay.QL`
      query { user(id: $userID) }
    `,
    };
    static paramDefinitions = {
        userID: { required: true },
    };
    static routeName = 'UserRoute';
}

export default new UserRoute({ userID: 'VXNlck5vZGU6MQ==' })
