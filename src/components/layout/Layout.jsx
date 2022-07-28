import React, { Children } from "react";
const Layout = (props) => {
  return (
    <div>
      <nav>
        <div>
          <h3>Brand Name</h3>
        </div>
        <div>
          <ul>
            <li>Link One</li>
            <li>Link Two</li>
            <li>Link Three</li>
          </ul>
        </div>
      </nav>
      <main>
        {props.children}
      </main>
      <footer>
        <h3>Footer</h3>
        <ul>
          <li>Footer Link One</li>
          <li>Footer Link Two</li>
          <li>Footer Link Three</li>
        </ul>
      </footer>
    </div>
  );
};

export default Layout;
