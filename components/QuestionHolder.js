
// You can write more code here

/* START OF COMPILED CODE */

class QuestionHolder {
	
	constructor(gameObject) {
		this.gameObject = gameObject;
		gameObject["__QuestionHolder"] = this;
		
		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}
	
	/** @returns {QuestionHolder} */
	static getComponent(gameObject) {
		return gameObject["__QuestionHolder"];
	}
	
	/** @type {Phaser.GameObjects.Image} */
	gameObject;
	/** @type {string} */
	itemName = "question0";
	/** @type {string} */
	label = "Test label";
	
	/* START-USER-CODE */

	isRevealed = false;
	/**
	 * @param {() => void} [callback]
	 */
	reveal = (callback) => {
		this.isRevealed = true;

		const scene = this.gameObject.scene

		let originalScaleX = this.gameObject.scaleX
		let originalScaleY = this.gameObject.scaleY

		let firstFlip = scene.tweens.add({
			targets: this.gameObject,
			scaleX: 0,
			scaleY: originalScaleY * 1.2,
			duration: 100,
			ease: 'Linear',
		})

		firstFlip.on('complete', () => {
			this.gameObject.setTexture(this.label)
			scene.tweens.add({
				targets: this.gameObject,
				scaleX: originalScaleX,
				scaleY: originalScaleY,
				duration: 100,
				ease: 'Linear',
				onComplete: () => {
					if(callback){
						callback()
					}
				}
			})
		})
	}

	hide = (clbck) => {
		this.isRevealed = false;

		const scene = this.gameObject.scene

		this.gameObject.setTint('0xfc2803')

		scene.time.delayedCall(5000, () => {
			let originalScaleX = this.gameObject.scaleX
			let originalScaleY = this.gameObject.scaleY

			let firstFlip = scene.tweens.add({
				targets: this.gameObject,
				scaleX: 0,
				scaleY: originalScaleY * 1.2,
				duration: 100,
				ease: 'Linear',
			})

			firstFlip.on('complete', () => {
				this.gameObject.setTexture('figurinha')
				scene.tweens.add({
					targets: this.gameObject,
					scaleX: originalScaleX,
					scaleY: originalScaleY,
					duration: 100,
					ease: 'Linear',
				}).on('complete', () => {
					if (clbck){
						clbck();
					}
				})
			})

			this.gameObject.setTint('0xffffff')
		})
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here

