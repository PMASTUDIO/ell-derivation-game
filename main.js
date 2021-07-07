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
            debug: {
              showBody: true,
              showStaticBody: true
            },
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
});

class Boot extends Phaser.Scene {
  preload() {
    this.load.pack('pack', 'assets/asset-pack.json');
  }

  create() {
    this.scene.start('PrimitiveAndDerivativeTut');
  }
}
