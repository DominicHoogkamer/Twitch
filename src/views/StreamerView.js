import _ from 'underscore';
import {View} from 'backbone';
import $ from 'jquery';

const StreamerView = View.extend({
    initialize: function () {
        this.model.on('reset', this.render, this);
    },
    template: _.template($("#StreamerTemplate").html()),
    render: function () {
        $('#main').empty();
        this.el.innerHTML = this.template(this.model.toJSON());
        return this;
    }
});


export default StreamerView;