function secretMessage() {
    alert("This is your official invite to Parker and Otis's Wedding!!")
  }
  function displayBunny() {
    document.getElementById("bunnyContent").style.display = "block"; 
    document.getElementById("horseContent").style.display = "none";
    document.getElementById("defaultContent").style.display = "none";
  }
  function displayHorse() {
    document.getElementById("bunnyContent").style.display = "none"; 
    document.getElementById("horseContent").style.display = "block";
    document.getElementById("defaultContent").style.display = "none";
  }
  function purpleBackground() {
    document.body.style.backgroundColor = "purple";
    console.log(document)
  }