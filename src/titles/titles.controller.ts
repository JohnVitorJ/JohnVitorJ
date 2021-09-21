import { TitlesService } from "./titles.service";

export class TitlesController {
  async list(req, res) {
    try {
      const { skip, limit, sort } = req.query;
      res.status(200).json(await TitlesService.list({skip, limit, sort}));
    } catch (error) {
      res.status(400).send(error);
    }
  }
}
