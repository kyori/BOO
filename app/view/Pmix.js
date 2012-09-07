Ext.define('BOO.view.Pmix', {
	extend: 'Ext.Panel',
	xtype: 'pmix',
    
	requires: [
	           	'Ext.Img'
              ],
	
	config: {
		
		id: 'Pmix',
    	layout: 'vbox',
		styleHtmlContent: true,
		style: 'background-image: url("resources/images/bg.jpg"); background-size: 100% 100%;  background-repeat: no-repeat;',
		
		items: [
		        	{
		        		xtype: 'panel',
		        		layout: 'hbox',
		        		top: '17%',
		        		
		        		items: [{		    	        	
		                    xtype: 'image',
		                    height: 167,
		                    margin: '0 15 0 0',
		                //    bottom: '10%',
		                    ui: '',
		                    width: 167,
		                    id:'img1st',
		                  
		                    style: 'background-image: url("resources/images/frame_select_photo.png"); background-size: 100% 100%;'
		                },
		                {
		                	xtype: 'image',
		                	width: 33, height: 33,
		               
		                	style: 'background-image: url("resources/images/img_plus.png"); background-size: 100% 100%; background-repeat: no-repeat;'
		                },
		                {		    	        	      
	    	                   xtype: 'image',
	    	                   margin:'0 0 0 27',
	    	                   width: 167,
	    	                   height: 167,
	    	                   id: 'img2nd',
	    	                   style: 'background-image: url("resources/images/frame_select_hair.png"); background-size: 100% 100%;'
	    	              }
		                ]
		        			
		        			
		        	},{
		        		xtype: 'panel',
		        		layout: {
		        			type: 'hbox',
		        			align: 'center',
		        			pack: 'center'
		        		},
		        		bottom: '16%',
		        		//left: '28%',
		        		
		        		items: [{
				            xtype: 'button',
				            width: 222,
				            height: 174,
				            id: 'pmixbutton',
				    		styleHtmlContent: true,
				    		style: 'background-image: url("resources/images/btn_mix01_gray.png"); background-size: 100% 100%; background-repeat: no-repeat;',
//				    		top: 230,
//				    		left: 1
		        		}]
		        	}
		        	,{
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