import { ScullyConfig, setPluginConfig } from '@scullyio/scully';
import { getHttp404Plugin } from '@gammastream/scully-plugin-http404';
import { MinifyHtml } from 'scully-plugin-minify-html';
import { getFlashPreventionPlugin } from '@scullyio/scully-plugin-flash-prevention';
import * as lazyImages from '@notiz/scully-plugin-lazy-images'


setPluginConfig('md', { enableSyntaxHighlighting: true });

const FlashPreventionPlugin = getFlashPreventionPlugin({
	appRootSelector: 'app-root'
});

// when have child router like blog/a and blog/b => using extentRoutes of scully for render static
export const config: ScullyConfig = {
  projectRoot: "./src",
  projectName: "Clockwork",
  outDir: './dist/static',
  defaultPostRenderers: [MinifyHtml, FlashPreventionPlugin, getHttp404Plugin(), 'seoHrefOptimise', lazyImages],
  routes: {
  }
};
