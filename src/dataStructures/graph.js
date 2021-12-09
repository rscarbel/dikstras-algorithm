  /*
  new node

  graph.nodes {
    A: [ {node: A, weight: 0}, {node: B, weight, 1} ]
    B: [ {node: B, weight: 0}, {node: A, weight, 1}, {node: C, weight: 1} ]
    C: [ {node: C, weight: 0}, {node: B, weight, 1} ]
  }

    graph.nodes {
      A: {A: 0, B: 1}
      B: {B: 0, A: 1, C: 1}
      C: {C: 0, B: 1}
    }

  A: {A: 0, B: 1}

  graph.addNode(name, [])
  */

class Graph {
  constructor (node){
    this.nodes = {};
    this.nodes[node] = {};
    this.nodes[node][node] = 0;
  }

  addNode(node) {
    this.nodes[node] = {}
    this.nodes[node][node] = 0;
  }

  addConnection(node, connection, weight, bidirectional = true) {
    this.nodes[node][connection] = weight;
    if (bidirectional) {
      this.nodes[connection][node] = weight;
    };
  };
};

export default Graph;