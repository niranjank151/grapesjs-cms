export default (editor, config) => {
  const bm = editor.BlockManager;
  const toAdd = name => config.blocks.indexOf(name) >= 0;

  toAdd('link-block') && bm.add('link-block', {
    category: 'Basic',
    label: 'Link Block',
    attributes: { class: 'fa fa-link' },
    content: {
      type:'link',
      editable: false,
      droppable: true,
      style:{
        display: 'inline-block',
        padding: '5px',
        'min-height': '50px',
        'min-width': '50px'
      }
    },
  });


    toAdd('scms1') && bm.add('scms1', {
        category: 'CMS',
        label: 'Gallery',
        attributes: {class:'fa fa-image'},
        content: {
          attributes: {
            view: 'gallery/default.html'
          },
            tagName: 'gallery',
            type:'gallery',
            editable: false,
            droppable: true,
            style:{
                padding: '15px',
                display: 'block'
            }
        },

    });
}
