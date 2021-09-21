import { TitlesModel } from "./titles.model";

export class TitlesService {
  static async list(queryParams: any) {
    try {
      const query = {};
      const [key, val] = queryParams.sort.split("_");
      // const sortBy = { [key]: val == 'ASC' ? 1 : -1 };
      const sortBy = { };
      return await TitlesModel.find(query)
        .skip(queryParams.skip)
        .limit(queryParams.limit)
        .count()
        .sort(sortBy);
    } catch (error) {
      throw error;
    }
  }
}
