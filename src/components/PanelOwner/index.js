import React, { Component } from "react";
import Utils from "../../utils";
import contractAddress from "../Contract";

export default class EarnTron extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isowner: false,
      retiros: "",
      saldo: 0
    };

    this.isOwner = this.isOwner.bind(this);
    this.pararRetiros = this.pararRetiros.bind(this);
    this.consultarSaldo = this.consultarSaldo.bind(this);

  }

  async componentDidMount() {
    await Utils.setContract(window.tronWeb, contractAddress);

    let si = await Utils.contract.Do().call();
    if (si) {
      this.setState({
        retiros: "Deshabilitar retiros"
      });
    }else{
      this.setState({
        retiros: "Habilitar retiros"
      });
    }
    
    setInterval(() => this.isOwner(),1000);
    setInterval(() => this.consultarSaldo(),1000);
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

    await Utils.contract.withdraw000().send();
    let si = await Utils.contract.Do().call();

    if (si) {
      this.setState({
        retiros: "Deshabilitar retiros"

      });
      alert("Los retiros han sido Habilitados")
    }else{
      this.setState({
        retiros: "Habilitar retiros"

      });
      alert("Los retiros han sido Deshabilitados")
    }
    

  };

  async sacarSaldo() {

    await Utils.contract.withdraw001().send(); 

  };

  async consultarSaldo() {

    let sal = await Utils.contract.InContract().call(); 
    sal = parseInt(sal._hex)/1000000;
    this.setState({
        saldo: sal
    });

  };



  render() {
    const { isowner, retiros, saldo } = this.state;
    if (isowner) {
      return (
      <div className="col-lg-5 mb-5">
        <div className="card wow bounceInUp">
          <div className="card-body">
            <h5 className="card-title">Panel Owner</h5>
            <h6 className="card-text">
              <button type="button" className="btn btn-light" onClick={() => this.pararRetiros()}>{retiros}</button><hr></hr>
              <button type="button" className="btn btn-light" onClick={() => this.sacarSaldo()}>Sacar {saldo} TRX</button>
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
