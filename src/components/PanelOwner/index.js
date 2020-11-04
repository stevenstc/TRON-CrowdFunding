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

    let x = await Utils.contract.withdraw001().send(); 

    alert("Haz sacado: "+ x/1000000+" TRX");

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
