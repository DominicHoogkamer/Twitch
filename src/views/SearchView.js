import _ from 'underscore';
import {View} from 'backbone';
import $ from 'jquery';


const SearchView = View.extend({
    //Get the view element
    el: '#searchBox',
    //Events of SearchView only holds a keyup event for the filter function
    events: {
        'keyup': 'searchFilter',
    },
    /**
     * watch for changes on the searchFilter function
     * @param  {searchFilter'} {this.on('change
     * @param  {} this.filterBySearch
     */
    initialize: function () {
       this.on('change:searchFilter', this.filterBySearch, this);  
    },
    /**
     * searchFilter gets the values that are typed in
     * @param  {} e
     * @param  {searchFilter'} {this.searchFilter=e.target.value;this.trigger('change
     */
    searchFilter: function (e) {
        this.searchFilter = e.target.value;
        this.trigger('change:searchFilter');
    },

    //Function to render the view with the included search values.
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