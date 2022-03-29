import { Button, Card} from "antd";
import { useDispatch, useSelector } from "react-redux";
import { deletePokemon } from "./feature/userSlice/PokemonSlice";
import { addToFav } from "./feature/userSlice/FavoriteSlice";
import { useNavigate } from "react-router-dom";

const Pokemon = () => {
  const pokemons = useSelector((state) => state.pokemonData.data);
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const handleAdd = (list) => {
    dispatch(addToFav(list));
    navigate("/fav")
  };

  return (
    <Card className="card">
      {pokemons.map((list) => {
        return (
          <div className="pokemon">
            <h2> Name: {list.name}</h2>
            <img className="img" src={list.src} alt="" />
            <div className="pokemon-list">
              <div> Base Experience: {list.base_experience}</div>
              <div> Height: {list.height}</div>
              <div> Order: {list.order}</div>
              <div> Weight: {list.weight}</div>
            </div>

              <Button type="primary" className="add" onClick={() => handleAdd(list)}>
                Add to favorite
              </Button>
              <Button type="primary"
                className="delete"
                onClick={() => {
                  dispatch(deletePokemon({ id: list.id }));
                }}
              >
               Delete pokemon
              </Button>
          </div>
        );
      })}
    </Card>
  );
};
export default Pokemon;
