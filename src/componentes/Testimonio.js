import React from "react";
import '../hojas-de-estilo/Testimonio.css';

function Testimonio() {
  return (
    <div className='contenedor-testimonio'>
      <img 
      className='imagen-testimonio' 
      src={require('../imagenes/testimonio-dipper.jpg')} 
      alt='foto de dipper'/>
    <div className="contenedor-texto-testimonio">
           <p className="nombre-testimonio">Nombre: Dipper Pines</p>
           <p className="cargo-testimonio">Aficcionado al misterio.</p>
           <p className="texto-testimonio">Mason «Dipper» Pines es un personaje ficticio y uno de los tres personajes principales de la serie animada de Disney Channel Gravity Falls. El personaje tiene la voz de Jason Ritter en su versión original y está basado libremente en la infancia del creador de la serie Alex Hirsch. Dipper es el único personaje que aparece en todos los episodios de Gravity Falls.</p>
      </div>
  </div>
  );
}

export default Testimonio;