export default (editor, config = {}) => {
    const domc = editor.DomComponents;
    const defaultType = domc.getType('default');
    const defaultModel = defaultType.model;
    const defaultView = defaultType.view;


    const serverComponent = domc.getType('server-component')


    domc.addType('gallery', {
        view: defaultType.view.extend({
            events: {
                dblclick: 'onActive',
            },
                onActive() {
                    this.em.get('Commands').run('cms:open-modal', { target: this.model });
                },
        }),
        model: serverComponent.model.extend({
                init() {
                    serverComponent.model.prototype.init.call(this);
                    const toolbar = this.get('toolbar');
                    const id = 'custom-code';

                    if (!toolbar.filter(tlb => tlb.id === id ).length) {
                        toolbar.unshift({
                            id,
                            command: 'cms:open-modal',
                            attributes: { class: 'fa fa-cog' }
                        });
                    }
                },
                defaults: Object.assign({}, defaultModel.prototype.defaults, {
                    traits: [{
                        // Change the type of the input (text, password, email, etc.)
                        type: 'text',
                        label: 'View',
                        name: 'view',
                        changeProp: 1
                    }]
                }),
            },
            {
                isComponent: function (el) {
                    if (el.tagName == 'gallery'.toUpperCase()) {
                        return {
                            type: 'gallery'
                        };
                    }
                },
            }),

    });
}
