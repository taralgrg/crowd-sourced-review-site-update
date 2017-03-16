import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
     listings: this.store.findAll('listing'),
     reviews: this.store.findAll('review')
   });
 },
 actions: {
     saveReview(params) {
       var newReview = this.store.createRecord('review', params);
       newReview.save();
       this.transitionTo('index');
     },

   }
  }
);
