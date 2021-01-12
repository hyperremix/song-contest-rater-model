export interface User {
  id: string;
  email: string;
  firstname: string;
  lastname: string;
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
  },
};

export const defaultUser: User = {
  id: '84ce3ed6-a479-4ba4-86e1-d053638fd8a1',
  email: 'john.doe@songcontestrater.com',
  firstname: 'John',
  lastname: 'Doe',
};
