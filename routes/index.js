import express from 'express';
const router = express.Router();

/* GET Home page. */
router.get('/', (req, res, next) => {
    res.render('index', {
        title: 'Express App Home Page'
    });
});

/* GET About page. */
router.get('/about', (req, res, next) => {
    res.render('about', {
        title: 'Express App About Page'
    });
});

/* GET Contact page. */
router.get('/contact', (req, res, next) => {
    res.render('contact', {
        title: 'Express App Contact Page'
    });
});

module.exports = router;

