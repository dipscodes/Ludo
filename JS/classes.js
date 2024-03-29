const ludo = () => {
	"use strict";
	const houseColorArray = ["green", "yellow", "blue", "red"];

	function makeStar (rank, player) {
		let positionList = ["CGW", "CYW", "CBW", "CRW"];
		let colorList = ["Gold", "Silver", "#cd7f32", "Whitesmoke"];
		let color = colorList[player];
		let position = positionList[rank];

		let star = document.createElement("div");
		star.setAttribute("class", position);
		star.style.color = color;

		let starIcon = document.createElement("i");
		starIcon.setAttribute("class", "fa fa-star fa-5x");
		starIcon.setAttribute("aria-hidden", "true");
		star.appendChild(starIcon);

		document.getElementById("board").appendChild(star);

		return star;
	}

	/*function rollDie() {
		return Math.floor((Math.random() * 6) + 1);
	}*/

	function cutPieces (boardPositionClass, vulnerability, color) {
		if (!vulnerability) return [];

		let cutPieces = document.querySelectorAll("div[data-boardpositionclass = " + boardPositionClass + "]");
		let numberOfOverlappedPieces = cutPieces.length;
		let cutPiecesArray = [];

		for (let index = 0; index < numberOfOverlappedPieces; index++) {
			if (color === parseInt(cutPieces[index].getAttribute("data-color"))) break;
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
			this.pieceColor = houseColorArray[this.color];
			this.pieceNumber = pieceNumber
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

			return new Promise((resolve/*, reject*/) => {
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
			this.setAbsolutePosition = 0;

			for (let piece of ludoBoard.getPlayerArray[this.getColor].getListOfPieces) {
				try {
					piece.removeClick();
					piece.deactivate();
				} catch (error) {}
			}

			let boardPosition = (this.getBoardPosition < 10) ? "C0" + this.getBoardPosition : "C" + this.getBoardPosition;
			pieceAtIndex(boardPosition, this.getPieceID, this.getColor, this.getPieceNumber);

			resolve([this.getPieceNumber, this.getColor, []]);
		}

		close(face) {
			this.activate();

			return new Promise((resolve/*, reject*/) => {
				const functionListener = this.closingListener.bind(this, resolve, face);
				this.setHandler = functionListener;
				this.getPiece.addEventListener("click", functionListener);
			});
		}

		closingListener(resolve, face) {
			let boardPosition = this.getBoardPosition;
			let absolutePosition = this.getAbsolutePosition;
			let timeOut = 0;
			let boardPositionClass = this.getPiece.getAttribute("data-boardPositionClass");
			let newBoardPositionClass;

			this.setVulnerability = false;
			this.setCurrentSteps = face;
			this.setCurrentStatus = this.getFinalStatus;
			this.setBoardPosition = face;
			this.setAbsolutePosition = this.getAbsolutePosition + face;

			for (let piece of ludoBoard.getPlayerArray[this.getColor].getListOfPieces) {
				try {
					piece.removeClick();
					piece.deactivate();
				} catch (error) {}
			}

			for (let step = 0; step < face; step++) {
				setTimeout(() => {
					let value = this.animate(absolutePosition, boardPosition, boardPositionClass, newBoardPositionClass);
					absolutePosition = value[0];
					boardPosition = value[1];
					newBoardPositionClass = value[2];
					boardPositionClass = newBoardPositionClass;

					if (step === face - 1) {
						setTimeout(()=>{
							this.getPiece.remove();
							resolve([this.getPieceNumber, this.getColor, [], true]);
						}, 50);
					}
				}, timeOut);

				timeOut += 200;
			}
		}

		move(face) {
			this.activate();

			return new Promise((resolve/*, reject*/) => {
				const functionListener = this.movingListener.bind(this, resolve, face);
				this.setHandler = functionListener;
				this.getPiece.addEventListener("click", functionListener);
			});
		}

		movingListener(resolve, face) {
			let pieceHTML = this.getPiece;
			let timeOut = 0;
			let boardPositionClass, newBoardPositionClass;
			let absolutePosition = this.getAbsolutePosition;
			let boardPosition = this.getBoardPosition;

			this.setCurrentSteps = face;
			this.setCurrentStatus = 1;
			this.setAbsolutePosition = (this.getAbsolutePosition + face) % 57; //needs work. think to generalise.
			this.setBoardPosition = face;
			this.setVulnerability = Boolean(this.getBoardPosition % 13);

			let foo = (this.getBoardPosition < 10) ? "C0" + this.getBoardPosition : "C" + this.getBoardPosition;
			let cutablePieces = cutPieces(foo, this.getVulnerability, this.getColor);

			for (let piece of ludoBoard.getPlayerArray[this.getColor].getListOfPieces) {
				try {
					piece.removeClick();
					piece.deactivate();
				} catch (error) {}
			}

			boardPositionClass = pieceHTML.getAttribute("data-boardPositionClass");
			for (let step = 0; step < face; step++) {
				setTimeout(() => {
					let value = this.animate(absolutePosition, boardPosition, boardPositionClass, newBoardPositionClass);
					//console.log(value);
					absolutePosition = value[0];
					boardPosition = value[1];
					newBoardPositionClass = value[2];
					boardPositionClass = newBoardPositionClass;

					if (step === face - 1) setTimeout(()=>{resolve([this.getPieceNumber, this.getColor, cutablePieces])}, 50);
				}, timeOut);
				timeOut += 200;
			}
		}

		animate(absolutePosition, boardPosition, boardPositionClass, newBoardPositionClass) {
			if (absolutePosition + 1 > 50 && absolutePosition + 1 < 57) {
				absolutePosition = absolutePosition + 1;
				if (absolutePosition === 56) return [null, null, null];
				newBoardPositionClass = this.getPieceColor.charAt(0) + (absolutePosition - 50);
			} else {
				boardPosition = (boardPosition + 1) % 52;
				newBoardPositionClass = (boardPosition < 10) ? "C0" + boardPosition : "C" + boardPosition;
				absolutePosition = (absolutePosition + 1) % 56;//(boardPosition + 13 * ((4 - this.getColor) % 4)) % this.getTotalSteps;
			}

			this.getPiece.children[0].classList.replace(boardPositionClass, newBoardPositionClass);
			this.getPiece.children[1].classList.replace(boardPositionClass, newBoardPositionClass);
			this.getPiece.setAttribute("data-boardpositionclass", newBoardPositionClass);

			return [absolutePosition, boardPosition, newBoardPositionClass];
		}
	}

	class Player {
		constructor(color) {
			this.color = color;
			//this.visibility = false;
			this.listOfPieces = [];
			//this.face = 0;
			this.listOfCellPromises = [];
			this.handler = null;
			this.consecutiveSixes = 0;
			this.numberOfAvailablePieces = 4;

			for (let pieceNumber = 0; pieceNumber < this.getNumberOfAvailablePieces; pieceNumber++) {
				let piece = new Piece(color, pieceNumber);
				this.listOfPieces.push(piece);
			}
		}

		get getColorName () {
			return houseColorArray[this.getColor];
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
			//this.visibility = state;
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

		/*get setListOfPromises() {
			return this.listOfCellPromises;
		}*/

		replacePiece(color, pieceNumber) {
			if (!this.getListOfPieces[pieceNumber].getVulnerability) return;
			this.getListOfPieces[pieceNumber].getPiece.remove();

			let piece = new Piece(color, pieceNumber);
			piece.setVisibility = true;
			this.getListOfPieces[pieceNumber] = piece;
		}

		listenerMethod(resolve) {
			this.getPlayerButton.removeEventListener("click", this.getHandler);
			let button = this.getPlayerButton;

			for (let c of button.children) c.classList.remove("side-" + this.getColorName);
			for (let c of button.children) c.classList.add("side-" + this.getColorName + "-grey");

			function rollDice(button, roll) {
				for (let side = 1; side <= 6; side++) {
					button.classList.remove('show-' + side);
					if (roll === side)	button.classList.add('show-' + side);
				}
			}

			let face = Math.floor((Math.random() * 6) + 1);
			let noAvailableMoves = 0;

			if (face === 6) this.setNumberOfConsecutiveSixes = (this.getNumberOfConsecutiveSixes + 1) % this.getNumberOfMaximumConsecutiveSixes;
			else this.setNumberOfConsecutiveSixes = 0;
			if (face === 6 && this.getNumberOfConsecutiveSixes === 0)	face = 5;

			rollDice(button, face);
			face = parseInt(document.getElementById(this.getColorName + "Input").value);

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
				this.getListOfPromises.push(new Promise((resolve/*, reject*/) => { resolve([-1, -1, []]);}));
			}

			Promise.race(this.getListOfPromises).then((value) => {
				let nextPlayerIndex = 0;
				let closingConfirmation = false;
				this.setListOfPromises = [];

				let color;
				try { color = value[2][0][1];} catch (error) { color = null;}

				if (value[3] !== undefined) {
					this.setNumberOfAvailablePieces = this.getNumberOfAvailablePieces - 1;
					this.setNumberOfConsecutiveSixes = 0;
					closingConfirmation = true;
				}
				if(!(closingConfirmation || face === 6))	nextPlayerIndex = 1;

				resolve([nextPlayerIndex, color, value[2]]);
			});
		}

		rollDiceNew() {
			return new Promise((resolve/*, reject*/) => { // Maybe "reject" can be used to pass a turn.
				const listenerFunction = this.listenerMethod.bind(this, resolve);
				this.setHandler = listenerFunction;
				this.getPlayerButton.addEventListener("click", listenerFunction);
			});
		}
	}

	class Board {
		constructor(playerCount, playerHashedCount) {
			const playerCombinationList = {
				2:[0,null,2,null], 7:[null,1,null,3],
				3:[0,1,2,null], 12:[null,1,2,3], 5:[0,null,2,3], 4:[0,1,null,3],
				6:[0,1,2,3]
			};

			this.colorArray = playerCombinationList[playerHashedCount];
			this.playerArray = [];
			this.numberOfPlayers = playerCount;
			this.activePlayer = null;
			//this.activePlayerIndex = 0;
			this.playerRank = 0;

			for (let iterate of this.colorArray) {
				if (iterate === null) {
					this.playerArray.push(null);
					continue;
				}

				let player = new Player(iterate);
				player.setVisibility = true;
				this.playerArray.push(player);
			}

			document.getElementById("board").style.display = "flex";
		}

		/*get getActivePlayerIndex() {
			return this.activePlayerIndex;
		}

		get getColorArray() {
			return this.colorArray;
		}

		set setActivePlayerIndex(index) {
			this.activePlayerIndex = index;
		}
		*/

		get getActivePlayer() {
			return this.activePlayer;
		}

		get getNumberOfPlayers() {
			return this.numberOfPlayers;
		}

		get getPlayerArray() {
			return this.playerArray;
		}

		get getPlayerRank() {
			return this.playerRank;
		}

		set setActivePlayer(activePlayer) {
			this.activePlayer = activePlayer;
		}

		set setNumberOfPlayers(numberOfPlayers) {
			this.numberOfPlayers = numberOfPlayers;
		}

		set setPlayerRank(rank) {
			this.playerRank = rank;
		}

		async play() {
			let activePlayerIndex = 0;
			this.setActivePlayer = this.getPlayerArray[activePlayerIndex];

			while (this.getNumberOfPlayers >= 1) {
				try {
					for (let child of this.getActivePlayer.getPlayerButton.children) child.classList.remove("side-" + this.getActivePlayer.getColorName + "-grey");
					for (let child of this.getActivePlayer.getPlayerButton.children) child.classList.add("side-" + this.getActivePlayer.getColorName);

					let nextActivePlayerInfo = await this.getActivePlayer.rollDiceNew();
					let playerOffset = nextActivePlayerInfo[0];
					let cutPieceColor = nextActivePlayerInfo[1];
					let listOfCutPieces = nextActivePlayerInfo[2];

					for (let player of this.getPlayerArray) {
						if (player === null || player.getColor !== cutPieceColor)	continue;
						for (let piece of listOfCutPieces) player.replacePiece(cutPieceColor, piece[0]);
						playerOffset = 0;
						break;
					}

					if (this.getActivePlayer.getNumberOfAvailablePieces === 0) {
						makeStar(activePlayerIndex, this.getPlayerRank);

						this.getPlayerArray[activePlayerIndex] = null;
						this.setNumberOfPlayers = this.getNumberOfPlayers - 1;
						this.setPlayerRank = this.getPlayerRank + 1;

						playerOffset = 1;

						if (this.getNumberOfPlayers === 0) break;
					}

					activePlayerIndex = (activePlayerIndex + playerOffset) % 4;
				} catch (e) {
					activePlayerIndex = (activePlayerIndex + 1) % 4;
				} finally {
					this.setActivePlayer = this.getPlayerArray[activePlayerIndex];
				}
			}
			return 0;
		}
	}

	const ludoBoard = new Board(4,6);
	ludoBoard.play().then((value) => {
		console.log(value);
	});
};

window.addEventListener("load", ludo);