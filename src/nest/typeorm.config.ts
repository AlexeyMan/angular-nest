import { DataSource } from "typeorm"
// import {config } from "dotenv";
import { ConfigModule } from "@nestjs/config";
ConfigModule.forRoot({
    envFilePath: `.${process.env.NODE_ENV}.env`,
  })
// config();

const AppDataSource = new DataSource({
    type: 'postgres',
    host: process.env.POSTGRES_HOST,
    port: Number(process.env.POSTGRES_PORT),
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DATABASE,
    entities: ["*/**/*.entity.ts"],
    migrations: ["src/nest/migrations/*.ts"],
})

AppDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    })

export default AppDataSource;