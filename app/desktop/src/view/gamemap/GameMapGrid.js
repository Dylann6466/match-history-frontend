Ext.define('MatchHistoryFrontend.view.gamemap.GameMapGrid', {
	extend: 'Ext.grid.Grid',
    xtype: 'gamemapgrid',

    minHeight: 300,
    layout: 'fit',

    bind: {
	    store: '{gameMapStore}'
    },

    columns: [
        { text: 'Name',  dataIndex: 'name', width: 200 },
        { text: 'Created On', dataIndex: 'createDate', width: 250 },
    ],

});