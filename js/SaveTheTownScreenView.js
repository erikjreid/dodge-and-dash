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

  class SaveTheTownScreenView extends ScreenView {

    /**
     * @param {WavesScreenModel} model
     * @param {AlignGroup} alignGroup - for aligning the control panels on the right side of the lattice
     * @param {Object} [options]
     */
    constructor( model, alignGroup, options ) {
      super();

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