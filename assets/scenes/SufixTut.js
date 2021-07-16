// You can write more code here

/* START OF COMPILED CODE */

class SufixTut extends Phaser.Scene {
	
	constructor() {
		super("SufixTut");
		
		/* START-USER-CTR-CODE */
    // Write your code here.
    /* END-USER-CTR-CODE */
	}
	
	editorCreate() {
		
		// image
		const image = this.add.image(407, 296, "Blackboard");
		image.scaleX = 1.4298172920948304;
		image.scaleY = 1.767829323009384;
		
		// txt_title
		const txt_title = this.add.text(23, 11, "", {});
		txt_title.text = "Treino 2 - Sufixo";
		txt_title.setStyle({"fontSize":"42px"});
		
		// btnNext
		const btnNext = this.add.sprite(744, 542, "playBtn");
		btnNext.scaleX = 0.16163694558756214;
		btnNext.scaleY = 0.16163694558756214;
		
		this.btnNext = btnNext;
	}
	
	/** @type {Phaser.GameObjects.Sprite} */
	btnNext;
	
	/* START-USER-CODE */

  // Write your code here

  create() {
    this.editorCreate();

    const video = this.add
      .dom(350, 350)
      .createFromHTML(
        `<iframe width="560" height="315" src="https://www.youtube.com/embed/KlRWpizME9Q?color=white" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
      );

    this.btnNext.setInteractive().on('pointerdown', (ptr) => {
      this.scene.start('SufixGame');
    });
  }

  /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
