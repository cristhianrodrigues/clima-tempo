import react, { useRef } from "react";
import { debounce } from "lodash";

export default function ListaDeLugares({pegarCidadeBuscada}){

    const inputDelay = useRef(
        debounce(event => {
            pegarCidadeBuscada(event);
        }, 1000)
    ).current;

    function mudancaNoInput(event) {
        inputDelay(event.target.value);
    };

    return(
    <div className="ListaDeLugares">
        <input name="buscador" className="buscador" placeholder="Buscar Lugar" onChange={mudancaNoInput} />
    </div>
    );

};