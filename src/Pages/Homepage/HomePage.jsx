import React from "react";
import "./HomePage.css";
import { BiChat } from "react-icons/bi";
import Nav from "../../Components/Nav/Nav";
import image from "../../assets/Meettalent.png";
import { Fetch } from "../../Components/Fetch/Fetch";

const HomePage = ({ offers }) => {
  return (
    <div className="homecontainer">
      <div className="homehead">
        <img src={image} className="hometitle" alt="" />
        <div className="homenav">
          <img
            className="homeimg"
            src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/cb1f3775783531.5c56badd5e5ef.jpg"
            alt=""
          ></img>
          <input className="homesearch" placeholder="Buscar"></input>
          <BiChat className="chat"></BiChat>
        </div>
      </div>
      <div className="offers">
        <h2>Ofertas abiertas({offers})</h2>
        <div className="homeoffers">
          <Fetch></Fetch>
        </div>
        <Nav></Nav>
      </div>
    </div>
  );
};

export default HomePage;
