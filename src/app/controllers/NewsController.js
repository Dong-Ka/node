class NewsController {
  index(req, res) {
    res.render('news');
  }

  // Show news detail: [GET] /news/:slug
  show(req, res) {
    res.send('news-detail');
  }
}

module.exports = new NewsController();
