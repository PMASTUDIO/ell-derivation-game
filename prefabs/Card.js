
// You can write more code here

/* START OF COMPILED CODE */

class Card extends Phaser.GameObjects.Image {
	
	constructor(scene, x, y, texture, frame) {
		super(scene, x, y, texture || "figurinha", frame);
		
		this.scaleX = 0.26615496716484355;
		this.scaleY = 0.26615496716484355;
		
		// this (components)
		new QuestionHolder(this);
		
		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}
	
	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
