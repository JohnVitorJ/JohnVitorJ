import {TitlesModel} from "../titles/titles.model";
import {UserModel} from "../users/users.model";
import faker from "faker";
import {Document} from "mongoose";

export default async function seedDB(times: number) {
  faker.locale = "pt_BR";
  await UserModel.remove({});
  const usersDoc = Array(times)
    .fill(null)
    .map(() => {
      const name = faker.name.findName();
      return new UserModel({
        name,
        email: faker.internet.email(name),
        startedAt: faker.date.past(10, 2005),
        birth: faker.date.past(15, 2000),
      });
    });
  const users = await Promise.all(usersDoc.map((userDoc: Document) => userDoc.save()));
  await TitlesModel.remove({});  
  const titlesDoc = Array(times)
    .fill(null)
    .map(() => {
      return new TitlesModel({
        user: users[faker.datatype.number({min: 0, max: times - 1})]._id,
        label: faker.lorem.text(),
        expiresAt: faker.date.between("2022-01-01", "2015-01-05"),
        amount: faker.finance.amount(100, 5000, 2),
      });
    });
  await Promise.all(titlesDoc.map((titleDoc: Document) => titleDoc.save()));
  return true;
}
