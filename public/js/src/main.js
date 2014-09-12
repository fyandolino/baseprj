var base = $;

(function ($) {
    /* global window, setTimeout, setInterval, console, Modernizr, clearTimeout */

    /**
    Boilerplate Object reference.

    @class $.BoilerPlateObject
    @constructor
    @param {Object} params External object settings passed into the object.
    **/
    $.main = function (params) {              
       
            /**
            Global This
            **/
 
            /**
            Initializaiton function which runs at object instantiation time.

            @method init
            **/
            function init() { 
                
            }

            function bindEvents() {
            }
          
            init();
    };

    $.secondObject = function (params) { 

        function init(){
        }

        init();
    };

} (jQuery));

$(function() {
    new base.main();
});
