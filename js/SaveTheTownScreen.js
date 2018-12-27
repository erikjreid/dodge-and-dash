// Copyright 2017-2018, University of Colorado Boulder

/**
 * "Waves" screen in the Wave Interference simulation.
 *
 * @author Sam Reid (PhET Interactive Simulations)
 */
define( require => {
  'use strict';

  // modules
  const Property = require( 'AXON/Property' );
  const Screen = require( 'JOIST/Screen' );
  const saveTheTown = require( 'SAVE_THE_TOWN/saveTheTown' );
  const SaveTheTownScreenView = require( 'SAVE_THE_TOWN/SaveTheTownScreenView' );

  class SaveTheTownScreen extends Screen {

    /**
     * @param {AlignGroup} alignGroup - for aligning the control panels on the right side of the lattice
     */
    constructor( alignGroup ) {
      const options = {
        backgroundColorProperty: new Property( 'white' ),
        name: 'screenWavesString'
      };
      super(
        function() {
          return { step: function() {} };
        },
        model => new SaveTheTownScreenView( model, {} ),
        options
      );
    }
  }

  return saveTheTown.register( 'SaveTheTownScreen', SaveTheTownScreen );
} );