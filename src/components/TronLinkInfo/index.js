import React, { Component } from "react";

export default class TronLinkInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      accountAddress: "Billetera NO conectada",
      accountBalance: "Billetera NO conectada",
      accountBandwidth: "Billetera NO conectada"
    };
  };

  
  componentDidMount() {
    setInterval(() => this.fetchAccountAddress(),1000);
    setInterval(() => this.fetchAccountBalance(),1000);
    setInterval(() => this.fetchAccountBandwidth(),1000);
  };


  async fetchAccountAddress() {
    const account =  await window.tronWeb.trx.getAccount();
    const accountAddress = account.address;
    const accountAddressInBase58 = window.tronWeb.address.fromHex(
      accountAddress
    );

    this.setState({
      accountAddress: accountAddressInBase58
    });
  };

  async fetchAccountBalance() {
    const balanceInSun = await window.tronWeb.trx.getBalance(); //number
    const balanceInTRX = window.tronWeb.fromSun(balanceInSun); //string
    //const changeBackToSun = window.tronWeb.toSun(balanceInTRX); //string

    this.setState({
      //accountBalance: balanceInSun // Muestra el balance en SUN
      accountBalance: balanceInTRX
    });
  };
  //
  // // La funcion aqui abajo muestra el ancho de banda como un numero
  async fetchAccountBandwidth() {
    const accountBandwidth = await window.tronWeb.trx.getBandwidth(); // number

    this.setState({
      accountBandwidth: accountBandwidth
    });
  };


  render() {
    const { accountAddress, accountBalance, accountBandwidth} = this.state;
    return (
      <div className="col-lg-5 mb-5">
        <div className="card wow bounceInUp">
            <i className="fa fa-address-card-o"></i>
          <div className="card-body">
            <h5 className="card-title">Billetera Conectada</h5>
            <h6 className="card-text">
              Dirección:<br></br>
               <strong><span>{accountAddress}</span></strong><br></br><br></br>
              Balance:<br></br>
               <strong><span>{accountBalance} TRX</span></strong><br></br><br></br>
              Bandwidth:<br></br>
               <strong><span>{accountBandwidth}</span></strong><br></br>
              
            </h6>
          </div>
        </div>
      </div>
    );
  };
}
