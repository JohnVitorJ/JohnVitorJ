import {TitlesModel} from "./titles.model";

interface Meta {
  skip: number,
  limit: number,
  sort: string,
}

export class TitlesService {
  static async list(queryParams: Meta) {
    try {
      const match = {};
      // const [key, val] = queryParams.sort.split("_");
      // const sortBy = {[key]: val == "ASC" ? 1 : -1};
      // const sortBy = { };
      return await TitlesModel.aggregate([
        // {
        //   $match: match,
        // },
        {
          $lookup: {
            from: "users",
            foreignField: "_id",
            localField: "user",
            as: "user",
          },
        },
        {
          $unwind: "$user",
        },
        // {$addFields: {status: }}
      ])
        .skip(+queryParams.skip || 0)
        .limit(+queryParams.limit || 10 );
      // .sort(sortBy);
    } catch (error) {
      console.log(error);

      throw error;
    }
  }
}
