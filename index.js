// Import lit-html functions
import { html, render } from 'lit-html';
import '@lion/input/lion-input.js';
import '@lion/button/lion-button.js';
import '@lion/form/lion-form.js';
import '@lion/fieldset/lion-fieldset.js';
import { Required, IsString, MinMaxLength, DefaultSuccess, Validator, IsNumber } from '@lion/validate';


class IngForm extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: "open"});
        const template = document.querySelector("template");
        console.log(this.getAttribute("theme"));
        const theme = this.getAttribute("theme");
        // this.shadowRoot.appendChild(template.content.cloneNode(true));
        // this.shadowRoot.innerHTML = `<h2>Hello world`;     
        
        const template2 = `
            <style>
                .label{
                    font-weight: bolder;
                }
                .dark {
                    background-color: black;
                    color: lime;
                    padding: 15px;
                }
                .light {
                    background-color: burlywood;
                    color:black;
                    padding:30px;
                }              
            </style>
            <div class=${theme}>    
                <lion-input name="fName" placeholder="Enter your first name" .validators="${[new Required({}, { getMessage: getCustomMessageName })]}">
                    <label slot="label" class="label">First Name</label>
                </lion-input>
                <lion-input label="Last Name" name="lName" placeholder="Enter your last name" .validators="${[new IsString({}, { getMessage: getCustomMessagelName }), new MinMaxLength({ min: 2, max: 10 }, { getMessage: getCustomMessagelName })]}"></lion-input>
                <lion-button>Submit</lion-button>
            </div>    
            `;

        // this.shadowRoot.appendChild(template.content.cloneNode(true));
        this.shadowRoot.innerHTML = template2;
            
        function getCustomMessageName() {
            return `This field is required!!`;
        }
        function getCustomMessagelName() {
        return `Invalid input`;
        }
        
    }

    static get observedAttributes() {
        return ["theme"]; 
    }

    attributeChangedCallback(name, oldval, newval) {
        console.table({name, oldval, newval});
    }
    connectedCallback() {
        console.log("Element added to the dom");
    }
    disconnectedCallback() {
        console.log("Element disconnected from the dom");
    }
}

window.customElements.define('ing-form', IngForm);



// const myTemplate = (name) =>
//     html`
//     <style>
//         .label{
//             font-weight: bolder;
//         }
//     </style>
//     <lion-input name="fName" placeholder="Enter your first name" .validators="${[new Required({}, { getMessage: getCustomMessageName })]}">
//         <label slot="label" class="label">First Name</label>
//     </lion-input>
//     <lion-input label="Last Name" name="lName" placeholder="Enter your last name" .validators="${[new IsString({}, { getMessage: getCustomMessagelName }), new MinMaxLength({ min: 2, max: 10 }, { getMessage: getCustomMessagelName })]}"></lion-input>
//     <lion-button>Submit</lion-button>
//     `;

// function getCustomMessageName() {
//     return `This field is required!!`;
// }
// function getCustomMessagelName() {
//     return `Invalid input`;
// }

// render(myTemplate('lit-html'), document.body);
