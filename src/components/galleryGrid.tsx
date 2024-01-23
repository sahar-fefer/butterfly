import React from "react";

import "../styles/_gallery-grid.scss";

import OmersEnter from "../images/omers-house-enter-sign.jpg";
import OmersFlowers from "../images/omers-house-flowers.jpg";
import OmersGirls from "../images/omers-house-girls.jpg";
import OmersSales from "../images/omers-house-sales.jpg";
import OmersVolunteers from "../images/omers-house-volunteers.jpg";
import OmersActivity from "../images/omers-house-activity.jpg";
import OmersSelling from "../images/omers-house-selling.jpg";

export const GalleryGrid = () => {
  return (
    <section className="gallery-grid">
      <img loading="lazy" src={OmersGirls} alt="" />
      <img loading="lazy" src={OmersFlowers} alt="" />
      <img loading="lazy" src={OmersEnter} alt="" />
      <img loading="lazy" src={OmersVolunteers} alt="" />
      <img loading="lazy" src={OmersSales} alt="" />
      <img loading="lazy" src={OmersSelling} alt="" />
      <img loading="lazy" src={OmersActivity} alt="" />
    </section>
  );
};
