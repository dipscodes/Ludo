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