import Graph from './graphs/Graph';

const cities = new Graph();

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
