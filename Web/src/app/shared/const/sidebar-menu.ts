import { SideBarMenu } from "../models";

export const SIDEBAR_MENU: SideBarMenu[] = [
    {
        title: 'home',
        link: ''
    },
    {
        title: 'owners',
        link: '',
        submenu: [
            {
                title: 'Management',
                link: '/management'
            },
            {
                title: 'Leasing',
                link: ''
            },
            {
                title: 'Our Guarantees',
                link: ''
            },
            {
                title: 'Properties We Manage',
                link: ''
            },
            {
                title: 'Owner FAQs',
                link: ''
            },
            {
                title: 'Landlord Protection Insurance',
                link: ''
            },
            {
                title: 'International Clients',
                link: ''
            },
        ]
    },
    {
        title: 'pricing',
        link: ''
    },
    {
        title: 'tenants',
        link: '/tenants',
        submenu: [
            {
                title: 'Tenant Resources',
                link: '/tenants'
            },
            {
                title: 'Request Maintenance',
                link: 'https://scpm.appfolio.com/connect/users/sign_in'
            },
            {
                title: 'Tenant Login',
                link: 'https://scpm.appfolio.com/connect/users/sign_in'
            },
            {
                title: 'Home Buyer Program',
                link: 'https://learn.homebridge.com/clockwork/'
            },
            {
                title: 'School Information',
                link: 'https://www.greatschools.org/'
            },
        ]
    },
    {
        title: 'about us',
        link: '',
        submenu: [
            {
                title: 'Our Team',
                link: ''
            },
            {
                title: 'Join Our Team',
                link: ''
            },
            {
                title: 'Reviews',
                link: ''
            },
            {
                title: 'Contact Us',
                link: ''
            },
            {
                title: 'Blog',
                link: ''
            },
        ]
    },
    {
        title: 'agents',
        link: ''
    },
]
