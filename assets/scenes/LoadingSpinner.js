
// You can write more code here

/* START OF COMPILED CODE */

const Orange = 0xFFAD00

class LoadingSpinner extends Phaser.Scene {
	
	constructor() {
		super("LoadingSpinner");
		
		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}
	
	editorCreate() {
	}
	
	/* START-USER-CODE */
	
	// Write your code here
	
	create() {
	
		this.editorCreate();

		const { width, height } = this.scale
		const x = width * 0.5
		const y = height * 0.5

		const left = this.add.rectangle(x - 50, y, 40, 75, Orange, 1)
		const middle = this.add.rectangle(x, y, 40, 75, Orange, 1)
		const right = this.add.rectangle(x + 50, y, 40, 75, Orange, 1)

		this.add.tween({
			targets: left,
			scaleY: 2,
			duration: 100,
			repeat: -1,
			repeatDelay: 300,
			yoyo: true,
			ease: Phaser.Math.Easing.Bounce.InOut
		})

		this.add.tween({
			targets: middle,
			scaleY: 2,
			duration: 100,
			delay: 100,
			repeat: -1,
			repeatDelay: 300,
			yoyo: true,
			ease: Phaser.Math.Easing.Bounce.InOut
		})

		this.add.tween({
			targets: right,
			scaleY: 2,
			duration: 100,
			delay: 200,
			repeat: -1,
			repeatDelay: 300,
			yoyo: true,
			ease: Phaser.Math.Easing.Bounce.InOut
		})

	}
	
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
