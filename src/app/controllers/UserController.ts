import { Request, Response } from "express";
import Queue from "../lib/Queue";

class UserController {
  async create(req: Request, res: Response) {
    const { name, email, password } = req.body;
    const user = {
      name,
      email,
      password,
    };

    console.log("send mail for User");
    //adicionar job registration na fila
    await Queue.add("RegistrationMail", { user });

    //reports
    await Queue.add("UserReport", { user });

    return res.json(user);
  }
}

export default new UserController();
