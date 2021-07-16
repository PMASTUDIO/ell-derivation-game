
// You can write more code here
currentQuestionIndex_Der = 0;

/* START OF COMPILED CODE */

class DerivationGame extends Phaser.Scene {
	
	constructor() {
		super("DerivationGame");
		
		/* START-USER-CTR-CODE */
		// Write your code here.
		this.arrow;
		this.ball;
		this.catchFlag = false;
		this.launchVelocity = 0;

		this.collisionActive = false;
		/* END-USER-CTR-CODE */
	}
	
	editorCreate() {
		
		// sprite_explosion_fx_0001
		const sprite_explosion_fx_0001 = this.add.image(422, 258, "sprite_explosion_fx_0001");
		sprite_explosion_fx_0001.scaleX = 2.115761715579482;
		sprite_explosion_fx_0001.scaleY = 2.115761715579482;
		
		// label-main
		const label_main = this.add.text(242, 22, "", {});
		label_main.text = "Neymar joga Golf";
		label_main.setStyle({"fontSize":"32px"});
		
		// Instruction
		const instruction = this.add.container(0, 0);
		
		// image
		const image = this.add.image(614, 159, "speech-bg");
		image.scaleX = 0.24270534305327626;
		image.scaleY = 0.20426496429422852;
		instruction.add(image);
		
		// evil_duolingo
		const evil_duolingo = this.add.image(809, 315, "evil-duolingo");
		evil_duolingo.scaleX = 0.200625072933595;
		evil_duolingo.scaleY = 0.200625072933595;
		evil_duolingo.angle = -29;
		instruction.add(evil_duolingo);
		
		// txt_inst
		const txt_inst = this.add.text(472, 86, "", {});
		txt_inst.scaleX = 0.6;
		txt_inst.scaleY = 0.6;
		txt_inst.text = "Arraste com o mouse para\nacertar a bola no buraco \ncom a reposta certa.";
		txt_inst.setStyle({"color":"#ffffffff","fontFamily":"OtomanopeeOne","fontSize":"32px"});
		instruction.add(txt_inst);
		
		this.instruction = instruction;
		this.txt_inst = txt_inst;
	}
	
	/** @type {Phaser.GameObjects.Container} */
	instruction;
	/** @type {Phaser.GameObjects.Text} */
	txt_inst;
	
	/* START-USER-CODE */
	
	// Write your code here

	get_data = (level_index) => {
		this.questions = [
			{
				question: "Acerte a alternativa cujas palavras tenham sido formadas \n a͟p͟e͟n͟a͟s͟ pelo processo de derivação prefixal",
				alternatives: [" desobedecer\n desacatar\n distrito\n", " destelhar\n infiltrar\n consequentemente\n", " desarmonia\n pluma\n atordoado\n", " desamor\n antiético\n desentender\n"],
				correct_index: 3
			},
			{
				question: "Acerte a alternativa cuja palavra tenha sido formada \n pelo processo de d͟e͟r͟i͟v͟a͟ç͟ã͟o͟ ͟p͟a͟r͟a͟s͟s͟i͟n͟t͟é͟t͟i͟c͟a͟",
				alternatives: ["almoxarifado", "orangotango", "beija-flor", "desavisado"],
				correct_index: 3
			},
			{
				question: "Acerte a alternativa cuja palavra em maiúscula seja formada \n pelo processo de derivação regressiva:",
				alternatives: ["HAJA coração!", "A COMPRA do imóvel \n já foi cadastrada.", "Os MAUS serão \n punidos.", "A índia estava \nACOCORADA na\nbeira do rio."],
				correct_index: 1
			},
			{
				question: "Acerte a alternativa cujas palavras sejam formadas \n pelo processo de derivação sufixal nominal:",
				alternatives: [" moleza\n enciclopédia\n carreata\n", " destreza\n beleza\n chuviscar\n", " tristeza\n luterano\n beleza\n", "chuvisco\n beleza\n córrego\n"],
				correct_index: 2
			},
		];

		this.active_question_obj = this.questions[level_index];

		// txt_quest
		const txt_quest = this.add.text(36, 86, "", {});
		txt_quest.text = this.active_question_obj.question;
		txt_quest.setStyle({"fontFamily":"Arial","fontSize":"16px"});

		// txt_ans2
		const txt_ans2 = this.add.text(163, 480, "", {});
		txt_ans2.text = this.active_question_obj.alternatives[1];
		txt_ans2.setStyle({"fontFamily":"Arial","fontSize":"16px"});
		
		// txt_ans1
		const txt_ans1 = this.add.text(30, 480, "", {});
		txt_ans1.text = this.active_question_obj.alternatives[0];
		txt_ans1.setStyle({"fontFamily":"Arial","fontSize":"16px"});

		// txt_ans3
		const txt_ans3 = this.add.text(540, 480, "", {});
		txt_ans3.text = this.active_question_obj.alternatives[2];
		txt_ans3.setStyle({"fontFamily":"Arial","fontSize":"16px"});
		
		// txt_ans4
		const txt_ans4 = this.add.text(668, 480, "", {});
		txt_ans4.text = this.active_question_obj.alternatives[3];
		txt_ans4.setStyle({"fontFamily":"Arial","fontSize":"16px"});
		
		this.txt_ans = [txt_ans1, txt_ans2, txt_ans3, txt_ans4];
	}

	answeredRight = () => {
		if(this.questions.length > currentQuestionIndex_Der + 1){
			currentQuestionIndex_Der++;
		} else {
			// NEXT LEVEL 
			console.log("NEXT LEVEL!")
			this.scene.start("SufixTut");
		}

		let right = this.add.image(373.1230665371493, 340.8866708785447, "gol");

		this.time.delayedCall(3000, () => {
			right.removeFromDisplayList();

			// NEXT QUESTION UNTIL THERE ARE NO QUESTIONS
			console.log("Starting scene " + currentQuestionIndex_Der)
			this.scene.restart();
		}, [], this);
	}

	answeredWrong = () => {
		// SHOW MEME SCENEW
		this.scene.start('LostScene', { sceneToReturn: 'DerivationGame' })
	}

	initScene = (level) => {
		

		this.get_data(level);

		this.txt_ans[0].setDepth(100)
		this.txt_ans[1].setDepth(100)
		this.txt_ans[2].setDepth(100)
		this.txt_ans[3].setDepth(100)

		this.arrow = this.add.image(400, 350, 'arrow');
		this.arrow.setAlpha(0);

		this.ground = this.matter.add.image(408, 560, "ground");

		// #TODO: Try to move the static and mass call to below set rectangle
		this.ground.setMass(Infinity);
		this.ground.setRectangle(10000, 500)
		this.ground.scaleX = 0.09639380174890047;
		this.ground.scaleY = 0.15478184296590694;
		this.ground.setStatic(true);

		this.ball = this.matter.add.image(100, 400, 'golf-ball');
		
		this.ball.scaleX = 0.02;
		this.ball.scaleY = 0.02;
		
		this.ball.setCircle(10);
		this.ball.setMass(3)
		this.ball.setFriction(0.005);
		this.ball.setFrictionAir(0.001)
		this.ball.setBounce(0.9);

		this.ball.setStatic(true)

		
		// ANSWER HOLES
		this.hole_answers = [];
		for (let i = 0; i < 4; i++){
			this.hole_answers[i] = this.matter.add.image(
				this.txt_ans[i].x + (this.txt_ans[i].width / 2), 
				520, 
			"golf-hole")
			this.hole_answers[i].setDepth(98)
			this.hole_answers[i].setSensor(true)
			this.hole_answers[i].setStatic(true)
			this.hole_answers[i].setScale(0.2, 0.2)
			this.hole_answers[i].setOnCollideWith(this.ball, (pair) => {
				if(this.collisionActive){
					this.ball.body.destroy();
					this.ball.setAlpha(0);

					if(this.active_question_obj.correct_index == i){
						// RIGHT ANSWER
						this.answeredRight();
						console.log("Acertou!");
					} else {
						// WRONG ANSWER
						this.answeredWrong();
						console.log("Errou");
					}
				}
			})
		}

	}

	create(data) {
		
		if(data.reset){
			currentQuestionIndex_Der = 0;
			data.reset = undefined;
		}

		this.matter.world.setBounds(0, 0, 800, 600, 32, true, true, true, true);

		// rectangle
		const rectangle = this.add.rectangle(420, 302, 128, 128);
		rectangle.scaleX = 7.767571674644554;
		rectangle.scaleY = 5.14138472592623;
		rectangle.isFilled = true;
		rectangle.fillColor = 55521;

		this.editorCreate();

		this.initScene(currentQuestionIndex_Der);

		this.time.delayedCall(2000, () => {
			this.input.on('pointerdown', () => {
				this.collisionActive = false;
				this.ball.setIgnoreGravity(true);
				this.ball.setVelocity(0, 0);
				this.catchFlag = true;
				// this.ball.setAwake()
			});
			this.input.on('pointerup', () => {
				this.collisionActive = true;

				this.ball.setStatic(false)
				this.catchFlag = false;

				this.ball.setIgnoreGravity(false);
				this.arrow.setAlpha(0);
				var XVector = (this.arrow.x - this.ball.x) * 0.001;
				var YVector = (this.arrow.y - this.ball.y) * 0.001;

				this.ball.applyForce({x: XVector, y: YVector});

				console.log(XVector)

				this.sound.play('golf')

				this.instruction.setAlpha(0)
			});
		})

		
	}

	update() {
		this.arrow.rotation = Phaser.Math.Angle.Between(this.ball.x, this.ball.y, this.arrow.x, this.arrow.y)

		if(this.catchFlag == true){
			this.ball.x = this.input.activePointer.worldX;
			this.ball.y = this.input.activePointer.worldY;

			this.arrow.alpha = 1;
			this.launchVelocity = Phaser.Math.Distance.BetweenPoints({x: this.arrow.x, y: this.arrow.y}, {x: this.input.activePointer.worldX, y: this.input.activePointer.worldY})
		}
	}
	
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
