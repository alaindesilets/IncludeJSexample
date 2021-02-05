import { LowLevelComponent } from "./LowLevelComponent.js";

class HighLevelComponent {
    constructor() {}

    hello() {
        console.log("Hello from **HIGH** level component");
    }

    helloLow() {
        new LowLevelComponent().hello();
    }
}


export {HighLevelComponent};