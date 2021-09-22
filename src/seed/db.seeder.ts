import {OrdersModel} from "../orders/orders.model";
import {UserModel} from "../users/users.model";
import faker from "faker";
import {Document} from "mongoose";

export default async function seedDB(times: number) {
  faker.locale = "pt_BR";
  await UserModel.deleteMany({});
  const usersDoc = Array(times)
    .fill(null)
    .map(() => {
      const name = faker.name.findName();
      return new UserModel(
        {
          name,
          email: faker.internet.email(name),
          startedAt: faker.date.past(10, 2005),
          birth: faker.date.past(15, 2000),
        }
      );
    });
  const users = await Promise.all(usersDoc.map((userDoc: Document) => userDoc.save()));
  await OrdersModel.deleteMany({});
  const types = ["Internet", "Streaming", "Market", "Spotify", "Energy"];
  const titlesDoc = Array(times)
    .fill(null)
    .map(() => {
      return new OrdersModel({
        user: users[faker.datatype.number({min: 0, max: times - 1})]._id,
        type: types[faker.datatype.number({min: 0, max: 4})],
        dueDate: faker.date.between("2020-05-01", "2022-05-1"),
        amount: faker.finance.amount(100, 1000, 2),
      });
    });
  await Promise.all(titlesDoc.map((titleDoc: Document) => titleDoc.save()));
  return true;
}
