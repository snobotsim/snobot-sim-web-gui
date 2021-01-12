import { Webbit, html, css } from '@webbitjs/webbit';
import { containerStyles } from '@frc-web-components/frc-web-components/src/components/styles';



export default class CtreEncoder extends Webbit {

    static get metadata() {
        return {
            displayName: 'CTRE Encoder',
            category: 'Simulation',
            slots: [],
            resizable: { },
        };
    }

    static get properties() {
        return {
            position: { type: Number },
            velocity: { type: Number },

            positive: { type: Boolean },
        };
    }

    static get styles() {
        return [
            containerStyles,
            css`
        :host {
          user-select: none;
          display: inline-block;
          height: auto;
          width: 150px;
          font-family: sans-serif;
        }

              frc-number-field {
                width: 100%;
                height: 100%;
                min-width: 50px;
                padding: 0;
              }
      `
        ];
    }

    constructor() {
        super();
        this.position = 0;
        this.velocity = 0;
        this.positive = false;
    }

    updated(changedProps) {
        super.updated(changedProps);
        if (changedProps.has('velocity')) {
            this.positive = this.velocity >= 0;
        }
    }

    render() {
        return html`
            <frc-number-field
                    part="input"
                    type="text"
                    .value="${this.position.toFixed(4)}"
            />
    `;
    }
}

webbitRegistry.define('frc-sim-ctre-encoder', CtreEncoder);