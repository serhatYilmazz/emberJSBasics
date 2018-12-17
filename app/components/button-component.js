import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  tagName: 'input',
  attributeBindings: ['type', 'disabled', 'value'],
  type: 'button',
  condition: false,
  classNames: ['btn', 'btn-danger'],
  disabled: computed('condition', function () {
    return this.get('condition');
  })
});
