import { ScullyRoute } from '@scullyio/ng-lib';

export interface Frontmatter extends ScullyRoute {
  description?: string;
  date?: string;
  tags?: string[];
  url?: string;
  readingTime?: number; // prepare for blog read time => notifi latest news
}
