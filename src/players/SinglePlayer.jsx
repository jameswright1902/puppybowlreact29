import { useGetPlayerQuery } from "../api/puppybowlapi";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const Player = () => {
  const { playerid } = useParams();
  const { data, error, isLoading } = useGetPlayerQuery(playerid);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (error) {
    return <h1>Something went wrong...</h1>;
  }
  if (!data) {
    return <h1>No player data available</h1>;
  }

  return(
  <div key={data.data.player.id} className="player-card">
            {}
            <img
              src={data.data.player.imageUrl}
              alt={data.data.player.name}
              className="player-image"
            />

            <div className="player-details">
              <h2>{data.data.player.name}</h2>
              <p>{data.data.player.breed}</p>
              <p>{data.data.player.status}</p>
            </div>
            <Link to={`/`}>
              <button>Return Home</button>
            </Link>
          </div>
          )}

          export default Player