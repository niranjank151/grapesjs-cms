import grapesjs from 'grapesjs';
import pluginBlocks from 'grapesjs-blocks-basic';
import pluginServerComponent from 'grapesjs-server-component'
import pluginEditableArea from 'grapesjs-editable-area'

import commands from './commands';
import blocks from './blocks';
import components from './components';
import panels from './panels';
import styles from './styles';

export default grapesjs.plugins.add('cms-editor', (editor, opts = {}) => {
    let config = opts;

    let defaults = {
        // Which blocks to add
        blocks: ['link-block', 'scms1'],

        // Show the Style Manager on component change
        showStylesOnChange: false,

        // Text for General sector in Style Manager
        textGeneral: 'General',

        // Text for Layout sector in Style Manager
        textLayout: 'Layout',

        // Text for Typography sector in Style Manager
        textTypography: 'Typography',

        // Text for Decorations sector in Style Manager
        textDecorations: 'Decorations',

        // Text for Extra sector in Style Manager
        textExtra: 'Extra',

        // Use custom set of sectors for the Style Manager
        customStyleManager: [],

        // `grapesjs-blocks-basic` plugin options
        // By setting this option to `false` will avoid loading the plugin
        blocksBasicOpts: {
            flexGrid: 1,
            blocks: ['column1', 'column2', 'column3', 'column3-7', 'text', 'image', 'video', 'map']
        },

        // `editable-area` plugin options
        // By setting this option to `false` will avoid loading the plugin
        editableAreaOps: {
            editableAreaAttribute: 'cmsEditable'
        },

        // `server-component` plugin options
        // By setting this option to `false` will avoid loading the plugin
        serverComponentOps: {
            displayLoadingHtml: (e) => 'Loading component from server...',
            componentServerLoadingCallback: (e) => 'No server rendering callback defined!'
        }

    };

    // Load defaults
    for (let name in defaults) {
        if (!(name in config))
            config[name] = defaults[name];
    }

    const {
        blocksBasicOpts,
        serverComponentOps,
        editableAreaOps,
    } = config;

    // Load plugins
    blocksBasicOpts && pluginBlocks(editor, blocksBasicOpts);
    serverComponentOps && pluginServerComponent(editor, serverComponentOps)
    editableAreaOps && pluginEditableArea(editor, editableAreaOps)

    // Load components
    components(editor, config);

    // Load blocks
    blocks(editor, config);

    // Load commands
    commands(editor, config);

    // Load panels
    panels(editor, config);

    // Load styles
    styles(editor, config);
});
