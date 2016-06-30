import _ from 'underscore';
import {View} from 'backbone';
import $ from 'jquery';


const SearchView = View.extend({
    el: '#searchBox',
    events: {
        'keyup': 'searchFilter',
    },
    initialize: function () {
       this.on('change:searchFilter', this.filterBySearch, this);  
    },
    searchFilter: function (e) {
        this.searchFilter = e.target.value;
        this.trigger('change:searchFilter');
    },

    filterBySearch: function () {
        this.collection.fetch();
        let filterString = this.searchFilter,
            filtered = _.filter(this.collection.models, function (item) {
                
                
                return item.get('game').toLowerCase().indexOf(filterString.toLowerCase()) !== -1 ||
                item.get('title').toLowerCase().indexOf(filterString.toLowerCase()) !== -1 ||
                item.get('created_at').indexOf(filterString) !== -1
                ;
            });
        this.collection.reset(filtered);
    }
});


export default SearchView;