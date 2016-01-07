function generateMadlib() {
  
  // This is the starting story
  var story = " You are a noun. You enjoy verb1 and verb2 with adjective1 gorillas. You have so much fun that you forgot about the adjective2 gorillas. You feel adjective3 so you go home. But then the adjective4 gorillas go and find you to seek revenge. Once the gorilas find you, you verb3.  Gucci Flip Flops pops up and verb4.";
  
 // You are a (noun). YOu enjoy (verb1) and (verb2) with (adjective1) gorillas. You have so much fun that you forgot about the (adjective2) gorillas. You feel (adjective3) so you go home. But then the (adjective4) gorillas go and find you to seek revenge. Once the gorilas find you, you (verb3). Gucci Flip Flops pops up and (verb4). 

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
