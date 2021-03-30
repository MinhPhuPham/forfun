import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
// import { environment } from '../../../environments/environment'; will implement later

@Injectable({
    providedIn: 'root',
})
export class MetaService {
    constructor(
        private readonly meta: Meta,
        private readonly title: Title,
        @Inject(DOCUMENT) private readonly dom: Document,
    ) { }
}