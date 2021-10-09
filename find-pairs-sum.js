function findPair(tableau, somme) {
  var hasComplement = {}; // 1n
  var results = []; // 1n 2n ===> O(n)

  for (let position = 0; position < tableau.length; position++) {
    const complement = somme - tableau[position];

    if (hasComplement.hasOwnProperty(complement)) {
      // yes we found a pair
      const match = `[${complement}, ${tableau[position]}]`;
      const indexes = `[${hasComplement[complement]}, ${position}]`;

      results.push({ pair: match, positions: indexes });
    }

    hasComplement[tableau[position]] = position;
  }
  return !!results.length && results;
}

let tableau = [8, 1, 3, 6, 2, 7, 4]; // O(n)

console.log(findPair(tableau, 10)); 
