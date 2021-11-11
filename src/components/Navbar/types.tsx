export type ContentSections = {
  navText: string;
  href?: string;
  solid?: boolean;
}[];

export interface NavItemsProps {
  contentSections: ContentSections;
  onHamburger: () => void;
}

export interface NavItemProps {
  navText: string;
  href?: string;
  solid?: boolean;
  onHamburger: () => void;
}
