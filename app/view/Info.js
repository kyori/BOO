Ext.define('BOO.view.Info', {
	extend: 'Ext.Panel',
	xtype: 'infopanel',
	
	config: {
		title: 'Infomation',
		iconCls: 'info',
    	styleHtmlContent: true,
		style: 'background-image: url("resources/images/bg.jpg"); background-size: 100% 100%;  background-repeat: no-repeat;',
		items: [
		    {
		    	xtype: 'panel',
		    	layout: 'vbox',
		    	width: '100%', height: '100%',
        		
		    	
        		items: [
		    	   {
		    		   xtype: 'image',
	                   src: 'resources/images/02_main_button.jpg',
	                   ui: '',
	                   width: 167,
	                   id:'img1st',
	               }
		    	   
		    	]
		    }
		]

	}
});