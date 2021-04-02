import { ScullyConfig, setPluginConfig } from '@scullyio/scully';
import { getHttp404Plugin } from '@gammastream/scully-plugin-http404';
import { MinifyHtml } from 'scully/plugins/plugin';

setPluginConfig('md', { enableSyntaxHighlighting: true });

// when have child router like blog/a and blog/b => using extentRoutes of scully for render static
export const config: ScullyConfig = {
  projectRoot: "./src",
  projectName: "Clockwork",
  outDir: './dist/static',
  defaultPostRenderers: [MinifyHtml, getHttp404Plugin(), 'seoHrefOptimise'],
  routes: {
  }
};
