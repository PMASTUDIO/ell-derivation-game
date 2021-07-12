
// You can write more code here

/* START OF COMPILED CODE */

class PrefixGame extends Phaser.Scene {
	
	constructor() {
		super("PrefixGame");
		
		/* START-USER-CTR-CODE */
		// Write your code here.

		this.questions = [
			{
				question: "“A criança foi castigada i͟n͟j͟u͟s͟t͟a͟m͟e͟n͟t͟e͟.”.\nCom relação à palavra sublinhada, marque que\n alternativa revela seu processo de formação:",
				alternatives: ["um radical grego e um sufixo formador de advérbio.", "um prefixo e um radical latino.", "dois afixos e um radical latino.", " um prefixo, um radical popular e um sufixo.", "um prefixo, um radical grego e um sufixo adverbial."],
				correct_index: 1
			},
			{
				question: "Processo de formação da palavra sossego:",
				alternatives: ["derivação prefixal e radical latino.", "derivação prefixal e radical grego.", "derivação parassintética.", "composição por aglutinação.", "composição por justaposição"],
				correct_index: 0
			},
			{
				question: "A palavra invencível é formada com prefixo in-, que exprime\nsentido de negação. Outra palavra formada com esse mesmo\nprefixo de negação está em letra maiúscula em:",
				alternatives: ["Peri era INCAPAZ de fazer o mal a quem quer que fosse.", "Peri INTEGROU-se pacificamente à família de Ceci.", "Entre as muitas qualidades de Peri, estava a INTELIGÊNCIA.", "Ceci era filha do INVASOR português, D. Antônio de Mariz.", "Peri sempre agiu com a INTENÇÃO de proteger sua amada."],
				correct_index: 0
			},
			{
				question: "O prefixo presente na palavra “transpostos” tem\n o mesmo sentido do prefixo que ocorre em:",
				alternatives: ["percorrido", "ultrapassado", "retrocedido", "introvertido", "infracolocado"],
				correct_index: 1
			},
		];

		this.activeQuestion = null;
		this.currentQuestionIndex = 0;

		this.started = false

		/* END-USER-CTR-CODE */
	}
	
	editorCreate() {
		
		// swimming_neymar
		const swimming_neymar = this.add.sprite(349, 377, "tile008");
		swimming_neymar.scaleX = 5;
		swimming_neymar.scaleY = 5;
		
		// duo-evil
		const duo_evil = this.add.image(358, 608, "evil-duolingo");
		duo_evil.scaleX = 0.2642066965420844;
		duo_evil.scaleY = 0.2642066965420844;
		
		// rectangle
		const rectangle = this.add.rectangle(389, 540, 128, 128);
		rectangle.scaleX = 7.240564813970207;
		rectangle.scaleY = 2.5263741970714295;
		rectangle.alpha = 0.6;
		rectangle.isFilled = true;
		rectangle.fillColor = 54237;
		
		// bg_quiz
		const bg_quiz = this.add.rectangle(214, 160, 128, 128);
		bg_quiz.scaleX = 3.3071655254891805;
		bg_quiz.scaleY = 2.3925613322157204;
		bg_quiz.isFilled = true;
		
		// txt_quest
		const txt_quest = this.add.text(5, 7, "", {});
		txt_quest.scaleX = 0.4902671930598873;
		txt_quest.scaleY = 0.4902671930598873;
		txt_quest.text = "Question\n";
		txt_quest.setStyle({"color":"#000000ff","fontFamily":"Arial","fontSize":"26px","maxLines":3});
		
		// bg_ans5
		const bg_ans5 = this.add.rectangle(214, 272, 400, 40);
		bg_ans5.isFilled = true;
		bg_ans5.fillColor = 15263976;
		bg_ans5.isStroked = true;
		bg_ans5.strokeColor = 0;
		bg_ans5.lineWidth = 2;
		
		// bg_ans4
		const bg_ans4 = this.add.rectangle(214, 224, 400, 40);
		bg_ans4.isFilled = true;
		bg_ans4.fillColor = 15263976;
		bg_ans4.isStroked = true;
		bg_ans4.strokeColor = 0;
		bg_ans4.lineWidth = 2;
		
		// bg_ans3
		const bg_ans3 = this.add.rectangle(214, 176, 400, 40);
		bg_ans3.isFilled = true;
		bg_ans3.fillColor = 15263976;
		bg_ans3.isStroked = true;
		bg_ans3.strokeColor = 0;
		bg_ans3.lineWidth = 2;
		
		// bg_ans2
		const bg_ans2 = this.add.rectangle(214, 128, 400, 40);
		bg_ans2.isFilled = true;
		bg_ans2.fillColor = 15263976;
		bg_ans2.isStroked = true;
		bg_ans2.strokeColor = 0;
		bg_ans2.lineWidth = 2;
		
		// bg_ans1
		const bg_ans1 = this.add.rectangle(214, 80, 400, 40);
		bg_ans1.isFilled = true;
		bg_ans1.fillColor = 15263976;
		bg_ans1.isStroked = true;
		bg_ans1.strokeColor = 0;
		bg_ans1.lineWidth = 2;
		
		// txt_ans5
		const txt_ans5 = this.add.text(22, 256, "", {});
		txt_ans5.scaleX = 0.46983648850695375;
		txt_ans5.scaleY = 0.46983648850695375;
		txt_ans5.text = "New text 𝐡𝐞𝐲";
		txt_ans5.setStyle({"color":"#000000ff","fixedWidth":800,"fixedHeight":70,"fontFamily":"arial","fontSize":"32px","maxLines":2});
		
		// txt_ans4
		const txt_ans4 = this.add.text(22, 208, "", {});
		txt_ans4.scaleX = 0.46983648850695375;
		txt_ans4.scaleY = 0.46983648850695375;
		txt_ans4.text = "New text 𝐡𝐞𝐲";
		txt_ans4.setStyle({"color":"#000000ff","fixedWidth":800,"fixedHeight":70,"fontFamily":"arial","fontSize":"32px","maxLines":2});
		
		// txt_ans3
		const txt_ans3 = this.add.text(22, 160, "", {});
		txt_ans3.scaleX = 0.46983648850695375;
		txt_ans3.scaleY = 0.46983648850695375;
		txt_ans3.text = "New text 𝐡𝐞𝐲";
		txt_ans3.setStyle({"color":"#000000ff","fixedWidth":800,"fixedHeight":70,"fontFamily":"arial","fontSize":"32px","maxLines":2});
		
		// txt_ans2
		const txt_ans2 = this.add.text(22, 112, "", {});
		txt_ans2.scaleX = 0.46983648850695375;
		txt_ans2.scaleY = 0.46983648850695375;
		txt_ans2.text = "New text 𝐡𝐞𝐲";
		txt_ans2.setStyle({"color":"#000000ff","fixedWidth":800,"fixedHeight":70,"fontFamily":"arial","fontSize":"32px","maxLines":2});
		
		// txt_ans1
		const txt_ans1 = this.add.text(22, 64, "", {});
		txt_ans1.scaleX = 0.46983648850695375;
		txt_ans1.scaleY = 0.46983648850695375;
		txt_ans1.text = "New text 𝐡𝐞𝐲";
		txt_ans1.setStyle({"color":"#000000ff","fixedWidth":800,"fixedHeight":70,"fontFamily":"arial","fontSize":"32px","maxLines":2});
		
		// Instruction
		const instruction = this.add.container(3, 78);
		
		// image
		const image = this.add.image(600, 70, "speech-bg");
		image.scaleX = 0.2590335352405082;
		image.scaleY = 0.2590335352405082;
		instruction.add(image);
		
		// evil_duolingo
		const evil_duolingo = this.add.image(786, 225, "evil-duolingo");
		evil_duolingo.scaleX = 0.200625072933595;
		evil_duolingo.scaleY = 0.200625072933595;
		evil_duolingo.angle = -29;
		instruction.add(evil_duolingo);
		
		// txt_inst
		const txt_inst = this.add.text(460, -33, "", {});
		txt_inst.scaleX = 0.5;
		txt_inst.scaleY = 0.5;
		txt_inst.text = "Vamos ver se você consegue fazer\nvárias coisas ao mesmo tempo.\nAperte barra de espaço \nrepetidamente para nadar,\nenquanto responde às perguntas\ncom o mouse.";
		txt_inst.setStyle({"color":"#ffffffff","fontFamily":"OtomanopeeOne","fontSize":"32px"});
		instruction.add(txt_inst);
		
		// lists
		const ansBox = [bg_ans1, bg_ans2, bg_ans3, bg_ans4, bg_ans5]
		const ansText = [txt_ans1, txt_ans2, txt_ans3, txt_ans4, txt_ans5]
		
		this.swimming_neymar = swimming_neymar;
		this.duo_evil = duo_evil;
		this.txt_quest = txt_quest;
		this.bg_ans5 = bg_ans5;
		this.bg_ans4 = bg_ans4;
		this.bg_ans3 = bg_ans3;
		this.bg_ans2 = bg_ans2;
		this.bg_ans1 = bg_ans1;
		this.instruction = instruction;
		this.txt_inst = txt_inst;
		this.ansBox = ansBox;
		this.ansText = ansText;
	}
	
	/** @type {Phaser.GameObjects.Sprite} */
	swimming_neymar;
	/** @type {Phaser.GameObjects.Image} */
	duo_evil;
	/** @type {Phaser.GameObjects.Text} */
	txt_quest;
	/** @type {Phaser.GameObjects.Rectangle} */
	bg_ans5;
	/** @type {Phaser.GameObjects.Rectangle} */
	bg_ans4;
	/** @type {Phaser.GameObjects.Rectangle} */
	bg_ans3;
	/** @type {Phaser.GameObjects.Rectangle} */
	bg_ans2;
	/** @type {Phaser.GameObjects.Rectangle} */
	bg_ans1;
	/** @type {Phaser.GameObjects.Container} */
	instruction;
	/** @type {Phaser.GameObjects.Text} */
	txt_inst;
	/** @type {Phaser.GameObjects.Rectangle[]} */
	ansBox;
	/** @type {Phaser.GameObjects.Text[]} */
	ansText;
	
	/* START-USER-CODE */
	
	// Write your code here

	handleRight = () => {
		if(this.currentQuestionIndex < 3){
			// NEXT QUESTION
			this.currentQuestionIndex++;
			console.log('LOADING QUESTION I: ', this.currentQuestionIndex)
			this.loadQuestion(this.currentQuestionIndex);
		} else {
			// FINISH LEVEL
			console.log('WON!')
			this.swimmingSound.stop();
			this.swimmingSound.destroy();
			this.scene.start('PrimitiveAndDerivativeTut');
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
				this.swimmingSound.stop();
				this.swimmingSound.destroy();

				console.log('LOST TRY AGAIN...')
				this.scene.start('LostScene', { sceneToReturn: 'PrefixGame' })
			})
		}
	}

	loadQuestion = (i) => {
		this.activeQuestion = this.questions[i]

		this.txt_quest.setText(this.questions[i].question)
		this.ansText.forEach((tx, j) => {
			tx.setText(this.questions[i].alternatives[j])
		})
		this.ansBox.forEach((alt) => {
			alt.setFillStyle('0xe8e8e8')	
		})
	}
	
	create(data) {
	
		console.log(data)

		this.editorCreate();

		this.swimmingSound = this.sound.add('swimming', { loop: true })
		this.swimmingSound.play();

		if(data.reset){
			this.currentQuestionIndex = 0;
			data.reset = undefined;
		}

		this.swimming_neymar.play('swim-right')

		let space = this.input.keyboard.addKey('space');
		space.on('down', () => {
			if(this.swimming_neymar.y > 380){
				this.swimming_neymar.setY(this.swimming_neymar.y - 15)
			}
		})

		this.ansBox.forEach((alt, i) => {
			alt.setInteractive().on('pointerdown', () => this.alternativeClick(alt, i))
		})

		this.loadQuestion(this.currentQuestionIndex)

		this.time.delayedCall(5000, () => {
			this.instruction.setAlpha(0)
		})

		this.time.delayedCall(2000, () => {
			this.started = true;
		})
	}
	
	update() {
		if (!this.started){
			return
		}

		this.swimming_neymar.setY(this.swimming_neymar.y + 1)
	
		if(this.swimming_neymar.y >= 500){
			// LOST
			console.log("LOST")
			this.duo_evil.setTint('0x000000')
			this.time.delayedCall(1000, () => {
				this.swimmingSound.stop();
				this.swimmingSound.destroy();
				this.scene.start('LostScene', { sceneToReturn: 'PrefixGame' })
			})
		} else if(this.swimming_neymar.y >= 400){
			this.duo_evil.setTint('0xff3030')
		} else {
			this.duo_evil.setTint('0xffffff')
		}
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
