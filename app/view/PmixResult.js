Ext.define('BOO.view.PmixResult', {
	extend: 'Ext.Panel',
	xtype: 'pmixresult',
	requires: [
	     'Ext.Img'
	     ],
	     
	config: {
    	layout: 'vbox',
    //	top: '33%',
		styleHtmlContent: true,
		style: 'background-image: url("resources/images/4_copy.jpg"); background-size: 100% 100%;  background-repeat: no-repeat;',
		
		
		items:[ {
			width: 400,
			height: 400,
				
			xtype: 'image',
			src: 'resources/images/klee.png',
			style: 'background-size: 100% 100%; margin: 40% 25% 20% 5%;'
		}]
		
	}
});