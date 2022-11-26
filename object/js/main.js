/* Accessing Nested Objects */
const myStorage = {
  "car": {
    "inside": {
      "globe box": "maps",
      "passengers seat": "crumbs"
    },
    "outside": {
      "trunk": "jack"
    }
  }
};

const globeBoxContents = myStorage.car.inside["globe box"];
console.log(globeBoxContents);

/* Accessing Nested Arrays */
const myPlants = [
  {
    type: "flowers",
    list: [
      "rose",
      "tulip",
      "dandelion"
    ]
  },
  {
    type: "trees",
    list: [
      "fir",
      "pine",
      "birch"
    ]
  }
];

const secondTree = myPlants[1].list[1];
console.log(secondTree);

/* Anonymous function */
let x = function() {
  console.log("hello");
};

x();

/* self invoked function/ IIFE = Immediately Invoked Function Expression/ Annonymous self invoking function */
(function() {
  console.log(8);
})();
