import {Model} from 'backbone';


const Channel = Model.extend({
    url: 'https://api.twitch.tv/kraken/channels/lirik/',
    defaults: {
        name: '',
        title: ''
    }
});

export default Channel;