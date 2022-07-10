import { ReactNode } from "react";

export interface ProjectProps {
  project: {
    title: string;
    images: string[];
    text: string | ReactNode;
    tags: string[];
    mobile?: boolean;
    url?: string;
  };
  left?: boolean;
}
