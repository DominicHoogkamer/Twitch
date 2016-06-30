import {Collection} from 'backbone';
import Broadcast from '../models/Broadcast';


const Broadcasts = Collection.extend({
    model: Broadcast,
    url: 'https://api.twitch.tv/kraken/channels/lirik/videos?broadcasts=true&direction=ASC&limit=100&offset=0',
    parse: function (response) {
        return response.videos
    }
});

export default Broadcasts;