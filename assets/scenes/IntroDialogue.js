
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
		
		// writingTextPrefab
		const writingTextPrefab = new WritingTextPrefab(this, 49, 43);
		this.add.existing(writingTextPrefab);
		
		// evil_duolingo
		const evil_duolingo = this.add.image(39, 748, "evil-duolingo");
		evil_duolingo.scaleX = 0.3;
		evil_duolingo.scaleY = 0.3;
		evil_duolingo.angle = 21;
		
		this.btnNext = btnNext;
		this.writingTextPrefab = writingTextPrefab;
		this.evil_duolingo = evil_duolingo;
	}
	
	/** @type {Phaser.GameObjects.Sprite} */
	btnNext;
	/** @type {WritingTextPrefab} */
	writingTextPrefab;
	/** @type {Phaser.GameObjects.Image} */
	evil_duolingo;
	
	/* START-USER-CODE */
	
	// Write your code here
	
	create() {
	
		this.editorCreate();

		this.writingTextPrefab.defineText('Já passaram das 20 horas, mas ele não \nconsegue fazê-los parar, ele passou o \ndia todo praticando no Duolingo depois \nde acordar com seu celular lotado de \nmensagens. Sim, o seu pior pesadelo, \nNeymar estava sendo cancelado por um \npost que tinha feito na noite passada e\nagora só queria conseguir comer seu \njantar (o coitado estava faminto depois \nde pular o almoço) mas o pássaro verde \nnão para de mandar 𝐦𝐞𝐧𝐬𝐚𝐠𝐞𝐧𝐬 𝐚𝐦𝐞𝐚𝐜̧𝐚𝐝𝐨𝐫𝐚𝐬\n porque ele não havia feito a tarefa de\nFormação de palavras. Parece que nada \nque ele faz é suficiente, será que \npode ajudá-lo? \n')
		this.btnNext.setAlpha(0);

		this.writingTextPrefab.typewriteText(this, 45);
		this.time.delayedCall(8000, () => {
			this.tweens.add({
				targets: this.evil_duolingo,
				y: 534,
				duration: 500
			})
		})
		this.time.delayedCall(45000, () => {
			this.btnNext.setAlpha(1);

			this.btnNext.setInteractive().on('pointerdown', (ptr) => {
				this.scene.start('DerivationTut')
			})
		})
	}
	
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
