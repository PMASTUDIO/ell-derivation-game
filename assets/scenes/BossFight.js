
// You can write more code here

/* START OF COMPILED CODE */

class BossFight extends Phaser.Scene {
	
	constructor() {
		super("BossFight");
		
		/* START-USER-CTR-CODE */
		// Write your code here.
		this.last_jump_time = 300;
		this.jump_counter = 300;

		this.questions = [
			{
				question: "“Ai, flores, ai flores do verde ramo se sabedes novas do meu amado?\n//Ai, Deus,e u é” Qual(is) palavras presentes na cantiga,\nsão formadas por derivação imprópria?",
				alternatives: ['"novas" e "amado"', '"flores" e "novas"', '"sabedes" e "amado"', '"ramo" e "flores"', "nenhuma"],
				correct_index: 0
			},
			{
				question: "O prefixo assinalado em “𝐝𝐞𝐬vario” expressa:",
				alternatives: ["negação", "cessação", "ação contrária.", "separação", "intensificação"],
				correct_index: 2
			},
			{
				question: "Assinale a alternativa com uma primitiva e\nsua respectiva derivada: (prim/deriv)",
				alternatives: ["portão/portaria", "vidraça/vidraçaria", "florista/flor", "ferro/ferramenta", "todas estão corretas"],
				correct_index: 3
			},
			{
				question: "Você respeitará a lingua portuguesa a partir de agora neymar\ne votará no maravilhoso jogo desse grupo? (Cuidado com a resposta)",
				alternatives: ["Com certeza", "Talvez", "Meh", "Não", "Definitivamente não"],
				correct_index: 0
			},
		];

		this.activeQuestion = null;
		this.currentQuestionIndex = 0;
		/* END-USER-CTR-CODE */
	}
	
	editorCreate() {
		
		// sprite_explosion_fx_0001
		const sprite_explosion_fx_0001 = this.add.image(409, 268, "sprite_explosion_fx_0001");
		sprite_explosion_fx_0001.scaleX = 2.115761715579482;
		sprite_explosion_fx_0001.scaleY = 2.115761715579482;
		
		// evil_duolingo
		const evil_duolingo = this.add.image(268, 35, "evil-duolingo");
		
		// neymar_pointing
		const neymar_pointing = this.add.image(655, 408, "neymar-standing");
		neymar_pointing.scaleX = 0.08438632522497337;
		neymar_pointing.scaleY = 0.08438632522497337;
		
		// QuizCont
		const quizCont = this.add.container(223, 40);
		
		// bg_quiz
		const bg_quiz = this.add.rectangle(209, 153, 128, 128);
		bg_quiz.scaleX = 3.3071655254891805;
		bg_quiz.scaleY = 2.3925613322157204;
		bg_quiz.isFilled = true;
		quizCont.add(bg_quiz);
		
		// txt_quest
		const txt_quest = this.add.text(0, 0, "", {});
		txt_quest.scaleX = 0.4902671930598873;
		txt_quest.scaleY = 0.4902671930598873;
		txt_quest.text = "Question\n";
		txt_quest.setStyle({"color":"#000000ff","fontFamily":"Arial","fontSize":"26px","maxLines":3});
		quizCont.add(txt_quest);
		
		// bg_ans1
		const bg_ans1 = this.add.rectangle(209, 73, 400, 40);
		bg_ans1.isFilled = true;
		bg_ans1.fillColor = 15263976;
		bg_ans1.isStroked = true;
		bg_ans1.strokeColor = 0;
		bg_ans1.lineWidth = 2;
		quizCont.add(bg_ans1);
		
		// bg_ans2
		const bg_ans2 = this.add.rectangle(209, 121, 400, 40);
		bg_ans2.isFilled = true;
		bg_ans2.fillColor = 15263976;
		bg_ans2.isStroked = true;
		bg_ans2.strokeColor = 0;
		bg_ans2.lineWidth = 2;
		quizCont.add(bg_ans2);
		
		// bg_ans3
		const bg_ans3 = this.add.rectangle(209, 169, 400, 40);
		bg_ans3.isFilled = true;
		bg_ans3.fillColor = 15263976;
		bg_ans3.isStroked = true;
		bg_ans3.strokeColor = 0;
		bg_ans3.lineWidth = 2;
		quizCont.add(bg_ans3);
		
		// bg_ans4
		const bg_ans4 = this.add.rectangle(209, 217, 400, 40);
		bg_ans4.isFilled = true;
		bg_ans4.fillColor = 15263976;
		bg_ans4.isStroked = true;
		bg_ans4.strokeColor = 0;
		bg_ans4.lineWidth = 2;
		quizCont.add(bg_ans4);
		
		// bg_ans5
		const bg_ans5 = this.add.rectangle(209, 265, 400, 40);
		bg_ans5.isFilled = true;
		bg_ans5.fillColor = 15263976;
		bg_ans5.isStroked = true;
		bg_ans5.strokeColor = 0;
		bg_ans5.lineWidth = 2;
		quizCont.add(bg_ans5);
		
		// txt_ans1
		const txt_ans1 = this.add.text(17, 57, "", {});
		txt_ans1.scaleX = 0.46983648850695375;
		txt_ans1.scaleY = 0.46983648850695375;
		txt_ans1.text = "New text 𝐡𝐞𝐲";
		txt_ans1.setStyle({"color":"#000000ff","fixedWidth":800,"fixedHeight":70,"fontFamily":"arial","fontSize":"32px","maxLines":2});
		quizCont.add(txt_ans1);
		
		// txt_ans2
		const txt_ans2 = this.add.text(17, 105, "", {});
		txt_ans2.scaleX = 0.46983648850695375;
		txt_ans2.scaleY = 0.46983648850695375;
		txt_ans2.text = "New text 𝐡𝐞𝐲";
		txt_ans2.setStyle({"color":"#000000ff","fixedWidth":800,"fixedHeight":70,"fontFamily":"arial","fontSize":"32px","maxLines":2});
		quizCont.add(txt_ans2);
		
		// txt_ans3
		const txt_ans3 = this.add.text(17, 153, "", {});
		txt_ans3.scaleX = 0.46983648850695375;
		txt_ans3.scaleY = 0.46983648850695375;
		txt_ans3.text = "New text 𝐡𝐞𝐲";
		txt_ans3.setStyle({"color":"#000000ff","fixedWidth":800,"fixedHeight":70,"fontFamily":"arial","fontSize":"32px","maxLines":2});
		quizCont.add(txt_ans3);
		
		// txt_ans4
		const txt_ans4 = this.add.text(17, 201, "", {});
		txt_ans4.scaleX = 0.46983648850695375;
		txt_ans4.scaleY = 0.46983648850695375;
		txt_ans4.text = "New text 𝐡𝐞𝐲";
		txt_ans4.setStyle({"color":"#000000ff","fixedWidth":800,"fixedHeight":70,"fontFamily":"arial","fontSize":"32px","maxLines":2});
		quizCont.add(txt_ans4);
		
		// txt_ans5
		const txt_ans5 = this.add.text(17, 249, "", {});
		txt_ans5.scaleX = 0.46983648850695375;
		txt_ans5.scaleY = 0.46983648850695375;
		txt_ans5.text = "New text 𝐡𝐞𝐲";
		txt_ans5.setStyle({"color":"#000000ff","fixedWidth":800,"fixedHeight":70,"fontFamily":"arial","fontSize":"32px","maxLines":2});
		quizCont.add(txt_ans5);
		
		// lists
		const ansBox = [bg_ans1, bg_ans2, bg_ans3, bg_ans4, bg_ans5]
		const ansTxt = [txt_ans1, txt_ans2, txt_ans3, txt_ans4, txt_ans5]
		
		this.evil_duolingo = evil_duolingo;
		this.neymar_pointing = neymar_pointing;
		this.quizCont = quizCont;
		this.txt_quest = txt_quest;
		this.bg_ans1 = bg_ans1;
		this.bg_ans2 = bg_ans2;
		this.bg_ans3 = bg_ans3;
		this.bg_ans4 = bg_ans4;
		this.bg_ans5 = bg_ans5;
		this.ansBox = ansBox;
		this.ansTxt = ansTxt;
	}
	
	/** @type {Phaser.GameObjects.Image} */
	evil_duolingo;
	/** @type {Phaser.GameObjects.Image} */
	neymar_pointing;
	/** @type {Phaser.GameObjects.Container} */
	quizCont;
	/** @type {Phaser.GameObjects.Text} */
	txt_quest;
	/** @type {Phaser.GameObjects.Rectangle} */
	bg_ans1;
	/** @type {Phaser.GameObjects.Rectangle} */
	bg_ans2;
	/** @type {Phaser.GameObjects.Rectangle} */
	bg_ans3;
	/** @type {Phaser.GameObjects.Rectangle} */
	bg_ans4;
	/** @type {Phaser.GameObjects.Rectangle} */
	bg_ans5;
	/** @type {Phaser.GameObjects.Rectangle[]} */
	ansBox;
	/** @type {Phaser.GameObjects.Text[]} */
	ansTxt;
	
	/* START-USER-CODE */
	
	// Write your code here
	
	handleRight = () => {
		if(this.currentQuestionIndex < 3){
			// NEXT QUESTION
			this.currentQuestionIndex++;
			console.log('LOADING QUESTION I: ', this.currentQuestionIndex)
			this.loadQuestion(this.currentQuestionIndex);
		} else {
			// FINISH LEVEL SHOW WON AND REDIRECT TO MENU
			let right = this.add.image(373.1230665371493, 340.8866708785447, "gol");

			main_music.stop();
			main_music = this.sound.add('champions', {loop:true, volume: 0.7});
			main_music.play();

			this.time.delayedCall(5000, () => {
				console.log('WON!')
				this.scene.start('MenuScene');
			})	
		}
	}

	alternativeClick = (alt, i) => {
		if(i === this.activeQuestion.correct_index){
			// USER GOT RIGHT
			alt.setFillStyle('0x3efc38')
			
			this.time.delayedCall(1000, this.handleRight)
		} else {
			console.log(alt)
			alt.setFillStyle('0xff0000')

			this.time.delayedCall(1000, () => {
				this.tweens.add({
					targets: this.quizCont,
					alpha: { value: 0, duration: 1000, ease: 'Power1'},
					onComplete: () => {
						this.time.delayedCall(1000, () => {
							this.killNeymar();
							console.log('LOST TRY AGAIN...')

							this.time.delayedCall(1000, () => {
								this.scene.start('LostScene', { sceneToReturn: 'BossFight' })
							})
						})
					}
				})
			})
		}
	}

	loadQuestion = (i) => {
		this.activeQuestion = this.questions[i]

		this.txt_quest.setText(this.questions[i].question)
		
		this.ansTxt.forEach((tx, j) => {
			tx.setText(this.questions[i].alternatives[j])
		})

		this.ansBox.forEach((alt) => {
			alt.setFillStyle('0xe8e8e8')	
		})
	}

	killNeymar = () => {
		this.evil_duolingo.applyForce(new Phaser.Math.Vector2(10, 0))
		this.sound.play('shout')
		this.neymar_pointing.destroy();
	}

	create(data) {
	
		this.editorCreate();

		if(data.reset){
			this.currentQuestionIndex = 0;
			data.reset = undefined;
		}

		// Ground
		this.ground = this.matter.add.image(399, 536, "ground");
		this.ground.setRectangle(10000, 500)
		this.ground.scaleX = 0.09532831036586188;
		this.ground.scaleY = 0.09532831036586188;
		this.ground.setStatic(true)

		this.evil_duolingo = this.matter.add.gameObject(this.evil_duolingo)
		this.evil_duolingo.setMass(200)
		this.evil_duolingo.scaleX = 0.48452979182584843;
		this.evil_duolingo.scaleY = 0.48452979182584843;

		this.ansBox.forEach((alt, i) => {
			alt.setInteractive().on('pointerdown', () => this.alternativeClick(alt, i))
		})

		this.loadQuestion(this.currentQuestionIndex)

		this.sound.play('earthquake', { volume: 0.6 })
	}

	update(){
		if(this.jump_counter <= 0){
			// JUMP DUOLINGO
			console.log("JUMP!");
			this.evil_duolingo.applyForce(new Phaser.Math.Vector2(0, -10))
			
			// DESTRUCTION AUDIO EFFECT
			this.sound.play('earthquake', { volume: 0.6 })

			this.jump_counter = 150;
		}

		this.jump_counter--;
		console.log(this.jump_counter)
	}
	
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
