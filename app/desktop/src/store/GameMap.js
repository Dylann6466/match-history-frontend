Ext.define('MatchHistoryFrontend.store.GameMap', {
    extend: 'Ext.data.Store',
    alias: 'store.gamemap',

    model: 'MatchHistoryFrontend.model.GameMap',

    proxy: {
        type: 'ajax',
        url: 'http://localhost:8080/game-maps',
        reader: {
            type: 'json',
            rootProperty: ''
        }
    }
});