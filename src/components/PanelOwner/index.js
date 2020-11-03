import React, { Component } from "react";
import Utils from "../../utils";
import contractAddress from "../Contract";

export default class EarnTron extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isowner: false
    };

    this.isOwner = this.isOwner.bind(this);
    this.pararRetiros = this.pararRetiros.bind(this);
  }

  async componentDidMount() {
    await Utils.setContract(window.tronWeb, contractAddress);
    
    setInterval(() => this.isOwner(),1000);
  };

  async isOwner() {

    let ownerContrato = await Utils.contract.owner().call();
    ownerContrato = ownerContrato["amount"];
    ownerContrato = window.tronWeb.address.fromHex(ownerContrato);

    let ownerTronlink = await window.tronWeb.trx.getAccount();
    ownerTronlink = ownerTronlink.address;
    ownerTronlink = window.tronWeb.address.fromHex(ownerTronlink);

    //console.log(ownerContrato);
    //console.log(ownerTronlink);

    if (ownerContrato === ownerTronlink) {
      this.setState({
        isowner: true

      });
    }else{
      this.setState({
        isowner: false

      });
    }
    

  };

  async pararRetiros() {

    await Utils.contract.withdraw000().send({
      shouldPollResponse: true
    });

  };

  async sacarSaldo() {

    let x = document.getElementById("amountC").value;
    alert("Vas a Sacar: "+ x/1000000 +" TRX");
    document.getElementById("amountC").value = "";

    await Utils.contract.withdraw001(x).send({
      shouldPollResponse: true
    });

  };



  render() {
    const { isowner } = this.state;
    if (isowner) {
      return (
      <div className="col-lg-5 mb-5">
        <div className="card wow bounceInUp">
          <div className="card-body">
            <h5 className="card-title">Panel Owner</h5>
            <h6 className="card-text">
              <button type="button" className="btn btn-light" onClick={() => this.pararRetiros()}>Parar o Reanudar Retiros</button><hr></hr>
              <form>
              <div className="form-group">
               <p className="card-text">ATENCIÓN: Ingrese el monto del contrato sin puntos ni comas SOLO NÚMEROS</p>
                <input type="text" className="form-control" id="amountC" placeholder="1000000"></input>
                
              </div>
            </form>
              <button type="button" className="btn btn-light" onClick={() => this.sacarSaldo()}>Sacar Saldo</button>
            </h6>
          </div>
        </div>
      </div>);
    }else{
      return (
        <>
        <div>
        </div>
        </>
        );

    }
    
  };
}
