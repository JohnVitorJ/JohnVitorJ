import { Application } from 'express';
import usersRoutes from "./src/users/users.routes";
import titlesRoutes from "./src/titles/titles.routes";
const apiBaseUrl = '/api';


export default function routes(app: Application): void{
  app.use(`${apiBaseUrl}/users`, usersRoutes)
  app.use(`${apiBaseUrl}/titles`, titlesRoutes)
}