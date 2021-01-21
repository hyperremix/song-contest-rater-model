export interface User {
  id: string;
  email: string;
  firstname: string;
  lastname: string;
  avatarUrl: string;
  gravatarUrl: string;
  useGravatar: boolean;
}

export const userSchema = {
  required: ['email', 'firstname', 'lastname'],
  properties: {
    id: {
      type: 'string',
    },
    email: {
      type: 'string',
    },
    firstname: {
      type: 'string',
    },
    lastname: {
      type: 'string',
    },
    avatarUrl: {
      type: 'string',
    },
    gravatarUrl: {
      type: 'string',
    },
    useGravatar: {
      type: 'boolean',
    },
  },
};

export const defaultUser: User = {
  id: '84ce3ed6-a479-4ba4-86e1-d053638fd8a1',
  email: 'john.doe@songcontestrater.com',
  firstname: 'John',
  lastname: 'Doe',
  avatarUrl: 'songcontestrater.com/logo192.png',
  gravatarUrl: 'https://s.gravatar.com/avatar/a38c89eba770032ba4c617ba97f3138e?s=80',
  useGravatar: false,
};
