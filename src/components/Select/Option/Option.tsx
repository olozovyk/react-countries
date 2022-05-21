import React from 'react';

export const Option = ({ children }: { children: string }) => {
  return <option value={children}>{children}</option>;
};
