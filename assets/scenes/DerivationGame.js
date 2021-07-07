
// You can write more code here
currentQuestionIndex = 0;

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
		/* END-USER-CTR-CODE */
	}
	
	editorCreate() {
		
		// label-main
		const label_main = this.add.text(242, 22, "", {});
		label_main.text = "Neymar joga Golf";
		label_main.setStyle({"fontSize":"32px"});
	}
	
	/* START-USER-CODE */
	
	// Write your code here
	
	get_data = (level_index) => {
		this.questions = [
			{
				question: "Marque a alternativa <b>cujas palavras</b> tenham sido formadas \n apenas pelo processo de derivação prefixal:",
				alternatives: [" desobedecer\n desacatar\n distrito\n", " destelhar\n infiltrar\n consequentemente\n", " desarmonia\n pluma\n atordoado\n", " desamor\n antiético\n desentender\n"],
				correct_index: 0
			},
			{
				question: "Marque a alternativa cuja palavra tenha sido formada \n pelo processo de derivação parassintética",
				alternatives: ["almoxarifado", "orangotango", "beija-flor", "aprimoramento"],
				correct_index: 0
			},
			{
				question: "Marque a alternativa cuja palavra grifada seja formada \n pelo processo de derivação regressiva:",
				alternatives: ["Haja coração!", "A compra do imóvel \n já foi cadastrada.", "Os maus serão \n punidos.", "A índia estava \n acocorada na beira do rio."],
				correct_index: 0
			},
			{
				question: "Assinale a alternativa cujas palavras sejam formadas \n pelo processo de derivação sufixal nominal:",
				alternatives: [" moleza\n enciclopédia\n carreata\n", " destreza\n beleza\n chuviscar\n", " tristeza\n luterano\n beleza\n", "chuvisco\n beleza\n córrego\n"],
				correct_index: 0
			},
		];

		this.active_question_obj = this.questions[level_index];

		// txt_quest
		const txt_quest = this.add.text(36, 86, "", {});
		txt_quest.text = this.active_question_obj.question;
		txt_quest.setStyle({"fontSize":"16px"});

		// txt_ans2
		const txt_ans2 = this.add.text(163, 480, "", {});
		txt_ans2.text = this.active_question_obj.alternatives[1];
		
		// txt_ans1
		const txt_ans1 = this.add.text(30, 480, "", {});
		txt_ans1.text = this.active_question_obj.alternatives[0];
		
		// txt_ans3
		const txt_ans3 = this.add.text(540, 480, "", {});
		txt_ans3.text = this.active_question_obj.alternatives[2];
		
		// txt_ans4
		const txt_ans4 = this.add.text(668, 480, "", {});
		txt_ans4.text = this.active_question_obj.alternatives[3];
		
		this.txt_ans = [txt_ans1, txt_ans2, txt_ans3, txt_ans4];
	}

	answeredRight = () => {
		if(this.questions.length > currentQuestionIndex + 1){
			currentQuestionIndex++;
		} else {
			// NEXT LEVEL 
			console.log("NEXT LEVEL!")
			this.scene.start("SufixTut");
		}

		let right = this.add.image(373.1230665371493, 340.8866708785447, "gol");

		this.time.delayedCall(3000, () => {
			right.removeFromDisplayList();

			// NEXT QUESTION UNTIL THERE ARE NO QUESTIONS
			console.log("Starting scene " + currentQuestionIndex)
			this.scene.restart();
		}, [], this);
	}

	answeredWrong = () => {
		// SHOW MEME SCENE
	}

	initScene = (level) => {
		

		this.get_data(level);

		this.txt_ans[0].setDepth(100)
		this.txt_ans[1].setDepth(100)
		this.txt_ans[2].setDepth(100)
		this.txt_ans[3].setDepth(100)

		this.arrow = this.add.image(400, 350, 'arrow');
		this.arrow.setAlpha(0);

		this.ground = this.matter.add.image(408, 504, "ground");

		// #TODO: Try to move the static and mass call to below set rectangle
		this.ground.setStatic(true);
		this.ground.setMass(Infinity);
		this.ground.setRectangle(10000, 500)
		this.ground.scaleX = 0.09639380174890047;
		this.ground.scaleY = 0.15478184296590694;

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
				this.txt_ans[i].y + 10 + (this.txt_ans[i].height / 2), 
			"golf-hole")
			this.hole_answers[i].setDepth(98)
			this.hole_answers[i].setSensor(true)
			this.hole_answers[i].setStatic(true)
			this.hole_answers[i].setScale(0.2, 0.2)
			this.hole_answers[i].setOnCollideWith(this.ball, (pair) => {
				if(this.active_question_obj.correct_index == i){
					// RIGHT ANSWER
					this.answeredRight();
					console.log("Acertou!");
				} else {
					// WRONG ANSWER
					this.answeredWrong();
					console.log("Errou");
				}
			})
		}

	}

	create() {
		this.matter.world.setBounds(0, 0, 800, 600, 32, true, true, true, true);

		// rectangle
		const rectangle = this.add.rectangle(420, 302, 128, 128);
		rectangle.scaleX = 7.767571674644554;
		rectangle.scaleY = 5.14138472592623;
		rectangle.isFilled = true;
		rectangle.fillColor = 55521;

		this.editorCreate();

		this.initScene(currentQuestionIndex);

		this.time.delayedCall(2000, () => {
			this.input.on('pointerdown', () => {
				this.ball.setIgnoreGravity(true);
				this.ball.setVelocity(0, 0);
				this.catchFlag = true;
				// this.ball.setAwake()
			});
			this.input.on('pointerup', () => {
				this.ball.setStatic(false)
				this.catchFlag = false;

				this.ball.setIgnoreGravity(false);
				this.arrow.setAlpha(0);
				var XVector = (this.arrow.x - this.ball.x) * 0.001;
				var YVector = (this.arrow.y - this.ball.y) * 0.001;

				this.ball.applyForce({x: XVector, y: YVector});

				console.log(XVector)
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
