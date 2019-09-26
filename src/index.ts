// ref:
// - https://umijs.org/plugin/develop.html
import { IApi } from 'umi-types';

declare const Platforms: ['BAIDU', 'GrowingIO', 'Google'];

export type Platform = (typeof Platforms)[number];

export interface IOpts {
  token?: string;
  platform?: Platform;
}

export default function(api: IApi, options: IOpts) {
  if (process.env.NODE_ENV !== 'production') return;

  const { log, addHTMLHeadScript, addHTMLScript } = api;
  const { platform, token = '' } = options;

  const statisticContent = `
    var _hmt = _hmt || [];
    (function() {
      var hm = document.createElement("script");
      hm.src = "//hm.baidu.com/hm.js?${token}";
      var s = document.getElementsByTagName("script")[0];
      s.parentNode.insertBefore(hm, s);
    })();
  `;

  const historyListenContent = `
    window.g_history.listen(function(location, action){
      process.env.NODE_ENV === 'production' && window._hmt.push(['_trackPageview', pathname]);
    })
  `;
  addHTMLHeadScript({
    content: statisticContent
  });
  addHTMLScript({
    content: historyListenContent
  });
  log.success('insert baidu statistic');
}
