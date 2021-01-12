import "@frc-web-components/frc-web-components";
import { LitElement, html, css } from "@webbitjs/webbit";

import "./componenents"
import "./snobot-sim"

class MyDashboard extends LitElement {

  static get styles() {
    return css`
      frc-control-panel {
        width: 500px;
      }
    `;
  }

  render() {
    return html`
      <snobot-sim>
        <snobot-sim-motor-controllers webbit-id="frc-sim-pwms" slot="" from-properties="[]"></snobot-sim-motor-controllers>
        <frc-sim-analog-inputs webbit-id="frc-sim-analog-inputs" slot="" source-provider="HALSim" source-key="AI" from-properties="[]"></frc-sim-analog-inputs>
        <frc-sim-analog-outputs webbit-id="frc-sim-analog-outputs" slot="" source-provider="HALSim" source-key="AO" from-properties="[]"></frc-sim-analog-outputs>
        <frc-sim-dios webbit-id="frc-sim-dios" slot="" source-provider="HALSim" source-key="DIO" from-properties="[]"></frc-sim-dios>
        <frc-sim-relays webbit-id="frc-sim-relays" slot="" source-provider="HALSim" source-key="Relay" from-properties="[]"></frc-sim-relays>
        
        <snobot-sim-encoders webbit-id="frc-sim-encoders" slot="" from-properties="[]"></snobot-sim-encoders>
        <frc-sim-solenoids webbit-id="frc-sim-encoders" slot="" from-properties="[]"></frc-sim-solenoids>
        <frc-sim-gyros webbit-id="frc-sim-encoders" slot="" from-properties="[]"></frc-sim-gyros>
        <frc-sim-accelerometers webbit-id="frc-sim-encoders" slot="" from-properties="[]"></frc-sim-accelerometers>
        
<!--        <snobot-sim-encoders webbit-id="frc-sim-encoders" slot="" source-provider="HALSim" source-key="Encoder" from-properties="[]"></snobot-sim-encoders><br/>-->
<!--        <sim-device-gyros webbit-id="snobot-sim-sim-devices-adxrs450" slot=""  source-provider="HALSim" source-key="SimDevices" from-properties="[]"></sim-device-gyros>-->
<!--        <sim-device-accelerometers webbit-id="snobot-sim-sim-devices-accelerometers" slot=""  source-provider="HALSim" source-key="SimDevices" from-properties="[]"></sim-device-accelerometers><br/>-->
      </snobot-sim>
    `;
  }
}

customElements.define('my-dashboard', MyDashboard);