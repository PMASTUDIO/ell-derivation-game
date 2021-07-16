// You can write more code here

/* START OF COMPILED CODE */

class FinalDialogue extends Phaser.Scene {
	
	constructor() {
		super("FinalDialogue");
		
		/* START-USER-CTR-CODE */
    // Write your code here.
    /* END-USER-CTR-CODE */
	}
	
	editorCreate() {
		
		// court
		const court = this.add.image(402, 304, "soccer-field");
		court.scaleX = 0.7867864288214198;
		court.scaleY = 0.8197282850016794;
		
		// btnNext
		const btnNext = this.add.sprite(744, 532, "playBtn");
		btnNext.scaleX = 0.18046466104384898;
		btnNext.scaleY = 0.18046466104384898;
		
		// writingTextPrefab
		const writingTextPrefab = new WritingTextPrefab(this, 27, 30);
		this.add.existing(writingTextPrefab);
		writingTextPrefab.scaleX = 1;
		writingTextPrefab.scaleY = 1;
		writingTextPrefab.setStyle({"color":"#ffffffff"});
		
		this.btnNext = btnNext;
		this.writingTextPrefab = writingTextPrefab;
	}
	
	/** @type {Phaser.GameObjects.Sprite} */
	btnNext;
	/** @type {WritingTextPrefab} */
	writingTextPrefab;
	
	/* START-USER-CODE */

  // Write your code here

  create() {
    this.editorCreate();

    this.writingTextPrefab.defineText('Que bom que estão pegando o jeito!\nAs tarefas estão quase prontas, só falta uma,\nmas vá rápido porque o hamburgão\ndo Ney já está ficando frio!')
		this.btnNext.setAlpha(0);
    
    this.writingTextPrefab.typewriteText(this, 15);
		this.time.delayedCall(15000, () => {
			this.btnNext.setAlpha(1);

			this.btnNext.setInteractive().on('pointerdown', (ptr) => {
        this.scene.start('BossFight');
      });
		})
  }

  /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
