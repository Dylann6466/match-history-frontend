Ext.define('MatchHistoryFrontend.view.gamemap.GameMapViewController', {
	extend: 'Ext.app.ViewController',
	alias: 'controller.gamemapcontroller',

	init: function () {
		var me = this;

		me.gameMapGrid = me.getView().down('#gameMapGrid');

		me.doInit();
	},

	doInit: function () {
		var me = this;

		console.log(me.getViewModel().getStore('gameMapStore').load());

		// me.gameMapGrid.getStore().load();
	}
});
