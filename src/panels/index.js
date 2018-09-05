import {
    cmdDeviceDesktop,
    cmdDeviceTablet,
    cmdDeviceMobile
} from './../consts';

export default (editor, config) => {
    const pn = editor.Panels;
    const eConfig = editor.getConfig();
    const swv = 'sw-visibility';
    const expt = 'export-template';
    const osm = 'open-sm';
    const otm = 'open-tm';
    const obl = 'open-blocks';
    const ful = 'fullscreen';
    const prv = 'preview';

    eConfig.showDevices = 0;

    pn.getPanels().reset([{
        id: 'commands',
        buttons: [{}],
    }, {
        id: 'options',
        buttons: [{
            id: swv,
            command: swv,
            context: swv,
            className: 'fa fa-square-o',
        }, {
            id: prv,
            context: prv,
            command: e => e.runCommand(prv),
            className: 'fa fa-eye',
        }, {
            id: ful,
            command: ful,
            context: ful,
            className: 'fa fa-arrows-alt',
        }, {
            id: expt,
            className: 'fa fa-code',
            command: e => e.runCommand(expt),
        }, {
            id: 'undo',
            className: 'fa fa-undo',
            command: e => e.runCommand('core:undo'),
        }, {
            id: 'redo',
            className: 'fa fa-repeat',
            command: e => e.runCommand('core:redo'),
        }],
    }, {
        id: 'views',
        buttons: [{
            id: osm,
            command: osm,
            active: true,
            className: 'fa fa-paint-brush',
        }, {
            id: otm,
            command: otm,
            className: 'fa fa-cog',
        }, {
            id: obl,
            command: obl,
            className: 'fa fa-th-large',
        }],
    }]);

    // Add devices buttons
    const panelDevices = pn.addPanel({id: 'devices-c'});
    panelDevices.get('buttons').add([{
        id: cmdDeviceDesktop,
        command: cmdDeviceDesktop,
        className: 'fa fa-desktop',
        active: 1,
    }, {
        id: cmdDeviceTablet,
        command: cmdDeviceTablet,
        className: 'fa fa-tablet',
    }, {
        id: cmdDeviceMobile,
        command: cmdDeviceMobile,
        className: 'fa fa-mobile',
    }]);



    editor.on('load', function() {
        // Show borders by default
        pn.getButton('options', 'sw-visibility').set('active', 1);

        // Load and show settings and style manager
        var openTmBtn = pn.getButton('views', osm);
        openTmBtn && openTmBtn.set('active', 1);
        var openSm = pn.getButton('views', otm);
        openSm && openSm.set('active', 1);

        // Open block manager
        var openBlocksBtn = editor.Panels.getButton('views', obl);
        openBlocksBtn && openBlocksBtn.set('active', 1);
    })
}
