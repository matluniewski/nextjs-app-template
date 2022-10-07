import React from 'react';

const BaseLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <>{children}</>;
};

export const getBaseLayout = (page: React.ReactNode) => {
  return <BaseLayout>{page}</BaseLayout>;
};
