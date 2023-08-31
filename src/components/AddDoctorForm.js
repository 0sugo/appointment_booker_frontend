import React, { useState } from "react";
import { CreateDoctor } from "../service/doctorsService";
import { useNavigate } from "react-router";
import NavigationPanel from "./navigation/NavigationPanel";
import MobileNav from "./navigation/MobileNav";

const AddDoctor = () => {
  const [name, setName] = useState("");
  const [specialisation, setSpecialisation] = useState("");
  const [city, setCity] = useState("");
  const [price, setPrice] = useState("");
  const [duration, setDuration] = useState("");
  const [imgURL, setImgURL] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await CreateDoctor({
        name,
        specialisation,
        city,
        price,
        duration,
        image_url: imgURL,
      });
      setSuccessMessage(response);
      navigate("/homepage", { replace: true });
    } catch (error) {
      setSuccessMessage("Failed saving entry");
    }

    setTimeout(() => {
      setSuccessMessage("");
    }, 3000);
  };

  return (
    <div className="homepage_flex">
      <div className="desk_nav">
        <NavigationPanel />
      </div>
      <section>
        <div className="container">
          <div className="overlay">
            <div className="form-container flexer">
              <div className="hero-reserve">
                <h3>ADD DOCTOR</h3>
                <hr />
                <p>
                  Welcome to Doctors create form. Here you are going to pick a
                  doctor name, specialisation, city, image URL, price and
                  duration for your service.
                </p>
              </div>
              <form className="form-reserve flexer" onSubmit={handleSubmit}>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                  required
                />
                <input
                  type="text"
                  value={specialisation}
                  onChange={(e) => setSpecialisation(e.target.value)}
                  placeholder="Enter specialisation"
                  required
                />
                <input
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  placeholder="Enter city"
                  required
                />
                <input
                  type="number"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  placeholder="Enter price"
                  required
                />
                <input
                  type="text"
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                  placeholder="Enter duration"
                  required
                />
                <input
                  type="url"
                  value={imgURL}
                  onChange={(e) => setImgURL(e.target.value)}
                  placeholder="Enter Image URL"
                  required
                />
                <button type="submit">Create Doctor</button>
              </form>
              {successMessage && <div className="output">{successMessage}</div>}
            </div>
          </div>
        </div>
      </section>
      <div className="mobile_na">
        <MobileNav />
      </div>
    </div>
  );
};

export default AddDoctor;
