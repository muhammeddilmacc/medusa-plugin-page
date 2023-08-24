import { Request, Response } from "express";
import Page from "../../../models/page/page";

const deneme = async (req: Request, res: Response): Promise<void> => {
  res.status(200).json({
    message: "success",
  });
};

const createNewPage = async (req: Request, res: Response): Promise<void> => {
  const pageData = req?.body;
  const page = await new Page(pageData.type, pageData.title, pageData.content);

  res.status(200).json({
    page: page,
    message: 'page created Gracefully'
  });
  

};

export default {
  deneme,
  createNewPage,
};
