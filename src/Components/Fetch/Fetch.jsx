import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";
import "./Fetch.css";
import { SearchContext } from "../../App";
import { BiLockAlt, BiMap } from "react-icons/bi";
import { BiLockOpenAlt } from "react-icons/bi";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineEye } from "react-icons/ai";
import { Location } from "react-router-dom";

export const Fetch = ({ abierto }) => {
  const [offers, setOffers] = useState([]);
  const { searchText } = useContext(SearchContext);
  const location = useLocation();

  useEffect(() => {
    axios
      .get("http://localhost:8000/offers")
      .then((res) => {
        // console.log(res.data);
        // console.log(res.data[0].lock);

        const offersData = res.data.map((offer) => {
          return offer;
        });

        setOffers(offersData);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const toggleAbierto = (offerId) => {
    const updatedOffers = [...offers];

    const updatedOffer = updatedOffers.find((offer) => offer._id === offerId);
    updatedOffer.lock = !updatedOffer.lock;
    setOffers(updatedOffers);
  };

  const percent = Math.round(Math.random() * 100);

  return (
    <div className="offerdisplay">
      {/* {offers.filter((offer) => offer.name.includes(searchText) && offer.location == 'madrid' &&)} */}
      {location.pathname === "/home" &&
        offers
          .filter((offer) => offer.lock && offer)
          .map((offer) => {
            return (
              <div className="lockposition" key={offer._id}>
                <div
                  className="locklogo"
                  onClick={() => toggleAbierto(offer._id)}
                >
                  {offer.lock === true ? <BiLockOpenAlt /> : <BiLockAlt />}
                </div>
                <Link className="job-offer-detail" to={`/offers/${offer._id}`}>
                  <div className="fechacreacion">17/04</div>
                  <h3>{offer.position}</h3>
                  <div className="city">
                    <div>
                      <BiMap /> {offer.location}
                    </div>
                    <div>
                      1 <AiOutlineUser className="logouser" />
                    </div>
                    <div>
                      <AiOutlineEye />
                      <span> </span>
                      02/02/2023
                    </div>
                  </div>
                  <div className="line"></div>
                  <div className="process">
                    <div className="processperc">
                      <div>Proceso</div>
                      <div className="percent">{percent}%</div>
                    </div>
                    <div className="progress-bar">
                      <div
                        className="progress"
                        style={{ width: `${percent}%` }}
                      ></div>
                    </div>
                  </div>
                  <div className="footeroffer">
                    <div>
                      <div className="number">
                        {Math.floor(Math.random() * 50)}
                      </div>
                      <div>Inscritos</div>
                    </div>
                    <div className="linevert"></div>
                    <div>
                      <div className="number">
                        {Math.floor(Math.random() * 50)}
                      </div>
                      <div>Procesos</div>
                    </div>
                    <div className="linevert"></div>
                    <div>
                      <div className="number">
                        {Math.floor(Math.random() * 50)}
                      </div>
                      <div>Finalistas</div>
                    </div>
                  </div>
                  <div></div>
                </Link>
              </div>
            );
          })}

      {location.pathname === "/offers" &&
        offers
          .filter((offer) => offer.lock === abierto && offer)
          .map((offer) => {
            return (
              <div className="lockposition" key={offer._id}>
                <div
                  className="locklogo"
                  onClick={() => toggleAbierto(offer._id)}
                >
                  {offer.lock === true ? <BiLockOpenAlt /> : <BiLockAlt />}
                </div>
                <Link className="job-offer-detail" to={`/offers/${offer._id}`}>
                  <div className="fechacreacion">17/04</div>
                  <h3>{offer.position}</h3>
                  <div className="city">
                    <div>
                      <BiMap /> {offer.location}
                    </div>
                    <div>
                      1 <AiOutlineUser className="logouser" />
                    </div>
                    <div>
                      <AiOutlineEye />
                      <span> </span>
                      02/02/2023
                    </div>
                  </div>
                  <div className="line"></div>
                  <div className="process">
                    <div className="processperc">
                      <div>Proceso</div>
                      <div className="percent">{percent}%</div>
                    </div>
                    <div className="progress-bar">
                      <div
                        className="progress"
                        style={{ width: `${percent}%` }}
                      ></div>
                    </div>
                  </div>
                </Link>
                <Link className="job-offer-detail" to={`/offers/${offer._id}`}>
                  <div className="fechacreacion">17/04</div>
                  <h3>{offer.position}</h3>
                  <div className="city">
                    <div>
                      <BiMap /> {offer.location}
                    </div>
                    <div>
                      1 <AiOutlineUser className="logouser" />
                    </div>
                    <div>
                      <AiOutlineEye />
                      <span> </span>
                      02/02/2023
                    </div>
                  </div>
                  <div className="line"></div>
                  <div className="process">
                    <div className="processperc">
                      <div>Proceso</div>
                      <div className="percent">{percent}%</div>
                    </div>
                    <div className="progress-bar">
                      <div
                        className="progress"
                        style={{ width: `${percent}%` }}
                      ></div>
                    </div>
                  </div>
                  <div className="footeroffer">
                    <div>
                      <div className="number">
                        {Math.floor(Math.random() * 50)}
                      </div>
                      <div>Inscritos</div>
                    </div>
                    <div className="linevert"></div>
                    <div>
                      <div className="number">
                        {Math.floor(Math.random() * 50)}
                      </div>
                      <div>Procesos</div>
                    </div>
                    <div className="linevert"></div>
                    <div>
                      <div className="number">
                        {Math.floor(Math.random() * 50)}
                      </div>
                      <div>Finalistas</div>
                    </div>
                  </div>
                  <div></div>
                </Link>
              </div>
            );
          })}
    </div>
  );
};
