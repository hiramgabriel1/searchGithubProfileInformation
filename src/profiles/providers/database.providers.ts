import * as mongoose from 'mongoose';

export const databaseProviders = [
  {
    provide: 'database_connection',
    useFactory: (): Promise<typeof mongoose> =>
      mongoose.connect('mongodb://localhost/nest'), // uri here
  },
];
