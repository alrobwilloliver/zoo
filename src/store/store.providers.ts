// import { DataSource } from 'typeorm';
// import { ConfigService } from '@nestjs/config';

// export const storeProviders = [
//   {
//     provide: 'DATA_SOURCE',
//     useFactory: async (configService: ConfigService) => {
//       const dataSource = new DataSource({
//         type: 'mysql',
//         host: '127.0.0.1',
//         port: 3306,
//         username: 'zoo',
//         database: 'zoo',
//         entities: [__dirname + '/../**/*.entity{.ts,.js}'],
//         synchronize: true,
//       });

//       return dataSource.initialize();
//     },
//   },
// ];
