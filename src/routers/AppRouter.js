import {Router} from 'backbone';
import $ from 'jquery';

import Broadcasts from '../collections/Broadcasts';
import Streamer from '../models/Streamer';

import BroadcastsView from '../views/BroadcastsView';
import BroadcastView from '../views/BroadcastView';
import SearchView from '../views/SearchView';
import StreamerView from '../views/StreamerView';

const AppRouter = Router.extend({
    routes: {
        '': 'list',
        'profile': 'profile'
    },
    list: function () {

        let broadcasts = new Broadcasts();
        let bv = new BroadcastsView({ collection: broadcasts });
        let searchView = new SearchView({ collection: broadcasts });

        $("#results").empty().append(bv.render().el);
        broadcasts.fetch({ reset: true })
    },
    profile: function () {
        let streamer = new Streamer();
        let sv = new StreamerView({ model: streamer });
        
        streamer.fetch({ reset: true }).then(() =>
            $("#main").empty().append(sv.render().el)
        );
    }
});


export default AppRouter;