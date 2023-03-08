import { useState, useEffect } from "react";
import apiBackEnd from "../api/apiBackEnd";

export default function PegarDadosPorCidadeBuscada({cidadeBuscada, pegarResultadoDaBusca}){

    const [ resultadoDaBusca, setResultadoDaBusca ] = useState();

    useEffect(() => {
        if( cidadeBuscada !== Object){
            apiBackEnd.get(`/buscar-dados-por-cidade/${cidadeBuscada}`)
            .then(response => {
                setResultadoDaBusca( response.data.resultadoDaBusca );
            })
            .catch("error");
        } else {
            return(null);
        }
        
    }, [cidadeBuscada]);

    if(resultadoDaBusca !== undefined){
        return(pegarResultadoDaBusca(resultadoDaBusca));
    }else{
        return(null);
    };

};


