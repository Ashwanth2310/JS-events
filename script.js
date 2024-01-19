window.onload = function() {
  var userSpan = document.getElementById("user");
  function printName() {
      userSpan.innerHTML = "Ashwanth"; 
  }

  printName();
};

var btnClick = document.getElementById("btn-click");

btnClick.onclick = function() {
    btnClick.style.backgroundColor = "red";
};

var buildButton = document.getElementById("build-button");
var statementDiv = document.getElementById("statement");

function makeSentence() {
    var noun = document.getElementById("noun").value;
    var verb = document.getElementById("verb").value;
    var adverb = document.getElementById("adverb").value;

    var sentence = noun + " " + verb + " " + adverb;
    statementDiv.innerHTML = sentence;
}
buildButton.addEventListener("click", makeSentence);


document.getElementById("grandparent").addEventListener("click", function() {
  console.log("Grandparent clicked");
});

document.getElementById("parent").addEventListener("click", function() {
  console.log("Parent clicked");
});

document.getElementById("child").addEventListener("click", function() {
  console.log("Child clicked");
});

document.getElementById("grandparent").addEventListener(
  "click",
  function() {
      console.log("Grandparent clicked");
  },
  true 
);

document.getElementById("parent").addEventListener(
  "click",
  function() {
      console.log("Parent clicked");
  },
  true
);

document.getElementById("child").addEventListener(
  "click",
  function() {
      console.log("Child clicked");
  },
  true
);

document.getElementById("category").addEventListener("click", function(event) {
  if (event.target.tagName === "LI") {
      console.log(event.target.id);
  }
});