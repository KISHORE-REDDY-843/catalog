# Catalog Placements Assignment

## Overview

This project implements a simplified version of Shamir's Secret Sharing algorithm, which allows for secret sharing using polynomial interpolation. The goal of this assignment is to decode given roots of a polynomial and compute its constant term, as well as identify any incorrect points.

## Features

- Reads input data in JSON format.
- Decodes y-values based on various number bases.
- Calculates the constant term of the polynomial using Lagrange interpolation.
- Identifies wrong points (imposter points) that do not lie on the polynomial curve.

## Requirements

- Node.js (version 12 or later)
- A compatible text editor or IDE (e.g., Visual Studio Code, Atom)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/catalog-placements-assignment.git
   cd catalog-placements-assignment
Usage
Place your JSON test cases in the project directory. Example JSON files are provided as testcase1.json and testcase2.json.

Run the script:
node script.js
View the output in the console, which will display the calculated secret and any wrong points for the second test case.
Sample Input
Test Case 1
{
    "keys": {
        "n": 4,
        "k": 3
    },
    "1": {
        "base": "10",
        "value": "4"
    },
    "2": {
        "base": "2",
        "value": "111"
    },
    "3": {
        "base": "10",
        "value": "12"
    },
    "4": {
        "base": "4",
        "value": "213"
    }
}
Test Case 2
{
    "keys": {
        "n": 9,
        "k": 6
    },
    "1": {
        "base": "10",
        "value": "28735619723837"
    },
    "2": {
        "base": "16",
        "value": "1A228867F0CA"
    },
    "3": {
        "base": "12",
        "value": "32811A4AA0B7B"
    },
    "4": {
        "base": "11",
        "value": "917978721331A"
    },
    "5": {
        "base": "16",
        "value": "1A22886782E1"
    },
    "6": {
        "base": "10",
        "value": "28735619654702"
    },
    "7": {
        "base": "14",
        "value": "71AB5070CC4B"
    },
    "8": {
        "base": "9",
        "value": "122662581541670"
    },
    "9": {
        "base": "8",
        "value": "642121030037605"
    }
}
License
This project is licensed under the MIT License - see the LICENSE file for details.

Acknowledgments
Inspired by Shamir's Secret Sharing algorithm.
Thanks

### Steps to Add the README to Your GitHub Repository

1. **Create a README File**: In your project directory, create a file named `README.md`.

2. **Copy the Template**: Copy the above Markdown content into the `README.md` file.

3. **Customize the README**: Replace placeholders like `yourusername` with your actual GitHub username, and add any relevant acknowledgments or additional information.

4. **Commit and Push**: After saving the changes, commit the README to your GitHub repository:
   ```bash
   git add README.md
   git commit -m "Add README file"
   git push origin main

