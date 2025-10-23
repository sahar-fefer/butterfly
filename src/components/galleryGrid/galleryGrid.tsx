import React from "react";

import * as s from "./_gallery-grid.module.scss";

interface Props {
  images: {
    image: string;
    alt: string;
  }[];
}
export const GalleryGrid = (props: Props) => {
  const { images } = props;
  return (
    <section className={s.galleryGrid}>
      {images.map((img, i) => {
        return <img loading="lazy" src={img.image} alt={img.alt} key={i} />;
      })}
    </section>
  );
};
