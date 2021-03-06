var game = new Phaser.Game(800, 600, Phaser.AUTO, "game");
var main = { preload: preloadGameplay, create: createGameplay, update: updateGameplay };
var menu = { preload: preloadMenu, create: createMenu };
var howToPlay = { preload: preloadHowToPlay, create: createHowToPlay };
var credit = { preload: preloadCredit, create: createCredit };
game.state.add('menu', menu);
game.state.add('main', main);
game.state.add('howtoplay', howToPlay);
game.state.add('credit', credit);
game.state.start('menu');
function preloadMenu() {
    game.load.onLoadStart.add(loadStart, this);
    game.load.onFileComplete.add(fileComplete, this);
    game.load.onLoadComplete.add(loadComplete, this);
    game.stage.backgroundColor = '#182d3b';
    game.load.image('backgroundMenu', '9-game-cj/images/BGmenu.png');
    game.load.spritesheet('startButton', '9-game-cj/images/startButton.png', 796 / 2, 92);
    game.load.spritesheet('creditButton', '9-game-cj/images/creditButton.png', 796 / 2, 92);
    game.load.spritesheet('reportButton', '9-game-cj/images/reportButton.png', 796 / 2, 92);
    game.load.spritesheet('mute', '9-game-cj/images/mute.png', 450, 447);

    ////9-game-cj/sound////
    game.load.audio('BGMMenu', '9-game-cj/sound/BGMMenu.mp3');
}
function preloadHowToPlay() {
    game.stage.backgroundColor = '#182d3b';
    game.load.image('backgroundMenu', '9-game-cj/images/BGmenu.png');
    game.load.image('how1', '9-game-cj/images/howtop1.png');
    game.load.image('how2', '9-game-cj/images/howtop2.png');
    game.load.image('how3', '9-game-cj/images/howtop3.png');
    game.load.spritesheet('mute', '9-game-cj/images/mute.png', 450, 447);
    game.load.audio('startSound', '9-game-cj/sound/Start.mp3');
}

function preloadCredit() {
    game.load.spritesheet('menuButton', '9-game-cj/images/menuBtu.png', 796 / 2, 92);
    game.load.spritesheet('mute', '9-game-cj/images/mute.png', 450, 447);
    game.load.image('resultBG', '9-game-cj/images/resultBG.png');
}

function preloadGameplay() {
    game.load.image('background3', '9-game-cj/images/BgState3.png');
    game.load.image('background1', '9-game-cj/images/BgState1.png');
    game.load.image('background2', '9-game-cj/images/BgState2.png');
    game.load.image('miss', '9-game-cj/images/miss.png');
    game.load.image('bad', '9-game-cj/images/bad.png');
    game.load.image('cool', '9-game-cj/images/cool.png');
    game.load.image('great', '9-game-cj/images/great.png');
    game.load.image('perfect', '9-game-cj/images/perfect.png');
    game.load.image('guage', '9-game-cj/images/guage.png');
    game.load.image('guageSeal', '9-game-cj/images/guageBlocker.png');
    game.load.image('buttonLineHead', '9-game-cj/images/buttonLineHead.png');
    game.load.image('buttonLineTail', '9-game-cj/images/buttonLineTail.png');
    game.load.image('buttonLineBody', '9-game-cj/images/buttonLineBody.png');
    game.load.image('checkerPic', '9-game-cj/images/pointer.png');
    game.load.image('beam', '9-game-cj/images/beam.png');
    game.load.image('checkbar', '9-game-cj/images/checkbar.png');
    game.load.image('stopwatch', '9-game-cj/images/stopwatch.png');
    game.load.image('stopwatchBackground', '9-game-cj/images/stopwatchBackground.png');
    game.load.image('timestopBG', '9-game-cj/images/timestopBG.png');
    game.load.image('resultBG', '9-game-cj/images/resultBG.png');
    game.load.image('shareBtn', '9-game-cj/images/share.png');

    game.load.spritesheet('ship', '9-game-cj/images/wip.png', 3600 / 3, 2010, 3);
    game.load.spritesheet('up', '9-game-cj/images/up2.png', 45, 45, 8);
    game.load.spritesheet('down', '9-game-cj/images/down2.png', 45, 45, 8);
    game.load.spritesheet('right', '9-game-cj/images/right2.png', 45, 45, 8);
    game.load.spritesheet('left', '9-game-cj/images/left2.png', 45, 45, 8);
    game.load.spritesheet('laser', '9-game-cj/images/biglaser.png');
    game.load.spritesheet('spacebarBlock', '9-game-cj/images/dontpush.png', 234 / 2, 120, 2);
    game.load.spritesheet('numberText', '9-game-cj/images/numberText.png', 450 / 12, 50, 12);
    game.load.spritesheet('restartBtn', '9-game-cj/images/restartBtn.png', 796 / 2, 92);
    game.load.spritesheet('smoke', '9-game-cj/images/smoke.png', 200, 450, 5);
    game.load.spritesheet('grade', '9-game-cj/images/grade.png', 2142 / 6, 446, 6);
    game.load.spritesheet('AttentionSpacebar', '9-game-cj/images/attentionSpacebar.png', 796 / 2, 92);

    /////metarial/////
    game.load.spritesheet('shark', '9-game-cj/images/shark2.png', 50, 50);
    game.load.spritesheet('shipAndCannon', '9-game-cj/images/cannon.png', 800, 240, 2);
    game.load.spritesheet('clound1', '9-game-cj/images/clound.png');
    game.load.spritesheet('cloudStartStage2', '9-game-cj/images/cloudStartStage2.png');

    ////9-game-cj/sound////
    game.load.audio('BGMStage1', '9-game-cj/sound/BGMStage1.mp3');
    game.load.audio('BGMStage2', '9-game-cj/sound/BGMStage2.mp3');
    game.load.audio('BGMStage3', '9-game-cj/sound/BGMStage3.mp3');
    game.load.audio('timestop', '9-game-cj/sound/timeStop.mp3');
    game.load.audio('fall', '9-game-cj/sound/PlayerFall.mp3');
    game.load.audio('death', '9-game-cj/sound/Death.mp3');
    game.load.audio('wrongButton', '9-game-cj/sound/WrongButton.mp3');
    game.load.audio('perfect', '9-game-cj/sound/perfect.mp3');
    game.load.audio('great', '9-game-cj/sound/Great.mp3');
    game.load.audio('cool', '9-game-cj/sound/Fair.mp3');
    game.load.audio('bad', '9-game-cj/sound/bad.mp3');
    game.load.audio('getSkillPoint', '9-game-cj/sound/getStopTime.mp3');
    game.load.audio('passStage', '9-game-cj/sound/PassStage.mp3');
    game.load.audio('cannonShoot', '9-game-cj/sound/CannonShoot.mp3');

}

var isSound = true;
var loadingText;
//////// ingame variable /////
var perSpawn;
var checker;
var checkerSpeed;
var checkerPic;
var cursors;
var progressBar;
var checkbar;
var spaceButton;
var stopTimeButton;
var wave;
var buttonLine;
var waveCheckOrder = 0;
var arrow = ["up", "down", "right", "left"];
var difficulty;
var arrowKeyDownTimer = 0;
var spaceKeyDownTimer = 0;
var perfect;
var greatR, greatL;
var coolL, coolR;
var badL, badR;
var wippo;
var floorFront;
var floorBack;
var bg;
var bgSpeed;
var perfectSpeed = 0.5;
var pic;
var scoreShow;
var scoreDigit1;
var scoreDigit2;
var scoreDigit3;
var scoreDigit4;
var scoreDigit5;
var scoreDigit6;
var gamemode;
var specialGuageIsSpawned;
var specialGuage;
var specialGuageSeal;
var AttentionSpacebar;
var isSpacebarPressed;
var spacebarBlock;
var spacebarBlockSpawnedLastTime;
var isSpacebarDown;
var maxGuage;
var guageAliveTimer;
var guageTimeCounter;
var guageTimerDigit2;
var guageTimerDigit1;
var guageTimerDecimal;
var guageTimerDecPoint;
var stopTimeTimer;
var stopTimeCounter;
var stopTimePointText;
var isTimeStopped;
var timestopBG;
var perfectStack;
var stopTimePoint;
var stateHandle;
var bgChange;
var isfirstChange;
var isfirstOver;
var buttonRestart;
var smoke;
var stopwatchIcon;
var stopTimePointBg;
var stopTimeGroup;
/////////result component////////
var resultComponent;
var resultBG;
var resultGrade;
var perfectText;
var greatText;
var coolText;
var badText;
var tipText;
var tipsMessage;
var countPerfect;
var countGreat;
var countCool;
var countBad;
var shareBtn;
/////////Sound variable//////////
var timeStopSound;
var BGMStage1;
var BGMStage2;
var BGMStage3;
var fallSound;
var BGMMenu;
var BGMResult;
var wrongButtonSound;
var perfectSound;
var greatSound;
var coolSound;
var badSound;
var getTimeStopPoint;
var cannonShoot;
var passStageSound;
var startBtnSound;

/////////material variable///////
var sharkGroup;
var sharkM;
var clound1Group;
var cloudStartStage2;
var startButton;
var howtoplayButton;
var creditButton;
var scoreBoardButton;
var reportButton;

function createMenu() {
    game.stage.disableVisibilityChange = true;

    game.add.image(0, 0, 'backgroundMenu');
    startButton = game.add.button(game.world.width * (3.5 / 5) + 30, game.world.height * (4 / 5), 'startButton', toHowToPlay, this, 0, 1, 0);
    startButton.anchor.set(0.5);
    startButton.scale.setTo(0.7);
    creditButton = game.add.button(game.world.width * (3.5 / 5) + 30, game.world.height * (4.5 / 5), 'creditButton', toCredit, this, 0, 1, 0);
    creditButton.anchor.set(0.5);
    creditButton.scale.setTo(0.37);
    if (BGMMenu == null) {
        BGMMenu = game.add.audio('BGMMenu');
        BGMMenu.volume = 0.4;
        BGMMenu.loopFull();
    }
    mute = game.add.button(game.world.width * (97 / 100), game.world.height * (4 / 100), 'mute', muteSounds, this);
    mute.scale.setTo(0.08, 0.08);
    mute.anchor.set(0.5);
    if (isSound)
        mute.frame = 0;
    else
        mute.frame = 1;
}

function createHowToPlay() {
    game.stage.disableVisibilityChange = true;

    createPage1();
    startBtnSound = game.add.audio('startSound');
    startBtnSound.volume = 0.6;
    mute = game.add.button(game.world.width * (97 / 100), game.world.height * (4 / 100), 'mute', muteSounds, this);
    mute.scale.setTo(0.08, 0.08);
    mute.anchor.set(0.5);
    mute.bringToTop();
    if (isSound)
        mute.frame = 0;
    else
        mute.frame = 1;
}

function createPage1() {
    state = game.add.image(0, 0, 'how1');
    state.scale.setTo(0.24);
    textNext = game.add.text(game.world.width * (0.91), game.world.height * (0.918), 'Next', { font: '25px' });
    textNext.anchor.set(0.5);
    textNext.inputEnabled = true;
    textNext.input.enableDrag();
    textNext.events.onInputDown.add(function () {
        state.destroy();
        textNext.destroy();
        createPage2();
        mute.bringToTop();
    }, this);
    textNext.events.onInputOver.add(function () {
        textNext.addColor('#FDC66D', 0);
        textNext.fontSize = 30;
    }, this);
    textNext.events.onInputOut.add(function () {
        textNext.addColor('#000', 0);
        textNext.fontSize = 25;
    }, this);
}

function createPage2() {
    state = game.add.image(0, 0, 'how2');
    state.scale.setTo(0.24);
    textPre = game.add.text(game.world.width * (0.09), game.world.height * (0.918), 'Pre', { font: '25px' });
    textPre.inputEnabled = true;
    textPre.anchor.set(0.5);
    textPre.input.enableDrag();
    textPre.events.onInputDown.add(function () {
        state.destroy();
        textPre.destroy();
        textNext.destroy();
        createPage1();
        mute.bringToTop();
    }, this);
    textPre.events.onInputOver.add(function () {
        textPre.addColor('#FDC66D', 0);
        textPre.fontSize = 30;
    }, this);
    textPre.events.onInputOut.add(function () {
        textPre.addColor('#000', 0);
        textPre.fontSize = 25;
    }, this);

    textNext = game.add.text(game.world.width * (0.91), game.world.height * (0.918), 'Next', { font: '25px' });
    textNext.inputEnabled = true;
    textNext.anchor.set(0.5);
    textNext.input.enableDrag();
    textNext.events.onInputDown.add(function () {
        state.destroy();
        textNext.destroy();
        createPage3();
        mute.bringToTop();
    }, this);
    textNext.events.onInputOver.add(function () {
        textNext.addColor('#FDC66D', 0);
        textNext.fontSize = 30;
    }, this);
    textNext.events.onInputOut.add(function () {
        textNext.addColor('#000', 0);
        textNext.fontSize = 25;
    }, this);
}

function createPage3() {
    state = game.add.image(0, 0, 'how3');
    state.scale.setTo(0.24);
    textPre = game.add.text(game.world.width * (0.09), game.world.height * (0.918), 'Pre', { font: '25px' });
    textPre.anchor.set(0.5);
    textPre.inputEnabled = true;
    textPre.input.enableDrag();
    textPre.events.onInputDown.add(function () {
        state.destroy();
        textPre.destroy();
        textNext.destroy();
        createPage2();
        mute.bringToTop();
    }, this);
    textPre.events.onInputOver.add(function () {
        textPre.addColor('#FDC66D', 0);
        textPre.fontSize = 30;
    }, this);
    textPre.events.onInputOut.add(function () {
        textPre.addColor('#000', 0);
        textPre.fontSize = 25;
    }, this);
    textNext = game.add.text(game.world.width * (0.91), game.world.height * (0.918), 'Start!!', { font: '25px' });
    textNext.inputEnabled = true;
    textNext.anchor.set(0.5);
    textNext.input.enableDrag();
    textNext.events.onInputDown.add(function () {
        state.destroy();
        textNext.destroy();
        toGameplay();
        mute.bringToTop();
    }, this);
    textNext.events.onInputOver.add(function () {
        textNext.addColor('#FDC66D', 0);
        textNext.fontSize = 30;
    }, this);
    textNext.events.onInputOut.add(function () {
        textNext.addColor('#000', 0);
        textNext.fontSize = 25;
    }, this);
}
function createCredit() {
    game.add.image(0, 0, 'backgroundMenu');
    resultBG = game.add.sprite(game.world.width / 2, game.world.height / 2.1, 'resultBG');
    resultBG.anchor.set(0.5);
    resultBG.scale.setTo(1);
    game.add.text(game.world.width * 0.2, game.world.height * 0.2, 'Credit\n', { font: '30px super', fill: '#EEE' });
    game.add.text(game.world.width * 0.25, game.world.height * 0.2 + 40, "Sounds\n", { font: '25px super', fill: '#EEE' });
    game.add.text(game.world.width * 0.30, game.world.height * 0.2 + 75, 'Audio Library - No Copyright Music\n' +
        'WoWMusicGuru\n' +
        'Theapplegeek\n', { font: '20px super', fill: '#EEE' });
    game.add.text(game.world.width * 0.25, game.world.height * 0.2 + 165, '9-game-cj/images\n', { font: '25px super', fill: '#EEE' });
    game.add.text(game.world.width * 0.30, game.world.height * 0.2 + 195, 'www.freepik.com', { font: '20px super', fill: '#EEE' });
    menuButton = game.add.button(game.world.width * 0.15, game.world.height * 0.95, 'menuButton', function () {
        game.state.start('menu');
    }, this, 0, 1, 0);
    menuButton.scale.setTo(0.5);
    menuButton.anchor.set(0.5);
    mute = game.add.button(game.world.width * (97 / 100), game.world.height * (4 / 100), 'mute', muteSounds, this);
    mute.scale.setTo(0.08, 0.08);
    mute.anchor.set(0.5);
    mute.bringToTop();
    if (isSound)
        mute.frame = 0;
    else
        mute.frame = 1;
}

function loadStart() {
    loadingText = game.add.text(game.world.width / 2, game.world.height / 2, 'Loading 0%', { fill: '#ffffff' });
    loadingText.anchor.set(0.5);
}
function fileComplete(progress, cacheKey, success, totalLoaded, totalFiles) {
    loadingText.setText("Loading " + progress + "%");
}
function loadComplete() {
    loadingText.destroy();
}

function createGameplay() {
    game.stage.disableVisibilityChange = true;
    perSpawn = [90, 5, 5, 0];
    for (i = 1; i < 4; i++)
        perSpawn[i] += perSpawn[i - 1];
    stateHandle = 1;
    // stateHandle = 2;
    isfirstChange = true;
    isfirstOver = true;
    game.physics.startSystem(Phaser.Physics.ARCADE);
    this.myWorld = game.add.group();
    this.myWorld.enableBody = true;
    bg = this.add.tileSprite(0, 0, 800, 600, 'background1');
    bg.fixedToCamera = true;
    bg.tilePosition.y += 600;
    bgSpeed = 0;
    spaceButton = this.input.keyboard.addKey(Phaser.KeyCode.SPACEBAR);
    stopTimeButton = this.input.keyboard.addKey(Phaser.KeyCode.ENTER);
    cursors = this.input.keyboard.createCursorKeys();

    //// material ///////////////////////////////////////////////////////////
    sharkM = null;
    cloudStartStage2 = null;

    sharkGroup = game.add.group();
    sharkGroup.enableBody = true;
    sharkGroup.physicsBodyType = Phaser.Physics.ARCADE;
    for (var i = 0; i < 100; i++) {
        var shark = sharkGroup.create(0, 0, 'shark');
        shark.exists = false;
        shark.visible = false;
        shark.scale.setTo(1.25, 1.25);
        shark.anchor.set(0.5);
        shark.checkWorldBounds = true;
        shark.body.gravity.y = 380;
        shark.events.onOutOfBounds.add(killObj, this);
    }
    sharkGroup.callAll('animations.add', 'animations', 'moveFromLeft', [26, 27, 28], 100, true);
    sharkGroup.callAll('animations.add', 'animations', 'moveFromRight', [26, 27, 28], 100, true);


    clound1Group = game.add.group();
    clound1Group.enableBody = true;
    clound1Group.physicsBodyType = Phaser.Physics.ARCADE;
    for (var i = 0; i < 100; i++) {
        var clound = clound1Group.create(0, 0, 'clound1');
        clound.exists = false;
        clound.visible = false;
        clound.anchor.set(0.5, 0.6);
        clound.checkWorldBounds = true;
        clound.events.onOutOfBounds.add(killObj, this);
    }

    smoke = this.add.sprite(0, 0, 'smoke');
    game.physics.arcade.enable(smoke);
    smoke.anchor.set(0.5, 0);
    smoke.animations.add('great', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 40, true);
    smoke.kill();
    smoke.animations.play('great');

    floorBack = this.add.sprite(game.world.width / 2, game.world.height * (4.7 / 5), 'shipAndCannon');
    game.physics.arcade.enable(floorBack);
    floorBack.scale.setTo(1, 1);
    floorBack.body.collideWorldBounds = false;
    floorBack.body.immovable = true;
    floorBack.anchor.set(0.5);
    floorBack.animations.add('back', [0], 1, false);
    floorBack.play('back');

    wippo = this.add.sprite(game.world.width / 2, game.world.height * (4 / 5) + 15, 'ship');
    game.physics.arcade.enable(wippo);
    wippo.anchor.set(0.5);
    wippo.scale.setTo(0.1, 0.1);
    wippo.checkWorldBounds = true;
    wippo.animations.add('rush', [1, 0], 1, false);
    wippo.animations.add('death', [2], 1, false);

    wippo.events.onOutOfBounds.add(killObj, this);

    floorFront = this.add.sprite(game.world.width / 2, game.world.height * (4.7 / 5), 'shipAndCannon');
    game.physics.arcade.enable(floorFront);
    floorFront.scale.setTo(1, 1);
    floorFront.body.collideWorldBounds = false;
    floorFront.body.immovable = true;
    floorFront.anchor.set(0.5);
    floorFront.animations.add('front', [1], 1, false);
    floorFront.play('front');

    ////////////////////////////////////////////////////////////
    checker = this.add.sprite(0, game.world.height * (4 / 5) + 120, 'laser');
    game.physics.arcade.enable(checker);
    checker.anchor.set(0.5);
    checker.scale.setTo(0.05, 0.3);
    checker.body.maxVelocity.set(1500);
    checker.body.collideWorldBounds = false;
    checkerSpeed = 60;
    wave = [];
    buttonLine = [];
    difficulty = 1;
    gamemode = "prepare";


    specialGuageIsSpawned = false;
    isSpacebarPressed = false;
    spacebarBlock = this.add.sprite(game.world.width * (3 / 5) - 25, game.world.height * (3 / 5) - 25, 'spacebarBlock');
    spacebarBlock.scale.setTo(0.5, 0.5);
    spacebarBlock.kill();
    spacebarBlockSpawnedLastTime = true;
    spacebarBlock.animations.add('active', [0, 1], 10, true);
    specialGuage = this.add.sprite(game.world.width * (1 / 5), game.world.height * (0.9 / 5), 'guage');
    specialGuage.anchor.set(0.5, 0);
    specialGuageSeal = this.add.sprite(game.world.width * (1 / 5) - 7, specialGuage.y + specialGuage.height * 0.72, 'guageSeal');
    specialGuageSeal.anchor.set(0.5, 0.5);
    specialGuageSeal.scale.setTo(1, 1);
    specialGuage.kill();
    specialGuageSeal.kill();
    guageTimerDigit2 = game.add.sprite(specialGuage.x - specialGuage.width * (3 / 10), specialGuage.y + specialGuage.height * (82 / 100), 'numberText');
    guageTimerDigit2.scale.setTo(0.75, 0.75);
    guageTimerDigit1 = game.add.sprite(guageTimerDigit2.x + guageTimerDigit2.width, guageTimerDigit2.y, 'numberText');
    guageTimerDigit1.scale.setTo(0.75, 0.75);
    guageTimerDecPoint = game.add.sprite(
        (guageTimerDigit2.x + guageTimerDigit2.width + guageTimerDigit1.x + guageTimerDigit1.width) / 2, guageTimerDigit2.y, 'numberText');
    guageTimerDecPoint.scale.setTo(0.75, 0.75);
    guageTimerDecimal = game.add.sprite(guageTimerDigit1.x + guageTimerDigit1.width, guageTimerDigit2.y, 'numberText');
    guageTimerDecimal.scale.setTo(0.75, 0.75);
    guageTimerDecPoint.frame = 10;
    guageTimerDigit2.alpha = 0;
    guageTimerDigit1.alpha = 0;
    guageTimerDecimal.alpha = 0;
    guageTimerDecPoint.alpha = 0;
    AttentionSpacebar = game.add.sprite(specialGuage.x - 3, game.world.height * (72 / 100), 'AttentionSpacebar');
    AttentionSpacebar.anchor.set(0.5);
    AttentionSpacebar.scale.setTo(0.35);
    AttentionSpacebar.animations.add('active', [0, 1], 15, true);
    AttentionSpacebar.kill();
    AttentionSpacebar.bringToTop();

    stopTimeGroup = game.add.group();
    stopTimeGroup.enableBody = true;
    stopTimeGroup.physicsBodyType = Phaser.Physics.ARCADE;
    timestopBG = game.add.image(0, 0, 'timestopBG');
    timestopBG.alpha = 0;





    game.time.events.add(Phaser.Timer.SECOND * 2, wippoLaunch, this);
    isSpacebarDown = false;
    maxGuage = 100;
    perfectStack = 0;
    stopTimePoint = 1;

    ////9-game-cj/sound////
    BGMMenu.stop();
    timeStopSound = game.add.audio('timestop');
    BGMStage1 = game.add.audio('BGMStage1');
    BGMStage2 = game.add.audio('BGMStage2');
    BGMStage3 = game.add.audio('BGMStage3');
    fallSound = game.add.audio('fall');
    BGMMenu = game.add.audio('BGMMenu');
    BGMResult = game.add.audio('death');
    wrongButtonSound = game.add.audio('wrongButton');
    wrongButtonSound.volume = 0.6;
    perfectSound = game.add.audio('perfect');
    greatSound = game.add.audio('great');
    coolSound = game.add.audio('cool');
    badSound = game.add.audio('bad');
    perfectSound.volume = 0.6;
    greatSound.volume = 0.6;
    coolSound.volume = 1;
    badSound.volume = 1;
    getTimeStopPoint = game.add.audio('getSkillPoint');
    getTimeStopPoint.volume = 2.5;
    cannonShoot = game.add.audio('cannonShoot');
    cannonShoot.volume = 0.6;
    passStageSound = game.add.audio('passStage');
    passStageSound.volume = 0.6;
    BGMStage1.play();
    //wippo.events.onOutOfBounds.add(gameEnd(), this);

    scoreShow = pic = 0;
    scoreDigit6 = game.add.sprite(0, 0, 'numberText');
    scoreDigit5 = game.add.sprite(scoreDigit6.x + scoreDigit6.width, 0, 'numberText');
    scoreDigit4 = game.add.sprite(scoreDigit5.x + scoreDigit5.width, 0, 'numberText');
    scoreDigit3 = game.add.sprite(scoreDigit4.x + scoreDigit4.width, 0, 'numberText');
    scoreDigit2 = game.add.sprite(scoreDigit3.x + scoreDigit3.width, 0, 'numberText');
    scoreDigit1 = game.add.sprite(scoreDigit2.x + scoreDigit2.width, 0, 'numberText');
    scoreDigit1.frame = 11;
    scoreDigit2.frame = 11;
    scoreDigit3.frame = 11;
    scoreDigit4.frame = 11;
    scoreDigit5.frame = 11;
    scoreDigit6.frame = 11;

    ////result/////
    resultComponent = game.add.group();
    resultBG = game.add.sprite(game.world.width / 2, game.world.height / 2, 'resultBG');
    resultBG.anchor.set(0.5);
    resultGrade = game.add.sprite(resultBG.x * 1.3, resultBG.y * 0.8 - 40, 'grade');
    resultGrade.anchor.set(0.5);
    perfectText = game.add.text(resultBG.x * 0.45, resultBG.y * 0.6, "Perfect : ", { font: "24px Merriweather", fill: "#FFFFFF" });
    greatText = game.add.text(resultBG.x * 0.45, perfectText.y + perfectText.height * 1.2, "Great   : ", { font: "24px Merriweather", fill: "#FFFFFF" });
    coolText = game.add.text(resultBG.x * 0.45, greatText.y + greatText.height * 1.2, "Cool    : ", { font: "24px Merriweather", fill: "#FFFFFF" });
    badText = game.add.text(resultBG.x * 0.45, coolText.y + coolText.height * 1.2, "Bad     : ", { font: "24px Merriweather", fill: "#FFFFFF" });
    tipText = game.add.text(resultBG.x, resultBG.y * 1.8 - 70, "Tips : You died. eiei", { font: "32px super", fill: "#FF6633" });
    tipText.anchor.set(0.5);
    tipsMessage = ['Tips : เค้าเป็นอัลปาก้านะ ไม่ใช่แกะ :3', 'Tips : พยายามเข้านะ!', 'Tips : ระวังนะ! ปุ่มสีม่วงอาจเปลี่ยนปุ่มด้านหลังได้'
        , 'Tips : อย่าลืมนะ ถ้าเจอปุ่มสีแดงให้กดด้านตรงข้าม', 'Tips : อย่ากระพริบตาหล่ะ อัลปาก้าจะมาแทนปุ่มสีน้ำเงิน', 'Tips : อย่ายอมแพ้นะ ปุ่ม Enter ช่วยหยุดเวลาได้'
        , 'Tips : ระวังปุ่มพังซะก่อนนะ :)', 'Tips : มีความพยายาม... แต่ก็ยังอ่อนหัด', 'Tips : แ บ ะ ะ ะ ะ ~', 'Tips : แ ม๊ ะ ะ ะ ~'];
    countPerfect = 0;
    countGreat = 0;
    countCool = 0;
    countBad = 0;

    resultComponent.add(resultBG);
    resultComponent.add(resultGrade);
    resultComponent.add(perfectText);
    resultComponent.add(greatText);
    resultComponent.add(coolText);
    resultComponent.add(badText);
    resultComponent.add(tipText);

    resultComponent.setAll('alpha', 0);
    resultComponent.add(scoreDigit1);
    resultComponent.add(scoreDigit2);
    resultComponent.add(scoreDigit3);
    resultComponent.add(scoreDigit4);
    resultComponent.add(scoreDigit5);
    resultComponent.add(scoreDigit6);

    mute = game.add.button(game.world.width * (97 / 100), game.world.height * (4 / 100), 'mute', muteSounds, this);
    mute.scale.setTo(0.08, 0.08);
    mute.anchor.set(0.5);
    if (isSound)
        mute.frame = 0;
    else
        mute.frame = 1;
}


var summonCooldown = 0;
function updateGameplay() {

    bg.tilePosition.y += bgSpeed;
    updateScore();
    if (gamemode == "prepare") {
        if (wippo.y <= 200) {
            game.time.events.add(Phaser.Timer.SECOND * 0, gameBegin, this); //and it's work with this.
        }

    } else if (gamemode == "ingame") {

        if (!isTimeStopped) {
            materialGenerator();
        }
        collectArrow();
        if (!isTimeStopped) {
            checker.body.velocity.x = checkerSpeed;
            checkerPic.x = checker.x;
            checkerPic.y = checker.y;
            if (spacebarBlock.alive) {
                if (spaceButton.isDown && game.time.now > spaceKeyDownTimer) {
                    wippo.animations.play("death");
                    gameEnd();
                }
            } else if (spaceButton.isDown && game.time.now > spaceKeyDownTimer) {
                isSpacebarPressed = true;
                spaceKeyDownTimer = game.time.now + 1400;
                checkAccuracy();
                clearWave();
                spacebarBlockSpawnedLastTime = false;
                if (bg.tilePosition.y >= 1400 && stateHandle < 3 && gamemode == "ingame") {
                    bgSpeed = perfectSpeed * 30 / 100;
                    gamemode = "feverTime";
                    checker.alpha = 0;
                    checkerPic.alpha = 0;
                    checkbar.alpha = 0;
                    progressBar.alpha = 0;
                    guageTimeCounter = 15.0;
                    guageAliveTimer = game.time.events.repeat(Phaser.Timer.SECOND * 0.1, 151, countdownTimer, this, "feverTime");
                }
            }
            if (!checkOverlap(checker, progressBar)/*checker.x > game.world.width * (5 / 7)*/) {
                if (game.time.now > summonCooldown) {
                    if (!isSpacebarPressed) {
                        if (spacebarBlock.alive) {
                            spacebarBlock.kill();
                        } else {
                            wippo.animations.play("death");
                            gameEnd();//====== comment ทิ้งเพื่อไม่ต้องกด spacebar
                            return;
                        }

                    }
                    summonWave();
                    spacebarBlock.bringToTop();
                    isSpacebarPressed = false;
                }
                checker.reset(progressBar.x, progressBar.y);
                summonCooldown = game.time.now + 1500;
            }
            if (stopTimeButton.isDown && stopTimePoint > 0) {
                stoptime();
            }
        } else {
            for (var i = waveCheckOrder; i <= wave.length - 1; i++) {
                wave[i].arrow.animations.stop();
                wave[i].arrow.animations.play('default');
            }
        }

    } else if (gamemode == "feverTime") {
        if (!isTimeStopped) {
            materialGenerator();
        }
        if (!specialGuageIsSpawned) {
            console.log("spawn gauge");
            specialGuage.reset(game.world.width * (1 / 5), game.world.height * (0.9 / 5));
            specialGuageSeal.reset(game.world.width * (1 / 5) - 7, specialGuage.y + specialGuage.height * 0.72);
            specialGuageIsSpawned = true;
            checker.alpha = 0;
            AttentionSpacebar.revive();
            AttentionSpacebar.play('active');
        }
        if (!isSpacebarDown) {
            if (spaceButton.isDown) {
                if (specialGuageSeal.y >= specialGuage.y * 1.3) {
                    specialGuageSeal.y -= 12;
                }
                isSpacebarDown = true;
            }
        }
        if (!spaceButton.isDown) {
            isSpacebarDown = false;
        }
        if (!isTimeStopped) {
            if (specialGuageSeal.y < specialGuage.y + specialGuage.height * 0.72) {
                specialGuageSeal.y += 0.8;
            }

            if (specialGuageSeal.y < specialGuage.y * 1.3 && specialGuage != null) {
                pic += 500;
                specialGuage.kill();
                specialGuageSeal.kill();
                gamemode = "changingState";
                AttentionSpacebar.kill();
                game.time.events.remove(guageAliveTimer);
                cancelCountdownTimer("feverTime");
                game.time.events.add(Phaser.Timer.SECOND * 1, function () {
                    maxGuage = 100;
                    isSpacebarDown = false;
                    specialGuageIsSpawned = false;
                }, this);
            }
            if (stopTimeButton.isDown && stopTimePoint > 0) {
                stoptime();

            }
        } else {
            if (maxGuage < 0) {
                maxGuage = -1;
            }
        }

    } else if (gamemode == "changingState") {
        if (bgChange != null) {
            bgChange.tilePosition.y += bgSpeed;
        }
        if (cloudStartStage2 != null) {
            if (cloudStartStage2.y > 500 && cloudStartStage2.body.velocity.y > 10) {
                cloudStartStage2.body.velocity.y -= 5;
            }
        }
        if (isfirstChange) {
            isfirstChange = false;
            if (stateHandle == 1) {
                perSpawn[0] = 70;
                perSpawn[1] = 15;
                perSpawn[2] = 10;
                perSpawn[3] = 5;
                for (i = 1; i < 4; i++)
                    perSpawn[i] += perSpawn[i - 1];
                bgChange = game.add.tileSprite(0, 0, this.game.world.width, this.game.world.height, 'background2');
                bgChange.tilePosition.y += 600;
                BGMStage1.fadeOut(3000);
                cloudStartStage2 = game.add.sprite(0, 0, 'cloudStartStage2');
                cloudStartStage2.anchor.setTo(0, 0.5);
                game.physics.arcade.enable(cloudStartStage2);
                cloudStartStage2.checkWorldBounds = true;
                cloudStartStage2.events.onOutOfBounds.add(function () {
                    cloudStartStage2.destroy();
                    cloudStartStage2 = null;
                }, this);
                cloudStartStage2.body.velocity.y = 150;
                cloudStartStage2.sendToBack();
                wippo.sendToBack();
                smoke.sendToBack();
                bg.sendToBack();
                clound1Group.setAll('alpha', 0.65);

            }
            else if (stateHandle == 2) {
                perSpawn[0] = 50;
                perSpawn[1] = 25;
                perSpawn[2] = 10;
                perSpawn[3] = 15;
                for (i = 1; i < 4; i++)
                    perSpawn[i] += perSpawn[i - 1];
                bgChange = game.add.tileSprite(0, 0, this.game.world.width, this.game.world.height, 'background3');
                bgChange.tilePosition.y += 600;
                BGMStage2.fadeOut(3000);
            }
            bgChange.alpha = 0;
            bgChange.sendToBack();
            var loop = game.time.events.loop(Phaser.Timer.SECOND * 0.2, function () {
                bg.alpha -= 0.05;
                bgChange.alpha += 0.05;
                if (bg.alpha < 0.0000001) {
                    isfirstChange = true;
                    gamemode = "ingame";
                    checker.alpha = 1;
                    checkerPic.alpha = 1;
                    checkbar.alpha = 1;
                    progressBar.alpha = 1;
                    if (stateHandle == 1) {
                        BGMStage2.play();
                    } else if (stateHandle == 2) {
                        BGMStage3.play();
                    }


                    bg.destroy();
                    bg = bgChange;
                    bgChange = null;
                    bg.autoScroll(this.levelSpeed, 0);
                    bg.fixedToCamera = true;
                    game.time.events.remove(loop);
                    stateHandle++;
                }
            }, this);
            passStageSound.play();
        }
    } else if (gamemode == "gameover") {
        if (wippo.alive) {
            bgSpeed = -perfectSpeed * 90 / 100;
        } else {
            bgSpeed = 0;
        }
        if (isfirstOver) {
            isfirstOver = false;
            var digitLength = 6;
            for (; digitLength > 0; digitLength--) {
                if (Math.floor(pic / (Math.pow(10, digitLength - 1))) != 0) {
                    break;
                }
            }
            switch (digitLength) {
                case 6:
                    scoreDigit3.reset(resultBG.x - resultBG.width / 6 - 9, resultBG.y / 2.8);
                    scoreDigit4.reset(resultBG.x - scoreDigit3.width - resultBG.width / 6 - 9, scoreDigit3.y);
                    scoreDigit5.reset(scoreDigit4.x - scoreDigit4.width, scoreDigit4.y);
                    scoreDigit6.reset(scoreDigit5.x - scoreDigit5.width, scoreDigit4.y);
                    scoreDigit2.reset(scoreDigit3.x + scoreDigit3.width, scoreDigit4.y);
                    scoreDigit1.reset(scoreDigit2.x + scoreDigit2.width, scoreDigit4.y);

                    break;
                case 5:
                    scoreDigit3.reset(resultBG.x - scoreDigit3.width / 2 - resultBG.width / 6 - 9, resultBG.y / 2.8);
                    scoreDigit4.reset(scoreDigit3.x - scoreDigit3.width, scoreDigit3.y);
                    scoreDigit5.reset(scoreDigit4.x - scoreDigit4.width, scoreDigit4.y);
                    scoreDigit6.kill();
                    scoreDigit2.reset(scoreDigit3.x + scoreDigit3.width, scoreDigit4.y);
                    scoreDigit1.reset(scoreDigit2.x + scoreDigit2.width, scoreDigit4.y);
                    break;
                case 4:
                    scoreDigit3.reset(resultBG.x - scoreDigit3.width - resultBG.width / 6 - 9, resultBG.y / 2.8);
                    scoreDigit4.reset(scoreDigit3.x - scoreDigit3.width, scoreDigit3.y);
                    scoreDigit5.kill();
                    scoreDigit6.kill();
                    scoreDigit2.reset(scoreDigit3.x + scoreDigit3.width, scoreDigit4.y);
                    scoreDigit1.reset(scoreDigit2.x + scoreDigit2.width, scoreDigit4.y);
                    break;
                case 3:
                    scoreDigit2.reset(resultBG.x - scoreDigit2.width / 2 - resultBG.width / 6 - 9, resultBG.y / 2.8);
                    scoreDigit4.kill();
                    scoreDigit5.kill();
                    scoreDigit6.kill();
                    scoreDigit3.reset(scoreDigit2.x - scoreDigit2.width, scoreDigit2.y);
                    scoreDigit1.reset(scoreDigit2.x + scoreDigit2.width, scoreDigit2.y);
                    break;
                case 2:
                    scoreDigit3.kill();
                    scoreDigit4.kill();
                    scoreDigit5.kill();
                    scoreDigit6.kill();
                    scoreDigit2.reset(resultBG.x - scoreDigit2.width - resultBG.width / 6 - 9, resultBG.y / 2.8);
                    scoreDigit1.reset(scoreDigit2.x + scoreDigit2.width, scoreDigit2.y);
                    break;
                case 1:
                case 0:
                    scoreDigit6.kill();
                    scoreDigit5.kill();
                    scoreDigit4.kill();
                    scoreDigit3.kill();
                    scoreDigit2.kill();
                    scoreDigit1.reset(resultBG.x - scoreDigit1.width / 2 - resultBG.width / 6 - 9, resultBG.y / 2.8);
                    if (pic == 0) {
                        scoreDigit1.frame = 0;
                    }
                    break;

            }
            buttonRestart = game.add.button(resultBG.x - 60, resultBG.y * 1.55 - 75, 'restartBtn', function () {
                game.state.restart(true, false);
                BGMResult.stop();
                BGMStage1.stop();
                BGMStage2.stop();
                BGMStage3.stop();
            }, this, 0, 1, 0);

            shareBtn = game.add.button(resultBG.x - 202, resultBG.y * 1.55 - 77, 'shareBtn', function () {
                FB.ui({
                    method: 'share',
                    display: 'popup',
                    hashtag: '#HelloAlpaca',
                    quote: 'เราได้คะแนน ' + parseInt(Math.ceil(pic)) + ' มาเล่น Cannon Jump ด้วยกันนะ >< #HelloWorld #Alpaca #CannonJump',
                    href: 'https://game.helloworld.itbangmod.in.th/',
                }, function (response) {
                    if (response) {
                        swal({
                            title: 'แชร์เรียบร้อยแล้ว!',
                            text: 'อย่าลืมมาสมัคร HelloWorld #Alpaca กันนะ!',
                            icon: 'success',
                            button: 'OK',
                        });
                    }
                });
            }, this, 0, 0, 0);
            shareBtn.scale.setTo(0.25);
            shareBtn.anchor.set(0.5);

            perfectText.setText('Perfect   \u2006:     ' + countPerfect);
            greatText.setText('Great      :     ' + countGreat);
            coolText.setText('Cool        :     ' + countCool);
            badText.setText('Bad         :     ' + countBad);
            tipText.setText(tipsMessage[game.rnd.integerInRange(0, 9)]);
            tipText.stroke = '#222';
            tipText.strokeThickness = 2;
            buttonRestart.scale.setTo(0.40);
            buttonRestart.anchor.set(0.5);
            buttonRestart.alpha = 0;
            if (pic >= 10000) {
                resultGrade.frame = 5;
            } else if (pic >= 7000) {
                resultGrade.frame = 4;
            } else if (pic >= 4500) {
                resultGrade.frame = 3;
            } else if (pic >= 2000) {
                resultGrade.frame = 2;
            } else if (pic >= 500) {
                resultGrade.frame = 1;
            } else {
                resultGrade.frame = 0;
            }

        }
        if (buttonRestart.alpha < 1) {
            buttonRestart.alpha += 0.01;
            resultComponent.setAll('alpha', buttonRestart.alpha);
        }
        if (spaceButton.isDown && game.time.now > spaceKeyDownTimer) {
            game.state.restart(true, false);
            BGMResult.stop();
            BGMStage1.stop();
            BGMStage2.stop();
            BGMStage3.stop();
        }


    }

}
////mute
function muteSounds() {
    isSound = !isSound;
    if (!isSound) {
        game.sound.mute = true;
        mute.frame = 1;
    } else {
        mute.frame = 0;
        game.sound.mute = false;
    }
}
////////


function countdownTimer(timerName) {
    if (timerName == "feverTime") {
        if (guageTimerDigit2.alpha == 0) {
            guageTimerDigit2.alpha = 1;
            guageTimerDigit1.alpha = 1;
            guageTimerDecimal.alpha = 1;
            guageTimerDecPoint.alpha = 1;
        }
        guageTimerDigit2.bringToTop();
        guageTimerDigit1.bringToTop();
        guageTimerDecimal.bringToTop();
        guageTimerDecPoint.bringToTop();
        guageTimerDigit2.frame = Math.floor(guageTimeCounter / 10);
        guageTimerDigit1.frame = Math.floor(guageTimeCounter % 10);
        guageTimerDecimal.frame = Math.floor(guageTimeCounter * 10 % 10);

        if (!isTimeStopped)
            guageTimeCounter -= 0.1;

        if (guageTimeCounter <= 0) {
            wippo.animations.play("death");
            cancelCountdownTimer("feverTime");
            gameEnd();
        }
    } else if (timerName == "timeStopped") {

        stopTimeCounter -= 0.1;
        if (stopTimeCounter <= 0) {
            isTimeStopped = false;
            cancelCountdownTimer("timeStopped");
        }
        if (stopTimeCounter >= 2.3 && timestopBG.alpha < 0.5) {
            timestopBG.alpha += 0.075;
        }
        if (stopTimeCounter <= 0.5 && timestopBG.alpha > 0) {
            timestopBG.alpha -= 0.075;
        }
    }
}
function stoptime() {
    isTimeStopped = true;
    stopTimePoint--;
    stopTimeCounter = 3.0;
    stopTimeTimer = game.time.events.repeat(Phaser.Timer.SECOND * 0.1, 31, countdownTimer, this, "timeStopped");
    if (guageAliveTimer != null) {
        guageAliveTimer.repeatCount += 30;
    }
    stopTimeGroup.setAll('body.velocity.x', -200);
    game.time.events.add(700, function () {
        stopTimeGroup.setAll('body.velocity.x', 55);
        game.time.events.add(2500, function () {
            if (stopTimeCounter < 0.5) {
                stopTimeGroup.setAll('body.velocity.x', 0);
                stopTimePointBg.x = game.world.width * (85 / 100);
                stopTimePointBg.y = game.world.height * (20 / 100);
                stopwatchIcon.x = game.world.width * (85 / 100);
                stopwatchIcon.y = game.world.height * (20 / 100);
                stopTimePointText.x = game.world.width * (7 / 8);
                stopTimePointText.y = game.world.height * (20 / 100);
            }
        }, this);
    }, this);
    checker.body.velocity.x = 0;
    tempBgSpeed = bgSpeed;
    bgSpeed = 0;
    stopTimePointText.frame = stopTimePoint;
    smoke.animations.paused = true;

    var cloud1 = clound1Group.getFirstExists(true);
    if (cloud1 != null) {
        cloud1.body.velocity.y = 0;
    }
    if (cloudStartStage2 != null) {
        cloudStartStage2.body.velocity.y = 0;
    }
    if (AttentionSpacebar.alive) {
        AttentionSpacebar.animations.stop();
    }
    if (spacebarBlock.alive) {
        spacebarBlock.animations.stop();
    }
    sharkGroup.setAll('body.velocity.x', 0, false, false);
    sharkGroup.setAll('body.velocity.y', 0, false, false);
    sharkGroup.setAll('body.gravity.y', 0, false, false);
    sharkGroup.setAll('animations.paused', true, false);

    BGMStage1.pause();
    BGMStage2.pause();
    BGMStage3.pause();
    timeStopSound.play();
}
var tempBgSpeed;
function cancelCountdownTimer(timerName) {
    if (timerName == "feverTime") {
        if (guageTimerDigit2.alpha == 1) {
            guageTimerDigit2.alpha = 0;
            guageTimerDigit1.alpha = 0;
            guageTimerDecimal.alpha = 0;
            guageTimerDecPoint.alpha = 0;
        }
        if (specialGuage != null) {
            specialGuage.kill();
        }
        if (specialGuageSeal != null) {
            specialGuageSeal.kill();
        }
    } else if (timerName == "timeStopped") {

        bgSpeed = tempBgSpeed;

        smoke.animations.paused = false;

        ///material

        var cloud1 = clound1Group.getFirstExists(true);
        if (cloud1 != null) {
            cloud1.body.velocity.y = 70;
        }
        if (cloudStartStage2 != null && cloudStartStage2.y > 500) {
            cloudStartStage2.body.velocity.y = 10;
        }
        if (AttentionSpacebar.alive) {
            AttentionSpacebar.play('active');
        }
        if (spacebarBlock.alive) {
            spacebarBlock.animations.play('active');
        }
        sharkGroup.setAll('body.gravity.y', 380, false, false);
        sharkGroup.setAll('animations.paused', false, false);
        sharkGroup.setAll('body.velocity.y', 500, false, false);

        ////Sound
        if (stateHandle == 1) {
            BGMStage1.resume();
            BGMStage1.volume = 0.2;
            BGMStage1.fadeTo(800, 1);
        } else if (stateHandle == 2) {
            BGMStage2.resume();
            BGMStage2.volume = 0.2;
            BGMStage2.fadeTo(800, 1);
        } else {
            BGMStage3.resume();
            BGMStage3.volume = 0.2;
            BGMStage3.fadeTo(800, 1);
        }

    }
}
//////material function
var generatorCooldown = 0;
var sharkMCooldown = 60;
var clound1Cooldown = 120;
function materialGenerator() {
    if (stateHandle == 1) {
        //BG1
        if (sharkMCooldown <= 0) {
            sharkMCooldown = 60;
            var shark = sharkGroup.getFirstExists(false);
            // shark.reset(300,300);
            var sharkLaunchAt = game.rnd.integerInRange(game.world.height / 2, game.world.height);
            var spawnSide = game.rnd.integerInRange(0, 1);
            var sharkSpeed = game.rnd.integerInRange(400, 900);
            if (spawnSide == 0) {
                shark.reset(0, game.world.height);
                shark.animations.frame = 26;
                shark.animations.play('moveFromLeft');
                shark.body.velocity.x = 300;
                shark.body.velocity.y = -sharkSpeed;
            } else {
                shark.reset(game.world.width, game.world.height);
                shark.animations.frame = 25;
                shark.animations.play('moveFromRight');
                shark.body.velocity.x = -300;
                shark.body.velocity.y = -sharkSpeed;
            }
        }
        if (clound1Cooldown <= 0) {
            clound1Cooldown = game.rnd.integerInRange(660, 720);
            var clound = clound1Group.getFirstExists(false);
            var cloundLaunchAt = game.rnd.integerInRange(20, game.world.width - 20);
            // var cloundSpeed = game.rnd.integerInRange(1200, 1400);
            clound.reset(cloundLaunchAt, 0);
            //clound.body.velocity.y = cloundSpeed;
            clound.body.velocity.y = 70;
        }

        clound1Cooldown--;
        sharkMCooldown--;
    } else if (stateHandle == 2) {
        //BG2
        if (clound1Cooldown <= 0) {
            clound1Cooldown = game.rnd.integerInRange(660, 720);
            var clound = clound1Group.getFirstExists(false);
            var cloundLaunchAt = game.rnd.integerInRange(20, game.world.width - 20);
            clound.reset(cloundLaunchAt, 0);
            clound.body.velocity.y = 70;

        }

        clound1Cooldown--;

    } else {
        //BG3

    }
    if (bg != null)
        bg.sendToBack();
    if (generatorCooldown > 0)
        generatorCooldown--;
}

function checkAccuracy() {
    var numOfArrow = wave.length;
    var completeArrow = (waveCheckOrder == numOfArrow);
    var result = false;
    if (completeArrow && checkOverlap(checker, perfect)) {
        statusText = game.add.image(game.world.width * (1 / 2), game.world.height * (4 / 5), 'perfect');
        perfectStack++;
        countPerfect++;
        if (perfectStack % 3 == 0 && perfectStack != 0 && stopTimePoint < 3) {
            stopTimePoint++;
            perfectStack = 0;
            stopTimePointText.frame = stopTimePoint;
            getTimeStopPoint.play();
        }
        game.time.events.add(Phaser.Timer.SECOND * 1.35, function () {
            statusText.destroy();
        }, this);
        bgSpeed = perfectSpeed;
        if (difficulty < 8) {
            difficulty++;
        }
        pic += 25 * (numOfArrow * 1.5) * (1 + (perfectStack / 10));
        perfectSound.play();
        result = true;
        //////////animation wippo
        wippo.animations.play("rush");
    }
    else if (completeArrow && (checkOverlap(checker, greatR) || checkOverlap(checker, greatL))) {
        statusText = game.add.image(game.world.width * (1 / 2), game.world.height * (4 / 5), 'great');
        game.time.events.add(Phaser.Timer.SECOND * 1.35, function () {
            statusText.destroy();
        }, this);
        countGreat++;
        bgSpeed = perfectSpeed * 90 / 100;
        pic += 20 * (numOfArrow * 1.5);
        perfectStack = 0;
        greatSound.play();
        result = true;
        wippo.animations.play("rush");
    }
    else if (completeArrow && (checkOverlap(checker, coolR) || checkOverlap(checker, coolL))) {
        statusText = game.add.image(game.world.width * (1 / 2), game.world.height * (4 / 5), 'cool');
        game.time.events.add(Phaser.Timer.SECOND * 1.35, function () {
            statusText.destroy();
        }, this);
        countCool++;
        bgSpeed = perfectSpeed * 80 / 100;
        pic += 15 * (numOfArrow * 1.5);
        if (difficulty > 1) {
            difficulty--;
        }
        perfectStack = 0;
        coolSound.play();
        result = true;
        wippo.animations.play("rush");
    }
    else if (completeArrow && (checkOverlap(checker, badR) || checkOverlap(checker, badL))) {
        statusText = game.add.image(game.world.width * (1 / 2), game.world.height * (4 / 5), 'bad');
        game.time.events.add(Phaser.Timer.SECOND * 1.35, function () {
            statusText.destroy();
        }, this);
        countBad++;
        bgSpeed = perfectSpeed * 70 / 100;
        pic += 10 * (numOfArrow * 1.5);
        if (difficulty > 3) {
            difficulty -= 3;
        }
        perfectStack = 0;
        badSound.play();
        result = true;
        wippo.animations.play("rush");
    }
    else {
        statusText = game.add.image(game.world.width * (1 / 2), game.world.height * (4 / 5), 'miss');
        game.time.events.add(Phaser.Timer.SECOND * 1.35, function () {
            statusText.destroy();
        }, this);
        gameEnd();
        perfectStack = 0;
        result = false;
        wippo.animations.play("death");
    }
    statusText.anchor.set(0.5);
    statusText.scale.setTo(0.1, 0.1);
    return result;

}

function updateScore() {
    if (pic > scoreShow) {
        if (pic > scoreShow + 2) {
            scoreShow += 2;
        } else {
            scoreShow++;
        }
        scoreDigit1.frame = scoreShow % 10;
        if (pic > 9) {
            scoreDigit2.frame = Math.floor(scoreShow / 10) % 10;
            if (pic > 99) {
                scoreDigit3.frame = Math.floor(scoreShow / 100) % 10;
                if (pic > 999) {
                    scoreDigit4.frame = Math.floor(scoreShow / 1000) % 10;
                    if (pic > 9999) {
                        scoreDigit5.frame = Math.floor(scoreShow / 10000) % 10;
                        if (pic > 99999) {
                            scoreDigit6.frame = Math.floor(scoreShow / 100000) % 10;
                        }
                    }
                }
            }
        }
    }

}

var isUpHoldDown = false;
var isDownHoldDown = false;
var isRightHoldDown = false;
var isLeftHoldDown = false;
function collectArrow() {
    if (waveCheckOrder < wave.length) {
        if (cursors.up.isDown && !isUpHoldDown) {
            isUpHoldDown = true;
            if (wave[waveCheckOrder].name == "up") {
                wave[waveCheckOrder].arrow.animations.play('correct');
                if (wave[waveCheckOrder].type == 3) {
                    if (waveCheckOrder + 1 < wave.length - 1) {
                        var pos = game.rnd.integerInRange(waveCheckOrder + 1, wave.length - 1);
                        posx = wave[pos].x;
                        posy = wave[pos].y;
                        wave[pos].arrow.destroy();
                        wave[pos] = new arrowCreate(posx, posy, game.rnd.integerInRange(0, 3/*difficulty*/), 3);
                    }
                }
                waveCheckOrder++;
                //animations
            } else {
                refreshWave();
                wrongButtonSound.play();
            }
        } else if (cursors.down.isDown && !isDownHoldDown) {
            isDownHoldDown = true;
            if (wave[waveCheckOrder].name == "down") {
                wave[waveCheckOrder].arrow.animations.play('correct');
                if (wave[waveCheckOrder].type == 3) {
                    if (waveCheckOrder + 1 < wave.length - 1) {
                        var pos = game.rnd.integerInRange(waveCheckOrder + 1, wave.length - 1);
                        posx = wave[pos].x;
                        posy = wave[pos].y;
                        wave[pos].arrow.destroy();
                        wave[pos] = new arrowCreate(posx, posy, game.rnd.integerInRange(0, 3/*difficulty*/), 3);
                    }
                }
                waveCheckOrder++;
                //animations
            } else {
                refreshWave();
                wrongButtonSound.play();
            }
        }
        else if (cursors.right.isDown && !isRightHoldDown) {
            isRightHoldDown = true;
            if (wave[waveCheckOrder].name == "right") {
                wave[waveCheckOrder].arrow.animations.play('correct');
                if (wave[waveCheckOrder].type == 3) {
                    if (waveCheckOrder + 1 < wave.length - 1) {
                        var pos = game.rnd.integerInRange(waveCheckOrder + 1, wave.length - 1);
                        posx = wave[pos].x;
                        posy = wave[pos].y;
                        wave[pos].arrow.destroy();
                        wave[pos] = new arrowCreate(posx, posy, game.rnd.integerInRange(0, 3/*difficulty*/), 3);
                    }
                }
                waveCheckOrder++;
                //animations
            } else {
                refreshWave();
                wrongButtonSound.play();
            }
        } else if (cursors.left.isDown && !isLeftHoldDown) {
            isLeftHoldDown = true;
            if (wave[waveCheckOrder].name == "left") {
                wave[waveCheckOrder].arrow.animations.play('correct');
                if (wave[waveCheckOrder].type == 3) {
                    if (waveCheckOrder + 1 < wave.length - 1) {
                        var pos = game.rnd.integerInRange(waveCheckOrder + 1, wave.length - 1);
                        posx = wave[pos].x;
                        posy = wave[pos].y;
                        wave[pos].arrow.destroy();
                        wave[pos] = new arrowCreate(posx, posy, game.rnd.integerInRange(0, 3/*difficulty*/), 3);
                    }
                }
                waveCheckOrder++;
                //animations
            } else {
                refreshWave();
                wrongButtonSound.play();
            }
        }
        if (cursors.up.isUp)
            isUpHoldDown = false;
        if (cursors.down.isUp)
            isDownHoldDown = false;
        if (cursors.right.isUp)
            isRightHoldDown = false;
        if (cursors.left.isUp)
            isLeftHoldDown = false;
    }
}

function refreshWave() {
    for (; waveCheckOrder >= 0; waveCheckOrder--) {
        wave[waveCheckOrder].arrow.animations.play('default');
    }
    waveCheckOrder = 0;
}

function clearWave() {
    var waveLength = wave.length;
    for (var i = 0; i < waveLength; i++) {
        buttonLine[i].destroy();
        wave[wave.length - 1].arrow.destroy();
        wave.pop();
        waveCheckOrder = 0;
    }
}
function summonWave() {
    var length;
    if (difficulty <= 6) {
        length = difficulty + 2;
    } else {
        length = 8;
    }

    if (difficulty < 2 && stateHandle == 3) {
        length += 2;
    }

    var randObstacle = game.rnd.integerInRange(1, 12);
    if (randObstacle == 2 && !spacebarBlockSpawnedLastTime) {
        spacebarBlock.revive();
        spacebarBlockSpawnedLastTime = true;
        spacebarBlock.animations.play('active');
    }
    if (length % 2 == 0) {
        x = length / 2;
        x = game.world.width / 2 - (50 * x - 25);
        y = game.world.height * 3.5 / 5;
    } else {
        x = (length - 1) / 2;
        x = game.world.width / 2 - (50 * x);
        y = game.world.height * 3.5 / 5;
    }
    clearWave();
    for (var i = 0; i < length; i++) {
        ////create button line
        if (i > 0) {
            if (i < length - 1) {
                buttonLine[i] = game.add.sprite(x, y, 'buttonLineBody');
            } else {
                buttonLine[i] = game.add.sprite(x, y, 'buttonLineTail');
                buttonLine[i].x += 25;
            }
        } else {
            buttonLine[i] = game.add.sprite(x, y, 'buttonLineHead');
            buttonLine[i].x -= 25;
        }
        buttonLine[i].anchor.set(0.5);
        buttonLine[i].scale.setTo(1, 1);
        //////

        var rand = game.rnd.integerInRange(0, 3/*difficulty*/);
        var randType = game.rnd.integerInRange(0, 99);
        for (j = 0; j < 4; j++) {
            if (randType < perSpawn[j]) {
                randType = j;
                break;
            }
        }
        wave.push(new arrowCreate(x, y, rand, randType));
        x += 50;
    }
}
arrowCreate = function (x, y, rand, type) {
    this.x = x;
    this.y = y;
    this.type = type;
    this.game = game;
    this.alive = true;
    this.arrow = null;

    if (rand == 0) {
        this.arrow = game.add.sprite(x, y, 'up');
        this.name = "up";
    } else if (rand == 1) {
        this.arrow = game.add.sprite(x, y, 'down');
        this.name = "down";
    } else if (rand == 2) {
        this.arrow = game.add.sprite(x, y, 'right');
        this.name = "right";
    } else {
        this.arrow = game.add.sprite(x, y, 'left');
        this.name = "left";
    }

    if (this.type == 0) { //normal
        this.arrow.animations.add('default', [0], 1, true);
        this.arrow.animations.add('correct', [1], 1, true);
        this.arrow.animations.play('default');
        this.arrow.anchor.set(0.5);
        this.arrow.scale.setTo(1, 1);
    }
    else if (this.type == 1) { //reverse
        this.arrow.animations.add('default', [2], 1, true);
        this.arrow.animations.add('correct', [1], 1, true);
        this.arrow.animations.play('default');
        this.arrow.anchor.set(0.5);
        this.arrow.scale.setTo(1, 1);
    }
    else if (this.type == 2) { //invis
        this.arrow.anchor.set(0.5);
        this.arrow.scale.setTo(1, 1);
        this.arrow.animations.add('default', [4, 4, 4, 3], 2, false);
        this.arrow.animations.add('correct', [1], 1, true);
        this.arrow.animations.play('default');
    }
    else { // rotate
        this.arrow.anchor.set(0.5);
        this.arrow.scale.setTo(1, 1);
        this.arrow.animations.add('default', [5], 1, true);
        this.arrow.animations.add('out', [3], 1, true);
        this.arrow.animations.add('correct', [1], 1, true);
        this.arrow.animations.play('default');
    }
}



function destroyObj(obj) {
    obj.destroy();
}
function killObj(obj) {
    obj.kill();
}
function checkOverlap(spriteA, spriteB) {
    try {
        var boundsA = spriteA.getBounds();
        var boundsB = spriteB.getBounds();
        return Phaser.Rectangle.intersects(boundsA, boundsB);
    } catch (error) {
        //when error occur returning true to avoid unexpect arrow wave that summon when is not(!) overlapping.
        return true;
    }

}
wippoLaunch = function () {
    floorFront.body.velocity.y = 400;
    floorBack.body.velocity.y = 400;
    wippo.body.velocity.y = -150;
    smoke.reset(wippo.x, wippo.y);
    smoke.body.velocity.y = -150;
    bgSpeed = perfectSpeed;
    cannonShoot.play()
}
gameBegin = function () {
    wippo.body.velocity.y = 0;
    bgSpeed = perfectSpeed * 80 / 100;
    smoke.reset(wippo.x, wippo.y);
    smoke.animations.play('great');
    progressBar = this.add.sprite(game.world.width * (35 / 100), game.world.height * (3 / 5) + 10, 'beam');
    progressBar.scale.setTo(0.09, 0.07);
    progressBar.anchor.setTo(0, 0.5);
    perfect = this.add.sprite(game.world.width * (3 / 5) + 1, progressBar.y - 7, 'laser');
    perfect.scale.setTo(0.25, 0.3);
    greatR = this.add.sprite(perfect.x + perfect.width, perfect.y, 'laser');
    greatR.scale.setTo(0.25, 0.3);
    greatL = this.add.sprite(perfect.x - perfect.width, perfect.y, 'laser');
    greatL.scale.setTo(0.25, 0.3);
    coolR = this.add.sprite(greatR.x + greatR.width, perfect.y, 'laser');
    coolR.scale.setTo(0.25, 0.3);
    coolL = this.add.sprite(greatL.x - greatL.width, perfect.y, 'laser');
    coolL.scale.setTo(0.25, 0.3);
    badR = this.add.sprite(coolR.x + coolR.width, perfect.y, 'laser');
    badR.scale.setTo(0.25, 0.3);
    badL = this.add.sprite(coolL.x - coolL.width, perfect.y, 'laser');
    badL.scale.setTo(0.25, 0.3);
    perfect.alpha = 0;
    greatL.alpha = 0;
    greatR.alpha = 0;
    coolL.alpha = 0;
    coolR.alpha = 0;
    badL.alpha = 0;
    badR.alpha = 0;
    checkbar = this.add.sprite(game.world.width * (3 / 5) + 5, game.world.height * (3 / 5) + 10, 'checkbar');
    checkbar.scale.setTo(0.035, 0.07);
    checkbar.anchor.setTo(0.5);
    spacebarBlock.bringToTop();
    timestopBG.bringToTop();
    summonWave();
    checker.reset(progressBar.x, progressBar.y);
    gamemode = "ingame";
    checkerPic = this.add.sprite(0, game.world.height * (4 / 5) + 120, 'checkerPic');
    game.physics.arcade.enable(checkerPic);
    checkerPic.anchor.set(0.5);
    checkerPic.scale.setTo(0.01, 0.01);
    checkerPic.body.maxVelocity.set(1500);
    checkerPic.body.collideWorldBounds = false;

    ///////////////////////////////////////////////
    stopTimePointBg = this.add.sprite(game.world.width * (85 / 100), game.world.height * (20 / 100), 'stopwatchBackground');
    stopTimePointBg.anchor.set(0.2, 0.5);
    stopTimePointBg.scale.setTo(0.6, 0.6);
    stopwatchIcon = this.add.sprite(game.world.width * (85 / 100), game.world.height * (20 / 100), 'stopwatch');
    stopwatchIcon.anchor.set(0.5);
    stopwatchIcon.scale.setTo(0.5, 0.5);
    stopTimePointText = game.add.sprite(game.world.width * (7 / 8), game.world.height * (20 / 100), 'numberText');
    stopTimePointText.anchor.set(0, 0.5);
    stopTimePointText.frame = stopTimePoint;
    stopTimeGroup.add(stopTimePointBg);
    stopTimeGroup.add(stopwatchIcon);
    stopTimeGroup.add(stopTimePointText);
    game.world.bringToTop(stopTimeGroup);

}
gameEnd = function () {
    //playDeathAnimation
    fallSound.play();
    if (stateHandle == 1) {
        BGMStage1.fadeOut(1500);
    } else if (stateHandle == 2) {
        BGMStage2.fadeOut(1500);
    } else {
        BGMStage3.fadeOut(1500);
    }
    BGMResult.loopFull();
    clearWave();
    gamemode = "gameover";
    stopTimeGroup.setAll('alpha', 0);
    wippo.body.velocity.y = 200;
    perfect.alpha = 0;
    greatR.alpha = 0;
    greatL.alpha = 0;
    coolR.alpha = 0;
    coolL.alpha = 0;
    badR.alpha = 0;
    badL.alpha = 0;
    checker.alpha = 0;
    progressBar.alpha = 0;
    checkbar.alpha = 0;
    spacebarBlock.alpha = 0;
    checkerPic.alpha = 0;
    smoke.alpha = 0;
}
function toGameplay() {
    startBtnSound.play();
    game.state.start('main');
}
function toHowToPlay() {
    game.state.start('howtoplay');
}
function toCredit() {
    game.state.start('credit');
}

