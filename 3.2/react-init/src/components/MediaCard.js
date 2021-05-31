import React from "react";

class MediaCard extends React.Component {
  render() {
    return (
        <div>
            <div>
                <img src="http://lorempixel.com/400/200/cats/" alt="Random cat" />
                <h1>Jana D.T.</h1>
                <h2>5 de Mayo de 2021</h2>
            </div>
            <p>Como hemos dicho anteriormente los conceptos que aprendemos sobre componentes de clases son exactamente iguales que los que aprendemos en componentes funcionales. La diferencia entre uno y otro es simplemente un cambio de sintaxis. Por ello lo que hemos aprendido de props en los componentes de clase nos vale igual para los componentes funcionales.</p>
            <i class="fa fa-heart-o" aria-hidden="true"></i>
        </div>
        
      
    );
  }
}

export default MediaCard;