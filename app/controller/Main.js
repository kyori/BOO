Ext.define('BOO.controller.Main', {
    extend: 'Ext.app.Controller',
    requires: [
               'Ext.device.Device',
               'Ext.device.Camera'
               ],
    config: {
        refs: {
            mainView : '#MainView',
            mixButton: '#mix',
            backButton: '#Back',
            infoButton: '#Info',
            img1Area: '#img1st',
            img2Area: '#img2nd',
            mixTakeButton: '#mixtake',
            mixGalleryButton: '#mixgallery',
            pMixView: '#Pmix',
            pMixButton: '#pmixbutton',
            distortButton: '#distort',
            funnyButton: '#funny',
            canvastestButton: '#canvastest',
     //     canvasButton: '#canvasbutton',
            insertimage: '#canvasbutton',
            canvasView: '#Pcanvastest',
            effectfilter: '#feffect'
            
        },
        control: {
            "#mix": {
            	tap: 'onMixButtonTap'	
            },
        	"#Back": {
        		tap: 'onBackButtonTap'
        	},
        	"#Info": {
        		tap: 'onInfoButtonTap'
        	},
        	"#mixtake": {
        		tap: 'onMixtakeButtonTap'
        	},
        	"#mixgallery": {
        		tap: 'onMixGalleryButtonTap'
        	},
        	'img2Area':{
        		load:'imageLoadComplete',
        	},
        	'img1Area' : {
        		load:'imageLoadComplete'
        	},
        	'pMixButton': {
        		tap: 'onPmixButtonTap'
        	},
        	'distortButton': {
        		tap: 'onDistortButtonTap'
        	},
        	'funnyButton' : {
        		tap: 'onFunnyButtonTap'
        	},
        	'canvastestButton' : {
        		tap: 'onCanvasButtonTap'
        	},
        	'canvasButton': {
        		tap: 'onCanvasTap'
        	},
        	'insertimage': {
        		tap: 'onInsertTap'
        	},
        	'effectfilter': {
        		tap: 'onFilterTap'
        	}
        	
        	
        }
        
        
    },
    
    onMixButtonTap: function(button, e, options) {
    	
    	this.getBackButton().show();
//    	this.getMainView().animateActiveItem(4, {type: 'slide', direction: 'left'});
    	this.getMainView().animateActiveItem(1, {type: 'slide', direction: 'left'});
    	this.getInfoButton().hide();
    	this.getPMixView().reset();
    },
    
    onDistortButtonTap: function(button, e, options) {
    	
    	this.getBackButton().show();
//    	this.getMainView().animateActiveItem(4, {type: 'slide', direction: 'left'});
    	this.getMainView().animateActiveItem(2, {type: 'slide', direction: 'left'});
    	this.getInfoButton().hide();
    	
    },
    
    onFunnyButtonTap: function(button, e, options) {
    	
    	this.getBackButton().show();
//    	this.getMainView().animateActiveItem(4, {type: 'slide', direction: 'left'});
    	this.getMainView().animateActiveItem(3, {type: 'slide', direction: 'left'});
    	this.getInfoButton().hide();
    	
    },
    
    onBackButtonTap: function(button, e, options) {
        button.hide();
    	this.getInfoButton().show();
        this.getMainView().animateActiveItem(0, { type: "slide",  direction: "right" });
    },
    
    onInfoButtonTap: function(button, e, options) {
    	this.getBackButton().show();
    	this.getInfoButton().hide();
    	this.getMainView().animateActiveItem(4, {type: 'slide', direction: 'left'});
    },
    
    onMixtakeButtonTap: function(button, e, options) {
    	//api

		var view= this.getImg1Area(); 
		
    	Ext.device.Camera.capture({
    		source: 'camera',
    		destination: 'file',
            success: function(image) {
            	view.setSrc(image);
            },
        //    source : source,
        //    destination: destination
        });
    //	this.getImg1Area().setSrc('resources/images/klee.png');
    },
    
    onMixGalleryButtonTap: function(button, e, options) {
    	//gallery
    	var view= this.getImg1Area(); 
    	Ext.device.Camera.capture({
    		source: 'album',
    		destination: 'file',
            success: function(image) {
            	view.setSrc(image);
            },
        //    source : source,
        //    destination: destination
        }); 	
    	//this.getImg2Area().setSrc('resources/images/klee.png');
    },
    
    imageLoadComplete: function(img, e, options) {
    	console.log('test');
    	this.getPMixButton().show();
    },
    
    onPmixButtonTap: function(button, e, options) {
    	this.getMainView().animateActiveItem(5, {type: 'slide', direction: 'left'});
    },
    
    onCanvasButtonTap: function(button, e, options) {
    	this.getMainView().animateActiveItem(6, {type: 'slide', direction: 'left'});
    },
//   onCanvasTap: function(button, e, options) {
//
//    },
    onInsertTap: function(button, e, options) {
    	
    	var img = new Image();
    	img.src = "resources/images/klee.png";
    	
    	var cvs = document.getElementById("myCanvas");
    	var context = cvs.getContext('2d');

    	context.drawImage(img, 0, 0);
 
    },
    
    onFilterTap: function(button, e, options) {
    	
 } 	
});