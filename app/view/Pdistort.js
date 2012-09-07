Ext.define('BOO.view.Pdistort', {
	extend: 'Ext.Panel',
	xtype: 'pdistort',
    
	requires: [
	           	'Ext.Img'
              ],
	
	config: {
		
		id: 'Pdistort',
    	layout: 'vbox',
		styleHtmlContent: true,
		style: 'background-image: url("resources/images/bg.jpg"); background-size: 100% 100%;  background-repeat: no-repeat;',
		
		items: [
		        {
		        	xtype: 'panel',
		        	layout: {
		        		type: 'vbox',
		        		align: 'center',
		        		pack: 'center'
		        	},
		        	width: 480, height: 571,
		        	style: 'background-image: url("resources/images/bg_photo_frame_distortion.png"); background-size: 100% 100%;  background-repeat: no-repeat;',
		        	
		        	items: [
		        	   {
		        		   xtype: 'image',
		        		   width: 400, height: 400,
		        		   
		        		   style: 'background-image: url("resources/images/bg_photo_distortion.png"); background-size: 100% 100%;  background-repeat: no-repeat;',
		        		   
		        	   }   ,
		        	   {
		        		   xtype: 'button',
		        		   width: 307, height: 90,
		        		   style: 'background-image: url("resources/images/btn_distortion01.png"); background-size: 100% 100%;  background-repeat: no-repeat;',
		        		   
		        	   }
		        	]
		        },
		        {
		        	xtype: 'panel',
	        		layout: {
	        			type : 'hbox',
	        			align : 'center',
	        			pack : 'center'
	        		},
	        		margin: 0,
	        		bottom: '0%',
	        		//left: '30%', 
	        		width: '100%',
	        		style: 'background-image: url("resources/images/main_actionbar.png"); image-size: 100% 100%; background-repeat: no-repeat;',
	        		
	        		items: [{
	                    xtype: 'button',
	                   margin: '0 10 0 0',
	                    width: 100,
	                    height: 49,
	                    iconMask: true,
	                    id:'mixtake',
	            		styleHtmlContent: true,
	            		style: 'background-image: url("resources/images/tab_btn01copy.png"); background-size: 100% 100%;  background-repeat: no-repeat;',
	            		
	        		},{
	                    xtype: 'button',
	                   margin: '0 0 0 10',
	                    width: 100,
	                    height: 52,
	                    id:'mixgallery',
	            		styleHtmlContent: true,
	            		style: 'background-image: url("resources/images/tab_btn02copy.png"); background-size: 100% 100%;  background-repeat: no-repeat;',
	            		
	        		}]
		        }
		        ]
	}
});