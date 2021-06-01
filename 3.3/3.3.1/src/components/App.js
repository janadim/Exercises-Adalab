import React from "react";

class App extends React.Component {
  render() {
    const students = [
      {
        promo: "A",
        name: "Sofía",
        age: 20,
      },
      {
        promo: "B",
        name: "María",
        age: 21,
      },
      {
        promo: "A",
        name: "Lucía",
        age: 22,
      },
    ];

    return (
      <div>
        <h1>Pintar listados con React:</h1>
        {/* con este map iteramos iteramos el array de items */}
        {students
          .filter((item) => item.promo === "A")
          .map((FilteredItem) => {
            // cada return retorna un li
            return (
              <li>
                <p>Nombre: {FilteredItem.name}</p>
                <p>Edad: {FilteredItem.age}</p>
              </li>
            );
            // el map retorna un array de li, es decir, un listado de HTML
          })}
      </div>
    );
  }
}

export default App;
