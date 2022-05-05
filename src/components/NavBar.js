import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const linksDisplayed = links.map(link => {
    return <a href= {`#${link}`}>{link}</a>
  })

  return <nav>{linksDisplayed}</nav>;
}

export default NavBar;
