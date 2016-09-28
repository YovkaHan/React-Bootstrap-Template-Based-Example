import React from 'react';
import {IndexRoute, Route} from 'react-router';

import MainPage from './MainPage';
import ServicesPage from './ServicesPage';
import ArticlesPage from './ArticlesPage';
import SupportPage from './SupportPage';
import AboutPage from './AboutPage';
import NotFoundPage from './NotFoundPage';
import Root from './Root';

export default (
  <Route path="/" component={Root}>
    <IndexRoute component={MainPage} />
    <Route path="/" component={MainPage} />
    <Route path="services.html" component={ServicesPage} />
    <Route path="articles.html" component={ArticlesPage} />
    <Route path="support.html" component={SupportPage} />
    <Route path="about.html" component={AboutPage} />

    <Route path="*" component={NotFoundPage} />
  </Route>
);
