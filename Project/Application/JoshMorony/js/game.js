var mainState = {
preload: function(){
    this.game.load.image('tile', 'assets/tile.png');
    this.game.load.image('tile2', 'assets/tile2.png');
    this.game.load.image('explode', 'assets/explode.png'); 
    this.game.load.image('player', 'assets/player.png');

},

createPlayer: function(){
    var me = this;

    // Add the player to the game by creating new sprite
    me.player = me.game.add.sprite(me.game.world.centerX/2, me.game.world.centerY, 'player');

    // Anchor player to midpoint
    me.player.anchor.setTo(0.5,0.5);

    //enable physics on the player
    me.game.physics.arcade.enable (me.player);

    // enable gravity
    me.player.body.gravity.y = 2000;

    // colloide boundries
    me.player.body.collideWorldBounds = true;

   // set player body unaffected by collisons
   me.player.body.immovable = true; 
},

create: function(){
    var me = this;

    //Set the speed for the platforms
    me.tileSpeed = -450;

    //Set the initial score
    me.score = 0;

    //Get the dimensions of the tile we are using
    me.tileWidth = me.game.cache.getImage('tile').width;
    me.tileHeight = me.game.cache.getImage('tile').height;

    //Set the background colour to blue
    me.game.stage.backgroundColor = '479cde';

    //Enable the Arcade physics system
    me.game.physics.startSystem(Phaser.Physics.ARCADE);

    //Add the player to the screen
    me.createPlayer(); 

    //Enable cursor keys so we can create some controls
    me.cursors = me.game.input.keyboard.createCursorKeys();  

},

update: function(){
    var me = this;

        //Make the sprite jump when the up key is pushed
        if(me.cursors.up.isDown) {
            me.player.body.velocity.y -= 80;
        }
},


};

// Initialize Phaser, and create a 400px by 490px game
var game = new Phaser.Game(800, 640);

// Add the 'mainState' and call it 'main'
game.state.add('main', mainState); 

// Start the state to actually start the game
game.state.start('main');