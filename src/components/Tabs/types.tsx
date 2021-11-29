import React from "react";

export interface TabProps {
  tabs: Tabs[];
}

interface Tabs {
  company: string;
  location: string;
  positions: {
    jobTitle?: string;
    duration?: string;
    content: React.ReactNode;
  }[];
}
