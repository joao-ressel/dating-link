import "./gallery.css";

import img1 from "../../assets/gallery/image1.jpg";
import img2 from "../../assets/gallery/image2.jpg";
import img3 from "../../assets/gallery/image3.jpg";
import img4 from "../../assets/gallery/image4.jpg";
import img5 from "../../assets/gallery/image5.jpg";
import img6 from "../../assets/gallery/image6.jpg";
import img7 from "../../assets/gallery/image7.jpg";
import img8 from "../../assets/gallery/image8.jpg";
import img9 from "../../assets/gallery/image9.jpg";
import img10 from "../../assets/gallery/image10.jpg";
import img11 from "../../assets/gallery/image11.jpg";
import img12 from "../../assets/gallery/image12.jpg";
import img13 from "../../assets/gallery/image13.jpg";
import img14 from "../../assets/gallery/image14.jpg";
import img15 from "../../assets/gallery/image15.jpg";
import img16 from "../../assets/gallery/image16.jpg";
import img17 from "../../assets/gallery/image17.jpg";
import img18 from "../../assets/gallery/image18.jpg";

export const Gallery = () => {
  const images = [
    { src: img1, square: false },
    { src: img2, square: false },
    { src: img3, square: false },
    { src: img4, square: false },
    { src: img5, square: false },
    { src: img6, square: false },
    { src: img7, square: false },
    { src: img8, square: false },
    { src: img9, square: false },
    { src: img10, square: false },
    { src: img11, square: false },
    { src: img12, square: false },
    { src: img13, square: false },
    { src: img14, square: false },
    { src: img15, square: false },
    { src: img16, square: false },
    { src: img17, square: false },
    { src: img18, square: false },
  ];

  return (
    <div className="gallery">
      {images.map((image, index) => (
        <img
          key={index}
          src={image.src}
          alt={`Imagem ${index + 1}`}
          className={
            image.square ? "image-gallery image-square" : "image-gallery"
          }
        />
      ))}
    </div>
  );
};
