window.addEventListener('load', function () {
  var game = new Phaser.Game({
    width: 800,
    height: 600,
    type: Phaser.AUTO,
    parent: 'game',
    physics: {
        default: 'matter',
        matter: {
            enableSleeping: true,
            //debug: {
            //   showBody: true,
            //   showStaticBody: true
            //},
            setBounds: {
              top: true,
              right: true,
              left: true,
              bottom: true
            },
            gravity: {
                y: 0.3
            },
        }
    },
    backgroundColor: '#242424',
    scale: {
      mode: Phaser.Scale.FIT,
      autoCenter: Phaser.Scale.CENTER_BOTH,
    },
    dom: {
      createContainer: true
    }
  });

  game.scene.add('Boot', Boot, true);
  game.scene.add('Preloader', LoadingSpinner);
});

let main_music;

class Boot extends Phaser.Scene {
  preload() {
    this.scene.launch('LoadingSpinner')
    this.load.pack('pack', 'assets/asset-pack.json');
  }

  create() {
    this.scene.stop("LoadingSpinner")

    main_music = this.sound.add('Cuphead OST - Introduction [Music]', {loop:true, volume: 0.6});
    main_music.play();

    this.scene.start('MenuScene');
  }
}
