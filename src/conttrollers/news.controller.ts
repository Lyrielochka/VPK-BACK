import { Request, Response, NextFunction } from "express";
import { NewsService } from "../services/news.service";

export class NewsController {
  private newsService: NewsService;

  constructor(newsService: NewsService) {
    this.newsService = newsService;
  }

  async getNews(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const result = await this.newsService.findNews(req.query);
      res.status(200).send(result);
    } catch (error) {
      res.status(500).send(error);
    } finally {
      next();
    }
  }

  async getNewsById(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const result = await this.newsService.findNewsById(Number(req.params.id));
      res.status(200).send(result);
    } catch (error) {
      res.status(500).send(error);
    } finally {
      next();
    }
  }

  async addNews(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const result = await this.newsService.createNews(req.body);
      res.status(200).send(result);
    } catch (error) {
      res.status(500).send(error);
    } finally {
      next();
    }
  }

  async updateNews(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const result = await this.newsService.updateNews(Number(req.params.id), req.body);
      res.status(200).send(result);
    } catch (error) {
      res.status(500).send(error);
    } finally {
      next();
    }
  }

  async deleteNews(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const result = await this.newsService.deleteNews(Number(req.params.id));
      res.status(200).send(result);
    } catch (error) {
      res.status(500).send(error);
    } finally {
      next();
    }
  }
}
