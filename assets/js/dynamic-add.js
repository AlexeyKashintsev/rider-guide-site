jQuery(document).ready(function($) {
    
    sportNames = ["skate", "bmx", "mtb", "Longboard", "Motorcycle", "Car", "Quadrocycle" ];
//    sportNames = ["Snowboard", "Ski", "Freeski", "SnowScoot", "SnowMobile"];
    
    sportNames.forEach(function(sportName, i){
        addDynamicExtraField(sportName);            
    });
    
    function addDynamicExtraField(sportName) {
        
        var div = $('#buttonscontainer');
        var btncntr = $('<div/>', {
            class: 'btn-container'
        }).appendTo(div);
        
        var btn = $('<button/>', {
            class: 'btn-'+ sportName +' btn-sport',
            value: sportName
        }).appendTo(btncntr);
        
        $('<span/>', {
            class: 'txt-inside-btn'
        }).html(sportName).appendTo(btn);
    }
})