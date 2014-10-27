//Use this file to implement Part One of your project
//Use this file to implement Part One of your project


var animal = {};
animal.username = "justin";
animal['tagline'] = "hello";

var noises = [];

animal['noises'] = noises;

var count = 0;
for(var key in animal){
   count++;
   if (key === 'username' ) {
    console.log("Hi my name is " + animal[key]);
  }
    else if (key === 'tagline') {
      console.log("I like to say " + animal[key]);
    }
}

var noiseArray =[];

noiseArray[0] = "moo";
noiseArray.unshift("snort");
noiseArray.push("heehaw");
noiseArray[3] = "bing!";
console.log("Our array of noises contains: " + noiseArray);
console.log(noiseArray.length);
// console.log("The last item in the array is " + noiseArray[noiseArray]);
animal['noises'] = noiseArray;

var animals = [];
animals[0] = animal;
var quackers = { username: 'DaffyDuck', tagline: 'Yippeee!', noises: ['quack','honk','sneeze','growl']}

animals.push(quackers);

var birds = { username: "Big Bird", tagline: "Hooray", noises: ['cackle','sneeze','cry','gasp']},
    rabbits = { username: "Bugs Bunny", tagline: "Eh, what's up doc", noises: ['crunch','ehhh']};
animals.unshift(birds);
animals.push(rabbits);


var friends = [];

friends[0] = animals[0].username;
friends[1] = animals[3].username;

var relationships = {};
relationships.friends = friends;

 count = 1;
for(var key in relationships){
   count++;
   console.log(count);
}

var matches = [];
relationships.matches = matches;
relationships.matches[0] = animals[0].username;

for(var i = 0; i < animals.length; i++){
  console.log(animals[i].relationships = relationships);
}


var AnimalTestUser = function AnimalTestUser(username) {
  var animal = {};
  var otherArgs = [];

  animal.username = username;

  if(arguments.length > 1){
     animal.otherArgs = otherArgs;
     for(var i = 1; i < arguments.length; i++) {
      otherArgs[i - 1] = arguments[i];
      console.log(arguments[i]);
     }
  }



  return animal;

}

var AnimalCreator = function (username, species, tagline, noises) {
  var animal = {
    username:username,
    species:species,
    tagline:tagline,
    noises:noises,
    friends:[]
  };

  return animal;
}

var addFriend = function(animal, friend) {
  // var animal = animal;
  animal.friends.push(friend.username);
}

var myFarm = [];
myFarm[0] = AnimalCreator('Cloud', 'sheep', 'You can count on me!', ['baahhh', 'arrgg', 'chewchewchew']);
myFarm[1] = AnimalCreator('Shelley','cow','Moo, who you?',['moo','moooo','moooooooo']);
myFarm.push(AnimalCreator("gus", "llama","yoggy", ["blah", "blah"] ));

var addMatchesArray = function(aFarm) {
  var theFarm = aFarm;
  for(var i = 0; i < theFarm.length; i++) {
    theFarm[i].matches = [];
  }
};

addMatchesArray(myFarm);

addFriend(myFarm[0],myFarm[1]);
addFriend(myFarm[1],myFarm[0]);
addFriend(myFarm[2],myFarm[0]);
addFriend(myFarm[0],myFarm[0]);

var giveMatches = function(aFarm) {
  var theFarm = aFarm;
  for(var i = 0; i < theFarm.length; i++) {

      for(var  j = 0; j < theFarm[i].friends.length; j++) {
      theFarm[i].matches.push(theFarm[i].friends[j]);
      console.log(theFarm[i].matches.length);
    }
  }
};

giveMatches(myFarm);



