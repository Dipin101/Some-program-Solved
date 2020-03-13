var randomBodyParts=['Face','Nose','Hair','Chin'];

var randomAdjectives=['Smelly','Boring','Stupid','Lazy'];

var randomWords=['Fly','Marmot','Stick','Dog','Rat'];

var randomBodyPart=randomBodyParts[Math.floor(Math.random()*4)];

var randomAdjective=randomAdjectives[Math.floor(Math.random()*4)];

var randomWord=randomWords[Math.floor(Math.random()*5)];


console.log('Your '+ randomBodyPart+' is like a '+ randomAdjective +' '+randomWord+'!!!');