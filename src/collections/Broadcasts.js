import {Collection} from 'backbone';
import Broadcast from '../models/Broadcast';

/**
 * Collection from Broadcasts
 */
const Broadcasts = Collection.extend({
    model: Broadcast,
    url: 'https://api.twitch.tv/kraken/channels/lirik/videos?broadcasts=true&direction=ASC&limit=100&offset=0',
    //Get only the data after videos in the api
    parse: function (response) {
        return response.videos
    }
});

export default Broadcasts;