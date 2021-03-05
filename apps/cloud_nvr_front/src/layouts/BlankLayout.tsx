import React from 'react';
import { Inspector } from 'react-dev-inspector';

// const InspectorWrapper = process.env.NODE_ENV === 'development' ? Inspector : React.Fragment;
const InspectorWrapper = React.Fragment;

const Layout: React.FC = ({ children }) => {
  return <div>{children}</div>;
};

export default Layout;
