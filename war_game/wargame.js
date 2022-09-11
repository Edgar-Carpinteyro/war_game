let aUsersturns = [];
let aDealerturns = [];

let userscore = 26; //Beginning for user score
let dealerscore = 26; //Beginning for dealer score

function deckcards() {
  var usercard = Math.floor(Math.random() * 13 + 2); //This returns a random number between 2 and 14; the value of a card in the deck.
  aUsersturns.push(usercard); //This pushed the random number into the variable aUsersturn.
  console.log(aUsersturns); //The random number is printed under aUsersturn. This represents the value

  var usercardoutput = ""; //we declare the variable as empty
  if (usercard === 11) {
    //If the value is 11, it is returned as J for jack.
    usercardoutput = "J";
  } else {
    if (usercard === 12) {
      //If the value is 12, it is returned as Q.
      usercardoutput = "Q";
    } else {
      if (usercard === 13) {
        usercardoutput = "K";
      } else {
        if (usercard === 14) {
          usercardoutput = "A";
        } else {
          usercardoutput = usercard; //Any other # beside 11-14 will be represented by its numeric value
        }
      }
    }
  }

  document.getElementById("usercardnum").innerHTML = usercard; //Displays the card number for user.

  var dealercard = Math.floor(Math.random() * 13 + 2);
  aDealerturns.push(dealercard);
  console.log(aDealerturns);

  var dealercardoutput = "";
  if (usercard === 11) {
    dealercardoutput = "J";
  } else {
    if (usercard === 12) {
      dealercardoutput = "Q";
    } else {
      if (usercard === 13) {
        dealercardoutput = "K";
      } else {
        if (usercard === 14) {
          dealercardoutput = "A";
        } else {
          dealercardoutput = usercard;
        }
      }
    }
  }

  document.getElementById("dealercardnum").innerHTML = dealercard;

  //User Chars:  (characters: hearts, spades, diamonds, clubs):

  var userchar = Math.floor(Math.random() * 4 + 1); //Add + 1 to get a random number between 1 and 4. Otherwise, we get a number between 0 and 3.
  console.log("userchar " + userchar);

  switch (userchar) {
    case 1:
      userchar = "♥"; //character 1 will be represented by hearts
      break;
    case 2:
      userchar = "♠";
      break;
    case 3:
      userchar = "♦";
      break;
    case 4:
      userchar = "♣";
      break;
  }

  document.getElementById("userchar").innerHTML = userchar; // This adds the character (symbol) next to the current card number.

  //Dealer Chars:
  var dealerchar = Math.floor(Math.random() * 4 + 1);
  console.log("dealerchar " + dealerchar);

  switch (dealerchar) {
    case 1:
      dealerchar = "♥";
      break;
    case 2:
      dealerchar = "♠";
      break;
    case 3:
      dealerchar = "♦";
      break;
    case 4:
      dealerchar = "♣";
      break;
  }

  document.getElementById("dealerchar").innerHTML = dealerchar;

  //Scores:
  if (usercard === dealercard) {
    //If cards are equal, score remaind the same.
    userscore = userscore;
    dealerscore = dealerscore;
  } else {
    //If usercard is greater, userscore increases.
    if (usercard > dealercard) {
      userscore++;
      dealerscore--;
    } else {
      if (dealercard > usercard) {
        //If dealerscard is greater, dealerscore increases.
        dealerscore++;
        userscore--;
      }
    }
  }

  //Display Scores:
  document.getElementById("dealerscore").innerHTML = dealerscore; //dealer score
  document.getElementById("userscore").innerHTML = userscore; //user score

  //Displays the score on the console
  console.log("user score: " + userscore);
  console.log("dealer score: " + dealerscore);
  checkingscores();
}


//Winner alert
function checkingscores() {
  if (userscore <= 0) {
    userscore = 0;
    alert("Dealer Wins!");
  } else {
    if (dealerscore <= 0) {
      userscore = 0;
      alert("User Wins!");
    }
  }
}
