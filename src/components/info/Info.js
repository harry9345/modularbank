import React from "react";

import Classes from "../../container/Contact.module.css";

const Info = () => {
  return (
    <div className={Classes.Column}>
      <div className={Classes.Column}></div>

      <div className={Classes.IsFlex}>
        <div>Media enquiries:</div>
        <a href="mailto:press@modularbank.co">press@modularbank.co</a>
        <br />
        <div>Career questions:</div>
        <a href="mailto:careers@modularbank.co">careers@modularbank.co</a>
        <br />
        <div>Our offices:</div>
        <div>Tallinn, Estonia</div>
        <div>Vabaduse Workland</div>
        <div>Pärnu mnt 12, 10146</div>
        <br />
        <div>Berlin, Germany</div>
        <div>Bikini Berlin, Scaling Spaces, 2.OG</div>
        <div>Budapester Str. 46</div>
        <div>10787 Berlin</div>
      </div>
    </div>
  );
};

export default Info;
