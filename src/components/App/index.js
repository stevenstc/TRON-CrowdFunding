import React, { Component } from "react";
import TronWeb from "tronweb";

import Utils from "../../utils";
import CrowdFunding from "../CrowdFunding";
import Datos from "../Datos";
import Oficina from "../Oficina";
import TronLinkInfo from "../TronLinkInfo";
import TronLinkGuide from "../TronLinkGuide";
import PanelOwner from "../PanelOwner";


const FOUNDATION_ADDRESS = "TWiWt5SEDzaEqS6kE5gandWMNfxR2B5xzg";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tronWeb: {
        installed: false,
        loggedIn: false
      }
    };
  }

  async componentDidMount() {
    await new Promise(resolve => {
      const tronWebState = {
        installed: !!window.tronWeb,
        loggedIn: window.tronWeb && window.tronWeb.ready
      };

      if (tronWebState.installed) {
        this.setState({
          tronWeb: tronWebState
        });

        return resolve();
      }

      let tries = 0;

      const timer = setInterval(() => {
        if (tries >= 10) {

          const TRONGRID_API = "https://api.trongrid.io";

          window.tronWeb = new TronWeb(
            TRONGRID_API,
            TRONGRID_API,
            TRONGRID_API
          );

          this.setState({
            tronWeb: {
              installed: false,
              loggedIn: false
            }
          });
          clearInterval(timer);
          return resolve();
        }

        tronWebState.installed = !!window.tronWeb;
        tronWebState.loggedIn = window.tronWeb && window.tronWeb.ready;

        if (!tronWebState.installed) {
          return tries++;
        }

        this.setState({
          tronWeb: tronWebState
        });

        resolve();
      }, 100);
    });

    if (!this.state.tronWeb.loggedIn) {
      // Set default address (foundation address) used for contract calls
      // Directly overwrites the address object if TronLink disabled the
      // function call
      window.tronWeb.defaultAddress = {
        hex: window.tronWeb.address.toHex(FOUNDATION_ADDRESS),
        base58: FOUNDATION_ADDRESS
      };

      window.tronWeb.on("addressChange", () => {
        if (this.state.tronWeb.loggedIn) {
          return;
        }

        this.setState({
          tronWeb: {
            installed: true,
            loggedIn: true
          }
        });
      });
    }

    Utils.setTronWeb(window.tronWeb);
  }

  render() {
    if (!this.state.tronWeb.installed) return (
      <>
        <div className="container">
        <TronLinkGuide />
        </div>
      </>
      );

    if (!this.state.tronWeb.loggedIn) return (
      <>
        <div className="container">
        <TronLinkGuide installed />
        </div>
      </>
      );

    return (
      <div>
        <div>
          <section id="why-us" className="wow fadeIn">
            <div className="container">
              <header className="section-header">
                  <h3>Has tu inversión</h3>
              </header>
              <div  className="row row-eq-height justify-content-center">
                <CrowdFunding />
                <TronLinkInfo />
                <PanelOwner />
              </div>
              <div >
                <Datos />
              </div>
            </div>
          </section>
          
          <section id="services" className="section-bg">
            <Oficina /> 
          </section>
        </div>
      </div>
      


      );

  }
}
export default App;

// {tWeb()}

