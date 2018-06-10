import Ember from 'ember';

const { testing: isTesting } = Ember;

export default function transitionDuration(duration) {
  return isTesting ? duration : duration;
}