import "@frc-web-components/frc-web-components";
import { LitElement, html, css } from "@webbitjs/webbit";
import {containerStyles} from "@frc-web-components/frc-web-components/src/components/styles";

class SimEncoders extends LitElement {

    static get styles() {
        return [
            containerStyles,
            css`
        :host {
          display: inline-block;
          height: auto;
          width: 200px;
          font-family: sans-serif;
        }

        p {
          margin: 0;
          font-size: 14px;
        }
      `
        ];
    }

    render() {
        return html`
        <frc-sim-encoders webbit-id="frc-sim-encoders" slot="" source-provider="HALSim" source-key="Encoder" from-properties="[]"></frc-sim-encoders>
        <frc-sim-ctre-encoders webbit-id="snobot-sim-sim-devices-encoders" slot="" from-properties="[]"></frc-sim-ctre-encoders>
        <frc-sim-rev-encoders webbit-id="snobot-sim-sim-devices-encoders" slot="" from-properties="[]"></frc-sim-rev-encoders>
    `;
    }
}

customElements.define('snobot-sim-encoders', SimEncoders);