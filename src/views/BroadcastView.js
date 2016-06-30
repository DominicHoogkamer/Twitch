import _ from 'underscore';
import {View} from 'backbone';
import $ from 'jquery';


/**
 * The BroadcastView holds the layout for one Broadcast
 */
const BroadcastView = View.extend({
    template: _.template($("#BroadcastTemplate").html()),
    // render with a tagName of "tr"
    tagName: 'tr',
    render: function () {
        // render template to view with the model.
        this.el.innerHTML = this.template(this.model.toJSON());
        return this;
    }
});


export default BroadcastView;