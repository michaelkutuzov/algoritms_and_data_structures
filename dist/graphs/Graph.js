(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * Храним:
     * - список смежных вершин
     * Методы
     * - Добавить вершину
     * - Проверить другую вершину на смежность
     */
    class Vertex {
        constructor(value, adjacentVertices = []) {
            this.value = value;
            this.adjacentVertices = adjacentVertices;
        }
        getAdjacentVertex(value) {
            return this.adjacentVertices.find((_) => _.value === value);
        }
        addLink(v) {
            if (!this.getAdjacentVertex(v.value)) {
                this.adjacentVertices.push(v);
                v.addLink(this);
            }
        }
        isLinked(vertex) {
            return Boolean(this.getAdjacentVertex(vertex.value));
        }
    }
    /**
     * Храним
     * - список вершин
     * Методы
     * - Добавить вершину
     * - Добавить ребро
     * - Получить вершину
     * - итеративный поиск в глубину
     * - итеративный поиск в ширину
     */
    class Graph {
        constructor() {
            this.vertices = [];
        }
        getVertex(value) {
            return this.vertices.find((_) => _.value === value);
        }
        addVertex(value) {
            if (!this.getVertex(value)) {
                this.vertices.push(new Vertex(value));
            }
        }
        addEdge(value1, value2) {
            const vertex1 = this.getVertex(value1);
            const vertex2 = this.getVertex(value2);
            if (vertex1 && vertex2) {
                vertex1.addLink(vertex2);
            }
        }
        findInDepth(startValue, endValue, getMethod) {
            const start = this.getVertex(startValue);
            if (!start)
                return [];
            const results = [];
            const vertices = [{ current: start, visited: [] }];
            while (vertices.length > 0) {
                const top = getMethod.call(vertices);
                const current = top.current;
                const visited = [...top.visited, current.value];
                if (current.value === endValue) {
                    const res = visited.join('-');
                    results.push(res);
                }
                else {
                    current.adjacentVertices.forEach((next) => {
                        if (!visited.includes(next.value)) {
                            vertices.push({ current: next, visited });
                        }
                    });
                }
            }
            return results;
        }
    }
    exports.default = Graph;
});
