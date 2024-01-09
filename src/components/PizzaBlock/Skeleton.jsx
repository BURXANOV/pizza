import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = (props) => (
  <ContentLoader
    speed={67}
    width={400}
    height={400}
    viewBox="0 0 400 400"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="48" y="8" rx="3" ry="3" width="88" height="6" />
    <rect x="48" y="26" rx="3" ry="3" width="52" height="6" />
    <rect x="-1" y="74" rx="3" ry="3" width="410" height="6" />
    <rect x="0" y="100" rx="3" ry="3" width="380" height="6" />
    <circle cx="20" cy="20" r="20" />
  </ContentLoader>
);

export default Skeleton;
