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
  const { platform = 'BAIDU', token = '' } = options;

  const realPlatform = platform.toLocaleLowerCase();
  const { headerContent, footerContent, subScript } = require(`./${realPlatform}`).default(
    token,
    api
  );

  addHTMLHeadScript({
    content: headerContent
  });
  addHTMLScript({
    content: footerContent
  });

  if (subScript) subScript();

  log.success('insert baidu statistic');
}
