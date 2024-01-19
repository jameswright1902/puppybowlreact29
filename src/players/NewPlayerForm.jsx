import { useState } from "react";
import { useAddPlayerMutation } from "../api/puppybowlapi";

const AddPlayers = () => {
  const [addNewPlayer] = useAddPlayerMutation();
  const [formData, setFormData] = useState({
    name: "",
    breed: "",
    status: "",
    imageURL: "",
    teamID: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    addNewPlayer(formData)
      .unwrap()
      .then(() => {})
      .then((error) => {
        console.log(error);
      });

    setFormData({
      name: "",
      breed: "",
      status: "",
      imageURL: "",
      teamID: "",
    });
  };

  return (
    <div>
      <h2>New Player Form</h2>
      <form onSubmit={handleSubmit}>
        <label>Name: </label>
        <input
          type="text"
          className="form-control"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
        />

        <br />
        <label>Breed: </label>
        <input
          type="text"
          className="form-control"
          name="breed"
          value={formData.breed}
          onChange={handleInputChange}
        />
        <br />
        <label>Status: </label>
        <input
          type="text"
          className="form-control"
          name="status"
          value={formData.status}
          onChange={handleInputChange}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddPlayers;
