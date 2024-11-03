import gql from 'graphql-tag';

export const createUserMutation = gql`
  mutation {
    createUser(createUserData: { username: "New", displayName: "User" }) {
      id
    }
    createUserSettings(createUserSettingsInput: {
        userId: 3
        receiveEmail: true
        receiveNotifications: true
    }) {
        userId
        receiveEmail
        receiveNotifications
    })
  }
`;

export const getUsersQuery = gql`
  query {
    getUserById(id: 3) {
      id
      username
      displayName
      settings {
        userId
        receiveEmail
        receiveNotifications
      }
    }
    getUsers {
      id
      username
      displayName
      settings {
        userId
        receiveEmail
        receiveNotifications
      }
    }
  }
`;
