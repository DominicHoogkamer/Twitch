import {Model} from 'backbone';
/**
 * Super Model of Broadcast
 */
const  Broadcast = Model.extend({
    defaults: {
        created_at : " ",
        game: " ",       
        title : " ",
        views : " ",
    }
});

export default Broadcast;
