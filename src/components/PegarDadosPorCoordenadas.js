import { useState, useEffect } from "react";
import apiBackEnd from "../api/apiBackEnd";

export default function PegarDadosPorCoordenadas({coordenadas, pegarResultadoDaBusca}){

    const [ resultadoDaBusca, setResultadoDaBusca ] = useState();
    
    useEffect(() => {
        if( coordenadas.latitude !== undefined && coordenadas.longitude !== undefined ) {
            apiBackEnd.get(`buscar-dados-por-coordenadas/lat=${coordenadas.latitude}&lon=${coordenadas.longitude}`)
            .then(response => {
                setResultadoDaBusca( response.data.resultadoDaBusca );
            })
            .catch("error");
        } else {
            return(null);
        }
    }, [coordenadas]);

    if( resultadoDaBusca !== undefined ){
        return(pegarResultadoDaBusca(resultadoDaBusca));
    } else {
        return(null);
    }
    
}
