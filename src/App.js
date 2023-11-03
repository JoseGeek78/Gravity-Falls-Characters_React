import './App.css';
import Testimonio from './componentes/Testimonio.js'

function App() {
  return (
    <div className="App">
       <div className='contenedor-principal'>
      <h1>Personajes principales de 'Gravity Falls':</h1>
      <Testimonio 
        nombre='Mason "Dipper" Pines'
        cargo='(Aficionado al misterio)'
        testimonio='Durante las vacaciones, trabajaba en la Cabaña del Misterio junto a su hermana Mabel, Soos, Stan y Wendy. Un día, descubre accidentalmente un libro en el que aparecen advertencias e información sobre los sucesos del pueblo (el Diario Número "3"). Es atento e inteligente, y para no fallar, organiza listas a menudo, con la intención de que todo salga perfecto. Dipper está enamorado de Wendy y, en más de una ocasión, ha intentando confesarle su amor.'
        imagen=''/>
      </div>
    </div>
  );
}

export default App;
