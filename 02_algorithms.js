///////// Everything Be True 

// running tests
// tests completed
function truthCheck(collection, pre) {

var res = collection.every(function(element, index, array) {
  return element[pre];
});

  return res;
}


/////////////////////////////////////////////
//////// Arguments Optional

///////////////// не удалось полностью победить 1 кейс:
// running tests
// addTogether(2, "3") should return undefined.
// tests completed 
function addTogether(a,b) {
var res;

if(typeof(a) === 'number'){
  if(typeof(b) === 'number'){
  res = a+b;
  }else{
    res = function(b){
    if(typeof(b) === 'number'){
       return  a+b;
			}else{
        return  undefined;
      }
    }
  }
}else{
  res = undefined;
}
return res;
}

////////////////////////////////////////////
///////// Make a Person

// running tests
// tests completed

const Person = function(firstAndLast) {
  // Only change code below this line
  var input = firstAndLast;
  var firstLastArray = input.split(" ");

this.setFirstName = function(first){
  firstLastArray[0] = first;
};
this.setLastName = function(last){
  firstLastArray[1] = last;
};
this.setFullName = function(firstAndLast){
  firstLastArray = firstAndLast.split(" ");
};

this.getFirstName = function(){
  return firstLastArray[0];
};

this.getLastName = function(){
  return firstLastArray[1];
};

this.getFullName = function() {
    return firstLastArray[0] +" "+ firstLastArray[1];
  };
  return input;
};



//////////////////////////////////////////
/////////// Binary Agents

// running tests
// tests completed

function binaryAgent(str) {
  var input = str.split(" ");

  var input2 = input.map(function(num){
        return parseInt(num, 2);
  });

   var input3 = input2.map(function(charnum){
        return String.fromCharCode(charnum);
  });
  
  return input3.join("");

}