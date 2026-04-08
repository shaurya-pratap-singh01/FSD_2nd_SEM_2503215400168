let friends = ["Monica" , "Rachel" , "Phoebe" , "Joey" , "Chandler" , "Ross"];
console.log(friends);

// Accessing elements in an array
console.log(friends[0]);
console.log(friends[2]);

// Modifying elements in an array
friends[1] = "Rachel Green";
console.log(friends);

// Adding elements to an array
friends.push("Gunther");
console.log(friends);

// Removing elements from an array
friends.pop();
console.log(friends);
friends.shift();
console.log(friends);
friends.unshift("Monica Geller");
console.log(friends);
