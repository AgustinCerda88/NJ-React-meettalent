import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import axios from "axios";


export const CreateOffer = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  const [currentSheet, setCurrentSheet] = useState(0);
  const handleNextClick = () => {
    const sheet = currentSheet === sheets.length - 1 ? 0 : currentSheet + 1;
    setCurrentSheet(sheet);
  };

  const { getValues } = useForm();
  const handleCreateOffer = () => {
    const { position, company, description, requirements, salary, location } = getValues();
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ position, company, description, requirements, salary, location })
    };
  
    fetch('/offers', requestOptions)
      .then(response => response.json())
      .then(data => console.log(data));
  }
  
  const [jobTitle, setJobTitle] = useState("");
  const handleButton = (value) => {
    setJobTitle(value);
  };

  const [offers, setOffers] = useState([]);

  const getOffers = () => {
    axios
      .get("http://localhost:8000/offers")
      .then((res) => {
        setOffers(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    getOffers();
  }, []);

  const sheets = [
    //primera página
    <div className="container-black">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h4 className="">Duplicar oferta</h4>

        <div>
  {Array.isArray(offers) && offers.length > 0 ? (
    offers.map((offer, index) => (
      <div key={index}>
        <button className="button-white" onClick={() => handleButton(offer.position)}>
          {offer.position}
        </button>
      </div>
    ))
  ) : (
    <p>No hay ofertas disponibles</p>
  )}
</div>


        <div className="">
          <h4 className="">Titulo de la nueva oferta</h4>
          <input
            className=""
            type="text"
            id="title"
            placeholder="Escribe el título"
            {...register("jobTitle")}
          />
          <p>¿Cómo crear un título efectivo?</p>
        </div>
        <button onClick={handleNextClick} className="button-black">
          Comenzar
        </button>
      </form>
    </div>,

    //segunda página
    <div className="">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="">
          <select {...register("city")} defaultValue="">
            <option value="" disabled>
              Ciudad
            </option>
            {[
              "A Coruña",
              "Alicante",
              "Almería",
              "Badalona",
              "Barcelona",
              "Bilbao",
              "Cartagena",
              "Córdoba",
              "Elche",
              "Getafe",
              "Gijón",
              "Granada",
              "Jerez de la Frontera",
              "Málaga",
              "Madrid",
              "Murcia",
              "Mostoles",
              "Oviedo",
              "Palma",
              "Pamplona",
              "Sevilla",
              "Sabadell",
              "Valencia",
              "Valladolid",
              "Vigo",
              "Vitoria",
              "Zaragoza",
            ]
              .sort()
              .map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
          </select>
        </div>

        <div className="">
          <select {...register("country")} defaultValue="">
            <option value="" disabled>
              Ubicacion
            </option>
            {[
              "Alemania",
              "Argentina",
              "Armenia",
              "Australia",
              "Brasil",
              "Canadá",
              "China",
              "Colombia",
              "España",
              "Estados Unidos",
              "Francia",
              "Italia",
              "Japón",
              "México",
              "Portugal",
              "Reino Unido",
              "Rusia",
              "Sudáfrica",
              "Suecia",
              "Suiza",
              "Ucrania",
              "Venezuela",
            ]
              .sort()
              .map((country) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
          </select>
        </div>

        <div className="">
          <select {...register("availability")} defaultValue="">
            <option value="" disabled>
              Disponibilidad
            </option>
            <option value="full-time">Tiempo completo</option>
            <option value="part-time">Medio tiempo</option>
            <option value="week-end">Fines de semana</option>
            <option value="remote-time">Trabajo remoto</option>
            <option value="proyect-time">Trabajo por proyectos</option>
            <option value="flexible">Flexible</option>
          </select>
        </div>

        <div>
          <h4 className=""> Condiciones </h4>
          <select {...register("salary")} defaultValue="">
            <option value="" disabled>
              Salario anual
            </option>
            <option value="16000-20000">16000-20000€</option>
            <option value="20000-30000">20000-30000€</option>
            <option value="30000-40000">30000-40000€</option>
          </select>
        </div>

        <div className="">
          <select {...register("work-schedule")} defaultValue="">
            <option value="" disabled>
              Tipo de jornada
            </option>
            <option value="morning">Mañana</option>
            <option value="afternoon">Tarde</option>
            <option value="evening">Noche</option>
          </select>
        </div>

        <div className="">
          <select {...register("contract-type")} defaultValue="">
            <option value="" disabled>
              Tipo de contrato
            </option>
            <option value="temporary">Temporal</option>
            <option value="permanent">Permanente</option>
            <option value="freelance">Freelance</option>
            <option value="parcial-time">Contrato por tiempo parcial</option>
            <option value="formation">Contrato de formación</option>
            <option value="practice">Contrato en prácticas</option>
          </select>
        </div>
        <button onClick={handleNextClick} className="button-black">
          Continuar
        </button>
      </form>
    </div>,

    //tercera página
    <div className="">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h4 className="">Requisitos de candidato</h4>
        <div className="">
          <p className="">Descripción de requisitos</p>
          <input
            {...register("requiresDescription")}
            type="text"
            placeholder="Descripción..."
          />
        </div>
        <div className="">
          {/* <label htmlFor="questions">Añadir preguntas</label> */}
          <select {...register("questions")} defaultValue="">
            <option value="" disabled>
              Preguntas
            </option>
            <option value="question1">Pregunta 1</option>
            <option value="question2">Pregunta 2</option>
            <option value="question3">Pregunta 3</option>
            <option value="question4">Pregunta 4</option>
            <option value="question5">Pregunta 5</option>
          </select>
        </div>
        <h4 className="">Codificaciones internas</h4>
        <div className="">
          {/* <label htmlFor="keywords">Añadir palabras clave</label> */}
          <select {...register("keywords")} defaultValue="">
            <option value="" disabled>
              Palabras clave
            </option>
            <option value="keyword1">Palabra clave 1</option>
            <option value="keyword2">Palabra clave 2</option>
            <option value="keyword3">Palabra clave 3</option>
            <option value="keyword4">Palabra clave 4</option>
            <option value="keyword5">Palabra clave 5</option>
          </select>
        </div>
        <Link to={"/congrats2"}>
        <button onClick={handleCreateOffer} className="button-black">
          Crear oferta
        </button>
        </Link>
      </form>
    </div>,
  ];

  return (
    <>    
    
    <div className="">
      <h3>Descripción de la oferta</h3>
      {sheets[currentSheet]}
    </div>
  </>
  );
};
