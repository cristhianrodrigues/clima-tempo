import React, { useState, useEffect, Fragment } from 'react';
import { GlobalStyles } from './styles/styles.js';
import ListaDeLugares from './components/ListaDeLugares.js';
import InfoClima from './components/InfoClima.js';
import PegarDadosPorCoordenadas from './components/PegarDadosPorCoordenadas.js';
import PegarDadosPorCidadeBuscada from './components/PegarDadosPorCidadeBuscada.js';


export default function App() {
  const [ coordenadas, setCoordenadas ] = useState({})
  const [ busca, setBusca ] = useState();
  const [ localizacao, setLocalizacao ] = useState(false);
  const [ cidadeBuscada, setCidadeBuscada ] = useState({});


  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setCoordenadas({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
      });
      setLocalizacao(true);
    });
  }, []);

  const pegarResultadoDaBusca = (apiBackEndBusca) => {
    setBusca(apiBackEndBusca);
  };

  const pegarCidadeBuscada = (cidadeDigitada) => {
      setCidadeBuscada(cidadeDigitada);
  }

  if (localizacao === false){
    return(
      <Fragment>
        <GlobalStyles />
        <PegarDadosPorCidadeBuscada
          cidadeBuscada={cidadeBuscada}
          pegarResultadoDaBusca={pegarResultadoDaBusca}
        />
        <div className="conteudoMostrado">
          <ListaDeLugares
            pegarCidadeBuscada={pegarCidadeBuscada}
          />
          <InfoClima
            dadosBusca={busca}
          />
        </div>
      </Fragment>
    );
  }else{
    return(
      <Fragment>
        <GlobalStyles />
        <PegarDadosPorCoordenadas
          coordenadas={coordenadas}
          pegarResultadoDaBusca={pegarResultadoDaBusca}
        />
        <PegarDadosPorCidadeBuscada
          cidadeBuscada={cidadeBuscada}
          pegarResultadoDaBusca={pegarResultadoDaBusca}
        />
        <div className="conteudoMostrado">
          <ListaDeLugares
            pegarCidadeBuscada={pegarCidadeBuscada}
          />
          <InfoClima 
            dadosBusca={busca}
          />
        </div>
      </Fragment>
    );
  };

};