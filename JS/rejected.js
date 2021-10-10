//let face;
//let playerButton = this.getPlayerButton;// document.getElementById(houseColorArray[this.color] + "Button");
//console.log(this.color);
//let colorTest = this.getColor;
//let listOfPieces = this.getListOfPieces;
//let listOfCellPromises = [];
//let activePlayer = null;
//let self = this;

//const listenerFunction = listener.bind(this, playerButton, listOfCellPromises, listOfPieces, resolve, colorTest);
/*this.getPlayerButton.addEventListener("click", function __listener(){
    // __listener works when clicked on a player dice & it removes click and makes a promise list

    //console.log(this.getColor);
    let face = rollDie(); //Math.floor((Math.random() * 6) + 1);
    playerButton.nextElementSibling.innerText = face;

    playerButton.removeEventListener("click", __listener);
    face = 6;

    for (let piece of listOfPieces) {
        if (piece.getCurrentStatus === piece.getInitialStatus && face === 6) {
            listOfCellPromises.push(piece.open()); // add the opening act in the promise list, returns the piece coordinate
        } else if (piece.getCurrentStatus === piece.getProgressStatus && piece.getCurrentSteps - face === 0) {
            piece.close(face);
        } else if (piece.getCurrentStatus === piece.getProgressStatus && piece.getCurrentSteps - face !== 0) {
            listOfCellPromises.push(piece.move(face));
        } else if (piece.getCurrentStatus === piece.getProgressStatus && piece.getBoardPosition + face < 52 && ludoBoard[piece.getBoardPosition]) {
            piece.surrender();
        }
    }

    Promise.race(listOfCellPromises).then((value) => {
        //activePlayer = 0;
        //console.log(activePlayer);
        //next player deduction and remove clicks from rest of the active pieces
        console.log(value);
        console.log(face);

        let nextPlayer = colorTest + 1;

        resolve(nextPlayer % 4);
    });
});*/

//this.getPlayerButton.addEventListener("click", this.listenerMethod.bind(this, resolve));
//this.getPlayerButton.removeEventListener("click", listenerFunction);

/*Promise.resolve(activePlayerPromise).then((value => {
    console.log(value);
    return value;
}));*/

/*playerButton.addEventListener("click", function __listener (){
    // __listener works when clicked & it removes click and makes a promise list
    face = Math.floor((Math.random() * 6) + 1);
    this.nextElementSibling.innerText = face;
    //diceFace.push(face);

    playerButton.removeEventListener("click", __listener);
    face = 6;

    for (let piece of listOfPieces) {
        if (piece.getCurrentStatus === piece.getInitialStatus && face === 6) {
            listOfCellPromises.push(piece.open()); // add the opening act in the promise list, returns the piece coordinate
        }

        else if (piece.getCurrentStatus === piece.getProgressStatus && piece.getCurrentSteps - face === 0) {
            piece.close(face);
        }

        else if (piece.getCurrentStatus === piece.getProgressStatus && piece.getCurrentSteps - face !== 0) {
            listOfCellPromises.push(piece.move(face));
        }

        else if (piece.getCurrentStatus === piece.getProgressStatus && piece.getBoardPosition + face < 52 && ludoBoard[piece.getBoardPosition]) {
            piece.surrender();
        }
    }

    Promise.race(listOfCellPromises).then((value) => {
        // console.log(face);
        // update active player

        activePlayer = 0;
        console.log(activePlayer);
        // return 0;
    });


    //console.log(listOfCellPromises);
    //console.log("cell promises");
    // resolve(listOfCellPromises);
    // list of promises attached to each available piece which needs to be resolved on a first clicked first served basis
});*/

//return activePlayer;

//console.log(listOfCellPromises);

//return listOfCellPromises;
/*return new Promise((resolve) => {

});*/


/*async clickPreferredPiece(awaitedPiece) {
    //Happens after clicking the preferred piece. awaitedPiece is the list of promises from for each of the pieces
    // console.log(awaitedPiece);
    let promisedClick = Promise.race(awaitedPiece);  //race means the piece which was clicked first ie the promise that got fulfilled first
    //console.log(promisedClick);
    let result = await promisedClick; //the data of which piece was clicked
    //console.log("result : " + result)

    clickedPiece = result;

    for (let index = 0; index < 4; index++) { // replacing the elements except the clicked one by itself to remove click eventlistener
        if (index === result[0]) continue;

        // console.log(result[0]);

        let oldElement = document.getElementById(this.pieces[index].getPieceID);
        let newElement;

        if (this.pieces[index].getCurrentStatus === 0)
            newElement = pieceAtHouse(this.pieces[index].getPieceNumber, this.pieces[index].getPieceID, this.pieces[index].getColor);
        else if (this.pieces[index].getCurrentStatus === 1)
            newElement = pieceAtIndex(this.pieces[index].getBoardPosition, this.pieces[index].getPieceID, this.pieces[index].getColor);

        oldElement.parentNode.replaceChild(newElement, oldElement);
    }

    return result;
}*/

/*async rollDice() {
    Promise.resolve(this.getCellPromises()).then((awaitedPiece) => {
        //console.log("awaitedPiece :" + awaitedPiece);
        let nextMove = this.clickPreferredPiece(awaitedPiece);
        //console.log("next move" + nextMove);

        //return 12;
    });
}*/

/*test() {
    //this.pieces[0].setVisibility = true;
    let piece = this.listOfPieces[0];

    piece.setCurrentSteps = 52;
    //piece.setBoardPosition = 0;
    //piece.setCurrentSteps = 4;
    piece.setCurrentStatus = 1;
    //console.log(piece);
}*/



/*async clickPreferredPiece(awaitedPiece) {
    //Happens after clicking the preferred piece. awaitedPiece is the list of promises from for each of the pieces
    // console.log(awaitedPiece);
    let promisedClick = Promise.race(awaitedPiece);  //race means the piece which was clicked first ie the promise that got fulfilled first
    //console.log(promisedClick);
    let result = await promisedClick; //the data of which piece was clicked
    //console.log("result : " + result)

    clickedPiece = result;

    for (let index = 0; index < 4; index++) { // replacing the elements except the clicked one by itself to remove click eventlistener
        if (index === result[0]) continue;

        // console.log(result[0]);

        let oldElement = document.getElementById(this.pieces[index].getPieceID);
        let newElement;

        if (this.pieces[index].getCurrentStatus === 0)
            newElement = pieceAtHouse(this.pieces[index].getPieceNumber, this.pieces[index].getPieceID, this.pieces[index].getColor);
        else if (this.pieces[index].getCurrentStatus === 1)
            newElement = pieceAtIndex(this.pieces[index].getBoardPosition, this.pieces[index].getPieceID, this.pieces[index].getColor);

        oldElement.parentNode.replaceChild(newElement, oldElement);
    }

    return result;
}*/

/*async rollDice() {
    Promise.resolve(this.getCellPromises()).then((awaitedPiece) => {
        //console.log("awaitedPiece :" + awaitedPiece);
        let nextMove = this.clickPreferredPiece(awaitedPiece);
        //console.log("next move" + nextMove);

        //return 12;
    });
}*/

/*test() {
    //this.pieces[0].setVisibility = true;
    let piece = this.listOfPieces[0];

    piece.setCurrentSteps = 52;
    //piece.setBoardPosition = 0;
    //piece.setCurrentSteps = 4;
    piece.setCurrentStatus = 1;
    //console.log(piece);
}*/

/*if (!Number.isInteger(this.playerArray[turn])) {
                let status = this.playerArray[turn].rollDice();
                if (!status) this.playerArray[turn] = rank + 1;
                playerCount -= 1;
            }

            turn = (turn + 1) % this.numberOfPlayers;

            let print = this.activePlayer.rollDice().then(value => {
                let lengthOfDiceFace = diceFace.length;
                console.log(lengthOfDiceFace);
                if (lengthOfDiceFace === 0) this.activePlayer = this.playerArray[clickedPiece[1]];
            });*/

//activePlayerIndex = activePlayerIndex % 4;
//if (Number.isInteger(activePlayerIndex)) console.log(activePlayerIndex);
//console.log(activePlayerIndex[0]);
//this.getActivePlayer.getPlayerButton.removeEventListener("click", this.getActivePlayer.listener);


/*greenPlayer.rollDice().then(value => {
    let lengthOfDiceFace = diceFace.length;
    console.log(lengthOfDiceFace);
    //if (lengthOfDiceFace === 0) this.activePlayer = this.playerArray[clickedPiece[1]];
});*/

//let listOfPromises = greenPlayer.rollDiceNew();
//console.log(listOfPromises);

/*async function test1 () {
    console.log(await greenPlayer.rollDiceNew());
    console.log(await yellowPlayer.rollDiceNew());
    console.log(await bluePlayer.rollDiceNew());
    console.log(await redPlayer.rollDiceNew());
}*/

// test1();

//activePlayer = 0;
//console.log(activePlayer);
//next player deduction and remove clicks from rest of the active pieces

//console.log(this.getColor);

//const listenerFunction = this.listenerMethod.bind(this, resolve);



//get getListOfPieces()

/*set setFace(face) {
    this.face = face;
}*/

/*getCellPromises() { // Priming the pieces with promises that is pre-calculated and put into a list to be fulfilled
    let face;
    let playerButton = document.getElementById(houseColorArray[this.color] + "Button");
    let listOfPieces = this.pieces;
    let listOfCellPromises = [];

    return new Promise((resolve) => {
        playerButton.addEventListener("click", function __listener (){ // __listener works when clicked & it removes click and makes a promise list
            face = Math.floor((Math.random() * 6) + 1);
            this.nextElementSibling.innerText = face;
            diceFace.push(face);

            playerButton.removeEventListener("click", __listener);
            face = 6;

            for (let piece of listOfPieces) {
                if (piece.getCurrentStatus === piece.getInitialStatus && face === 6) {
                    listOfCellPromises.push(piece.open()); // add the opening act in the promise list, returns the piece coordinate
                }

                else if (piece.getCurrentStatus === piece.getProgressStatus && piece.getCurrentSteps - face === 0) {
                    piece.close(face);
                }

                else if (piece.getCurrentStatus === piece.getProgressStatus && piece.getCurrentSteps - face !== 0) {
                    listOfCellPromises.push(piece.move(face));
                }

                else if (piece.getCurrentStatus === piece.getProgressStatus && piece.getBoardPosition + face < 52 && ludoBoard[piece.getBoardPosition]) {
                    piece.surrender();
                }
            }

            //console.log(listOfCellPromises);
            //console.log("cell promises");

            resolve(listOfCellPromises); // list of promises attached to each available piece which needs to be resolved on a first clicked first served basis
        });
    });
}*/

/*function listener(playerButton, listOfCellPromises, listOfPieces, resolve, colorTest) {
    // __listener works when clicked on a player dice & it removes click and makes a promise list

    //console.log(this.getColor);
    let face = rollDie();
    playerButton.nextElementSibling.innerText = face;

    playerButton.removeEventListener("click", listener);
    face = 6;

    for (let piece of listOfPieces) {
        if (piece.getCurrentStatus === piece.getInitialStatus && face === 6) {
            listOfCellPromises.push(piece.open()); // add the opening act in the promise list, returns the piece coordinate
        } else if (piece.getCurrentStatus === piece.getProgressStatus && piece.getCurrentSteps - face === 0) {
            piece.close(face);
        } else if (piece.getCurrentStatus === piece.getProgressStatus && piece.getCurrentSteps - face !== 0) {
            listOfCellPromises.push(piece.move(face));
        } else if (piece.getCurrentStatus === piece.getProgressStatus && piece.getBoardPosition + face < 52 && ludoBoard[piece.getBoardPosition]) {
            piece.surrender();
        }
    }

    Promise.race(listOfCellPromises).then((value) => {
        //activePlayer = 0;
        //console.log(activePlayer);
        //next player deduction and remove clicks from rest of the active pieces
        //console.log(value);
        //console.log(face);


        let nextPlayer = colorTest + 1;

        resolve(nextPlayer % 4);
    });
}
*/


/*let greenPlayer = new Player(0);
let yellowPlayer = new Player(1);
let bluePlayer = new Player(2);
let redPlayer = new Player(3);

bluePlayer.setVisibility = true;
greenPlayer.setVisibility = true;
redPlayer.setVisibility = true;
yellowPlayer.setVisibility = true;*/



/*
const houseColorArray = ["green", "yellow", "blue", "red"];

function rollDie() {
  return Math.floor((Math.random() * 6) + 1);
}

function pieceAtIndex(boardPosition, pieceID, color) {
  boardPosition = (boardPosition < 10) ? "0" + boardPosition : boardPosition;

  let line1 = '<div class="cells C' + boardPosition + ' white_border circle-border"></div>';
  let line2 = '<div class="cells C' + boardPosition + ' ' + houseColorArray[color] + '_piece circle-clip"></div>';

  let pieceElement = document.createElement("div");
  pieceElement.setAttribute("id", pieceID);
  pieceElement.innerHTML = line1 + line2;

  return pieceElement;
}

function pieceAtHouse(placeIndex, pieceID, color) {
  let house = ["one", "two", "three", "four"];

  let line1 = '<div class="square square-' + house[placeIndex] + ' black_grey circle-border"></div>';
  let line2 = '<div class="square square-' + house[placeIndex] + ' ' + houseColorArray[color] + '_piece circle-clip"></div>';

  let pieceElement = document.createElement("div");
  pieceElement.setAttribute("id", pieceID);
  pieceElement.innerHTML = line1 + line2;

  return pieceElement;
}

function commonPreAction(parent) {
  // this does activation animation makes the pieces little bigger and returns piece coords
  let resultTuple = [parent.getPieceNumber, parent.getColor];
  let pieceElement = document.getElementById(parent.getPieceID);
  let pieceChildren = pieceElement.children;

  pieceChildren[0].classList.remove("circle-border");
  pieceChildren[0].classList.add("circle-border-active");
  pieceChildren[1].classList.remove("circle-clip");
  pieceChildren[1].classList.add("circle-clip-active");

  return resultTuple;
}

function commonAction(parent, vulnerability, steps, status, boardPosition) {
  parent.setVulnerability = vulnerability;
  parent.setCurrentSteps = steps;
  parent.setCurrentStatus = status;
  parent.setBoardPosition = boardPosition;

  document.getElementById("board").appendChild(pieceAtIndex(parent.getBoardPosition, parent.getPieceID, parent.getColor));
}


class Piece {
  constructor(color, pieceNumber) {
    this.vulnerable = true;
    this.color = color;
    this.currentSteps = -1;
    this.currentStatus = 0;
    this.boardPosition = color * 13;
    this.pieceNumber = pieceNumber;
    this.pieceColor = houseColorArray[this.color];
    this.pieceID = this.pieceColor + "Piece" + this.pieceNumber;
    this.handler = null;
  }

  set setHandler(handler) {
    this.handler = handler;
  }

  get getHandler() {
    return this.handler;
  }

  get getPieceNumber() {
    return this.pieceNumber;
  }
  get getPieceColor() {
    return this.pieceColor;
  }
  get getPieceID() {
    return this.pieceID;
  }
  set setVisibility(state) {
    document.getElementById(this.getPieceID).hidden = state;
  }
  get getTotalSteps() {
    return 52;
  }
  get getCurrentSteps() {
    return this.currentSteps;
  }
  set setCurrentSteps(face) {
    let temp = this.currentSteps;
    if (Number.isInteger(face) && face >= 1 && face <= 6) {
      temp -= face;
      if (temp < 0) {
        temp += 5;
        if (!temp) this.setCurrentStatus = this.getFinalStatus;
      }
    } else if (face === 52) temp = face;

    if (temp >= 0) this.currentSteps = temp;
  }

  get getInitialStatus() {
    return 0;
  }
  get getProgressStatus() {
    return 1;
  }
  get getFinalStatus() {
    return -1;
  }
  get getCurrentStatus() {
    return this.currentStatus;
  }
  set setCurrentStatus(status) {
    let condition = status * (status - 1) * (status + 1);
    if (!condition) this.currentStatus = status;
  }
  get getColor() {
    return this.color;
  }
  get getBoardPosition() {
    return this.boardPosition;
  }
  set setBoardPosition(dice) {
    this.boardPosition = (this.boardPosition + dice) % this.getTotalSteps;
    return this.boardPosition;
  }
  get getVulnerability() {
    return this.vulnerable;
  }
  set setVulnerability(vulnerable) {
    this.vulnerable = vulnerable;
  }

  get getPiece() {
    return document.getElementById(this.getPieceID);
  }

  activate() {
    this.getPiece.children[0].classList.remove("circle-border");
    this.getPiece.children[0].classList.add("circle-border-active");
    this.getPiece.children[1].classList.remove("circle-clip");
    this.getPiece.children[1].classList.add("circle-clip-active");
  }

  deactivate() {
    this.getPiece.children[0].classList.add("circle-border");
    this.getPiece.children[0].classList.remove("circle-border-active");
    this.getPiece.children[1].classList.add("circle-clip");
    this.getPiece.children[1].classList.remove("circle-clip-active");
  }

  openingListener(resolve) {
    this.getPiece.remove();
    this.setVulnerability = false;
    this.setCurrentSteps = 52;
    this.setCurrentStatus = 1;
    this.setBoardPosition = 0;

    document.getElementById("board").appendChild(pieceAtIndex(this.getBoardPosition, this.getPieceID, this.getColor));

    resolve([this.pieceNumber, this.getColor]);
  }

  movingListener(resolve, face) {
    this.getPiece.remove();
    this.setVulnerability = !(!this.getBoardPosition % 13);
    this.setCurrentSteps = face;
    this.setCurrentStatus = 1;
    this.setBoardPosition = face;

    document.getElementById("board").appendChild(pieceAtIndex(this.getBoardPosition, this.getPieceID, this.getColor));

    resolve([this.pieceNumber, this.getColor]);
  }

  open() { // this returns a promise of being clicked on a piece in the house and it opens up
    let resultTuple = commonPreAction(this);
    let parent = this;

    return new Promise((resolve, reject) => {
      this.getPiece.addEventListener("click", function __listener () {
        this.remove();
        commonAction(parent, false, 52, 1, 0);

        resolve(resultTuple);
      });
    });
  }

  removeClick() {
    this.getPiece.removeEventListener("click", this.getHandler);
  }

  openNew() {
    /!*let pieceElement = document.getElementById(parent.getPieceID);
    let pieceChildren = pieceElement.children;

    pieceChildren[0].classList.remove("circle-border");
    pieceChildren[0].classList.add("circle-border-active");
    pieceChildren[1].classList.remove("circle-clip");
    pieceChildren[1].classList.add("circle-clip-active");*!/
    this.activate();

    return new Promise((resolve, reject ) => {
      const listenerFunction = this.openingListener.bind(this, resolve);
      this.setHandler = listenerFunction;
      this.getPiece.addEventListener("click", listenerFunction);
    });
  }

  close(face) { // this returns a promise a being clicked on a piece on the move and it moves forward
    this.setCurrentSteps = face;
    this.setCurrentStatus = this.getFinalStatus;
  }

  surrender() {
    this.setCurrentSteps = this.getCurrentSteps - this.getTotalSteps;
    this.setCurrentStatus = this.getInitialStatus;
  }

  move(face) {
    this.activate();

    return new Promise((resolve, reject) => {
      const functionListener = this.movingListener.bind(this, resolve, face);
      this.setHandler = functionListener;
      this.getPiece.addEventListener("click", functionListener);
      /!*document.getElementById(this.getPieceID).addEventListener("click", function __listener() {
          this.remove();
          commonAction(parent, !(!parent.getBoardPosition % 13), face, 1, face);

          resolve(resultTuple);
      });*!/
    });
  }

  cutPiece() {

  }

  movePiece(face) {

  }
}

class Player {
  constructor(color) {
    this.color = color;
    this.visibility = false;
    this.listOfPieces = [];
    this.face = 0;
    this.listOfCellPromises = [];
    this.handler = null;
    this.consecutiveSixes = 0;

    for (let i = 0; i < 4; i++) {
      let piece = new Piece(color, i);
      this.listOfPieces.push(piece);
    }
  }

  get getNumberOfMaximumConsecutiveSixes () {
    return 3;
  }

  get getNumberOfConsecutiveSixes() {
    return this.consecutiveSixes;
  }

  set setNumberOfConsecutiveSixes(six) {
    this.consecutiveSixes = six;
  }

  get getHandler() {
    return this.handler;
  }

  set setHandler(handler) {
    this.handler = handler;
  }

  set setVisibility(state) {
    for (let piece of this.getListOfPieces) {
      piece.setVisibility = !state;
    }
  }

  get getPlayerButton() {
    return document.getElementById(houseColorArray[this.color] + "Button");
  }

  get getColor() {
    return this.color;
  }

  get getListOfPieces() {
    return this.listOfPieces
  }

  get getListOfPromises() {
    return this.listOfCellPromises;
  }

  set setListOfPromises(emptyList) {
    this.listOfCellPromises = emptyList;
  }

  alertTest() {
    alert(houseColorArray[this.getColor]);
  }

  listenerMethod(resolve) { // __listener works when clicked on a player dice & it removes click and makes a promise list
    this.getPlayerButton.removeEventListener("click", this.getHandler); // this is the saved original handler that was passed in rollDiceNew

    let face = rollDie();
    this.getPlayerButton.nextElementSibling.innerText = face;

    //face = 6;

    for (let piece of this.getListOfPieces) {
      if (piece.getCurrentStatus === piece.getInitialStatus && face === 6) {
        this.getListOfPromises.push(piece.openNew()); // add the opening act in the promise list, returns the piece coordinate
      } else if (piece.getCurrentStatus === piece.getProgressStatus && piece.getCurrentSteps - face === 0) {
        piece.close(face);
      } else if (piece.getCurrentStatus === piece.getProgressStatus && piece.getCurrentSteps - face !== 0) {
        this.getListOfPromises.push(piece.move(face));
      } else if (piece.getCurrentStatus === piece.getProgressStatus && piece.getBoardPosition + face < 52 && ludoBoard[piece.getBoardPosition]) {
        piece.surrender();
      } else {
        this.getListOfPromises.push(
          new Promise((resolve, reject) => {
            resolve([-1, -1]);
          }));
      }
    }

    Promise.race(this.getListOfPromises).then((value) => {
      let nextPlayerIndex = this.getColor;

      /!*console.log(value);
      for (let i = 0; i < 4; i++) {
          if (i !== value[0]) {
              //console.log(i);
              this.getListOfPieces[i].removeClick();
          }
      }*!/

      for (let piece of this.getListOfPieces) {
        if (piece.getPieceNumber === value[0]) continue;
        piece.removeClick();
        piece.deactivate();
      }

      if (face === 6) this.setNumberOfConsecutiveSixes = (this.getNumberOfConsecutiveSixes + 1) % this.getNumberOfMaximumConsecutiveSixes;
      else this.setNumberOfConsecutiveSixes = 0;

      if (!this.getNumberOfConsecutiveSixes) {
        nextPlayerIndex += 1;
        nextPlayerIndex %= 4;
      }

      this.setListOfPromises = [];
      resolve(nextPlayerIndex);
    });
  }

  rollDiceNew() {
    return new Promise((resolve, reject) => { // resolves when an eligible piece is clicked
      const listenerFunction = this.listenerMethod.bind(this, resolve);
      this.setHandler = listenerFunction; // store the handler for future removal this needs to be original as creating a same handler won't work
      this.getPlayerButton.addEventListener("click", listenerFunction);
    });
  }
}

class Board {
  constructor(playerCount) {
    this.colorArray = [[0, 2], [0, 1, 2], [0, 1, 2, 3]];
    this.playerArray = [];
    this.numberOfPlayers = playerCount;
    this.activePlayer = null;

    for (let i = 0; i < this.getNumberOfPlayers; i++) {
      let player = new Player(this.getColorArray[playerCount - 2][i]);
      player.setVisibility = true;
      this.getPlayerArray.push(player);
    }
  }

  get getColorArray() {
    return this.colorArray;
  }

  set setActivePlayer(activePlayer) {
    this.activePlayer = activePlayer;
  }

  get getActivePlayer() {
    return this.activePlayer;
  }

  async play() {
    let playerCount = this.getNumberOfPlayers;
    this.setActivePlayer = this.getPlayerArray[0];
    //let turn = 0;

    while (playerCount > 1) {
      let activePlayerIndex = await this.getActivePlayer.rollDiceNew(); // waits for the player click on a piece of choice
      this.setActivePlayer = this.getPlayerArray[activePlayerIndex]; // updates the active player according to the previous move
    }

    return 0;
  }

  get getNumberOfPlayers() {
    return this.numberOfPlayers;
  }

  get getPlayerArray() {
    return this.playerArray;
  }
}

let testBoard = new Board(4);

testBoard.play().then((value) => {
  //console.log(value);
});
*/


/*
N
O
O
o
o
o
o
　　　　 。
　　　 。
.
.
.
.*/
