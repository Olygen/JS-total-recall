/** Cat Combinator

1. Mama cat
Define an object called cat1 that contains the following properties:
name
breed
age (a number)
console.log the cat's age
console.log the cat's breed

2. Papa cat
Define an object called cat2 that also contains the properties:
name
breed
age (a number)
 */

const cat1 = {
    name: "Joe", 
    age: 19, 
    breed: "Mog"
}

const cat2 = {
    name: "Jam", 
    age: 15, 
    breed: "Siamese"
}

/**
 * 3. Combine Cats!
The cats are multiplying!
Write a function combineCats that has two parameters mama, and papa. 
The function will take two arguments -- each a cat object.

Pass cat1 and cat2 as arguments to the combineCats function. The function should console.log them.
 */

function combineCats(mama, papa) {
    return {
      name: mama.name + papa.name,
      age: 1,
      breed: mama.breed + '-' + papa.breed
    };
  }
  
  const combinedCats = combineCats(cat1, cat2);
  console.log(combinedCats);

  //You could also invoke the combineCatsfunction by writing the objects straight into the parentheses:

  console.log(combineCats({ name: "Craig", age: 20, breed: "unknown" }, { name: "Linda", age: 20, breed: "undefined" }));

  /**
   * 4. Cat brain bender
If combineCats returns an object, and if combineCats takes objects as arguments, then it stands to reason that:

catCombinator can use itself as its own argument.*/

console.log(combineCats(combineCats(cat1, cat2), combineCats(cat1, cat2)));

// The above console.log is two levels deep of combineCats.

// Write a console.log that is three levels deep of combineCats. combineCats should have two arguments, 
// each which are combineCats, each which have two arguments, each which are combineCats.
// Your output should look something like:

console.log(combineCats(combineCats(combineCats(cat1, cat2), combineCats(cat1, cat2)), combineCats(combineCats(cat1, cat2), combineCats(cat1, cat2))));