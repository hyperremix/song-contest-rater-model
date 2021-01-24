export interface Competition {
  id?: string;
  description: string;
  cityName: string;
  countryName: string;
  startTime: Date;
  imageUrl: string;
  actIds: string[];
  ratingIds: string[];
}

export const competitionSchema = {
  required: ['description', 'cityName', 'countryName', 'startTime', 'imageUrl', 'actIds'],
  properties: {
    id: {
      type: 'string',
    },
    description: {
      type: 'string',
    },
    cityName: {
      type: 'string',
    },
    countryName: {
      type: 'string',
    },
    startTime: {
      type: 'string',
      format: 'date-time',
    },
    imageUrl: {
      type: 'string',
      format: 'uri',
    },
    actIds: {
      type: 'array',
      items: {
        type: 'string',
      },
    },
    ratingIds: {
      type: 'array',
      items: {
        type: 'string',
      },
    },
  },
};

export const defaultCompetition: Competition = {
  id: '84ce3ed6-a479-4ba4-86e1-d053638fd8a1',
  description: 'Quarterfinal',
  cityName: 'Stockholm',
  countryName: 'Sweden',
  startTime: new Date(),
  imageUrl: 'https://imageurl.example.com/img.jpg',
  actIds: ['84ce3ed6-a479-4ba4-86e1-d053638fd8a1'],
  ratingIds: ['84ce3ed6-a479-4ba4-86e1-d053638fd8a1'],
};
