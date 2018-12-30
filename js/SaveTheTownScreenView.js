// Copyright 2018, University of Colorado Boulder

/* eslint-disable */

/**
 * View for the "Waves" screen
 *
 * @author Sam Reid (PhET Interactive Simulations)
 */
define( require => {
  'use strict';

  const saveTheTown = require( 'DODGE_AND_DASH/saveTheTown' );
  const ScreenView = require( 'JOIST/ScreenView' );
  const Rectangle = require( 'SCENERY/nodes/Rectangle' );
  const Image = require( 'SCENERY/nodes/Image' );

  // images
  const gunImage = require( 'image!DODGE_AND_DASH/gun.png' );

  class SaveTheTownScreenView extends ScreenView {

    /**
     * @param {WavesScreenModel} model
     * @param {AlignGroup} alignGroup - for aligning the control panels on the right side of the lattice
     * @param {Object} [options]
     */
    constructor( model, alignGroup, options ) {
      super();
      var size = 618 / 10;
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
          var rectangle = new Rectangle( size * i, size * j, size, size, { fill: fill } );
          this.addChild( rectangle );
        }
      }

      for ( var i = 0; i < 5; i = i + 1 ) {
        const gun = new Image( gunImage, {
          y: size * 2 * i,
          scale: 0.50
        } );
        this.addChild( gun );
      }


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