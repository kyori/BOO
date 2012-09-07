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
                   // height: 100,
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
                            width: '100%',
                            height: '100%',
                      //      iconCls: 'home',
                            iconMask: true,
                            style: 'background: url("./resources/images/btn_home.png"); background-size: 100% 100%; background-repeat: no-repeat;', 
                            text: '',
                            margin: '0 5'
                        },
                        {
                            xtype: 'button',
                       //     iconCls: 'info',
                            id: 'Info',
                            iconMask: true,
                            text: '',
                            width: '100%',
                            height: '100%',
                            style: 'background: url("./resources/images/btn_info.png"); background-size: 100% 100%; background-repeat: no-repeat;',
                            align: 'right',
                            margin: '0 10 0 0'
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
                            bottom: '18%',
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
                            bottom: '4%',
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
