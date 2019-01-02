// Copyright 2018, University of Colorado Boulder

/* eslint-disable */

/**
 * View for the "Waves" screen
 *
 * @author Sam Reid (PhET Interactive Simulations)
 */
define( require => {
  'use strict';

  const DragListener = require( 'SCENERY/listeners/DragListener' );
  const Image = require( 'SCENERY/nodes/Image' );
  const Rectangle = require( 'SCENERY/nodes/Rectangle' );
  const saveTheTown = require( 'DODGE_AND_DASH/saveTheTown' );
  const ScreenView = require( 'JOIST/ScreenView' );

  // images
  const bladeImage = require( 'image!DODGE_AND_DASH/blade.png' );
  const gunImage = require( 'image!DODGE_AND_DASH/gun.png' );
  const manImage = require( 'image!DODGE_AND_DASH/man.png' );

  class SaveTheTownScreenView extends ScreenView {

    /**
     * @param {WavesScreenModel} model
     * @param {AlignGroup} alignGroup - for aligning the control panels on the right side of the lattice
     * @param {Object} [options]
     */
    constructor( model, alignGroup, options ) {
      super();
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

      for ( var i = 0; i < 5; i = i + 1 ) {
        const gun = new Image( gunImage, {
          y: squareLength * 2 * i,
          scale: 0.50
        } );
        this.addChild( gun );
        guns.push( gun );
      }

      const man = new Image( manImage, {
        centerY: squareLength * 6 + 27,
        x: 500 + squareLength * 3,
        scale: 0.75
      } );
      this.addChild( man );

      const blade = new Image( bladeImage, {
        rightCenter: man.leftCenter
      } );
      this.addChild( blade );
      blade.visible = false;

      let start = null;
      let end = null;
      this.addInputListener( new DragListener( {
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
                blade.visible = false
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
      } ) );
    }

    /**
     * Notify listeners of the step phase.
     * @param {number} dt - in seconds
     * @public
     */
    step( dt ) {
    }
  }

  return saveTheTown.register( 'SaveTheTownScreenView', SaveTheTownScreenView );
} );
