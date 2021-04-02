import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { environment } from '../../../environments/environment';
import { Frontmatter } from '../models/frontmatter';

@Injectable({
    providedIn: 'root',
})
export class MetaService {
    private _defaultImage = '';
    private _defaultDescription = 'Chino Hills property management at its best. Let Clockwork Property Management, Inc., experienced Chino Hills property managers care for your Chino Hills rental home. If you are looking for a Chino Hills home for rent search our available rentals quickly and easily.';

    constructor(
        private readonly meta: Meta,
        private readonly title: Title,
        @Inject(DOCUMENT) private readonly dom: Document,
    ) { }

    update(front: Frontmatter) {
        this.title.setTitle(MetaService.getTitle(front.title));

        this.meta.updateTag({
            property: 'og:title',
            content: front.title as string,
        });

        this.meta.updateTag({
            name: 'twitter:title',
            content: front.title as string,
        });

        this.meta.updateTag({
            name: 'twitter:description',
            content: front.description as string || this._defaultDescription,
        });

        this.meta.updateTag({
            property: 'og:description',
            content: front.description as string || this._defaultDescription,
        });

        this.meta.updateTag({
            name: 'description',
            content: front.title as string,
        });

        this.meta.updateTag({
            property: 'og:url',
            content: front.url as string,
        });

        if (front.tags?.length) {
            this.meta.updateTag({ name: 'keywords', content: front.tags.join(', ') });
        }

        this.meta.updateTag({
            name: 'twitter:image',
            content: front.image || this._defaultImage,
        });

        this.meta.updateTag({
            name: 'twitter:card',
            content: 'summary',
        });

        this.meta.updateTag({
            name: 'twitter:creator',
            content: 'ClockWork',
        });

        this.meta.updateTag({
            property: 'og:image',
            content: front.image || this._defaultImage,
        });

        this.updateCanonical(front.url);
    }

    updateTagTitle(tagName: string) {
        this.resetMeta();
        this.title.setTitle(MetaService.getTitle(tagName));
    }

    resetMeta() {
        this.meta.removeTag("property='og:title'");
        this.meta.removeTag("property='og:description'");
        this.meta.removeTag("property='og:url'");
        this.meta.removeTag("name='twitter:title'");
        this.meta.removeTag("name='twitter:description'");
        this.meta.removeTag("name='keywords'");

        this.meta.updateTag({ name: 'description', content: '' });
        this.meta.updateTag({
            name: 'twitter:image',
            content: this._defaultImage,
        });

        this.meta.updateTag({
            name: 'twitter:card',
            content: 'summary',
        });

        this.meta.updateTag({
            name: 'twitter:creator',
            content: 'ClockWork',
        });

        this.meta.updateTag({
            property: 'og:image',
            content: this._defaultImage,
        });

        this.title.setTitle('Clock Work Management');
        this.updateCanonical();
    }

    private static getTitle(title: string) {
        return `${title} | Clock Work Management`;
    }

    private updateCanonical(url: string = environment.baseUrl) {
        let head = this.dom.querySelector('head');
        if (head != null && Array.isArray(head)) {
            head = head[0];
        }

        let element: HTMLLinkElement = this.dom.querySelector(`link[rel='canonical']`) as HTMLLinkElement || null;

        if (!element) {
            element = this.dom.createElement('link') as HTMLLinkElement;
            head?.appendChild(element);
        }
        element.setAttribute('rel', 'canonical');
        element.setAttribute('href', url);
    }
}
