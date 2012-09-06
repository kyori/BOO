Ext.define("BOO.view.Main", {
    extend: 'Ext.Panel',
    
    requires: [
        'Ext.TitleBar',
        'Ext.Video',
        'Ext.Img'
    ],
    
    config: {
    	id: 'MainView',
    	layout: {
    		type: 'card'
    	},
    	scrollable: false,
        items: [
                
                {
                    xtype: 'titlebar',
                    docked: 'top',
                    height: 50,
                    ui : 'neutral',
                    title: 'Photo Revolution',
                    style: 'background: url("./resources/images/actionbar.png"); background-size: 100% 100%;', 
//                    {
//                    	'background-image': 'url("./resources/images/actionbar.png")'
//                    },
                    items: [
                        {
                            xtype: 'button',
                            hidden: true,
                            id: 'Back',
                            itemId: 'mybutton',
                            iconCls: 'home',
                            iconMask: true,
                            text: ''
                        },
                        {
                            xtype: 'button',
                            iconCls: 'info',
                            id: 'Info',
                            iconMask: true,
                            text: '',
                            align: 'right'
                        },

                    ]
                },
                {
                    xtype: 'panel',
                    id: 'Booth',
                    margin: '',
                    width: '',
                    layout: {
                        align: 'center',
                        pack: 'center',
                        type: 'vbox'
                    },
                    modal: false,
                    zindex: 0,
                	style: 'background-image: url("resources/images/bg_intro.jpg");background-size: 100% 100%; background-repeat: no-repeat;',
                	styleHtmlContent: true,
                    items: [
    
                        {
                            xtype: 'button',
                            id: 'mix',
                            itemId: 'mybutton1',
                            margin: 10,
                            width: 334,
                            height:88,
                            align: 'center',
                            style: 'align:center; background-size: 100% 100%; background-image:url("resources/images/btn_mix.png");',
                            styleHtmlContent: true,
                            bottom: '23%',
                            left: '14%',
                        },
                        {
                            xtype: 'button',
                            id: 'distort',
                            margin: 10,
                           width: 334,
                           height:88,
//                            top: 545,
                     //       left: 72,
                            style: 'align:center; background-size: 100% 100%; background-image:url("resources/images/btn_distortion.png");',
                            styleHtmlContent: true,
                            bottom: '9%',
                            left: '14%'
                            
                        },
//                        {
//                            xtype: 'button',
//                            id: 'funny',
//                            margin: 10,
//                            width: '200px',
//                            text: 'funny camera'
//                        },
//                        {
//                            xtype: 'button',
//                            id: 'canvastest',
//                            margin: 10,
//                            width: '200px',
//                            text: 'canvas test'
//                        }
                    ]
                },
                {
                	xtype: 'pmix'
                },
                {
                	xtype: 'pdistort'
                },
                {
                	xtype: 'pfunny'
                },
                {
                	xtype: 'infopanel'
                },
                {
                	xtype: 'pmixresult'
                },
                {
                	xtype: 'canvastest'
                }
        ]
    }
});
