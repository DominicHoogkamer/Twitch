import {Model} from 'backbone';

const  Broadcast = Model.extend({
    defaults: {
        created_at : " ",
        game: " ",       
        title : " ",
        views : " ",
    }
});

export default Broadcast;
