Ext.define('BOO.view.Pcanvastest', {
	extend: 'Ext.Panel',
	xtype: 'canvastest',
	
	config: {
		
		id: 'Pcanvastest',
		items:[{
		        html: ['',
		               '<canvas id="myCanvas" width="250" height="250"></canvas>',
		               ''
		               ].join("")
		},
		{
			xtype: 'button',
			id: 'canvasbutton',
			text: 'canvas',
			width: '200px'
		},
		{
			xtype: 'button',
			id: 'feffect',
			text: 'filter',
			width: '200px'
		}]
	},
	
	
});