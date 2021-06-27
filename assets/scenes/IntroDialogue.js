
// You can write more code here

/* START OF COMPILED CODE */

class IntroDialogue extends Phaser.Scene {
	
	constructor() {
		super("IntroDialogue");
		
		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}
	
	editorCreate() {
		
		// btnNext
		const btnNext = this.add.sprite(744, 538, "playBtn");
		btnNext.scaleX = 0.18046466104384898;
		btnNext.scaleY = 0.18046466104384898;
		
		this.btnNext = btnNext;
	}
	
	/** @type {Phaser.GameObjects.Sprite} */
	btnNext;
	
	/* START-USER-CODE */
	
	// Write your code here
	
	create() {
	
		this.editorCreate();

		this.btnNext.setInteractive().on('pointerdown', (ptr) => {
			this.scene.start('DerivationTut')
		})
	}
	
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here