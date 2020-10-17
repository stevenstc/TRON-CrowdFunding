import React, { Component } from "react";
import Utils from "../../utils";
import "./ECommerce.scss";
//import TronLinkInfo from "../TronLinkInfo";

/// La direccion de su contrato acá ///////////////////////////////////
const contractAddress = "TE2Yndwa6HBeqoPscrYfyZnV3gQEdhRLeq";
// base85v = "TE2Yndwa6HBeqoPscrYfyZnV3gQEdhRLeq"
///////////////////////////////////////////////////////////////////////

export default class MensajeContract extends Component {
  constructor(props) {
    super(props);

    this.state = {
      allMs: []
    };

    this.addMs = this.addMs.bind(this);
    this.getMsMensaje = this.getMsMensaje.bind(this);
    this.adress = this.adress.bind(this);
  }

  async componentDidMount() {
    await Utils.setContract(window.tronWeb, contractAddress);
  };

  adress(valor){
    document.getElementById('direccion').value = valor;
    document.getElementById('mensaje').focus();
  };

  async getMsMensaje() {
    const { allMs } = this.state;

    let ms = await Utils.contract.getMsMensaje(0).call();
    let totalMs = parseInt(ms[1]._hex);
    let i = 0;

    allMs.splice(0);

    while (i <= totalMs) {
      let ms2 = await Utils.contract.getMsMensaje(i).call();
      let account = await window.tronWeb.trx.getAccount();
      let accountAddress = account.address;
      accountAddress = window.tronWeb.address.fromHex(accountAddress);

       if (ms2[0] !== "nada por aqui") {
        if (window.tronWeb.address.fromHex(ms2[2]) === accountAddress) {
            let notif = (
              <div className="alert alert-primary" role="alert">
                <div className="mb-2 text-muted">Para: <span><button type="button" className="btn btn-light" onClick={() => this.adress(window.tronWeb.address.fromHex(ms2[3]))}>{window.tronWeb.address.fromHex(ms2[3])}</button></span></div>
                <hr></hr>
                <div className="font-weight-bold">{ms2[0]}</div>
              </div>
            );
            allMs.splice(0,0,notif);
          }else{
            let notif = (
              <div className="alert alert-secondary" role="alert">
                <div className="mb-2 text-muted">Responder: <span><button type="button" className="btn btn-success" onClick={() => this.adress(window.tronWeb.address.fromHex(ms2[2]))}>{window.tronWeb.address.fromHex(ms2[2])}</button></span></div>
                <hr></hr>
                <div className="font-weight-bold">{ms2[0]}</div>
              </div>
            );
            allMs.splice(0,0,notif);
          }
          
         }
      
      i++;
    }    
  };


  async addMs() {
    const { allMs } = this.state;

    let mensaje = document.getElementById("mensaje").value;
    let destinatario = document.getElementById("direccion").value;
    let notif = (
            <div className="alert alert alert-success" role="alert">
              <div className="mb-2 text-muted">Para: {destinatario}</div>
              <hr></hr>
              <div className="font-weight-bold">{mensaje}</div>
            </div>
          );
    allMs.splice(0,0,notif);
    document.getElementById("mensaje").value = "";
    document.getElementById("direccion").value = "";
    return Utils.contract.addMs(mensaje, destinatario).send();
    
  };

  render() {
    const { allMs } = this.state;
    return (
      
      <div className="eCommerce-component-container">
        
        <form action="" className="alert alert-success">
          <div className="form-group">
            <label for="exampleFormControlTextarea1">Dirección</label>
            <textarea className="form-control" id="direccion" rows="1" placeholder="TB7.......r4XvF"></textarea>
          </div>
          <div className="form-group">
            <label for="exampleFormControlTextarea2">Escribe tu mensaje</label>
            <textarea className="form-control" id="mensaje" rows="3" placeholder="Escribe tu mensaje"></textarea>
          </div>
          <div className="form-group">
            <button className="btn btn-success" type="button" onClick={() => this.addMs()}>Enviar</button>
             Costo aproximado: 106420 Energía + 412 Ancho de Banda
          </div>
        </form>

        <div className="eCommerce-item-container">
          <button className="btn btn-primary" onClick={() => this.getMsMensaje()}>Ver mis Mensajes</button>
          <hr></hr>
        </div>
        <div className="eCommerce-item-container">{allMs}</div>

      </div> 

    );
  }
}

