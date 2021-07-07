
// You can write more code here

/* START OF COMPILED CODE */

class Countdown {
	
	constructor(gameObject) {
		this.gameObject = gameObject;
		gameObject["__Countdown"] = this;
		
		/* START-USER-CTR-CODE */
		/** @type {Phaser.Time.TimerEvent} */
		this.timerEvent

		const scene = this.gameObject.scene
		
		scene.events.on(Phaser.Scenes.Events.UPDATE, this.update, this)
		/* END-USER-CTR-CODE */
	}
	
	/** @returns {Countdown} */
	static getComponent(gameObject) {
		return gameObject["__Countdown"];
	}
	
	/** @type {Phaser.GameObjects.Text} */
	gameObject;
	
	/* START-USER-CODE */

	start(callback, duration = 20000){
		const scene = this.gameObject.scene

		this.duration = duration

		this.stop()

		this.timerEvent = scene.time.addEvent({
			delay: duration,
			callback: () => {
				this.gameObject.text = '0'; // Time is up

				this.stop()

				if(callback){
					callback()
				}
			}
		})
	}

	stop(){
		if(this.timerEvent){
			this.timerEvent.destroy();
			this.timerEvent = undefined;
		}
	}

	update(){
		if(!this.timerEvent || this.duration <= 0){
			return
		}

		const elapsed = this.timerEvent.getElapsed()
		const remaining = this.duration - elapsed
		const seconds = remaining / 1000
		this.gameObject.text = seconds.toFixed(2)
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
