import _ from 'underscore';
import {View} from 'backbone';
import BroadcastView from '../views/BroadcastView';
import $ from 'jquery';


/**
 * The BroadcastsView holds the list layout for all the broadcasts
 */
var BroadcastsView = View.extend({

    initialize: function () {

        //Reset collection on a new render
        this.collection.on('reset', this.render, this);
    },

    //Get the template from the html
    template: _.template($("#BroadcastsViewTemplate").html()),

    render: function () {
        //this.el.innerHTML = this.template(this.collection);
        let results = $('#results');
        results.empty();


        //Each loop in the the whole collection to render every item to the view
        this.collection.each(function (model) {
            let broadcastView = new BroadcastView({ model: model });
            results.append(broadcastView.render().el);
        });
        return this;
    }
});

export default BroadcastsView;