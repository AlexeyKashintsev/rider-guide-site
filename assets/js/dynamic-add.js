jQuery(document).ready(function($) {
    
    sportNames = ["skate", "bmx", "mtb", "shishikhin", "peetooh", "very", "gay", "ochen"]
    
    sportNames.forEach(function(sportName, i){
        addDynamicExtraField(sportName);            
    });
    
    function addDynamicExtraField(sportName) {
        
        var div = $('#buttoncontainer')
        
        $('<button/>', {
            class: 'btn-sport',
            value: sportName
        }).html(sportName).appendTo(div)
    }
})