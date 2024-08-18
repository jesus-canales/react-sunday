import { Fragment } from 'react';
import Ciudad from './componente/Ciudad'
import Encabezado from './componente/Encabezado';
import Pie from './componente/Pie'

function App() {

  return (
    <>
      <Encabezado />
      <Ciudad
      nombre="Lima"
      descripcion="La capital del Perú"
      imagen="https://www.peru.travel/contenido/general/imagen/es/643/1.1/lima-plaza-de-armas-consejos.jpg" />
      <Pie />
    </>
  );
}

export default App;