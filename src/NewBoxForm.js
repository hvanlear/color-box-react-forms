import { useState } from "react";
import { v4 as uuid } from "uuid";

const NewBoxForm = ({ createBox }) => {
  const INIT_STATE = {
    heigh: "",
    width: "",
    backgroundColor: "",
  };
  const [formData, setFormData] = useState(INIT_STATE);

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };

  const gatherInput = (evt) => {
    evt.preventDefault();
    createBox({ ...formData, id: uuid() });
    setFormData(INIT_STATE);
  };

  return (
    <div>
      <form onSubmit={gatherInput}>
        <div>
          <label htmlFor="height">Height</label>
          <input
            onChange={handleChange}
            type="text"
            name="height"
            value={formData.height}
            id="height"
          />
        </div>
        <div>
          <label htmlFor="width">width</label>
          <input
            onChange={handleChange}
            type="text"
            name="width"
            id="width"
            value={formData.width}
          />
        </div>
        <div>
          <label htmlFor="backgroundColor">Background Color</label>
          <input
            onChange={handleChange}
            type="text"
            name="backgroundColor"
            value={formData.backgroundColor}
            id="backgroundColor"
          />
        </div>
        <button id="newBoxButton">Add a new box!</button>
      </form>
    </div>
  );
};

export default NewBoxForm;
