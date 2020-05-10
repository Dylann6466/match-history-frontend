Ext.define('MatchHistoryFrontend.view.gamemap.GameMapView', {
	extend: 'Ext.Container',
    xtype: 'gamemapview',

    requires: [
        'MatchHistoryFrontend.view.gamemap.GameMapGrid'
    ],

    controller: {type: 'gamemapcontroller'},
    viewModel: {type: 'gamemapviewmodel'},

    cls: 'homeview',
    scrollable: true,

    layout: {
	    type: 'hbox',
        align: 'stretch'
    },

    items: [
        {
            xtype: 'gamemapgrid',
            itemId: 'gameMapGrid',
            flex: 1
        }
    ]
});