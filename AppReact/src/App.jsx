import { Fragment } from 'react';
import Ciudad from './componente/Ciudad'
import Encabezado from './componente/Encabezado';
import Pie from './componente/Pie'

function App() {

  return (
    <>
      <Encabezado />
      <Ciudad />
      <Pie />
    </>
  );
}

export default App;