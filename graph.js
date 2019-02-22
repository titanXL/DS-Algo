class Graph{
    constructor(){
        this.adjacencyList = {};
    }
    addVertex(vertex){
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }
    addEdge(v1,v2){
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1);
    }
    removeEdge(vertex1,vertex2){
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
            v => v !== vertex2
        );
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
            v => v !== vertex1
        );
    }
    removeVertex(vertex){
        while(this.adjacencyList[vertex].length){
            const adjacentVertex = this.adjacencyList[vertex].pop();
            this.removeEdge(vertex, adjacentVertex);
        }
        delete this.adjacencyList[vertex]
    }
    depthFirstRecursive(start){
      const results = []
      const visited = {}
      const adjacencyList = this.adjacencyList

      function dfs(vertex) {
        if(!vertex) {
            return null
        }
        visited[vertex] = true
        results.push(vertex)
        adjacencyList[vertex].forEach(neighour => {
            if(!visited[neighour]) {
                return dfs(neighour)
            }
        })
      }
      dfs(start)
      return results
    }
    depthFirstIterative(start) {
        const result = []
        const visited = {}
        let stack = [start]

        while(stack.length) {
            const vertex = stack.pop()
            if(!visited[vertex]) {
                visited[vertex] = true
                result.push(vertex)
                stack= stack.concat(this.adjacencyList[vertex])
            }
        }
        return result
    }
    breadthFirstSearch(start) {
        const queue = [start]
        const result = []
        const visited = {}
        visited[start] = true
        let vertex
        while(queue.length) {
            vertex = queue.shift()
            result.push(vertex)
            this.adjacencyList[vertex].forEach(neighour => {
                if(!visited[neighour]) {
                    visited[neighour] = true
                    queue.push(neighour)
                }
            })
        }
        return result
    }
}



let g = new Graph();

g.addVertex("A")
g.addVertex("B")
g.addVertex("C")
g.addVertex("D")
g.addVertex("E")
g.addVertex("F")


g.addEdge("A", "B")
g.addEdge("A", "C")
g.addEdge("B","D")
g.addEdge("C","E")
g.addEdge("D","E")
g.addEdge("D","F")
g.addEdge("E","F")
console.log(g.breadthFirstSearch("A"))

//          A
//        /   \
//       B     C
//       |     |
//       D --- E
//        \   /
//          F

