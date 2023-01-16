import React from "react";
import Topbar from "./TopBar";
import ContentRowTop from "./ContentRowTop";
import Footer from "./components/Footer";

function ContentWrapper() {
  return (
    <div>
      <div id="content-wrapper" className="d-flex flex-column">
        {/* Main Content */}
        <div id="content">
          {/* Topbar */}
          <Topbar />
          {/* End of Topbar */}

          {/* Content Row Top */}
          <ContentRowTop />
          {/* End Content Row Top */}
        </div>
        {/* End of MainContent  */}

        {/* Footer */}
        <Footer />
        {/* End of Footer */}
      </div>
    </div>
  );
}

export default ContentWrapper;
