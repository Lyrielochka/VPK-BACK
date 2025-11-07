import { Router } from "express";
import { NewsService } from "../services/news.service";
import { NewsController } from "../conttrollers/news.controller";

const router = Router();
const newsService = new NewsService();
const newsController = new NewsController(newsService);

router.get("/news", newsController.getNews.bind(newsController));
router.get("/news/:id", newsController.getNewsById.bind(newsController));
router.post("/news", newsController.addNews.bind(newsController));
router.put("/news/:id", newsController.updateNews.bind(newsController));
router.delete("/news/:id", newsController.deleteNews.bind(newsController));

export default router;
