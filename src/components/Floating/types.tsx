import React from "react";

export interface FloatingProps {
  content: FloatingContent[];
}

export interface FloatingContent {
  text: string;
  logo: React.ReactNode;
  showAll?: boolean;
}
