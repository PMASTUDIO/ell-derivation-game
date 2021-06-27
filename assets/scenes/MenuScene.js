// You can write more code here

/* START OF COMPILED CODE */

class MenuScene extends Phaser.Scene {
	
	constructor() {
		super("MenuScene");
		
		/* START-USER-CTR-CODE */
    /* END-USER-CTR-CODE */
	}
	
	editorCreate() {
		
		// image
		const image = this.add.image(399, 296, "Blackboard");
		image.scaleX = 1.3168771738286316;
		image.scaleY = 1.7577587566018462;
		
		// btnPlay
		const btnPlay = this.add.sprite(412, 284, "playBtn");
		btnPlay.scaleX = 0.4288998501767396;
		btnPlay.scaleY = 0.4288998501767396;
		
		this.btnPlay = btnPlay;
	}
	
	/** @type {Phaser.GameObjects.Sprite} */
	btnPlay;
	
	/* START-USER-CODE */

  // Write your code here

  create() {
    this.editorCreate();

	console.log(this.btnPlay)

	this.btnPlay.setInteractive().on('pointerup', (pointer) => {
		this.scene.start('IntroDialogue');
	})
  }

  /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
