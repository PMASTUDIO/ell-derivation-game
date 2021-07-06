
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
		txt_label.text = "E aí, consegue um desafio mais intelectual?";
		txt_label.setStyle({"fixedHeight":50,"fontSize":"26px","fontStyle":"bold"});
		txt_label.setPadding({"left":2});
		
		// card
		const card = new Card(this, 112, 160);
		this.add.existing(card);
		
		// card_1
		const card_1 = new Card(this, 304, 160);
		this.add.existing(card_1);
		
		// card_1_1
		const card_1_1 = new Card(this, 496, 160);
		this.add.existing(card_1_1);
		
		// card_1_1_1
		const card_1_1_1 = new Card(this, 688, 160);
		this.add.existing(card_1_1_1);
		
		// card_2
		const card_2 = new Card(this, 112, 384);
		this.add.existing(card_2);
		
		// card_3
		const card_3 = new Card(this, 304, 384);
		this.add.existing(card_3);
		
		// card_4
		const card_4 = new Card(this, 496, 384);
		this.add.existing(card_4);
		
		// card_5
		const card_5 = new Card(this, 688, 384);
		this.add.existing(card_5);
		
		// lists
		const cards = [card_5, card_4, card_3, card_2, card, card_1, card_1_1, card_1_1_1]
		
		// card (components)
		const cardQuestionHolder = QuestionHolder.getComponent(card);
		cardQuestionHolder.label = "My question for 0";
		card.emit("components-awake");
		
		// card_1 (components)
		const card_1QuestionHolder = QuestionHolder.getComponent(card_1);
		card_1QuestionHolder.label = "My answer for 0";
		card_1.emit("components-awake");
		
		// card_1_1 (components)
		const card_1_1QuestionHolder = QuestionHolder.getComponent(card_1_1);
		card_1_1QuestionHolder.itemName = "question1";
		card_1_1QuestionHolder.label = "My Question 1";
		card_1_1.emit("components-awake");
		
		// card_1_1_1 (components)
		const card_1_1_1QuestionHolder = QuestionHolder.getComponent(card_1_1_1);
		card_1_1_1QuestionHolder.itemName = "question1";
		card_1_1_1QuestionHolder.label = "My answer for 1";
		card_1_1_1.emit("components-awake");
		
		// card_2 (components)
		const card_2QuestionHolder = QuestionHolder.getComponent(card_2);
		card_2QuestionHolder.itemName = "question2";
		card_2QuestionHolder.label = "my question for 2";
		card_2.emit("components-awake");
		
		// card_3 (components)
		const card_3QuestionHolder = QuestionHolder.getComponent(card_3);
		card_3QuestionHolder.itemName = "question2";
		card_3QuestionHolder.label = "My answer for 2";
		card_3.emit("components-awake");
		
		// card_4 (components)
		const card_4QuestionHolder = QuestionHolder.getComponent(card_4);
		card_4QuestionHolder.itemName = "question3";
		card_4QuestionHolder.label = "My question for 3";
		card_4.emit("components-awake");
		
		// card_5 (components)
		const card_5QuestionHolder = QuestionHolder.getComponent(card_5);
		card_5QuestionHolder.itemName = "question3";
		card_5QuestionHolder.label = "my question for 3";
		card_5.emit("components-awake");
		
		this.cards = cards;
	}
	
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
		const second = this.selectedBoxes.pop()
		const first = this.selectedBoxes.pop()

		// NO MATCH
		if(first.item !== second.item){
			QuestionHolder.getComponent(first.card).hide()
			QuestionHolder.getComponent(second.card).hide()
			return;
		}

		// WE HAVE A MATCH
		this.matchesCount++;
		this.time.delayedCall(300, () => {
			first.card.setTint('0x8feb34')
			second.card.setTint('0x8feb34')

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

		
		this.selectedBoxes.push({
			card: card,
			item: itemHolder.itemName
		})

		itemHolder.reveal(() => {
			if(this.selectedBoxes.length < 2){
				return
			}

			this.checkForMatch();
		})
		
	}

	create() {
	
		this.editorCreate();

		this.cards.forEach((c, i) => {
			this.generateCardLabel(QuestionHolder.getComponent(c).label, QuestionHolder.getComponent(c).label)

			c.setInteractive().on('pointerdown', (ptr) => {
				this.handleCardSelection(c)
			})
		})
	  
	}
	
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
