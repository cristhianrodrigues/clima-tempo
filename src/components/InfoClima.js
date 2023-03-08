import { useEffect, useState } from "react";

export default function InfoClima({dadosBusca}){

    if( dadosBusca === undefined ){
        return(
            <div className="infoClima">
              <div className="infoClimaContainer">    
                <div className="infosPrincipais">
                    <h1 className="cidade"></h1>
                    <div className="clima">
                        <h2 className="temperatura"> °C</h2>
                        <h2 className="tempo"></h2>
                    </div>
                </div>
                <div className="outrasInfo">
                    <div className="sensacaoTermica">
                        <h2 className="outrasInfoDado"> °C</h2>
                        <h2 className="descricao">Sensação</h2>
                    </div>
                    <div className="umidadeRelativaDoAr">
                        <h2 className="outrasInfoDado"> %</h2>
                        <h2 className="descricao">Umidade</h2>
                    </div>
                    <div className="vento">
                        <h2 className="outrasInfoDado"> KM/H</h2>
                        <h2 className="descricao">Vento</h2>
                    </div>
                </div>
              </div>
            </div>
        );
    }else{
        return(
            <div className="infoClima">
              <div className="infoClimaContainer">    
                <div className="infosPrincipais">
                    <h1 className="cidade">{dadosBusca.cidade}</h1>
                    <div className="clima">
                        <h2 className="temperatura">{dadosBusca.temperatura} °C</h2>
                        <h2 className="tempo">{dadosBusca.tempo}</h2>
                    </div>
                </div>
                <div className="outrasInfo">
                    <div className="sensacaoTermica">
                        <h2 className="outrasInfoDado">{dadosBusca.sensacaoTermica} °C</h2>
                        <h2 className="descricao">Sensação</h2>
                    </div>
                    <div className="umidadeRelativaDoAr">
                        <h2 className="outrasInfoDado">{dadosBusca.umidade} %</h2>
                        <h2 className="descricao">Umidade</h2>
                    </div>
                    <div className="vento">
                        <h2 className="outrasInfoDado">{dadosBusca.vento} KM/H</h2>
                        <h2 className="descricao">Vento</h2>
                    </div>
                </div>
              </div>
            </div>
        );
    };
};