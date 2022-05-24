import  { Response } from "express";

interface Link {
  id: string;
  link: string;
  shortUrl: string
}

interface CreatLink {
  shortUrl: string;
}

export const CustomResponse = (
  success: boolean,
  res: Response,
  code: number,
  data?: Array<Link> | CreatLink,
  errorMessage?: string
) => {
  if(success) {
    res.json({
      success,
      code,
      data
    })
  } else {
    res.json({
      success,
      code,
      errorMessage
    })
  }
}
