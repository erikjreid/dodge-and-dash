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

      for ( var i = 0; i < 5; i = i + 1 ) {
        const gun = new Image( gunImage, {
          y: squareLength * 2 * i,
          scale: 0.50
        } );
        this.addChild( gun );
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
            // console.log( startX, startY, ' => ', endX, endY );

            const dog = endX - startX;
            console.log( dog );

            const cat = endY - startY;
            if ( Math.abs( dog ) > 100 && Math.abs( cat ) > 100 ) {
              console.log( 'slash' );
              blade.visible = true;

              setTimeout( () => {
                blade.visible = false
              }, 400 );
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
