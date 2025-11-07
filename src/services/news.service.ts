import { News } from "../entities/news.entity";
import { Repository } from "typeorm";
import { TestConnection } from "../data-access/test.connection";

type FilterNewsDTO = {
  title?: string;
  category?: string;
  author?: string;
  date?: string;
};

type CreateNewsDTO = {
  title: string;
  category: string;
  author: string;
  date: string;
  img?: string;
  summary: string;
};

type UpdateNewsDTO = {
  title?: string;
  category?: string;
  author?: string;
  date?: string;
  img?: string;
  summary?: string;
};

export class NewsService {
  private newsRepo: Repository<News>;

  constructor() {
    this.newsRepo = TestConnection.getRepository(News);
  }

  async findNews(filters?: FilterNewsDTO): Promise<News[]> {
    return await this.newsRepo.find({ where: { ...filters } });
  }

  async findNewsById(idNews: number): Promise<News | undefined> {
    return await this.newsRepo.findOne({ where: { idNews } });
  }

  async createNews(body: CreateNewsDTO): Promise<News> {
    const newItem = this.newsRepo.create(body);
    return await this.newsRepo.save(newItem);
  }

  async updateNews(idNews: number, body: UpdateNewsDTO): Promise<boolean> {
    const result = await this.newsRepo.update(idNews, body);
    return result.affected !== 0;
  }

  async deleteNews(idNews: number): Promise<boolean> {
    const result = await this.newsRepo.delete(idNews);
    return result.affected !== 0;
  }
}
