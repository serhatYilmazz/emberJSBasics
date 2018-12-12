import Component from '@ember/component';

export default Component.extend({
  tagName: 'button',
  classNameBindings: ['isDone::disabled'],
  isDone: null,
  value: ''
});
