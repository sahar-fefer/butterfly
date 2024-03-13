import React from "react";

import "./_gallery-grid.scss";

interface Props {
  images: {
    image: string;
    alt: string;
  }[];
}
export const GalleryGrid = (props: Props) => {
  const { images } = props;
  return (
    <section className="gallery-grid">
      {images.map((img, i) => {
        return <img loading="lazy" src={img.image} alt={img.alt} key={i} />;
      })}
    </section>
  );
};
