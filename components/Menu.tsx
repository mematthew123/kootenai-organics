import React, { useEffect } from "react";

// this component uses an embed menu from potify.net to display the menu on the site

const Menu = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://potify.net/embed/flower-montana-missoula";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Remove the script
      document.body.removeChild(script);

      // Manually find and remove the iframe
      const iframe = document.getElementById("sweedeIframe");
      if (iframe && iframe.parentNode) {
        iframe.parentNode.removeChild(iframe);
      }
    };
  }, []);

  return <div></div>;
};

export default Menu;
