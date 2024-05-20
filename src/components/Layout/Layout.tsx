import React from "react";

import styles from "../../styles/Layout.module.css";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styles.main}>
      <div style={{ width: "100%" }}>
        <div className={styles.grid}>
          <div className={styles.gradient}>
            <main id="main-editor" className={styles.content}>
              {children}
            </main>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
