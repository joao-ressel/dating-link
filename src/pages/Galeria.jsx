import "../styles/galeria.css";

import imagem1 from "../assets/galeria/image1.jpg";
import imagem2 from "../assets/galeria/image2.jpg";
import imagem3 from "../assets/galeria/image3.jpg";
import imagem4 from "../assets/galeria/image4.jpg";
import imagem5 from "../assets/galeria/image5.jpg";
import imagem6 from "../assets/galeria/image6.jpg";
import imagem7 from "../assets/galeria/image7.jpg";
import imagem8 from "../assets/galeria/image8.jpg";
import imagem9 from "../assets/galeria/image9.jpg";
import imagem10 from "../assets/galeria/image10.jpg";
import imagem11 from "../assets/galeria/image11.jpg";
import imagem12 from "../assets/galeria/image12.jpg";
import imagem13 from "../assets/galeria/image13.jpg";
import imagem14 from "../assets/galeria/image14.jpg";
import imagem15 from "../assets/galeria/image15.jpg";
import imagem16 from "../assets/galeria/image16.jpg";
import imagem17 from "../assets/galeria/image17.jpg";
import imagem18 from "../assets/galeria/image18.jpg";

export const Galeria = () => {
  const imagens = [
    {src: imagem1, quadrada: false},
    {src: imagem2, quadrada: false},
    {src: imagem3, quadrada: false},
    {src: imagem4, quadrada: false},
    {src: imagem5, quadrada: false},
    {src: imagem6, quadrada: false},
    {src: imagem7, quadrada: false},
    {src: imagem8, quadrada: false},
    {src: imagem9, quadrada: false},
    {src: imagem10, quadrada: false},
    {src: imagem11, quadrada: false},
    {src: imagem12, quadrada: false},
    {src: imagem13, quadrada: false},
    {src: imagem14, quadrada: false},
    {src: imagem15, quadrada: false},
    {src: imagem16, quadrada: false},
    {src: imagem17, quadrada: false},
    {src: imagem18, quadrada: false},
  ];

  return (
    <div className="galeria">
      {imagens.map((imagem, index) => (
        <img
          key={index}
          src={imagem.src}
          alt={`Imagem ${index + 1}`}
          className={imagem.quadrada ? "imagem-galeria imagem-quadrada" : "imagem-galeria"}
        />
      ))}
    </div>
  );
};
