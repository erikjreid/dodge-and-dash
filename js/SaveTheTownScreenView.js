// Copyright 2018, University of Colorado Boulder

/* eslint-disable */

/**
 * View for the "Waves" screen
 *
 * @author Sam Reid (PhET Interactive Simulations)
 */
define( require => {
  'use strict';

  const ButtonListener = require( 'SCENERY/input/ButtonListener' );
  const Circle = require( 'SCENERY/nodes/Circle' );
  const Image = require( 'SCENERY/nodes/Image' );
  const Path = require( 'SCENERY/nodes/Path' );
  const Plane = require( 'SCENERY/nodes/Plane' );
  const saveTheTown = require( 'SAVE_THE_TOWN/saveTheTown' );
  const ScreenView = require( 'JOIST/ScreenView' );
  const Shape = require( 'KITE/Shape' );
  const SoundClip = require( 'TAMBO/sound-generators/SoundClip' );
  const soundManager = require( 'TAMBO/soundManager' );
  const Text = require( 'SCENERY/nodes/Text' );
  const Vector2 = require( 'DOT/Vector2' );


  var ZOMBIE_SPEED = 2;

  class SaveTheTownScreenView extends ScreenView {

    /**
     * @param {WavesScreenModel} model
     * @param {AlignGroup} alignGroup - for aligning the control panels on the right side of the lattice
     * @param {Object} [options]
     */
    constructor( model, alignGroup, options ) {
      super();
      // super();
      //
      // var text = new Text( 'Wave ', {
      //   fontSize: 20
      // } );
      // this.addChild( text );
      // text.centerX = this.layoutBounds.centerX - 200;
      // text.top = this.layoutBounds.top;
      //
      // var dingSoundClip = new SoundClip( dingSound, { initialOutputLevel: 0.7 } );
      // soundManager.addSoundGenerator( dingSoundClip );
      //
      // var missileExplodeClip = new SoundClip( missileExplodeSound, { initialOutputLevel: 0.7 } );
      // soundManager.addSoundGenerator( missileExplodeClip );
      //
      // var missileLaunchClip = new SoundClip( missileLaunchSound, { initialOutputLevel: 0.7 } );
      // soundManager.addSoundGenerator( missileLaunchClip );
      //
      // var noClip = new SoundClip( noSound, { initialOutputLevel: 0.7 } );
      // soundManager.addSoundGenerator( noClip );
      //
      // var tankExplodeClip = new SoundClip( tankExplodeSound, { initialOutputLevel: 0.7 } );
      // soundManager.addSoundGenerator( tankExplodeClip );
      //
      // var wallCollapseClip = new SoundClip( wallCollapseSound, { initialOutputLevel: 0.7 } );
      // soundManager.addSoundGenerator( wallCollapseClip );
      //
      // var zombieHitsWallClip = new SoundClip( zombieHitsWallSound, { initialOutputLevel: 0.7 } );
      // soundManager.addSoundGenerator( zombieHitsWallClip );
      //
      // var zombieDeathClip = new SoundClip( zombieDeathSound, { initialOutputLevel: 0.7 } );
      // soundManager.addSoundGenerator( zombieDeathClip );
      //
      // var missileList = [];
      // var bulletList = [];
      //
      // var background = new Plane( {
      //   fill: 'white'
      // } );
      // this.addChild( background );
      // background.addInputListener( new ButtonListener( {
      //   fire: event => {
      //
      //     // Fire missiles from the tanks
      //     for ( let i = 0; i < tankList.length; i++ ) {
      //       const selectedTank = tankList[ i ];
      //       if ( selectedTank.selected ) {
      //         var missile = new Image( missileImage, {
      //           center: selectedTank.center
      //         } );
      //         this.addChild( missile );
      //         missile.target = this.globalToLocalPoint( event.pointer.point );
      //         missileList.push( missile );
      //         missileLaunchClip.play();
      //       }
      //     }
      //
      //     // Fire bullets from the soldiers
      //     for ( let i = 0; i < soldierList.length; i++ ) {
      //       const selectedSoldier = soldierList[ i ];
      //       if ( selectedSoldier.selected ) {
      //
      //         for ( var k = 0; k < 5; k++ ) {
      //
      //           var bullet = new Circle( 7.5, {
      //               fill: 'black',
      //               center: selectedSoldier.center.plusXY( Math.random() * 200 - 100, Math.random() * 20 )
      //             } )
      //           ;
      //           this.addChild( bullet );
      //           bullet.target = this.globalToLocalPoint( event.pointer.point );
      //           bulletList.push( bullet );
      //         }
      //
      //
      //       }
      //     }
      //   }
      // } ) );
      //
      // var zombieList = [];
      //
      // var wave = 0;
      //
      // var createAllZombies = () => {
      //   wave++;
      //
      //   text.text = 'Wave ' + wave;
      //
      //   var r = Math.random();
      //   var giants = [ -1,
      //     r < 0.5 ? 0 : 1,
      //     r < 0.25 ? 1 : r < 0.75 ? 2 : 3,
      //     r < 0.25 ? 3 : r < 0.75 ? 4 : 5,
      //     10
      //   ];
      //   for ( var k = 0; k < 20; k++ ) {
      //     for ( var i = 0; i < 6; i++ ) {
      //       var zombie = new Image( zombieImage, {
      //         scale: 0.3,
      //         y: i * 100 + Math.random() * 50,
      //         x: ( k - 19 ) * 100
      //       } );
      //       zombie.row = k;
      //       zombie.life = 20;
      //       zombie.attack = 20;
      //       zombie.scaleFactor = 1;
      //       this.addChild( zombie );
      //       zombieList.push( zombie );
      //     }
      //   }
      //
      //   var numberGiants = giants[ wave ];
      //   if ( wave >= 4 ) {
      //     numberGiants = 10 + wave * 2;
      //   }
      //   console.log( numberGiants );
      //
      //   for ( let i = 0; i < numberGiants; i++ ) {
      //     var index = Math.round( Math.random() * zombieList.length );
      //     var giant = zombieList[ index ];
      //     var c = giant.center;
      //     giant.scale( 2 );
      //     giant.scaleFactor *= 2;
      //     giant.center = c;
      //     giant.attack *= 10;
      //     giant.life *= 100;
      //
      //     if ( wave >= 5 ) {
      //       giant.scale( 2 );
      //       giant.scaleFactor *= 2;
      //       giant.center = c;
      //       giant.attack *= 2;
      //       giant.life *= 5;
      //     }
      //
      //     if ( wave >= 10 ) {
      //       giant.scale( 2 );
      //       giant.scaleFactor *= 2;
      //       giant.center = c;
      //       giant.attack *= 3;
      //       giant.life *= 5;
      //     }
      //   }
      // };
      // createAllZombies();
      //
      // var wall = new Image( wallImage, {
      //   scale: 2,
      //   x: 500,
      //   y: -100
      //
      // } );
      // this.addChild( wall );
      //
      // var tankList = [];
      // wall.moveToBack();
      // for ( var i = 0; i < 6; i++ ) {
      //   var tank = new Image( tankImage, {
      //     scale: new Vector2( -0.25, 0.25 ),
      //     left: wall.right,
      //     y: i * 100
      //   } );
      //
      //   var addTank = ( tank ) => {
      //     const rectangle = new Path( Shape.bounds( tank.localBounds ), {
      //       stroke: 'green',
      //       lineWidth: 20,
      //       visible: false
      //     } );
      //     tank.addChild( rectangle );
      //     tank.addInputListener( new ButtonListener( {
      //       fire: function() {
      //
      //         // THIS IS THE CODE THAT HAPPENS WHEN THE TANK IS PRESSED
      //
      //         tank.selected = !tank.selected;
      //         rectangle.visible = tank.selected;
      //         console.log( 'dingSound.play' );
      //         dingSoundClip.play();
      //       }
      //     } ) );
      //     tank.lifePoints = 30;
      //     this.addChild( tank );
      //     tank.moveToBack();
      //     tankList.push( tank );
      //   };
      //   addTank( tank );
      //
      // }
      //
      // var soldierList = [];
      // for ( var k = 0; k < 3; k++ ) {
      //   for ( var i = 0; i < 8; i++ ) {
      //
      //     var soldier = new Image( armySoldierImage, {
      //       scale: 0.7,
      //       left: tank.right + k * 50,
      //       top: i * 75
      //     } );
      //     var addSoldier = soldier => {
      //       const rectangle = new Path( Shape.bounds( soldier.localBounds ), {
      //         stroke: 'black',
      //         lineWidth: 6,
      //         visible: false
      //       } );
      //       soldier.addChild( rectangle );
      //       soldier.addInputListener( new ButtonListener( {
      //         fire: function() {
      //           console.log( 'hello' );
      //
      //           // THIS IS THE CODE THAT HAPPENS WHEN THE TANK IS PRESSED
      //
      //           soldier.selected = !soldier.selected;
      //           rectangle.visible = soldier.selected;
      //           dingSoundClip.play();
      //         }
      //       } ) );
      //       soldier.life = 25;
      //       this.addChild( soldier );
      //       soldierList.push( soldier );
      //     };
      //     addSoldier( soldier );
      //   }
      // }
      //
      // var overlapsNextRow = function( zombie ) {
      //   for ( let i = 0; i < zombieList.length; i++ ) {
      //     const z = zombieList[ i ];
      //     if ( z.row === zombie.row + 1 ) {
      //       if ( zombie.right > z.left ) {
      //         return true;
      //       }
      //     }
      //   }
      //   return false;
      // };
      //
      // var timeWallHasBeenEaten = 0;
      //
      // this.stepTown = dt => {
      //   for ( let i = 0; i < zombieList.length; i++ ) {
      //     const zombie = zombieList[ i ];
      //     if ( zombie.life <= 0 ) {
      //       this.removeChild( zombie );
      //       zombieList.splice( i, 1 );
      //       zombieDeathClip.play();
      //
      //       if ( zombieList.length <= 5 ) {
      //         createAllZombies();
      //       }
      //       break;
      //     }
      //
      //     for ( let j = 0; j < tankList.length; j++ ) {
      //       const tank = tankList[ j ];
      //       if ( tank.bounds.intersectsBounds( zombie.bounds ) ) {
      //         tank.lifePoints = tank.lifePoints - dt * 2 * zombie.attack / 20;
      //       }
      //       if ( tank.lifePoints < 0 ) {
      //         tank.visible = false;
      //         tankList.splice( j, 1 );
      //         j--;
      //         tankExplodeClip.play();
      //       }
      //     }
      //
      //     for ( let j = 0; j < soldierList.length; j++ ) {
      //       const soldier = soldierList[ j ];
      //       if ( soldier.bounds.intersectsBounds( zombie.bounds ) ) {
      //         soldier.life = soldier.life - 3 * dt * ( zombie.attack + 1 ) / 20;
      //
      //         if ( soldier.life <= 0 ) {
      //           this.removeChild( soldier );
      //           soldierList.splice( j, 1 );
      //           j--;
      //           noClip.play();
      //
      //           var newZombie = new Image( zombieImage, {
      //             center: soldier.center,
      //             scale: 0.3
      //           } );
      //           newZombie.scaleFactor = 1;
      //           newZombie.life = 20;
      //           newZombie.attack = 20;
      //           this.addChild( newZombie );
      //           zombieList.push( newZombie );
      //         }
      //
      //       }
      //     }
      //     // console.log(soldierList.map(s => s.life));
      //
      //     if ( wall.visible ) {
      //       if ( zombie.right < wall.left + 30 && !overlapsNextRow( zombie ) ) {
      //         zombie.translate( ZOMBIE_SPEED * 2 * Math.random() / zombie.scaleFactor, 0 );
      //       }
      //       if ( zombie.right >= wall.left + 30 ) {
      //         timeWallHasBeenEaten += dt * zombie.attack / 20;
      //
      //         if ( !zombieHitsWallClip.isPlaying ) {
      //           zombieHitsWallClip.play();
      //         }
      //       }
      //     }
      //     else {
      //       zombie.translate( ZOMBIE_SPEED * 2 * Math.random() / zombie.scaleFactor, 0 );
      //     }
      //   }
      //
      //   if ( timeWallHasBeenEaten > 40 ) {
      //     if ( wall.visible ) {
      //       wallCollapseClip.play();
      //     }
      //     wall.visible = false;
      //   }
      //
      //
      //   ///MISSILES
      //   for ( let y = 0; y < missileList.length; y++ ) {
      //     var missile = missileList[ y ];
      //     let vector = missile.target.minus( missile.center ).normalized().times( 10 );
      //
      //     for ( let i = 0; i < zombieList.length; i++ ) {
      //       const zombie = zombieList[ i ];
      //       if ( zombie.bounds.intersectsBounds( missile.bounds ) ) {
      //         zombie.life = zombie.life - 1;
      //       }
      //     }
      //
      //     missile.center = missile.center.plus( vector );
      //
      //     if ( missile.center.distance( missile.target ) < 10 ) {
      //       this.removeChild( missile );
      //       missileList.splice( y, 1 );
      //       missileExplodeClip.play();
      //       y--;
      //     }
      //   }
      //
      //   ///BULLETS
      //   for ( let y = 0; y < bulletList.length; y++ ) {
      //     var bullet = bulletList[ y ];
      //     let vector = bullet.target.minus( bullet.center ).normalized().times( 20 );
      //
      //     for ( let i = 0; i < zombieList.length; i++ ) {
      //       const zombie = zombieList[ i ];
      //       if ( zombie.bounds.intersectsBounds( bullet.bounds ) ) {
      //         zombie.life = zombie.life - 2 / 5;
      //       }
      //     }
      //
      //     bullet.center = bullet.center.plus( vector );
      //
      //     if ( bullet.center.distance( bullet.target ) < 10 ) {
      //       this.removeChild( bullet );
      //       bulletList.splice( y, 1 );
      //       y--;
      //     }
      //   }
      //
      //   var allRight = true;
      //   var minX = Number.MAX_VALUE;
      //   zombieList.forEach( function( z ) {
      //     if ( z.center.x < minX ) {
      //       minX = z.center.x;
      //     }
      //     if ( z.center.x < 800 ) {
      //       allRight = false;
      //     }
      //   } );
      //   if ( allRight ) {
      //     createAllZombies();
      //   }
      // };
      //
      //
      // background.moveToBack();
    }

    /**
     * Notify listeners of the step phase.
     * @param {number} dt - in seconds
     * @public
     */
    step( dt ) {
      // this.steppedEmitter.emit();
      // this.stepTown( dt );
    }
  }

  return saveTheTown.register( 'SaveTheTownScreenView', SaveTheTownScreenView );
} );