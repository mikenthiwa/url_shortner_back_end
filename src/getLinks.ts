import  {Request, Response} from "express";
import { CustomResponse } from "./helper";
import urls from "./db";

export default async (req: Request, res: Response) => {
  try {
    const links = await urls.find();
    res.status(200);
    CustomResponse(true, res, 200, links)
  } catch (e) {
    console.log(e)
    res.status(500);
    CustomResponse(false, res, 500, undefined, "something went wrong!")
  }
}
