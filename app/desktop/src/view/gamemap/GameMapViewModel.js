Ext.define('MatchHistoryFrontend.view.gamemap.GameMapViewModel', {
	extend: 'Ext.app.ViewModel',
	alias: 'viewmodel.gamemapviewmodel',

	data: {
		name: 'Game Maps'
	},

	stores: {
		gameMapStore: {
			type: 'gamemap'
		}
	}
});
