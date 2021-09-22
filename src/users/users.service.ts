import { UserModel } from "./users.model";
import faker from "faker";
import Users from "./users.interface";

export class UsersService {
  static async list(queryParams: any) {
      try {
        const match = {name: {$regex: queryParams.search || ""}};
        const data = await UserModel.aggregate([
          {
            $match: match,
          }
        ])
          .skip(+queryParams.skip || 0)
          .limit(+queryParams.limit || 10)
        return {data, count: data.length};
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

}
