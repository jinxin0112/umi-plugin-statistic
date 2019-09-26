import { IApi } from 'umi-types';

export default function(token: string, api: IApi) {
  const headerContent: string = `
    !function(e,t,n,g,i){e[i]=e[i]||function(){(e[i].q=e[i].q||[]).push(arguments)},n=t.createElement("script"),tag=t.getElementsByTagName("script")[0],n.async=1,n.src=('https:'==document.location.protocol?'https://':'http://')+g,tag.parentNode.insertBefore(n,tag)}(window,document,"script","assets.giocdn.com/2.1/gio.js","gio");
    gio('init', '${token}', {'imp':false,'hashtag':true});
    `;

  const footerContent: string = `
    gio('send');
    `;

  return {
    headerContent,
    footerContent
  };
}
