import React from 'react';
import Modernizr from 'modernizr';

const Root = React.createClass({
  statics: {
    /**
     * Get the list of pages that are renderable
     *
     * @returns {Array}
     */
    getPages() {
      return [
        'index.html',
        'introduction.html',
        'getting-started.html',
        'support.html'
      ];
    }
  },

  childContextTypes: {
    metadata: React.PropTypes.object
  },

  getChildContext() {
    return {metadata: Root.propData};
  },

  render() {
    // Dump out our current props to a global object via a script tag so
    // when initialising the browser environment we can bootstrap from the
    // same props as what each page was rendered with.
    let browserInitScriptObj = {
      __html:
        `window.ASSET_BASE_URL = ${JSON.stringify(Root.assetBaseUrl)};
        window.PROP_DATA = ${JSON.stringify(Root.propData)};
        // console noop shim for IE8/9
        (function (w) {
          var noop = function () {};
          if (!w.console) {
            w.console = {};
            ['log', 'info', 'warn', 'error'].forEach(function (method) {
              w.console[method] = noop;
            });
         }
        }(window));`
    };

    let head = {
      __html: `<title>АБ Остахова</title>
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="${Root.assetBaseUrl}/assets/bundle.css" rel="stylesheet">
        <link href="${Root.assetBaseUrl}/assets/favicon.ico?v=4" type="image/x-icon" rel="shortcut icon">
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
        <!--[if lte IE 9]>
        <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
        <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
        <script src="http://cdnjs.cloudflare.com/ajax/libs/es5-shim/3.4.0/es5-shim.js"></script>
        <script src="http://cdnjs.cloudflare.com/ajax/libs/es5-shim/3.4.0/es5-sham.js"></script>
        <![endif]-->`
    };

    return (
      <html className="no-js">
        <head dangerouslySetInnerHTML={head} />

        <body>
          {this.props.children}

          <script dangerouslySetInnerHTML={browserInitScriptObj} />
          <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
          <script src={`${Root.assetBaseUrl}/vendor/jqFooter.js`} />
          <script src={`${Root.assetBaseUrl}/vendor/-i-no-flexbox.js`} defer />
          <script src={`${Root.assetBaseUrl}/assets/bundle.js`} />
        </body>
      </html>
    );
  }
});


export default Root;
