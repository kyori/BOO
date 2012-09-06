Ext.define('BOO.view.Pmixtest', {
	extend: 'Ext.Panel',
	xtype: 'pmix',
    
	requires: [
	           	'Ext.Img'
              ],
	
	config: {
		
		id: 'Pmix',
    	width: 480,
    	height: 807,
    	layout: 'vbox',
		styleHtmlContent: true,
		style: 'background-image: url("resources/images/sub_1_copy.jpg");  background-repeat: no-repeat;',
		
		items: [
		        	{
		        		xtype: 'panel',
		        		layout: 'hbox',
		        		
		        		items: [{		    	        	
		                    xtype: 'image',
		                    height: 120,
		                    margin: 10,
		                    ui: '',
		                    width: 120,
		                    flex: 1,
		                    id:'img1st',
		                    top: '20%',
		                    left: '5%'
		                },{		    	        	      
	    	                   xtype: 'image',
	    	                   margin: 10,
	    	                   flex: 1,
	    	                   width: 120,
	    	                   height: 120,
	    	                   left: 63,
	    	                   id: 'img2nd'
	    	              }]
		        			
		        			
		        	},{
		        		xtype: 'panel',
		        		layout: 'hbox',
		        		
		        		items: [{
				            xtype: 'button',
				            hidden: true,
				            width: 150,
				            height: 120,
				            id: 'pmixbutton',
				    		styleHtmlContent: true,
				    		style: 'background-image: url("resources/images/sub_1_button3.jpg"); background-size: 100% 100%; background-repeat: no-repeat;',
//				    		top: 230,
//				    		left: 1
		        		}]
		        	}
		        	,{
		        		xtype: 'panel',
		        		layout:'hbox',
		        		items: [{
		                    xtype: 'button',
		                    margin: 20,
		                    width: 76,
		                    height: 58,
		                    iconMask: true,
		                    id:'mixtake',
		            		styleHtmlContent: true,
		            		style: 'background-image: url("resources/images/button1.jpg"); background-size: 100% 100%;  background-repeat: no-repeat;',
		            		top: '60%',
		        		},{
		                    xtype: 'button',
		                    margin: 20,
		                    width: 76,
		                    height: 58,
		                    id:'mixgallery',
		            		styleHtmlContent: true,
		            		style: 'background-image: url("resources/images/button2.jpg"); background-size: 100% 100%;  background-repeat: no-repeat;',
		            	//	left: 20
		            		top: '90%',
		        		}]
		        	}
		        ]
	}
});