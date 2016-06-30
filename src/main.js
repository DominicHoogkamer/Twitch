import _ from 'underscore';
import {Events} from 'backbone';
import $ from 'jquery';

import Broadcast from './models/Broadcast';
import Broadcasts from './collections/Broadcasts';

import BroadcastsView from './views/BroadcastsView';
import BroadcastView from './views/BroadcastView';
import SearchView from './views/SearchView';

import AppRouter from './routers/AppRouter'

(function () {
    let setGlobalVariables = function () {
        window.App = {};
        App.events = _.clone(Events);
    };

    /**
     * Run after dom is ready
     */
    let init = function () {
        setGlobalVariables();

        let router = new AppRouter();
        Backbone.history.start({ pushState: true, root: '/Twitch_filter/' });
    };

    window.addEventListener('load', init);
})();