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
        imagen='dipper'/>
         <Testimonio 
        nombre='Mabel Pines'
        cargo='(Aficionada a la purpurina y a Bamboleos)'
        testimonio='Mabel es una chica optimista y alegre, que siempre ve el lado positivo de las cosas. Durante la primera temporada mantuvo una obsesión por tener un romance de verano, donde demostraba una alta seguridad en sí misma. Su actitud caótica contrasta la personalidad introvertida y cautiva de su hermano, Dipper. Cuando se siente deprimida o simplemente triste se sube el cuello del suéter a nivel de la cara y dice estar en "Sueterlandia".'
        imagen='mabel'/>
         <Testimonio 
        nombre='Stan Pines'
        cargo='(Aficionado al dinero)'
        testimonio='A pesar de que envía a los gemelos a hacer recados impredecibles y vergonzosos, siempre posee los mejores intereses en su corazón y los ama de forma incondicional. Mientras tanto, cuando no trata de ganar dinero rápidamente por medio de sus clientes incoherentes, el Tío Stan guarda su secreto personal, que podría ser la clave para descubrir el misterio de Gravity Falls.'
        imagen='stan'/>
      </div>
    </div>
  );
}

export default App;
