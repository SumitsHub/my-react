function findPath(src, trgt, graph) {
  const output = [];
  const FindByDFS = (node, path) => {
    path.push(node);

    // if target reached, found a path
    if (node === trgt) {
      output.push(path);
      return;
    }

    for (let edge of graph[node]) {
      FindByDFS(edge, [...path]);
    }
  };

  FindByDFS(src, []);

  return output;
}

export { findPath };
