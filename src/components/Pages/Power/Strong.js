import { Button, Card } from "antd";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


const Strong = () => {
  const pokemons = useSelector((state) => state.pokemonData.data);
  const navigate = useNavigate()

  const handleBack = () => {
    navigate("/")
  }

  return (
    <Card className="strongest">
      {pokemons && (
        <h1>
          {pokemons
            .filter((list) => list.base_experience >= 160)
            .map((list) => (
              <div>
                <img className="img" alt="p" src={list.src} />
                <h1>{list.name}</h1>
              </div>
            ))}
        </h1>
      )}
      <Button className="btn" onClick={handleBack}>Back to home</Button>
    </Card>
  );
};
export default Strong;
