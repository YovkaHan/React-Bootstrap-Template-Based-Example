import React from 'react';
import ReactDOM from 'react-dom';
import {Router, browserHistory} from 'react-router';
import $ from 'jquery';

// Import Pages
import Root from './src/Root';                     // Page Backbone
import routes from './src/Routes';                 // List of pages

// Import Styles
import 'bootstrap/dist/css/bootstrap.min.css';    // Bootstrap Styles
import './assets/styles/style.scss';                      // App styles

// Import Files
import './assets/carousel.png';
import './assets/app-header-title-logo.png';
import './assets/top_menu_bg_sprite2.png';
import './assets/Boss.png';
import './assets/secondBoss.png';
//
import './assets/carousel_img_sm.png';
import './assets/carousel_img.png';
//
import './assets/question.jpg';
//
import './assets/favicon/favicon.ico';
//
import './assets/thumbnail.png';
import './assets/thumbnaildiv.png';
import './assets/TheresaKnott_castle.svg';

Root.assetBaseUrl = window.ASSET_BASE_URL;
Root.propData = window.PROP_DATA;

ReactDOM.render(
  <Router history={browserHistory} children={routes} />,
  document
);
