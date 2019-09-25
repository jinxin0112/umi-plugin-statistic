// ref:
// - https://umijs.org/plugin/develop.html

module.exports = function(api, options) {
  const { log, addHTMLHeadScript } = api;
  const { token = '' } = options;

  if (process.env.NODE_ENV === 'production') {
    addHTMLHeadScript({
      content: `
        var _hmt = _hmt || [];
        (function() {
          var hm = document.createElement("script");
          hm.src = "//hm.baidu.com/hm.js?${token}";
          var s = document.getElementsByTagName("script")[0];
          s.parentNode.insertBefore(hm, s);
        })();
      `
    });
    log.success('insert baidu statistic');
  }
};
