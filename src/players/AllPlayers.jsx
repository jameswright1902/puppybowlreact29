import { useGetPlayersQuery } from "../api/puppybowlapi";
import { Link } from "react-router-dom";


const Players = () => {
  const { data, error, isLoading } = useGetPlayersQuery();

  if (isLoading) {
    <h1>Loading...</h1>;
  }
  if (error) {
    alert("Fetch Failed");
  }
  console.log(data);

  return (
    <div className="players">
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        data.data.players.map((player) => (
          <div key={player.id} className="player-card">
            {}
            <img
              src={player.imageUrl}
              alt={player.name}
              className="player-image"
            />

            <div className="player-details">
              <h2>{player.name}</h2>
        
            </div>
            <Link to={`/players/${player.id}`}>
              <button>Details</button>
            </Link>
          </div>
        ))
      )}
    </div>
  );
};

// Export the component so it can be imported and used in other files

export default Players;
