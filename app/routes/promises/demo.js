import Ember from 'ember';
import fixture from './fixture';

export default Ember.Route.extend({

  model: function() {
    //let label = 'WHAT IS GOING ON?';
    //return new Ember.RSVP.resolve(fixture, label);
    return new Ember.RSVP.promise(fixture);
  }

});
