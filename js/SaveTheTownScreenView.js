// Copyright 2018, University of Colorado Boulder

/* eslint-disable */

/**
 * View for the "Waves" screen
 *
 * @author Sam Reid (PhET Interactive Simulations)
 */
define( require => {
  'use strict';

  const Circle = require( 'SCENERY/nodes/Circle' );
  const DragListener = require( 'SCENERY/listeners/DragListener' );
  const Image = require( 'SCENERY/nodes/Image' );
  const Plane = require( 'SCENERY/nodes/Plane' );
  const Rectangle = require( 'SCENERY/nodes/Rectangle' );
  const ResetAllButton = require( 'SCENERY_PHET/buttons/ResetAllButton' );
  const saveTheTown = require( 'DODGE_AND_DASH/saveTheTown' );
  const ScreenView = require( 'JOIST/ScreenView' );
  const Game = require( 'DODGE_AND_DASH/Game' );

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

      this.game = new Game( this );
      this.addChild( this.game );
    }

    restartGame() {
      this.removeAllChildren();
      this.game = new Game( this );
      this.addChild( this.game );
    }


    /**
     * Notify listeners of the step phase.
     * @param {number} dt - in seconds
     * @public
     */
    step( dt ) {
      this.game.step( dt );
    }
  }

  return saveTheTown.register( 'SaveTheTownScreenView', SaveTheTownScreenView );
} );
