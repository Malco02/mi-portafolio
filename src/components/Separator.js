import React from 'react';

export default function Separator() {
  return (
    // Contenedor que centra la línea y le da espacio
    <div className="my-16 w-full max-w-4xl mx-auto"> 
      {/* Esta es la línea de luz:
        - h-px: 1 píxel de alto
        - bg-gradient-to-r: Gradiente de izquierda a derecha
        - from-transparent: Empieza invisible
        - via-rojoletra: ¡Usa tu color personalizado en el centro!
        - to-transparent: Termina invisible
      */}
      <div className="h-px bg-gradient-to-r from-transparent via-rojoletra to-transparent" />
    </div>
  );
}