import React from 'react';

import NavMain from './NavMain';
import PageHeader from './PageHeader';
import PageFooter from './PageFooter';
import HeaderTitle from './HeaderTitle';

const NotFoundPage = React.createClass({
  render() {
    return (
        <div>
          <HeaderTitle className="app-header"/>
          <NavMain activePage="" />

          <PageHeader
            title="404"
            subTitle="Hmmm this is awkward." />

          <PageFooter />
        </div>
      );
  }
});

export default NotFoundPage;
