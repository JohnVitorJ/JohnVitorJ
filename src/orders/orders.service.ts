import {OrdersModel} from "./orders.model";

interface Meta {
  skip: number;
  limit: number;
  sort: string;
  search?: any;
}

export class TitlesService {
  static async list(queryParams: Meta) {
    try {
      const match = {
        dueDate: {$lte: new Date()},
      };
      // const [key, val] = queryParams.sort.split("_");
      // const sortBy = {[key]: val == "asc" ? 1 : -1};
      // const sortBy = { };
      const data = await OrdersModel.aggregate([
        {
          $match: match,
        },
        {
          $lookup: {
            from: "users",
            let: {userId: "$user"},
            pipeline: [
              {
                $match: {name: {$regex: queryParams.search || ""}},
              },
              {
                $sort: {name: 1}
              },
            ],
            as: "user",
          },
          
        },
        {
          $unwind: "$user",
        },
      ])
        .skip(+queryParams.skip || 0)
        .limit(+queryParams.limit || 10)
      return {data, count: data.length};
    } catch (error) {
      console.log(error);

      throw error;
    }
  }
}
