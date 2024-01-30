var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./graphs/Graph"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const Graph_1 = __importDefault(require("./graphs/Graph"));
    const cities = new Graph_1.default();
    cities.addVertex('Москва');
    cities.addVertex('Санкт Петербург');
    cities.addVertex('Калининград');
    cities.addVertex('Омск');
    cities.addVertex('Новосибирск');
    cities.addVertex('Якутск');
    cities.addEdge('Санкт Петербург', 'Калининград');
    cities.addEdge('Калининград', 'Москва');
    cities.addEdge('Калининград', 'Якутск');
    cities.addEdge('Москва', 'Якутск');
    cities.addEdge('Москва', 'Омск');
    cities.addEdge('Москва', 'Новосибирск');
    cities.addEdge('Омск', 'Новосибирск');
    console.log('test');
});
