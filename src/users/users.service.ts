import { UserModel } from "./users.model";
import { TitlesModel } from "../titles/titles.model";
import faker from "faker";
import Users from "./users.interface";

export class UsersService {
  static async list(queryParams: any) {
    try {
      const resp = await UserModel.find({});
      return resp;
    } catch (error) {
      throw error;
    }
  }
  static async create(user: Users) {
    try {
      return await UserModel.create(user);
    } catch (error) {
      throw error;
    }
  }
  static async getById(_id: string) {
    try {
      return await UserModel.findOne({ _id });
    } catch (error) {
      throw error;
    }
  }

  static async populateDB() {
    try {
      faker.locale = "pt_BR";
      for (let i = 0; i <= 20; i++) {
        const name = faker.name.findName();
        const user = await UserModel.create({
          name,
          email: faker.internet.email(name),
          startedAt: faker.date.past(15, 2000),
        });
        console.log("user >>>>");
        console.log(user);

        await TitlesModel.create({
          user: user._id,
          amount: +faker.finance.amount(100, 5000, 2),
          expiresAt: new Date(),
        });
      }
      return { ok: true };
    } catch (error) {
      throw error;
    }
  }
}
