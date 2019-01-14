// Copyright 2019, University of Colorado Boulder

/**
 * TODO: Documentation
 *
 * @author Sam Reid (PhET Interactive Simulations)
 */
define( require => {
  'use strict';

  // modules
  const Node = require( 'SCENERY/nodes/Node' );
  const Text = require( 'SCENERY/nodes/Text' );

  const Circle = require( 'SCENERY/nodes/Circle' );
  const DragListener = require( 'SCENERY/listeners/DragListener' );
  const Image = require( 'SCENERY/nodes/Image' );
  const Plane = require( 'SCENERY/nodes/Plane' );
  const Rectangle = require( 'SCENERY/nodes/Rectangle' );
  const ResetAllButton = require( 'SCENERY_PHET/buttons/ResetAllButton' );
  const saveTheTown = require( 'DODGE_AND_DASH/saveTheTown' );
  const ScreenView = require( 'JOIST/ScreenView' );

  // images
  const bladeImage = require( 'image!DODGE_AND_DASH/blade.png' );
  const gunImage = require( 'image!DODGE_AND_DASH/gun.png' );
  const manImage = require( 'image!DODGE_AND_DASH/man.png' );


  class Game extends Node {

    /**
     * @param {Object} [options]
     */
    constructor( parent, options ) {
      super();
      this.p = parent;
      this.finished = false;

      this.mutate( options );

      var squareLength = 618 / 10;
      for ( var i = 0; i < 16; i++ ) {
        for ( var j = 0; j < 10; j++ ) {
          var isIOdd = i % 2 === 1;
          var isRowEven = j % 2 === 0;
          var fill = '';
          if ( isRowEven ) {
            fill = isIOdd ? 'black' : 'blue';
          }
          else {
            fill = isIOdd ? 'blue' : 'black';
          }
          var rectangle = new Rectangle( squareLength * i, squareLength * j, squareLength, squareLength, { fill: fill } );
          this.addChild( rectangle );
        }
      }

      const guns = [];

      for ( var i = 0; i < 10; i++ ) {
        const gun = new Image( gunImage, {
          y: squareLength * i,
          scale: 0.3
        } );
        this.addChild( gun );
        guns.push( gun );
      }

      const man = new Image( manImage, {
        centerY: squareLength * 6 + 27,
        x: 500 + squareLength * 3,
        scale: 0.75
      } );
      man.lifePoints = 5;
      this.addChild( man );

      const blade = new Image( bladeImage, {
        rightCenter: man.leftCenter
      } );
      this.addChild( blade );
      blade.visible = false;

      let start = null;
      let end = null;
      const dragListener = new DragListener( {
        start: event => {
          start = event.pointer.point;
          end = null;
        },
        drag: event => {
          // console.log( event.pointer.point );
          end = event.pointer.point;
        },
        end: event => {

          if ( end ) {
            // console.log( 'started at ' + start + ', and ended at ' + end );
            const startX = Math.round( start.x );
            const startY = Math.round( start.y );
            const endX = Math.round( end.x );
            const endY = Math.round( end.y );

            const horizontal = endX - startX;
            const vertical = endY - startY;

            if ( Math.abs( horizontal ) > 100 && Math.abs( vertical ) > 100 ) {
              blade.rightCenter = man.leftCenter;
              blade.visible = true;

              guns.forEach( gun => {
                if ( blade.bounds.intersectsBounds( gun.bounds ) ) {
                  gun.visible = false;
                }
              } );

              setTimeout( () => {
                blade.visible = false;
              }, 400 );
            }
            console.log( horizontal, vertical );

            // Steps Left
            if ( horizontal < -100 && Math.abs( vertical ) < 50 ) {
              console.log( 'swipe' );
              man.x = man.x - squareLength;
            }

            // For Erik: Steps Right
            if ( horizontal > 100 && Math.abs( vertical ) < 50 ) {
              console.log( 'swipe' );
              man.x = man.x + squareLength;
            }

            // For Erik: Steps up
            if ( Math.abs( horizontal ) < 50 && vertical < -100 ) {
              console.log( 'swipe' );
              man.y = man.y - squareLength;
            }

            // For Erik: Steps down
            if ( Math.abs( horizontal ) < 50 && vertical > 100 ) {
              console.log( 'swipe' );
              man.y = man.y + squareLength;
            }
          }
        }
      } );
      this.addInputListener( dragListener );

      const bullets = [];

      // This code runs all the time
      this.step = dt => {
        if ( this.finished ) {
          return;
        }

        var liveGuns = 0;
        guns.forEach( gun => {
          if ( gun.visible ) {
            liveGuns++;
          }
          if ( gun.visible && Math.random() > 0.99 ) {
            const bullet = new Circle( 10, { fill: 'yellow', center: gun.center.plusXY( 50, 0 ) } );
            if ( man.lifePoints > 0 ) {
              bullets.push( bullet );
              this.addChild( bullet );
            }
          }

        } );

        if ( 0 === liveGuns && !this.finished ) {
          this.finished = true;
          const winningMessage = new Text( 'you beat the game', {
            fill: 'green',
            fontSize: 100,
            centerTop: this.p.layoutBounds.centerTop
          } );
          this.addChild( winningMessage );
          const resetAllButton = new ResetAllButton( {
            radius: 100,
            center: this.p.layoutBounds.center,
            listener: () => {
              this.p.restartGame();
            }
          } );
          this.removeInputListener( dragListener );
          this.addChild( resetAllButton );
          resetAllButton.moveToFront();
        }

        bullets.forEach( bullet => {
          bullet.x = bullet.x + 1;
          if ( blade.visible && blade.bounds.intersectsBounds( bullet.bounds ) ) {
            bullet.visible = false;
          }
          if ( bullet.visible && bullet.bounds.intersectsBounds( man.bounds ) ) {
            bullet.visible = false;
            if ( man.lifePoints > 0 ) {
              man.lifePoints = man.lifePoints - 1;
              if ( man.lifePoints <= 0 ) {
                const redScreen = new Plane( {
                  fill: 'red'
                } );
                this.addChild( redScreen );
                const resetAllButton = new ResetAllButton( {
                  radius: 100,
                  center: this.p.layoutBounds.center,
                  listener: () => {
                    this.p.restartGame();
                  }
                } );
                this.removeInputListener( dragListener );
                this.addChild( resetAllButton );
                resetAllButton.moveToFront();
              }
            }
          }
        } );
      };
    }
  }

  return saveTheTown.register( 'Game', Game );
} );