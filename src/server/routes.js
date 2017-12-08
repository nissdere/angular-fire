const express = require('express');
const router = express.Router();

const newsService = require('./news.service');

router.get('/news', (req, res) => {
  newsService.getNewses(req, res);
});

router.post('/news', (req, res) => {
  newsService.postNews(req, res);
});

router.put('/news/:id', (req, res) => {
  newsService.putNews(req, res);
});

router.delete('/news/:id', (req, res) => {
  newsService.deleteNews(req, res);
});

module.exports = router;
