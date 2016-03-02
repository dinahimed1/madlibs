function generateMadlib() {
  
  // This is the starting story
  var story = " You are a noun. You enjoy verb1 and verb2 with adjective1 friends. You have so much fun that you forgot about the adjective2 homework.You feel adjective3 so you leave your home. But then your adjective4 parents go and find you. Once your parents find you, you look at the verb3. You look at the verb4 to find a way to escape.";
  
 // You are a (noun). YOu enjoy (verb1) and (verb2) with (adjective1) friends. You have so much fun that you forgot about the (adjective2) homework. You feel (adjective3) so you leave home. But then your (adjective4) parents go and find you. Once your parents find you, you look at the (verb3). You look at the (verb4) to find a way to escape. 

  var inputValue = document.getElementById("noun").value;
  story = story.replace("noun", inputValue);
  
  inputValue = document.getElementById("verb1").value;
  story = story.replace("verb1", inputValue);
  
    inputValue = document.getElementById("verb2").value;
  story = story.replace("verb1", inputValue);
  
    inputValue = document.getElementById("adjective1").value;
  story = story.replace("verb1", inputValue);
  
    inputValue = document.getElementById("adjective2").value;
  story = story.replace("verb1", inputValue);
  
    inputValue = document.getElementById("adjective3").value;
  story = story.replace("verb1", inputValue);
  
    inputValue = document.getElementById("verb3").value;
  story = story.replace("verb1", inputValue);
  
    inputValue = document.getElementById("verb4").value;
  story = story.replace("verb1", inputValue);
  
  
  
  // This writes the story when the user clicks the "Generate MadLib" button"
  document.getElementById("result").innerHTML = story;
}
