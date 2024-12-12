import React, { useState } from "react"
import { useNavigate } from "react-router-dom"

const Reserve = () => {
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    guests: "",
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value })
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Guardar los datos en localStorage
    localStorage.setItem("reservation", JSON.stringify(formData))
    // Redirigir a Home
    navigate("/")
  };

  return (
    <div>
      <h2>Hacer una reserva</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Date:
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Numero de Personas:
          <input
            type="number"
            name="guests"
            value={formData.guests}
            onChange={handleInputChange}
            required
          />
        </label>
        <button type="submit">Reservar</button>
      </form>
    </div>
  );
};

export default Reserve;
