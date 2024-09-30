const fs = require('fs');

// Function to parse the JSON file and return the parsed data
function readJSON(fileName) {
  const rawData = fs.readFileSync(fileName);
  return JSON.parse(rawData);
}

// Function to decode the y values based on the base provided
function decodeYValue(base, value) {
  return parseInt(value, base);
}

// Function to calculate the constant term using Lagrange interpolation
function findConstantTerm(points, k) {
  let constant = 0;
  for (let j = 0; j < k; j++) {
    let x_j = points[j][0];
    let y_j = points[j][1];

    // Calculate the Lagrange basis polynomial
    let lj = 1;
    for (let m = 0; m < k; m++) {
      if (m !== j) {
        let x_m = points[m][0];
        lj *= (0 - x_m) / (x_j - x_m);
      }
    }

    // Sum up the contribution of each Lagrange basis polynomial
    constant += y_j * lj;
  }
  return constant;
}

// Function to check if a point lies on the polynomial
function isPointValid(points, k, x, y) {
  let calculatedY = 0;
  for (let j = 0; j < k; j++) {
    let x_j = points[j][0];
    let y_j = points[j][1];

    // Calculate the Lagrange basis polynomial
    let lj = 1;
    for (let m = 0; m < k; m++) {
      if (m !== j) {
        let x_m = points[m][0];
        lj *= (x - x_m) / (x_j - x_m);
      }
    }

    // Sum up the contribution of each Lagrange basis polynomial
    calculatedY += y_j * lj;
  }
  return Math.round(calculatedY) === y;
}

// Main function to process the test cases and find the secrets
function processTestCases(fileName) {
  const data = readJSON(fileName);
  console.log("Parsed JSON data:", data); // Debug: Print parsed data

  const keys = data.keys;
  const n = keys.n;
  const k = keys.k;

  // Read and decode points
  let points = [];
  for (let i = 1; i <= n; i++) {
    const x = i.toString(); // Use the loop index as a string key
    const pointData = data[x]; // Accessing the point data
    if (!pointData) {
      console.error(`No data found for key ${x}`); // Debug: Check if key exists
      continue; // Skip if key is not found
    }

    const base = pointData.base; // Access base
    const encodedY = pointData.value; // Access y value
    const y = decodeYValue(base, encodedY);
    points.push([parseInt(x), y]); // Push the point as [x, y]
  }

  // Calculate the constant term using the first k points
  const secret = findConstantTerm(points.slice(0, k), k); // Only use the first k points

  console.log(`Secret for the test case in file '${fileName}': ${secret}`);

  // For the second test case, find the wrong points
  if (fileName.includes('second')) {
    let wrongPoints = [];
    for (let i = 0; i < points.length; i++) {
      const x = points[i][0];
      const y = points[i][1];
      if (!isPointValid(points.slice(0, k), k, x, y)) {
        wrongPoints.push(`(${x}, ${y})`);
      }
    }

    console.log(`Wrong points for the second test case: ${wrongPoints.length > 0 ? wrongPoints.join(', ') : 'None'}`);
  }
}

// Process both test cases
processTestCases('testcase1.json');
processTestCases('testcase2.json');
