import express from 'express';
import path from 'path';
import logger from 'morgan';
import routes from './routes/index';
import webpack from 'webpack';
import config from './webpack.config';

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));

// Only load this middleware in dev mode
if (app.get('env') === 'development') {
    app.use(require('webpack-dev-middleware')(webpack(config), {
        publicPath: config.output.publicPath,

        headers: {
            "X-Custom-Webpack-Header": "yes"
        },

        stats: {
            colors: true
        }
    }));
}

app.use('/', routes);

// catch 404 and forward error handler
app.use((req, res, next) => {
    let err = new Error('Not Found');
    err.status = 404;
    next(err);
});

const server = app.listen(8000, () => {
    console.log('Listening to port 8000');
});
