import React from "react";
import "./Register.css";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (dataF) => {
    console.log(dataF);
  };

  return (
    <div className="register_container">
      <h3>Crear Cuenta</h3>
      <form className="register-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="register">
          <div className="register-div">
            <label className="register-label" htmlFor="nombre">
              Nombre de la empresa
            </label>
            <input
              className="register-input"
              type="text"
              id="nombre"
              placeholder="Nombre de la empresa"
              {...register("nombre", { required: true })}
            />
            {errors.nombre && (
              <span className="error-message">Campo requerido</span>
            )}
          </div>
          <div className="register-div">
            <label className="register-label" htmlFor="nif">
              NIF
            </label>
            <input
              className="register-input"
              type="text"
              id="nif"
              placeholder="G-0000000"
              {...register("nif", { required: true })}
            />
            {errors.nif && (
              <span className="error-message">Campo requerido</span>
            )}
          </div>
          <div className="register-div">
            <label className="register-label" htmlFor="email">
              Email ID
            </label>
            <input
              className="register-input"
              type="text"
              id="email"
              placeholder="Email ID"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className="error-message">Campo requerido</span>
            )}
          </div>
          <div className="register-div">
            <label className="register-label" htmlFor="contraseña">
              Contraseña
            </label>
            <input
              className="register-input"
              type="password"
              id="contraseña"
              placeholder="Contraseña"
              {...register("contraseña", { required: true })}
            />
            {errors.contraseña && (
              <span className="error-message">Campo requerido</span>
            )}
          </div>
          <div className="register-div">
            <label className="register-label" htmlFor="confirmar-contraseña">
              Confirmar Contraseña
            </label>
            <input
              className="register-input"
              type="password"
              id="confirmar-contraseña"
              placeholder="Confirmar Contraseña"
              {...register("confirmar-contraseña", { required: true })}
            />
            {errors["confirmar-contraseña"] && (
              <span className="error-message">Campo requerido</span>
            )}
          </div>
          <div className="register-div1">
            <label htmlFor="checkbox">
              Al crear una cuenta, acepta los términos y condiciones
              relacionados con meeTTalent
            </label>
            <input className="checkbox"
              type="checkbox"
              {...register("terminos", { required: true })}
            />
            {errors.terminos && (
              <span className="error-message">
                Debe aceptar los términos y condiciones
              </span>
            )}
          </div>
        </div>
      </form>
      <button className="button-black">
        <Link className="loginWhite" to={"/congrats"}>
          Continuar
        </Link>
      </button>
    </div>
  );
};

export default RegisterForm;
