function shake() {
    let ball = document.getElementById("ball");
    let messageText = document.getElementById("message");
    let questionInput = document.getElementById("question");
  
    if (messageText != null) {
      messageText.parentNode.removeChild(messageText);
    }
  
    ball.classList.add("shake");
  
    setTimeout(function(){ball.classList.remove("shake");}, 1000);
    setTimeout(function(){getFortune();}, 1000);
  
    let fortunes = ['It is certain', 'It is decidedly so', 'Reply hazy try again', 
                    'Cannot predict now', 'Do not count on it', 'My sources say no', 
                    'Outlook not so good', 'Signs point to yes'];
    let fortune = fortunes[Math.floor(Math.random() * fortunes.length)];
    
    let question = questionInput.value;
    let parent = document.getElementById("fortune");
    let newMessage = document.createElement("div");
    newMessage.setAttribute('id', "message");
    newMessage.innerHTML = `"${question}" - "${fortune}"`;
    parent.appendChild(newMessage);

    questionInput.value = "";
  }