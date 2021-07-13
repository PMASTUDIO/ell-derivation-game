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
		
		// art-neymar
		this.add.image(613, 253, "neymar-art");
		
		// btnPlay
		const btnPlay = this.add.sprite(139, 120, "playBtn");
		btnPlay.scaleX = 0.4288998501767396;
		btnPlay.scaleY = 0.4288998501767396;
		
		// text
		const text = this.add.text(14, 429, "", {});
		text.text = "Créditos:\n\nhttps://freesound.org/\nhttps://www.todamateria.com.br/formacao-de-palavras/\nhttps://mundoeducacao.uol.com.br/gramatica/substantivo-primitivo.htm \nExercícios sobre derivação - Mundo Educação (uol.com.br)\nExercícios sobre formação de palavras - Toda Matéria (todamateria.com.br)\nExercícios Resolvidos de Morfologia - Só Português (soportugues.com.br)\nExercícios sobre radicais e prefixos latinos - Brasil Escola (uol.com.br)\n";
		
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
