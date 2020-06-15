import React from "react";

// reactstrap components

// core components


// index sections
import SectionLogin from "views/index-sections/SectionLogin.js";
import ExamplesNavbar from "components/Navbars/ExamplesNavbar";

function Index() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("index");
    return function cleanup() {
      document.body.classList.remove("index");
    };
  });
 
  return (
    <>
      <ExamplesNavbar /> 
      <div className="main">        
        <SectionLogin />
      </div>
    </>
  );
}

export default Index;
