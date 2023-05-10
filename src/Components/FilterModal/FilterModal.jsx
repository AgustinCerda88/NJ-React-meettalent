import React, { useContext} from "react";
import Modal from "react-modal";
import ReactModal from 'react-modal';
import "./FilterModal.css";
import { SearchContext } from "../../App";

Modal.setAppElement("#root");

export const FilterModal = ({ isOpen, closeModal }) => {

    const [filtros, setFiltros] = useContext(SearchContext);

    const handleInputChange = event => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        if (name === 'keywords') {
            const keywords = filtros.keywords.slice(); // make a copy of the array
            if (value) {
                keywords.push(target.value);
            } else {
                const index = keywords.indexOf(target.value);
                if (index !== -1) {
                    keywords.splice(index, 1);
                }
            }
            setFiltros({
                ...filtros,
                [name]: keywords
            });
        } else {
            setFiltros({
                ...filtros,
                [name]: value
            });
        }
    };

    const handleSubmit = event => {
        event.preventDefault();
        // hacer algo con los filtros seleccionados, por ejemplo:
        console.log("estos son los filtros", filtros);
    };

    return (
        <ReactModal className='position' isOpen={isOpen}>
            <div className='modal'>
                <div className='modal-header'>
                    <h4>FILTROS</h4>
                    <button onClick={closeModal} className=''>Cerrar</button>
                </div>
                <form onSubmit={handleSubmit}>
                    <select name="location" value={filtros.location} onChange={handleInputChange}>
                        <option value="" disabled>Pais</option>
                        <option value="" disabled>Pais</option>
                        {([
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
                        ])
                            .sort()
                            .map((country) => (
                                <option key={country} value={country}>
                                    {country}
                                </option>
                            ))}
                    </select>

                    <select name="city" value={filtros.city} onChange={handleInputChange}>
                        <option value="" disabled>Ciudad</option>
                        {([
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
                        ])
                            .sort()
                            .map((city) => (
                                <option key={city} value={city}>
                                    {city}
                                </option>
                            ))}
                    </select>

                    <select name="availability" value={filtros.availability} onChange={handleInputChange}>
                        <option value="" disabled>Disponibilidad</option>
                        <option value="full-time">Tiempo completo</option>
                        <option value="part-time">Medio tiempo</option>
                        <option value="week-end">Fines de semana</option>
                        <option value="remote-time">Trabajo remoto</option>
                        <option value="proyect-time">Trabajo por proyectos</option>
                        <option value="flexible">Flexible</option>
                    </select>

                    <select name="salary" value={filtros.salary} onChange={handleInputChange}>
                        <option value="" disabled>Salario anual</option>
                        <option value="" disabled>Salario anual</option>
                        <option value="16000-20000">16000-20000€</option>
                        <option value="20000-30000">20000-30000€</option>
                        <option value="30000-40000">30000-40000€</option>
                    </select>

                    <select name="scheduleType" value={filtros.scheduleType} onChange={handleInputChange}>
                        <option value="" disabled>Tipo de jornada</option>
                        <option value="" disabled>Tipo de jornada</option>
                        <option value="morning">Mañana</option>
                        <option value="afternoon">Tarde</option>
                        <option value="evening">Noche</option>
                    </select>
 <div className="keyword-checkboxes">
                    <label>
                        <input type="checkbox" name="keywords" value="Developer" onChange={handleInputChange} />
                        Developer
                    </label>
                    <label>
                        <input type="checkbox" name="keywords" value="Javascript" onChange={handleInputChange} />
                        Javascript
                    </label>
                    <label>
                        <input type="checkbox" name="keywords" value="Liderazgo" onChange={handleInputChange} />
                        Liderazgo
                    </label>
                    <label>
                        <input type="checkbox" name="keywords" value="Oratoria" onChange={handleInputChange} />
                        Oratoria
                    </label>
                    <label>
                        <input type="checkbox" name="keywords" value="Creatividad" onChange={handleInputChange} />
                        Creatividad
                    </label>
                    <label>
                        <input type="checkbox" name="keywords" value="UX/UI" onChange={handleInputChange} />
                        UX/UI
                    </label>
                    <label>
                        <input type="checkbox" name="keywords" value="Diseño" onChange={handleInputChange} />
                        Diseño
                    </label>
</div>
                    <button type="submit" className="filter-button">Filtrar</button>
                </form>
            </div>
        </ReactModal>
    )
}
