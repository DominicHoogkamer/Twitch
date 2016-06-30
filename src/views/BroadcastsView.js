import _ from 'underscore';
import {View} from 'backbone';
import BroadcastView from '../views/BroadcastView';
import $ from 'jquery';


var BroadcastsView = View.extend({

    initialize: function () {


        this.collection.on('reset', this.render, this);
    },

    template: _.template($("#BroadcastsViewTemplate").html()),

    render: function () {
        //this.el.innerHTML = this.template(this.collection);
        let results = $('#results');
        results.empty();



        this.collection.each(function (model) {
            let broadcastView = new BroadcastView({ model: model });
            results.append(broadcastView.render().el);
        });
        return this;
    }
});

export default BroadcastsView;