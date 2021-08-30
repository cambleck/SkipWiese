import React from "react";
import { Helmet } from "react-helmet";

const Shop = () => {
  return (
    <div className="flex-center " style={{ height: 300, fontSize: 30 }}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Coming Soon</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      Coming Soon
    </div>
  );
};

export default Shop;
