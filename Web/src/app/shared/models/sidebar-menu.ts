export interface SideBarMenu {
    title: string,
    link: string,
    fullLink?: boolean,
    submenu?: SideBarMenu[]
}
