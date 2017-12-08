const News = require('./news.model');
const ReadPreference = require('mongodb').ReadPreference;

require('./mongo').connect();

function getNewses(req, res) {
  console.log('called');
  const docquery = News.find({}).read(ReadPreference.NEAREST);
  console.log('called');
  docquery
    .exec()
    .then(newses => {
      res.status(200).json(newses);
    })
    .catch(error => {
      res.status(500).send(error);
      return;
    });
}

function postNews(req, res) {
  const originalNews = {
    title: req.body.title,
    date: req.body.date,
    excerpt: req.body.excerpt,
    link : req.body.link
  };

  const news = new News(originalNews);
  news.save(error => {
    if (checkServerError(res, error)) return;
    res.status(201).json(news);
    console.log('News item created successfully!');
  });
}

function putNews(req, res) {
  const originalNews = {
    id: req.params._id,
    title: req.body.title,
    date: req.body.date,
    excerpt: req.body.excerpt,
    link : req.body.link
  };
  News.findOne({ id: originalNews.id }, (error, news) => {
    if (checkServerError(res, error)) return;
    if (!checkFound(res, news)) return;

    news.title = originalNews.title;
    news.date = originalNews.date;
    news.excerpt = originalNews.excerpt;
    news.link = originalNews.link;

    news.save(error => {
      if (checkServerError(res, error)) return;
      res.status(200).json(news);
      console.log('News item updated successfully!');
    });
  });
}

function deleteNews(req, res) {
  const id = req.params._id;
  News.findOneAndRemove({ id: id })
    .then(news => {
      if (!checkFound(res, news)) return;
      res.status(200).json(news);
      console.log('News item deleted successfully!');
    })
    .catch(error => {
      if (checkServerError(res, error)) return;
    });
}

function checkServerError(res, error) {
  if (error) {
    res.status(500).send(error);
    return error;
  }
}

function checkFound(res, news) {
  if (!news) {
    res.status(404).send('News item not found.');
    return;
  }
  return news;
}

module.exports = {
  getNewses,
  postNews,
  putNews,
  deleteNews
};



/*
title: { type: String, required: true },
date: { type: Date, required: true },
excerpt: { type: String, required: false },
link: {type: String, required: true }
*/