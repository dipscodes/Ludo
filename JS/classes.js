const ludo = () => {
	"use strict";
	const houseColorArray = ["green", "yellow", "blue", "red"];

	function rollDie() {
		return Math.floor((Math.random() * 6) + 1);
	}

	function cutPieces (boardPositionClass, pieceID, color, pieceNumber) {
		let cutPieces = document.querySelectorAll("div[data-boardpositionclass = " + boardPositionClass + "]");
		let numberOfOverlappedPieces = cutPieces.length;
		let cutPiecesArray = [];

		for (let index = 0; index < numberOfOverlappedPieces; index++) {
			cutPiecesArray[index] = [parseInt(cutPieces[index].getAttribute("data-piece")),
									parseInt(cutPieces[index].getAttribute("data-color"))];
		}

		return cutPiecesArray;
	}

	function pieceAtIndex(boardPositionClass, pieceID, color, pieceNumber) {
		let line1 = '<div class="cells ' + boardPositionClass + ' white_border circle-border"></div>';
		let line2 = '<div class="cells ' + boardPositionClass + ' ' + houseColorArray[color] + '_piece circle-clip"></div>';
		let pieceElement = document.createElement("div");
		pieceElement.setAttribute("id", pieceID);
		pieceElement.setAttribute("data-piece", pieceNumber);
		pieceElement.setAttribute("data-color", color);
		pieceElement.setAttribute("data-boardpositionclass", boardPositionClass);
		pieceElement.innerHTML = line1 + line2;

		document.getElementById("board").appendChild(pieceElement);
	}

	function pieceAtHouse(placeIndex, pieceID, color) {
		let house = ["one", "two", "three", "four"];
		let squareClass = "div.square." + "square-" + house[placeIndex] + "." + houseColorArray[color];
		let line1 = '<div class="square square-' + house[placeIndex] + ' black_grey circle-border"></div>';
		let line2 = '<div class="square square-' + house[placeIndex] + ' ' + houseColorArray[color] + '_piece circle-clip"></div>';

		let pieceElement = document.createElement("div");
		pieceElement.setAttribute("id", pieceID);
		pieceElement.innerHTML = line1 + line2;

		document.querySelectorAll(squareClass)[0].after(pieceElement);
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
			this.absolutePosition = -1;
			pieceAtHouse(this.pieceNumber, this.pieceID, this.color);
			document.getElementById(this.pieceID).hidden = true;
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
			document.getElementById(this.getPieceID).hidden = !state;
		}

		get getTotalSteps() {
			return 52;
		}

		get getCurrentSteps() {
			return this.currentSteps;
		}

		set setCurrentSteps(face) {
			let temp = this.getCurrentSteps;
			if (Number.isInteger(face) /*&& face >= 1 && face <= 6*/) {
				temp -= face;
				if (temp < 0) {
					temp += 5;
					if (!temp) { this.setCurrentStatus = this.getFinalStatus; }
				}
			} else if (face === 50) { temp = face; }

			if (temp >= 0) { this.currentSteps = temp; }
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
			if (!condition) { this.currentStatus = status; }
		}

		get getColor() {
			return this.color;
		}

		get getBoardPosition() {
			return this.boardPosition;
		}

		set setBoardPosition(dice) {
			this.boardPosition = (this.boardPosition + dice) % this.getTotalSteps;
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

		set setAbsolutePosition(absolutePosition) {
			this.absolutePosition = absolutePosition;
		}

		get getAbsolutePosition() {
			return this.absolutePosition;
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

		removeClick() {
			this.getPiece.removeEventListener("click", this.getHandler);
		}

		open() {
			this.activate();

			return new Promise((resolve, reject ) => {
				const listenerFunction = this.openingListener.bind(this, resolve);
				this.setHandler = listenerFunction;
				this.getPiece.addEventListener("click", listenerFunction);
			});
		}

		openingListener(resolve) {
			this.getPiece.remove();
			this.setVulnerability = false;
			this.setCurrentSteps = 50;
			this.setCurrentStatus = 1;
			this.setBoardPosition = 0;

			let boardPosition = (this.getBoardPosition < 10) ? "C0" + this.getBoardPosition : "C" + this.getBoardPosition;
			pieceAtIndex(boardPosition, this.getPieceID, this.getColor, this.getPieceNumber);

			resolve([this.getPieceNumber, this.getColor, []]);
		}

		close(face) {
			this.activate();

			return new Promise((resolve, reject) => {
				const functionListener = this.closingListener.bind(this, resolve, face);
				this.setHandler = functionListener;
				this.getPiece.addEventListener("click", functionListener);
			});
		}

		closingListener(resolve, face) {
			this.getPiece.remove();
			this.setVulnerability = false;
			this.setCurrentSteps = face;
			this.setCurrentStatus = this.getFinalStatus;
			this.setBoardPosition = face;

			resolve([this.getPieceNumber, this.getColor, []]);
		}

		move(face) {
			this.activate();

			return new Promise((resolve, reject) => {
				const functionListener = this.movingListener.bind(this, resolve, face);
				this.setHandler = functionListener;
				this.getPiece.addEventListener("click", functionListener);
			});
		}

		movingListener(resolve, face) {
			this.getPiece.remove();
			this.setVulnerability = !(!this.getBoardPosition % 13);
			this.setCurrentSteps = face;
			this.setCurrentStatus = 1;
			this.setBoardPosition = face;

			let value = [];

			if (this.getAbsolutePosition + face > 50 && this.getAbsolutePosition + face < 56) {
				let boardPositionClass = this.getPieceColor.charAt(0) + (this.getAbsolutePosition + face - 50);
				this.setAbsolutePosition = this.getAbsolutePosition + face;
				pieceAtIndex(boardPositionClass, this.getPieceID, this.getColor);
			} else {
				let boardPositionClass = (this.getBoardPosition < 10) ? "C0" + this.getBoardPosition : "C" + this.getBoardPosition;
				value = cutPieces(boardPositionClass, this.getPieceID, this.getColor, this.getPieceNumber);
				pieceAtIndex(boardPositionClass, this.getPieceID, this.getColor, this.getPieceNumber);
				this.setAbsolutePosition = (this.getBoardPosition + 13 * ((4 - this.getColor) % 4)) % this.getTotalSteps;
			}

			resolve([this.getPieceNumber, this.getColor, value]);
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
			this.numberOfAvailablePieces = 4;

			for (let pieceNumber = 0; pieceNumber < this.getNumberOfAvailablePieces; pieceNumber++) {
				let piece = new Piece(color, pieceNumber);
				this.listOfPieces.push(piece);
			}
		}

		get getNumberOfAvailablePieces () {
			return this.numberOfAvailablePieces;
		}

		set setNumberOfAvailablePieces (currentNumberOfAvailablePieces) {
			this.numberOfAvailablePieces = currentNumberOfAvailablePieces;
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
			for (let piece of this.getListOfPieces)	piece.setVisibility = state;
		}

		get getPlayerButton() {
			return document.getElementById(houseColorArray[this.color] + "Button");
		}

		get getColor() {
			return this.color;
		}

		get getListOfPieces() {
			return this.listOfPieces;
		}

		get getListOfPromises() {
			return this.listOfCellPromises;
		}

		set setListOfPromises(emptyList) {
			this.listOfCellPromises = emptyList;
		}

		get setListOfPromises() {
			return this.listOfCellPromises;
		}

		replacePiece(color, pieceNumber) {
			if (!this.getListOfPieces[pieceNumber].getVulnerability) return;
			this.getListOfPieces[pieceNumber].getPiece.remove();

			let piece = new Piece(color, pieceNumber);
			piece.setVisibility = true;
			this.getListOfPieces[pieceNumber] = piece;
		}

		listenerMethod(resolve, activePlayerIndex, numberOfPlayers) {

			this.getPlayerButton.removeEventListener("click", this.getHandler);

			let face = rollDie();
			face = parseInt(this.getPlayerButton.nextElementSibling.value);

			if (face === 6) this.setNumberOfConsecutiveSixes = (this.getNumberOfConsecutiveSixes + 1) % this.getNumberOfMaximumConsecutiveSixes;
			else this.setNumberOfConsecutiveSixes = 0;

			if (face === 6 && this.getNumberOfConsecutiveSixes === 0)	face = 5;

			let noAvailableMoves = 0;

			for (let piece of this.getListOfPieces) {
				if (piece.getCurrentStatus === piece.getInitialStatus && face === 6) {
					this.getListOfPromises.push(piece.open());
				} else if (piece.getCurrentStatus === piece.getProgressStatus && piece.getAbsolutePosition + face < 56) {
					this.getListOfPromises.push(piece.move(face));
				} else if (piece.getCurrentStatus === piece.getProgressStatus && piece.getAbsolutePosition + face === 56) {
					this.getListOfPromises.push(piece.close(face));
				} else if (piece.getCurrentStatus === piece.getFinalStatus) {
				} else {
					noAvailableMoves += 1;
				}
			}

			if (noAvailableMoves === this.getNumberOfAvailablePieces) {
				this.getListOfPromises.push(new Promise((resolve, reject) => { resolve([-1, -1, []]); }));
			}

			Promise.race(this.getListOfPromises).then((value) => {
				let nextPlayerIndex = activePlayerIndex;
				let closingConfirmation = false;

				let color;
				try {
					color = value[2][0][1];
				} catch (error) {
					color = null;
				}

				console.log(value[2]);

				for (let piece of this.getListOfPieces) {
					try {
						piece.removeClick();
						piece.deactivate();
					} catch (error) {
						if (piece.getCurrentStatus === piece.getFinalStatus && piece.getPieceNumber === value[0]) {
							this.setNumberOfAvailablePieces = this.getNumberOfAvailablePieces - 1;
							this.setNumberOfConsecutiveSixes = 0;
							closingConfirmation = true;
						}
					}
				}

				this.setListOfPromises = [];

				if(!(closingConfirmation || face === 6)) {
					nextPlayerIndex += 1;
					nextPlayerIndex %= numberOfPlayers;
				}

				resolve([nextPlayerIndex, color, value[2]]);
			});
		}

		rollDiceNew(activePlayerIndex, numberOfPlayers) {
			return new Promise((resolve, reject) => {
				const listenerFunction = this.listenerMethod.bind(this, resolve, activePlayerIndex, numberOfPlayers);
				this.setHandler = listenerFunction;
				this.getPlayerButton.addEventListener("click", listenerFunction);
			});
		}
	}

	class Board {
		constructor(playerCount) {
			this.colorArray = [null, [0], [0, 2], [0, 1, 2], [0, 1, 2, 3]];
			const playerCombinationList = {
				2:[0,2], 7:[1,3],
				3:[0,1,2], 12:[1,2,3], 5:[2,3,0], 4:[3,0,1],
				6:[0,1,2,3]
			};

			this.playerList = [];
			this.numberOfPlayers = playerCount;
			this.activePlayer = null;
			this.activePlayerIndex = 0;

			for (let iterate = 0; iterate < this.getNumberOfPlayers; iterate++) {
				let player = new Player(this.getColorArray[playerCount][iterate]);
				player.setVisibility = true;
				this.getPlayerArray.push(player);
			}
		}

		get getActivePlayerIndex() {
			return this.activePlayerIndex;
		}

		set setActivePlayerIndex(index) {
			this.activePlayerIndex = index;
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

			while (playerCount >= 1) {
				let nextActivePlayerInfo = await this.getActivePlayer.rollDiceNew(this.getActivePlayerIndex, this.getNumberOfPlayers);

				this.setActivePlayerIndex = nextActivePlayerInfo[0];
				let listOfCutPieces = nextActivePlayerInfo[2];
				let cutPieceColor = nextActivePlayerInfo[1];

				for (let player of this.getPlayerArray) {
					if (player.getColor !== cutPieceColor) continue;
					for (let piece of listOfCutPieces) {
						player.replacePiece(cutPieceColor, piece[0]);
					}
					break;
				}

				if (this.getActivePlayer.getNumberOfAvailablePieces === 0) {

				}

				this.setActivePlayer = this.getPlayerArray[this.getActivePlayerIndex];
			}

			return 0;
		}

		get getNumberOfPlayers() {
			return this.numberOfPlayers;
		}

		get getPlayerArray() {
			return this.playerList;
		}
	}

	let testBoard = new Board(2);
	testBoard.play().then((value) => { });
};

window.addEventListener("load", ludo);