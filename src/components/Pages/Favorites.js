import { Button, Card } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../feature/userSlice/FavoriteSlice";
import { useNavigate } from "react-router-dom";

const Favorites = () => {
  const list = useSelector((state) => state.favoriteList.value);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/");
  };

  return (
    <Card className="card">
      {list.map((favs) => {
        return (
          <div className="fav-pokemon">
            <div>
              <h1>{favs.name}</h1>
              <img className="img" src={favs.src} alt="" />
              <div>

                <Button
                  className="delete"
                  onClick={() => {
                    dispatch(remove({ id: favs.id }));
                  }}
                >
                  Remove
                </Button>

              </div>
            </div>
          </div>
        );
      })}
      <Button className="btn" onClick={handleBack}>  Back to home </Button>
    </Card>
  );
};

export default Favorites;
