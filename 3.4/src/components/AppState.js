import React from "react";

let vari = 33;

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      nombreClase: "texto-blue",
      showParagraph: "",
    };

    this.handleClickAzul = this.handleClickAzul.bind(this);
    this.handleClickRojo = this.handleClickRojo.bind(this);
    this.handleClickParagraph = this.handleClickParagraph.bind(this);
  }

  handleClickParagraph() {
    this.setState({
      ...this.state,
      showParagraph: "mostrar",
    });
  }

  handleClickAzul() {
    //this.nombreClase = "testo-blue";

    this.setState({
      ...this.state,
      nombreClase: "texto-blue",
    });
  }

  handleClickRojo() {
    //this.nombreClase = "testo-red";

    this.setState({
      ...this.state,
      nombreClase: "texto-red",
    });
  }

  render() {
    return (
      <main>
        <div className={this.state.nombreClase}>Texto</div>
        <input onClick={this.handleCLickAzul} type="button" value="Azul" />
        <input onClick={this.handleCLickRojo} type="button" value="Rojo" />

        <input
          onClick={this.handleClickParagraph}
          type="button"
          value="Añadir parrafo"
        />
        {this.state.showParagraph === "mostrar" ? (
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            error iure impedit dolore fugit minus ad consectetur porro
            voluptates! Ullam velit doloribus repudiandae voluptate animi
            quidem, ut fuga quam modi?
          </p>
        ) : null}
      </main>
    );
  }
}

export default App;
