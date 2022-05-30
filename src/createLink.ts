import {Request, Response} from "express";
import {customAlphabet} from "nanoid";
import urls from "./db";
import { CustomResponse } from "./helper";
import dotenv from 'dotenv';
import axios from "axios";

dotenv.config();

export default async(req: Request, res: Response) => {
  let { link } = req.body;

  try {
    const isLink = await urls.findOne({link});
    if(!isLink) {
      const response = await axios(`https://api.shrtco.de/v2/shorten?url=${link}`);
      await urls.insert({shortUrl: response.data.result.full_short_link, link});
      res.status(201);
      CustomResponse(true, res, 201, {shortUrl: response.data.result.full_short_link})
    } else {
      res.status(409);
      CustomResponse(false, res, 409, undefined, 'link already exist')
    }
  } catch (e) {
    res.status(500);
    CustomResponse(false, res, 500, undefined, "something went wrong!")
  }
}
