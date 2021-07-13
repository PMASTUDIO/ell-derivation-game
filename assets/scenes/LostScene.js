
// You can write more code here

/* START OF COMPILED CODE */

class LostScene extends Phaser.Scene {
	
	constructor() {
		super("LostScene");
		
		/* START-USER-CTR-CODE */
		this.videosLinks = [
			"https://www.youtube.com/embed/3ZllGmspqnw",
			"https://www.youtube.com/embed/TEmBTVLIL1Y",
			"https://www.youtube.com/embed/_SVyQDDBzEE",
			"https://www.youtube.com/embed/b4xWOXLCFsk",
			"https://www.youtube.com/embed/Fu32fEiXhyI",
			"https://www.youtube.com/embed/AsxgvQKRhHA",
			"https://www.youtube.com/embed/uToPiNZYLc8",
			"https://www.youtube.com/embed/1NKa3NquubU"
		];
		this.sceneToReturn = undefined
		/* END-USER-CTR-CODE */
	}
	
	editorCreate() {
		
		// rectangle
		const rectangle = this.add.rectangle(406, 303, 800, 600);
		rectangle.scaleX = 1.043615810597977;
		rectangle.scaleY = 1.0459684329963244;
		rectangle.isFilled = true;
		rectangle.fillColor = 0;
		
		// text
		const text = this.add.text(76, 32, "", {});
		text.scaleX = 0.512638734171047;
		text.scaleY = 0.512638734171047;
		text.text = "Você perdeu, mas duolingo é\nmisericordioso, Tente novamente...";
		text.setStyle({"fontSize":"64px"});
		
		// rectangle_1
		const rectangle_1 = this.add.rectangle(392, 164, 128, 128);
		rectangle_1.isFilled = true;
		
		// return_btn
		const return_btn = this.add.image(393, 162, "return_arrow");
		return_btn.scaleX = 0.24581121740766926;
		return_btn.scaleY = 0.24581121740766926;
		
		this.return_btn = return_btn;
	}
	
	/** @type {Phaser.GameObjects.Image} */
	return_btn;
	
	/* START-USER-CODE */
	
	// Write your code here
	
	create(data) {
	
		this.editorCreate();

		this.sceneToReturn = data.sceneToReturn

		this.randomVideoI = Math.floor(Math.random() * this.videosLinks.length)

		const video = this.add
			.dom(350, 400)
			.createFromHTML(
				`<iframe width="560" height="315" src="${this.videosLinks[this.randomVideoI]}?rel=0&version=3&autoplay=1&controls=0&showinfo=0&loop=1" title="Meme Player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; autoplay" allowfullscreen></iframe>`
			);

		this.return_btn.setInteractive().on('pointerdown', (ptr) => {
			this.scene.start(this.sceneToReturn, { reset: true })
		})
	}
	
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
