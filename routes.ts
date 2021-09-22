import { Application } from 'express';
import usersRoutes from "./src/users/users.routes";
import ordersRoutes from "./src/orders/orders.routes";
const apiBaseUrl = '/api';


export default function routes(app: Application): void{
  app.use(`${apiBaseUrl}/users`, usersRoutes)
  app.use(`${apiBaseUrl}/orders`, ordersRoutes)
}