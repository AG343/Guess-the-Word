player1name = localStorage.getItem("player1name")
player2name = localStorage.getItem("player2name")
player1score = 0
player2score = 0
document.getElementById('player1name').innerHTML = player1name + ' :'
document.getElementById('player2name').innerHTML = player2name + ' :'
document.getElementById('player1score').innerHTML = player1score
document.getElementById('player2score').innerHTML = player2score
document.getElementById('playerquestion').innerHTML = 'Question Turn ' + player1name
document.getElementById('playeranswer').innerHTML = 'Answer Turn ' + player2name

function send() {
   get_word = document.getElementById('word').value
   word = get_word.toLowerCase()
   if (word.length<=5) {
      document.getElementById('word').value=""
      document.getElementById('word').placeholder="Enter A Word With More Than Five Characters"
      
   }
   else{

   
   console.log('word in lowerCase' + word)
   charAt1 = word.charAt(1)
   console.log(charAt1)
   lengthdividedby2 = Math.floor(word.length / 2)
   charAt2 = word.charAt(lengthdividedby2)
   console.log(charAt2)
   lengthminus1 = word.length - 1
   charAt3 = word.charAt(lengthminus1)
   remove_charAt1 = word.replace(charAt1, '_')
   remove_charAt2 = remove_charAt1.replace(charAt2, '_')
   remove_charAt3 = remove_charAt2.replace(charAt3, '_')
   questionword = "<h4 id='worddisplay'> Q." + remove_charAt3 + "</h4>"
   input_box = "<br><br><input type='text' id='inputcheckbox'><br>"
   check_box = "<button class='btn btn-info' onclick='check()'>Check</button>"
   row = questionword + input_box + check_box
   document.getElementById('output').innerHTML = row
   document.getElementById('word').value = ""
   
   }
}
questionturn = "player1"
answerturn = "player2"

function check() {
   getanswer = document.getElementById('inputcheckbox').value
   answer = getanswer.toLowerCase()
   console.log("answer in lower case" + answer)
   if (answer == word) {
      if (answerturn == "player1") {
         player1score = player1score + 1
         document.getElementById("player1score").innerHTML = player1score
      } else {
         player2score = player2score + 1
         document.getElementById("player2score").innerHTML = player2score
      }
   }
   if (questionturn == 'player1') {
      questionturn = 'player2'
      document.getElementById("playerquestion").innerHTML = "Question Turn - " + player2name

   } else {
      questionturn = 'player1'
      document.getElementById("playerquestion").innerHTML = "Question Turn - " + player1name

   }
   if (answerturn == 'player1') {
      answerturn = 'player2'
      document.getElementById("playeranswer").innerHTML = "Answer Turn - " + player2name
   } else {
      answerturn = 'player1'
      document.getElementById("playeranswer").innerHTML = "Answer Turn - " + player1name
   }
   document.getElementById('output').innerHTML = ""
}
