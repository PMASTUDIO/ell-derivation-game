
// You can write more code here

currentQuestionIndex_PrimDer = 0;

/* START OF COMPILED CODE */

class PrimitiveAndDerivativeGame extends Phaser.Scene {
	
	constructor() {
		super("PrimitiveAndDerivativeGame");
		
		/* START-USER-CTR-CODE */
		// Write your code here.

		this.questions = [
			{
				question: "Qual das alternativas possui todos os seus\nsubstantivos sendo derivados de outras palavras?",
				alternatives: ["telhado\nchaveiro\nágua", "chaveiro\naguaceiro\nventilador"],
				correct_index: 1
			},
			{
				question: "Identifique qual das alternativas contêm os\nsubstantivos primitivos do seguinte enunciado:\n 'Naquela noite, a juventude comemorava\no final de um longo período avaliativo.'",
				alternatives: ["longo\ncomemorava", "noite\nperíodo"],
				correct_index: 1
			},
			{
				question: "Quais são os substantivos primitivos de:\n'olhar, humanidade, relojoaria, abotoadura'?",
				alternatives: ["olho\nhumano\nrelógio\nbotão", "olho\nhumano\nrelógio\nabotoar"],
				correct_index: 0
			},
			{
				question: "Qual é a primitiva de jornalista?",
				alternatives: ["jornal", "jornada"],
				correct_index: 0
			},
		];

		this.currentQuestion = null;

		this.activeAnswerI = undefined;
		/* END-USER-CTR-CODE */
	}
	
	editorCreate() {
		
		// sprite_explosion_fx_0001
		const sprite_explosion_fx_0001 = this.add.image(439, 262, "sprite_explosion_fx_0001");
		sprite_explosion_fx_0001.scaleX = 2.115761715579482;
		sprite_explosion_fx_0001.scaleY = 2.115761715579482;
		
		// txt_countdown
		const txt_countdown = this.add.text(368, 16, "", {});
		txt_countdown.scaleX = 0.702820375578614;
		txt_countdown.scaleY = 0.702820375578614;
		txt_countdown.text = "20";
		txt_countdown.setStyle({"align":"center","fontSize":"64px"});
		
		// txt_question
		const txt_question = this.add.text(192, 80, "", {});
		txt_question.scaleX = 0.5;
		txt_question.scaleY = 0.5;
		txt_question.text = "This is the question";
		txt_question.setStyle({"align":"center","fixedWidth":800,"fixedHeight":160,"fontSize":"26px"});
		
		// txt_ans1
		const txt_ans1 = this.add.text(0, 208, "", {});
		txt_ans1.scaleX = 0.5;
		txt_ans1.scaleY = 0.5;
		txt_ans1.text = "my answer 1";
		txt_ans1.setStyle({"color":"#000000ff","fixedWidth":306,"fixedHeight":630,"fontFamily":"Arial","fontSize":"32px"});
		txt_ans1.setPadding({"left":10,"right":10});
		
		// txt_ans2
		const txt_ans2 = this.add.text(800, 208, "", {});
		txt_ans2.scaleX = 0.5;
		txt_ans2.scaleY = 0.5;
		txt_ans2.setOrigin(1, 0);
		txt_ans2.text = "my answer 2\n";
		txt_ans2.setStyle({"color":"#000000ff","fixedWidth":306,"fixedHeight":630,"fontFamily":"Arial","fontSize":"32px"});
		txt_ans2.setPadding({"left":10,"right":10});
		
		// Instruction
		const instruction = this.add.container(176, -16);
		instruction.scaleX = 0.8108422425368454;
		instruction.scaleY = 0.8108422425368454;
		instruction.angle = 2;
		
		// evil_duolingo
		const evil_duolingo = this.add.image(786, 241, "evil-duolingo");
		evil_duolingo.scaleX = 0.200625072933595;
		evil_duolingo.scaleY = 0.200625072933595;
		evil_duolingo.angle = -29;
		instruction.add(evil_duolingo);
		
		// image
		const image = this.add.image(589, 123, "speech-bg");
		image.scaleX = 0.2590335352405082;
		image.scaleY = 0.2590335352405082;
		image.angle = -8;
		instruction.add(image);
		
		// txt_inst
		const txt_inst = this.add.text(447, 31, "", {});
		txt_inst.scaleX = 0.5;
		txt_inst.scaleY = 0.5;
		txt_inst.angle = -6;
		txt_inst.text = "Observei que uma de suas melhores\nhabilidades é se jogar com estilo,\nvamos ver se ela é útil.\nUse as setas ⇆ para se jogar\nna resposta certa antes do tempo\nacabar.";
		txt_inst.setStyle({"color":"#ffffffff","fontFamily":"OtomanopeeOne","fontSize":"32px"});
		instruction.add(txt_inst);
		
		// txt_countdown (components)
		new Countdown(txt_countdown);
		txt_countdown.emit("components-awake");
		
		this.txt_countdown = txt_countdown;
		this.txt_question = txt_question;
		this.txt_ans1 = txt_ans1;
		this.txt_ans2 = txt_ans2;
		this.instruction = instruction;
		this.txt_inst = txt_inst;
	}
	
	/** @type {Phaser.GameObjects.Text} */
	txt_countdown;
	/** @type {Phaser.GameObjects.Text} */
	txt_question;
	/** @type {Phaser.GameObjects.Text} */
	txt_ans1;
	/** @type {Phaser.GameObjects.Text} */
	txt_ans2;
	/** @type {Phaser.GameObjects.Container} */
	instruction;
	/** @type {Phaser.GameObjects.Text} */
	txt_inst;
	
	/* START-USER-CODE */
	/** @type {Phaser.GameObjects.Rectangle | Phaser.Physics.Matter.Image} */
	bg_ans1;
	/** @type {Phaser.GameObjects.Rectangle | Phaser.Physics.Matter.Image} */
	bg_ans2;

	/** @type {integer} */
	activeAnswerI

	// Write your code here
	
	evalAnswer = () => {
		if(this.activeAnswerI == this.currentQuestion.correct_index){
			// RIGHT!
		
			this.activeAnswerI == 0 ? this.bg_ans1.setFillStyle('0x00ff00') : this.bg_ans2.setFillStyle('0x00ff00')

			this.add.image(373.1230665371493, 340.8866708785447, "gol").setDepth(99);
			
			this.character.setAlpha(0);
			this.add.image(100, 340.8866708785447, "neymar-won").setDepth(99).setScale(0.1, 0.1);

			this.time.delayedCall(3000, () => {

				if(currentQuestionIndex_PrimDer < 3){
					// LOAD NEXT LEVEL
					currentQuestionIndex_PrimDer++;
					this.scene.restart();
				} else {
					// WON!
					console.log("won!")
					this.scene.start("FinalDialogue");
				}

			})
		} else {
			// WRONG!
			this.activeAnswerI == 0 ? this.bg_ans1.setFillStyle('0xff0000') : this.bg_ans2.setFillStyle('0xff0000')
			console.log("LOST! Selected index: " + this.activeAnswerI + " - Correct Index: " + this.currentQuestion.correct_index )
			
			this.time.delayedCall(2000, () => {
				this.scene.start('LostScene', { sceneToReturn: 'PrimitiveAndDerivativeGame' })
			})
			
			// #TODO: LOST PAGE
		}
	}

	neymarChangeToFall = () => {
		this.character.setTexture('neymar-down')
		this.character.setScale(0.07, 0.07)
	}

	handleInput = () => {
		this.keys = this.input.keyboard.addKeys({
			left: 'left',
			right: 'right'
		});

		this.keys.right.on('down', () => {
			this.neymarChangeToFall();

			this.txt_inst.destroy();

			this.sound.play('men-scream')
			this.character.applyForce(new Phaser.Math.Vector2(1000, 0))
			this.character.setAngularVelocity(2)
		})
		this.keys.left.on('down', () => {
			this.neymarChangeToFall();

			this.txt_inst.destroy();

			this.sound.play('men-scream')
			this.character.applyForce(new Phaser.Math.Vector2(-1000, 0))
			this.character.setAngularVelocity(-2)
		})
	}

	loadQuestion = (i) => {
		console.log("LOADING QUESTION " + i)
		this.currentQuestion = this.questions[i]

		this.txt_question.setText(this.currentQuestion.question)
		this.txt_ans1.setText(this.currentQuestion.alternatives[0])
		this.txt_ans2.setText(this.currentQuestion.alternatives[1])
	}

	create(data) {
	
		this.editorCreate();

		if(data.reset){
			currentQuestionIndex_PrimDer = 0;
			data.reset = undefined;
		}

		// Ground
		this.ground = this.matter.add.image(399, 536, "ground");
		this.ground.setRectangle(10000, 500)
		this.ground.scaleX = 0.09532831036586188;
		this.ground.scaleY = 0.09532831036586188;
		this.ground.setStatic(true)

		// Character
		this.character = this.matter.add.image(404, 365, "neymar-standing");
		this.character.setCircle(1000)
		this.character.setOrigin(0.5, 0.5)
		this.character.scaleX = 0.1;
		this.character.scaleY = 0.1;
		this.character.setFriction(0.8)
		this.character.setDepth(10)
		this.character.setBounce(0.5)

		this.character.setMass(10000)

		// bg_ans1
		const bg_ans1 = this.add.rectangle(80, 352, 128, 128);
		
		this.bg_ans1 = this.matter.add.gameObject(bg_ans1)
		this.bg_ans1.scaleX = 1.2241022947052722;
		this.bg_ans1.scaleY = 2.4672308078336265;
		this.bg_ans1.isFilled = true;
		this.bg_ans1.setDepth(5);
		this.bg_ans1.setStatic(true)
		this.bg_ans1.setSensor(true)
		this.bg_ans1.setOnCollideWith(this.character, () => {
			this.bg_ans1.setFillStyle('0xfcba03')
			this.bg_ans2.setFillStyle('0xffffff')
			this.activeAnswerI = 0;
		})
		
		// bg_ans2
		const bg_ans2 = this.add.rectangle(720, 352, 128, 128);
		this.bg_ans2 = this.matter.add.gameObject(bg_ans2)
		this.bg_ans2.scaleX = 1.2241022947052722;
		this.bg_ans2.scaleY = 2.4672308078336265;
		this.bg_ans2.isFilled = true;
		this.bg_ans2.setDepth(5);
		this.bg_ans2.setStatic(true)
		this.bg_ans2.setSensor(true)
		this.bg_ans2.setOnCollideWith(this.character, () => {
			this.bg_ans2.setFillStyle('0xfcba03')
			this.bg_ans1.setFillStyle('0xffffff')
			this.activeAnswerI = 1;
		})


		this.txt_ans1.setDepth(6)
		this.txt_ans2.setDepth(6)

		this.loadQuestion(currentQuestionIndex_PrimDer)

		this.handleInput();

		this.time.delayedCall(5000, () => {
			this.instruction.setAlpha(0)
			Countdown.getComponent(this.txt_countdown).start(this.evalAnswer, 20000)
		})
	}

	update(){
	}
	
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
