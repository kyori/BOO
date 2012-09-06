Ext.define('BOO.view.Intro', {
	extend: 'Ext.Panel',
	xtype: 'intro',
	
	config: {
		html: ['<img id="backimg" style="width:100%; height:100%;" src="resources/images/01_intro_copy.jpg"></img>'].join("")

	},
	
	listeners: {
		activate : function() {
//			setTimeout(Ext.getCmp('MainView').setActiveItem(0),3000);
			setTimeout(console.log('aaa'),3000);
		}
	}
});

