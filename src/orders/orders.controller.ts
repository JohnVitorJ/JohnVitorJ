import { TitlesService } from "./orders.service";

export class TitlesController {
  async list(req, res) {
    try {
      const { skip, limit, sort, search } = req.query;      
      res.status(200).json(await TitlesService.list({skip, limit, sort, search}));
    } catch (error) {
      res.status(400).send(error);
    }
  }
}
