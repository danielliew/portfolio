import React from "react";

export interface FloatingProps {
  content: FloatingContent[];
}

interface FloatingContent {
  text: string;
  logo: React.ReactNode;
}
