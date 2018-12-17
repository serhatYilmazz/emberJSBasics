import Component from '@ember/component';
import {computed, observer} from '@ember/object';

export default Component.extend({
  tagName: 'input',
  attributeBindings: ['type', 'checked'],
  type: 'checkbox',
  change: observer('checkbox', function () {
    if(this.get('onUpdate')) {
      this.get('onUpdate')();
    }
  })
});
