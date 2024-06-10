import "./message.css";
import { useEffect, useState } from "react";

export const Message = () => {
  const [i, setI] = useState(0);
  const txt1 =
    "Oi, Meu Amor.....!  <<               Quero dizer algo especial para você... < sou ruim com as palavras, < mas vou tentar.  <<<                Por favor, leia com atenção...!                                                                            > A Internet nos juntou e rapidamente você < foi me conquistando. Conseguiu fazer < com que me sentisse à vontade e feliz < no mesmo dia em que te conheci. < Muito obrigado por isso!   >>                  Você mexe com meu coração < de um modo que não consigo explicar, < sinto que você é realmente especial....! <<                           Ainda estamos nos conhecendo, < mas tudo que vejo em você é < uma alma que complementa na perfeição < meu coração.                                                     > E já que gosta de sertanejo, < olha esse trechinho...! <<                      << Por que te amo eu não sei... < Mas quero te amar cada vez mais. < O que na vida ninguém fez... < Você fez em menos de mês.                                                   >                                                          >Te love < Minha princesa linda.....! |                  << Espero ter achance de ter amar < por muuuuito tempo...! < Beijooosss <<< Para voltar,clique no 'Start' aqui embaixo";
  const speed = 50;

  useEffect(() => {
    const interval = setInterval(() => {
      var r_num = Math.floor(Math.random() * 40) + 1;
      var r_size = Math.floor(Math.random() * 65) + 10;
      var r_left = Math.floor(Math.random() * 100) + 1;
      var r_bg = Math.floor(Math.random() * 25) + 100;
      var r_time = Math.floor(Math.random() * 5) + 5;
      const bgHeart = document.querySelector(".bg_heart");

      const heart1 = document.createElement("div");
      heart1.className = "heart";
      heart1.style.width = `${r_size}px`;
      heart1.style.height = `${r_size}px`;
      heart1.style.left = `${r_left}%`;
      heart1.style.background = `rgba(255,${r_bg - 25},${r_bg},1)`;
      heart1.style.animation = `love ${r_time}s ease`;

      const heart2 = document.createElement("div");
      heart2.className = "heart";
      heart2.style.width = `${r_size - 10}px`;
      heart2.style.height = `${r_size - 10}px`;
      heart2.style.left = `${r_left + r_num}%`;
      heart2.style.background = `rgba(255,${r_bg - 25},${r_bg + 25},1)`;
      heart2.style.animation = `love ${r_time + 5}s ease`;

      bgHeart.appendChild(heart1);
      bgHeart.appendChild(heart2);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (i < txt1.length) {
      const timeout = setTimeout(() => {
        const text1Element = document.getElementById("text1");
        if (txt1.charAt(i) === "<") {
          text1Element.innerHTML += "</br>";
        } else if (txt1.charAt(i) === ">") {
          text1Element.innerHTML = "";
        } else if (txt1.charAt(i) === "|") {
          document.querySelector(".bg_heart").style.backgroundColor = "#018685";
        } else {
          text1Element.innerHTML += txt1.charAt(i);
        }
        setI(i + 1);
      }, speed);
      return () => clearTimeout(timeout);
    }
  }, [i]);

  return (
    <div className="bg_heart">
      <div id="text1" className="text"></div>
    </div>
  );
};
