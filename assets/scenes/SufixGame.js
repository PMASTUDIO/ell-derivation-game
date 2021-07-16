
// You can write more code here

/* START OF COMPILED CODE */

class SufixGame extends Phaser.Scene {
	
	constructor() {
		super("SufixGame");
		
		/* START-USER-CTR-CODE */
		// Write your code here.

		
		this.matchesCount = 0;
		this.selectedBoxes = []
		/* END-USER-CTR-CODE */
	}
	
	editorCreate() {
		
		// rectangle
		const rectangle = this.add.rectangle(395, 286, 128, 128);
		rectangle.scaleX = 7.922313861345967;
		rectangle.scaleY = 6.066237231533458;
		rectangle.isFilled = true;
		rectangle.fillColor = 9999616;
		
		// txt_label
		const txt_label = this.add.text(24, 18, "", {});
		txt_label.text = "E aí, consegue um desafio mais intelectual?\n(jogo da memória)";
		txt_label.setStyle({"fixedHeight":50,"fontSize":"26px","fontStyle":"bold"});
		txt_label.setPadding({"left":2});
		
		// card
		const card = new Card(this, 112, 240);
		this.add.existing(card);
		
		// card_1
		const card_1 = new Card(this, 304, 240);
		this.add.existing(card_1);
		
		// card_1_1
		const card_1_1 = new Card(this, 496, 240);
		this.add.existing(card_1_1);
		
		// card_1_1_1
		const card_1_1_1 = new Card(this, 688, 240);
		this.add.existing(card_1_1_1);
		
		// card_2
		const card_2 = new Card(this, 112, 464);
		this.add.existing(card_2);
		
		// card_3
		const card_3 = new Card(this, 304, 464);
		this.add.existing(card_3);
		
		// card_4
		const card_4 = new Card(this, 496, 464);
		this.add.existing(card_4);
		
		// card_5
		const card_5 = new Card(this, 688, 464);
		this.add.existing(card_5);
		
		// txt_countdown
		const txt_countdown = this.add.text(352, 80, "", {});
		txt_countdown.scaleX = 0.702820375578614;
		txt_countdown.scaleY = 0.702820375578614;
		txt_countdown.text = "60";
		txt_countdown.setStyle({"align":"center","color":"#ffffffff","fontSize":"64px"});
		
		// lists
		const cards = [card_5, card_4, card_3, card_2, card, card_1, card_1_1, card_1_1_1]
		
		// card (components)
		const cardQuestionHolder = QuestionHolder.getComponent(card);
		cardQuestionHolder.label = "“O melhor do \nBrasil é o \nbrasileiro”\numa carta contém \npalavras formadas\npor um sufixo \nsemelhante ao da\npalavra \"mineiro\"";
		card.emit("components-awake");
		
		// card_1 (components)
		const card_1QuestionHolder = QuestionHolder.getComponent(card_1);
		card_1QuestionHolder.itemName = "question1";
		card_1QuestionHolder.label = "Encontre a carta\ncuja palavra é \nformada pelo \nacréscimo de \num sufixo";
		card_1.emit("components-awake");
		
		// card_1_1 (components)
		const card_1_1QuestionHolder = QuestionHolder.getComponent(card_1_1);
		card_1_1QuestionHolder.label = "Cearense, \nItaliano, \nPernambucano,\nParaense";
		card_1_1.emit("components-awake");
		
		// card_1_1_1 (components)
		const card_1_1_1QuestionHolder = QuestionHolder.getComponent(card_1_1_1);
		card_1_1_1QuestionHolder.itemName = "question3";
		card_1_1_1QuestionHolder.label = "Grandieza,\nTolerância";
		card_1_1_1.emit("components-awake");
		
		// card_2 (components)
		const card_2QuestionHolder = QuestionHolder.getComponent(card_2);
		card_2QuestionHolder.itemName = "question3";
		card_2QuestionHolder.label = "Ache a carta \nque contém \npalavras com \nos sinônimos dos \nsufixos de \nsustentabilidade e \nperpetuação, \nRESPECTIVAMENTE\n";
		card_2.emit("components-awake");
		
		// card_3 (components)
		const card_3QuestionHolder = QuestionHolder.getComponent(card_3);
		card_3QuestionHolder.itemName = "question2";
		card_3QuestionHolder.label = "Ache a carta em \nque o par de \nsufixos possui\no mesmo valor \nsemântico dos \nsufixos de boiada\ne dentada\n";
		card_3.emit("components-awake");
		
		// card_4 (components)
		const card_4QuestionHolder = QuestionHolder.getComponent(card_4);
		card_4QuestionHolder.itemName = "question2";
		card_4QuestionHolder.label = "Folhagem,\nFacada";
		card_4.emit("components-awake");
		
		// card_5 (components)
		const card_5QuestionHolder = QuestionHolder.getComponent(card_5);
		card_5QuestionHolder.itemName = "question1";
		card_5QuestionHolder.label = "Rigidez";
		card_5.emit("components-awake");
		
		// txt_countdown (components)
		new Countdown(txt_countdown);
		txt_countdown.emit("components-awake");
		
		this.txt_countdown = txt_countdown;
		this.cards = cards;
	}
	
	/** @type {Phaser.GameObjects.Text} */
	txt_countdown;
	/** @type {Card[]} */
	cards;
	
	/* START-USER-CODE */
	
	// Write your code here

	generateCardLabel = (key, label) => {
		var newText = this.make.text({ 
			add: false,
			x: 0,
			y: 0,
			text: label,
			style: {
				fontSize: '45px',
				fontFamily: 'Arial',
				color: '#000000',
				align: 'center',
				padding: '5',
				maxLines: 8,
				backgroundColor: '#ffffff',
				fixedWidth: '375',
				fixedHeight: '495',
			}
		 })
		
		return this.textures.addCanvas(key, newText.canvas)
	}
	
	checkForMatch = () => {
		const second = this.selectedBoxes[1]
		const first = this.selectedBoxes[0]

		// NO MATCH
		if(first.item !== second.item){
			QuestionHolder.getComponent(first.card).hide()
			QuestionHolder.getComponent(second.card).hide(() => {
				this.selectedBoxes.pop();
				this.selectedBoxes.pop();
			})
			return;
		}

		// WE HAVE A MATCH
		this.matchesCount++;
		this.time.delayedCall(300, () => {
			first.card.setTint('0x8feb34')
			second.card.setTint('0x8feb34')
			
			this.selectedBoxes.pop();
			this.selectedBoxes.pop();

			// TOTAL MATCHES SHOULD BE 4 (4 PAIRS)
			if(this.matchesCount >= 4){
				this.add.image(373.1230665371493, 340.8866708785447, "gol");
				this.time.delayedCall(2000, () => { this.scene.start('PrefixTut') })
			}
		})
	}

	handleCardSelection = (card) => {
		const itemHolder = QuestionHolder.getComponent(card)

		if(!itemHolder){
			return
		}		

		if(itemHolder.isRevealed){
			return
		}

		if(this.selectedBoxes.length > 1){
			return
		}
		
		this.selectedBoxes.push({
			card: card,
			item: itemHolder.itemName
		})

		this.sound.play('card-flip')

		itemHolder.reveal(() => {
			if(this.selectedBoxes.length < 2){
				return
			}

			this.checkForMatch();
		})
		
		console.log(this.selectedBoxes)
	}

	timeOut = () => {
		this.txt_countdown.setColor('0xff0000')
		this.time.delayedCall(3000, () => {
			this.scene.start("LostScene", { sceneToReturn: 'SufixGame' })
		})
	}

	create(data) {
	
		if(data.reset){
			this.matchesCount = 0;
			this.selectedBoxes = []
		}

		this.editorCreate();

		this.cards.forEach((c, i) => {
			this.generateCardLabel(QuestionHolder.getComponent(c).label, QuestionHolder.getComponent(c).label)

			c.setInteractive().on('pointerdown', (ptr) => {
				this.handleCardSelection(c)
			})
		})
		
		Countdown.getComponent(this.txt_countdown).start(this.timeOut, 60000)
		
	}
	
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
