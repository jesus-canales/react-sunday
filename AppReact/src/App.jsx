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
      <Ciudad
      nombre="Arequipa"
      descripcion="Encatadora tierra volcánica"
      imagen="https://www.civitatis.com/blog/wp-content/uploads/2023/02/panoramica-arequipa-peru.jpg" />
      <Pie />
    </>
  );
}

export default App;