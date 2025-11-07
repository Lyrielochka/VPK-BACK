import fs from "fs";
import path from "path";
import express from "express";

const router = express.Router();

router.get("/images", (req, res) => {
  const imagesDir = path.join(process.cwd(), "public", "Images");

  fs.readdir(imagesDir, (err, files) => {
    if (err) {
      console.error("❌ Ошибка чтения папки:", err);
      return res.status(500).send("Ошибка чтения папки");
    }

    const imageFiles = files.filter((file) =>
      /\.(png|jpg|jpeg|webp|gif)$/i.test(file)
    );

    res.json(imageFiles);
  });
});

export default router;
