// Copyright 2018, University of Colorado Boulder

/* eslint-disable */

/**
 * View for the "Waves" screen
 *
 * @author Sam Reid (PhET Interactive Simulations)
 */
define( require => {
  'use strict';

  const saveTheTown = require( 'SAVE_THE_TOWN/saveTheTown' );
  const ScreenView = require( 'JOIST/ScreenView' );
  const Rectangle = require( 'SCENERY/nodes/Rectangle' );

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
        //for every i add a j
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