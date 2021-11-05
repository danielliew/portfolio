export interface ProjectProps {
  project: {
    title: string;
    images: string[];
    text: string;
    tags: string[];
    mobile?: boolean;
  };
  left?: boolean;
}
