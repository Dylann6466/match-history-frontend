Ext.define('MatchHistoryFrontend.model.GameMap', {
    extend: 'Ext.data.Model',
    alias: 'model.gamemapmodel',

    idProperty: 'idGameMap',

    fields: [
        { name: 'idGameMap', type: 'int' },
        { name: 'name', type: 'string' },
        { name: 'createDate', type: 'date', dateFormat: 'time' }
    ]
});