import * as mongoose from 'mongoose';

export const databaseProviders = [
  {
    provide: 'database_connection',
    useFactory: (): Promise<typeof mongoose> =>
      mongoose.connect(process.env.DATABASE_URI), // uri here
  },
];
