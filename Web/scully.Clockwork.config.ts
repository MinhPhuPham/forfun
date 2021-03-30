import { ScullyConfig, RouteTypes } from '@scullyio/scully';
import { getHttp404Plugin } from '@gammastream/scully-plugin-http404';
import { MinifyHtml } from 'scully-plugin-minify-html';

export const config: ScullyConfig = {
  projectRoot: "./src",
  projectName: "Clockwork",
  outDir: './dist/static',
  defaultPostRenderers: [MinifyHtml, getHttp404Plugin(), 'seoHrefOptimise'],
  routes: {
  }
};