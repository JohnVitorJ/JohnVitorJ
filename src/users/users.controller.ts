import { UsersService } from "./users.service";

export class UsersController {
  async list(req: any, res: any) {
    try {
      res.status(200).json(await UsersService.list(req.query));
    } catch (error) {
      res.status(400).send(error);
    }
  }
  
  async getById(req: any, res: any) {
    try {
      const { id } = req.params;
      res.status(200).json(await UsersService.getById(id));
    } catch (error) {
      res.status(400).send(error);
    }
  }
  async create(req: any, res: any) {
    try {
      const { name, email } = req.body;
      if (!name || !email) throw "name or email not informed";
      res.status(200).json(await UsersService.create({name, email}));
    } catch (error) {
      res.status(400).send(error);
    }
  }
}
