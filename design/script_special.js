
function init_dw_Scroll() {
    // arguments: id of scroll area div, id of content div
    var wndo = new dw_scrollObj('wn', 'lyr1');
    // args: id, axis ('v' or 'h'), eType (event type for arrows), 
    // bScrollbar (include track and dragBar? true or false)
    wndo.buildScrollControls('scrollbar', 'h', 'mouseover', true);
}

// FAQ
