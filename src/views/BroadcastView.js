import _ from 'underscore';
import {View} from 'backbone';
import $ from 'jquery';

const BroadcastView = View.extend({
    template: _.template($("#BroadcastTemplate").html()),
    tagName: 'tr',
    render: function () {
        this.el.innerHTML = this.template(this.model.toJSON());
        return this;
    }
});


export default BroadcastView;