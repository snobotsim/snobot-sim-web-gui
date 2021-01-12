import { addSourceProvider, setDefaultSourceProvider } from '@webbitjs/store';
import { LitElement, html } from 'lit-element';

class SnobotSim extends LitElement {

    constructor() {
        super();
        console.log("Starting my thing up")
    }

    firstUpdated() {
        super.firstUpdated();

        console.log("Hello world")

        addSourceProvider('HALSim', 'HALSim', {});
    }
    render() {
        return html`
      <slot></slot>
    `;
    }
}

customElements.define('snobot-sim', SnobotSim);
