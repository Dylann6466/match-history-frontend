Ext.define('MatchHistoryFrontend.Application', {
	extend: 'Ext.app.Application',
	name: 'MatchHistoryFrontend',
	requires: ['MatchHistoryFrontend.*'],
	defaultToken: 'homeview',

	removeSplash: function () {
		Ext.getBody().removeCls('launching');
		var elem = document.getElementById("splash");
		elem.parentNode.removeChild(elem)
	},

	launch: function () {
		var me = this;
		this.removeSplash();




		Ext.Viewport.add([{xtype: 'mainview'}]);
		me.mainView = Ext.Viewport.down('#mainView');
		me.checkExistingSession()
	},

	onAppUpdate: function () {
		Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
			function (choice) {
				if (choice === 'yes') {
					window.location.reload();
				}
			}
		);
	},

	checkExistingSession: function () {
		var me = this;

		Ext.Ajax.request({
			method: 'POST',
			url: 'http://localhost:8080/security/checkExistingSession',
			callback: function (options, success, response) {
				var obj = Ext.JSON.decode(response.responseText);

				if (response.status === 403) {
					me.logon();
				}

				var user = obj.user;
				me.mainView.getViewModel().set('user', user);
				console.log(me.mainView.getViewModel().get('user'));
			}
		});
	},

	logon: function () {
		var me = this;

		Ext.Ajax.request({
			method: 'POST',
			url: 'http://localhost:8080/security/logon',
			params: {
				email: 'dylan.r1515@gmail.com',
				password: 'test'
			},
			callback: function (options, success, response) {
				var obj = Ext.JSON.decode(response.responseText);

				if (response.status === 200) {
					var user = obj.user;
					me.mainView.getViewModel().set('user', user);
					console.log(me.mainView.getViewModel().get('user'));
				}
			}
		});
	}
});
