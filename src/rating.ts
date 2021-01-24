export interface Rating {
  id?: string;
  userId: string;
  competitionId: string;
  actId: string;
  song: number;
  singing: number;
  show: number;
  looks: number;
  clothes: number;
}

export const ratingSchema = {
  required: ['userId', 'competitionId', 'actId', 'song', 'singing', 'show', 'looks', 'clothes'],
  properties: {
    id: {
      type: 'string',
    },
    userId: {
      type: 'string',
    },
    competitionId: {
      type: 'string',
    },
    actId: {
      type: 'string',
    },
    song: {
      type: 'integer',
    },
    singing: {
      type: 'integer',
    },
    show: {
      type: 'integer',
    },
    looks: {
      type: 'integer',
    },
    clothes: {
      type: 'integer',
    },
  },
};

export const defaultRating: Rating = {
  id: '84ce3ed6-a479-4ba4-86e1-d053638fd8a1',
  userId: '84ce3ed6-a479-4ba4-86e1-d053638fd8a1',
  competitionId: '84ce3ed6-a479-4ba4-86e1-d053638fd8a1',
  actId: '84ce3ed6-a479-4ba4-86e1-d053638fd8a1',
  song: 1,
  singing: 2,
  show: 3,
  looks: 4,
  clothes: 5,
};
