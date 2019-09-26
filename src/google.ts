import { IApi } from 'umi-types';

export default function(token: string, api: IApi) {
  const headerContent: string = `
        window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;
        ga('create', '${token}', 'auto');   
        ga('require', 'urlChangeTracker');   
        ga('send', 'pageview');
    `;

  const footerContent: string = '';

  const subScript = function() {
    api.modifyHTMLWithAST(($, { route, getChunkPath }) => {
      $('head').append(
        `<script async src="https://www.google-analytics.com/analytics.js"></script>`
      );
      $('head').append(
        `<script async src="https://cdn.bootcss.com/autotrack/2.4.1/autotrack.js"></script>`
      );
    });
  };

  return {
    headerContent,
    footerContent,
    subScript
  };
}
