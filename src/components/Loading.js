import React from "react";
import './Loading.css'
const Loading = () => {
  return (
    <>
      <div className="about">
        <a
        rel="noreferrer"
          className="bg_links social portfolio"
          href="https://www.rafaelalucas.com"
          target="_blank"
        >
          <span className="icon"></span>
        </a>
        <a
        rel="noreferrer"
          className="bg_links social dribbble"
          href="https://dribbble.com/rafaelalucas"
          target="_blank"
        >
          <span className="icon"></span>
        </a>
        <a
        rel="noreferrer"
          className="bg_links social linkedin"
          href="https://www.linkedin.com/in/rafaelalucas/"
          target="_blank"
        >
          <span className="icon"></span>
        </a>
        <a 
        className="bg_links logo"></a>
      </div>

      <div className="content">
        <div className="planet">
          <div className="ring"></div>
          <div className="cover-ring"></div>
          <div className="spots">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <p>Loading</p>
      </div>
    </>
  );
};

export default Loading;
