import { JSONValue } from '../types';

type VertexValue = JSONValue;
type TraversalItem = {
  current: Vertex;
  visited: VertexValue[];
};

/**
 * Храним:
 * - список смежных вершин
 * Методы
 * - Добавить вершину
 * - Проверить другую вершину на смежность
 */

class Vertex {
  constructor(
    public value: VertexValue,
    public adjacentVertices: Vertex[] = [],
  ) {}

  private getAdjacentVertex(value: VertexValue) {
    return this.adjacentVertices.find((_) => _.value === value);
  }

  addLink(v: Vertex) {
    if (!this.getAdjacentVertex(v.value)) {
      this.adjacentVertices.push(v);
      v.addLink(this);
    }
  }
  isLinked(vertex: Vertex) {
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
export default class Graph {
  public vertices: Vertex[] = [];

  getVertex(value: VertexValue) {
    return this.vertices.find((_) => _.value === value);
  }

  addVertex(value: VertexValue) {
    if (!this.getVertex(value)) {
      this.vertices.push(new Vertex(value));
    }
  }

  addEdge(value1: VertexValue, value2: VertexValue) {
    const vertex1 = this.getVertex(value1);
    const vertex2 = this.getVertex(value2);

    if (vertex1 && vertex2) {
      vertex1.addLink(vertex2);
    }
  }

  findInDepth(
    startValue: VertexValue,
    endValue: VertexValue,
    getMethod: () => TraversalItem,
  ) {
    const start = this.getVertex(startValue);
    if (!start) return [];
    const results = [];
    const vertices: TraversalItem[] = [{ current: start, visited: [] }];

    while (vertices.length > 0) {
      const top = getMethod.call(vertices);
      const current = top!.current;
      const visited = [...top!.visited, current.value];

      if (current.value === endValue) {
        const res = visited.join('-');
        results.push(res);
      } else {
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
