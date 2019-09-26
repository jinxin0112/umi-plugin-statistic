import { IApi } from 'umi-types';

export default function(token: string, api: IApi) {
  const headerContent: string = `
    var _hmt = _hmt || [];
    (function() {
        var hm = document.createElement("script");
        hm.src = "//hm.baidu.com/hm.js?${token}";
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(hm, s);
    })();
  `;
  const footerContent: string = `
    window.g_history.listen(function(location, action){
        process.env.NODE_ENV === 'production' && window._hmt.push(['_trackPageview', location.pathname]);
    })
  `;
  return {
    headerContent,
    footerContent
  };
}
