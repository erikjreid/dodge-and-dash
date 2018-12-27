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
      for ( var i = 0; i < 10; i++ ) {
        var rectangle = new Rectangle( size * i, size * i, size, size, { fill: 'blue' } );
        this.addChild( rectangle );
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