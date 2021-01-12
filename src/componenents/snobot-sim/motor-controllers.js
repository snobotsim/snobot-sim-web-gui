import "@frc-web-components/frc-web-components";
import { LitElement, html, css } from "@webbitjs/webbit";
import {containerStyles} from "@frc-web-components/frc-web-components/src/components/styles";

class SimMotors extends LitElement {


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
        <frc-sim-pwms webbit-id="frc-sim-pwms" slot="" source-provider="HALSim" source-key="PWM" from-properties="[]"></frc-sim-pwms>
        <frc-sim-ctre-motor-controllers webbit-id="snobot-sim-sim-devices-talon-srx" slot=""  from-properties="[]"></frc-sim-ctre-motor-controllers>
        <frc-sim-rev-motor-controllers webbit-id="snobot-sim-sim-devices-talon-srx" slot=""  from-properties="[]"></frc-sim-rev-motor-controllers>
    `;
    }
}

customElements.define('snobot-sim-motor-controllers', SimMotors);