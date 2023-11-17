import defaultPokedexList from './defaultPokedexList';
import Pokecard from './Pokecard';
import './Pokedex.css';

function Pokedex ({characters = defaultPokedexList}) {
  return (
    <div className="Pokedex">
      <h1 className="Pokedex-header">Pokedex</h1>
    {characters.map(c => <Pokecard
      key={c.id}
      id={c.id}
      name={c.name}
      img={c.img}
      type={c.type}
      base_experience={c.base_experience}
    />)}
  </div>
  )
}

export default Pokedex;