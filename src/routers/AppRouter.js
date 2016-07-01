import {Router} from 'backbone';
import $ from 'jquery';

import Broadcasts from '../collections/Broadcasts';
import Streamer from '../models/Streamer';

import BroadcastsView from '../views/BroadcastsView';
import BroadcastView from '../views/BroadcastView';
import SearchView from '../views/SearchView';
import StreamerView from '../views/StreamerView';


/**
 * Router for the URL's
 *
 * @constructor
 */
const AppRouter = Router.extend({
    routes: {
        '': 'list',
        'profile': 'profile'
    },
    list: function () {

        let broadcasts = new Broadcasts();
        let bv = new BroadcastsView({ collection: broadcasts });
        let searchView = new SearchView({ collection: broadcasts });

        //empty results and appent BroadcastsView
        $("#results").empty().append(bv.render().el);
        //Fetch broadcasts
        broadcasts.fetch({ reset: true })
    },
    profile: function () {
        let streamer = new Streamer();
        let sv = new StreamerView({ model: streamer });
        
        /**
         * Fetch everything from streamer
         * then empty the div with id: main
         * append that to StreamerView
         * @param  {true}} {reset
         */
        streamer.fetch({ reset: true }).then(() =>
            $("#main").empty().append(sv.render().el)
        );
    }
});


export default AppRouter;