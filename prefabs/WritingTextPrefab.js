
// You can write more code here

/* START OF COMPILED CODE */

class WritingTextPrefab extends Phaser.GameObjects.Text {
	
	constructor(scene, x, y) {
		super(scene, x, y, "", {});
		
		this.scaleX = 0.4;
		this.scaleY = 0.4;
		this.setStyle({"align":"justify","fontSize":"72px"});
		
		/* START-USER-CTR-CODE */
		// Write your code here.
		this.toBeText = undefined;
		/* END-USER-CTR-CODE */
	}
	
	/* START-USER-CODE */

	defineText = (text) => {
		this.scaleX = 0.4;
		this.scaleY = 0.4;

		this.toBeText = text
	}

	/**
	 *
	 * @param {string} text
	 */
	typewriteText = (scene, timeInSeconds) =>
	{
		const length = this.toBeText.length
		const delay = (timeInSeconds * 1000) / length - 1;

		if(this.toBeText){
			let i = 0
			scene.time.addEvent({
				callback: () => {
					this.setText(this.text + this.toBeText[i])
					++i
				},
				repeat: length - 1,
				delay: delay,	
			})
		}
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
