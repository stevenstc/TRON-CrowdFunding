import React, { Component } from "react";
import Utils from "../../utils";
import contractAddress from "../Contract";

export default class EarnTron extends Component {
  constructor(props) {
    super(props);

    this.state = {
      totalInvestors: 0,
      totalInvested: 0,
      totalRefRewards: 0
    };

    this.totalInvestors = this.totalInvestors.bind(this);
  }

  async componentDidMount() {
    await Utils.setContract(window.tronWeb, contractAddress);
    setInterval(() => this.totalInvestors(),1000);
  };

  async totalInvestors() {

    let esto = await Utils.contract.setstate().call();
    //console.log(esto);
    this.setState({
      totalInvestors: parseInt(esto.Investors._hex),
      totalInvested: parseInt(esto.Invested._hex)/1000000,
      totalRefRewards: parseInt(esto.RefRewards._hex)/1000000

    });

  };

  render() {
    const { totalInvestors, totalInvested, totalRefRewards } = this.state;

    return (
      <div className="row counters">
            
        <div className="col-lg-4 col-12 text-center">
          <span data-toggle="counter-up">{totalInvestors}</span>
          <p>Inversores Globales</p>
        </div>

        <div className="col-lg-4 col-12 text-center">
          <span data-toggle="counter-up">{totalInvested} TRX</span>
          <p>Invertido Global</p>
        </div>

        <div className="col-lg-4 col-12 text-center">
          <span data-toggle="counter-up">{totalRefRewards} TRX</span>
          <p>Recompensas  Globales Referidos</p>
        </div>

      </div>



    );
  }
}
