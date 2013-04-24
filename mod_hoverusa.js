jQuery(document).ready(function($) {
  var mapEl = $('#usmap');
  if (mapEl !== 0) {
    var options = {};

    var vStateStyles = mapEl.data('state-styles');
    if (vStateStyles !== undefined) {
      options['stateStyles'] = vStateStyles
    }

    var vStateHoverStyles = mapEl.data('state-hover-styles');
    if (vStateHoverStyles !== undefined) {
      options['stateHoverStyles'] = vStateHoverStyles;
    }

    var vShowLabels = mapEl.data('show-labels');
    if (vShowLabels !== undefined) {
      options['showLabels']= vShowLabels;
    }

    /*var vClick = mapEl.data('click');
    if (vClick !== undefined) {
      var fn = window[vClick];
      if (typeof fn === 'function') {
        options['click']= fn;
      }
    }*/
    options['click']= function(event, data) {
      var div = $('#usmap-'+data.name);
      $('.usmap-state').hide();
      if (div.lenght !== 0) {
        div.show();
      }
    };

    mapEl.usmap(options);
  }
});
