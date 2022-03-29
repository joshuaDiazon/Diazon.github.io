import { Card } from "antd";
import NavBar from "./Navigation/NavBar";
import Pokemon from "./Pokemon";


const PokeList = () => {
  return (
    <div>
      
      <Card className="card">
      <div className="picture">
          <img src="pokemon-png-23.png" alt="p"/>
      </div>
        <NavBar/>
        <Pokemon/>
      </Card>
    </div>
  )
}
export default PokeList;