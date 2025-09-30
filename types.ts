import type React from 'react';

export interface Link {
  href: string;
  text: string;
  // FIX: Changed JSX.Element to React.ReactElement to fix "Cannot find namespace 'JSX'".
  icon: React.ReactElement;
}
