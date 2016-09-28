/* eslint no-console: 0 */

import 'colors';
import express from 'express';
import bodyParser from 'body-parser';
import httpProxy from 'http-proxy';
import ip from 'ip';
import path from 'path';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import {match, RouterContext} from 'react-router';

import Root from './src/Root';
import routes from './src/Routes';

import metadata from './generate-metadata';

const development = process.env.NODE_ENV !== 'production';
const port = process.env.PORT || 4000;

const app = express();

if (development) {
  const proxy = httpProxy.createProxyServer();
  const webpackPort = process.env.WEBPACK_DEV_PORT;

  const target = `http://${ip.address()}:${webpackPort}`;
  Root.assetBaseUrl = target;

  app.use(bodyParser.urlencoded({ extended: false }));

  app.get('/assets/*', (req, res) => {
    proxy.web(req, res, { target });
  });
  app.get('/assets/favicon/*', (req, res) => {
    proxy.web(req, res, { target });
  });
  app.post('/question_submit', (req, res) => {
    let name = req.body.name;
    let email = req.body.email;
    let question = req.body.question;
    console.log("Name : "+name+"\nEmail : "+email+"\nQuestion : "+question);
    res.send({});
  });
  proxy.on('error', e => {
    console.log('Could not connect to webpack proxy'.red);
    console.log(e.toString().red);
  });

  console.log('Prop data generation started:'.green);

  metadata().then(props => {
    console.log('Prop data generation finished:'.green);
    Root.propData = props;

    app.use(function renderApp(req, res) {
      res.header('Access-Control-Allow-Origin', target);
      res.header('Access-Control-Allow-Headers', 'X-Requested-With');

      const location = req.url;
      match({routes, location}, (error, redirectLocation, renderProps) => {
        const html = ReactDOMServer.renderToString(
          <RouterContext {...renderProps} />
        );
        res.send(`<!doctype html>
        <!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7" lang=""> <![endif]-->
        <!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8" lang=""> <![endif]-->
        <!--[if IE 8]>         <html class="no-js lt-ie9" lang=""> <![endif]-->` + html);
      });
    });
  });
} else {
  app.use(express.static(path.join(__dirname, '../app-built')));
}

app.listen(port, () => {
  console.log(`Server started at:`);
  console.log(`- http://localhost:${port}`);
  console.log(`- http://${ip.address()}:${port}`);
});
