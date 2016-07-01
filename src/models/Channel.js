import {Model} from 'backbone';

/**
 * Model of Channel
 */
const Channel = Model.extend({
    url: 'https://api.twitch.tv/kraken/channels/lirik/',
    defaults: {
        name: '',
        title: '',
        game: '',
        url: '',
        followers: '',
        views: '',
        img: ''
    }
});

export default Channel;