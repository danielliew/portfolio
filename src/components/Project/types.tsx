export interface ProjectProps {
  project: {
    title: string;
    images: string[];
    text: string;
    tags: string[];
    mobile?: boolean;
    url?: string;
  };
  left?: boolean;
}
