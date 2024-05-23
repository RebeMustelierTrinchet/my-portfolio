import React, { useState, useEffect, useRef } from "react";
import styles from "./interactiveBackground.module.css";

import Image from "./../../imagenes/openart-image_K2M8wZN4_1714065359128_raw-removebg-preview.png";

export default function InteractiveBackground() {
  const [bolas, setBolas] = useState([]);
  const [bolasFuera, setBolasFuera] = useState([]);

  const contenedorRef = useRef(null);

  useEffect(() => {
    const contenedor = contenedorRef.current;

    const generarBola = () => {
        
        if (bolas.length === 10) {
            // console.log(bolas.length)
            return; 
          }
        
        const nuevaBola = {
          x: Math.random() * contenedor.offsetWidth,
          y: Math.random() * contenedor.offsetHeight,
          color: '#' + Math.floor(Math.random()*16777215).toString(16),
          velocidadX: (Math.random() - 0.5) ,
          velocidadY: (Math.random() - 0.5) ,
          
        };

        console.log("bolas", bolas.length)
        
        // Actualizar el estado de bolas después de crear la nueva bola
        setBolas((prevBolas) => [...prevBolas, nuevaBola]);
      
    };

    // console.log("bolas", bolas)

    // Generar nuevas bolas cada segundo
    const intervalo = setInterval(generarBola, 2000);

    // Eliminar bolas que salen del contenedor
    const eliminarBolasFueraDelContenedor = () => {
      setBolasFuera((prevBolas) =>
        prevBolas.filter((bola) =>
          bola.x < 0 || bola.x > contenedor.offsetWidth ||
          bola.y < 0 || bola.y > contenedor.offsetHeight
        )
      );
    };

    const animacion = requestAnimationFrame(eliminarBolasFueraDelContenedor);

    return () => {
      clearInterval(intervalo);
      console.log("intervalo",intervalo)
    //   cancelAnimationFrame(animacion);
    };
  }, []);

  useEffect(() => {
    const contenedor = contenedorRef.current;
    const moverBolas = () => {
      setBolas((prevBolas) =>
        prevBolas.map((bola) => {
          let nuevaX = bola.x + bola.velocidadX;
          let nuevaY = bola.y + bola.velocidadY;

          // Verificar límites del contenedor
        //   if (nu   evaX < 0) nuevaX = Math.random() * contenedor.offsetWidth;
        //   if (nuevaX > contenedor.offsetWidth) nuevaX = Math.random() * contenedor.offsetWidth;
        //   if (nuevaY < 100) nuevaY = Math.random() * contenedor.offsetHeight;
        //   if (nuevaY > contenedor.offsetHeight) nuevaY = Math.random() * contenedor.offsetHeight;

          return { ...bola, x: nuevaX, y: nuevaY };
        })
      );
    };

    

    const animacion = requestAnimationFrame(moverBolas);

    return () => cancelAnimationFrame(animacion);
  }, [bolas]);



  return (
    <div   ref={contenedorRef} className={styles.maincontainer}>
      <div  className={styles.image__container}>
        {/* <div  className={styles.sub__image__container}></div> */}
        <img className={styles.image} src={Image} alt={"header image"} />
        <div  className={styles.bola__container}>
          {bolas.map((bola, index) => (
            <div
              key={index}
              className={styles.bola}
              style={{ left: bola.x, top: bola.y, backgroundColor: bola.color }}
            ></div>
          ))}
        </div>
     
      </div>
    </div>
  );
}