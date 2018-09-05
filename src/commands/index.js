import openImport from './openImport';
import {
  cmdDeviceDesktop,
  cmdDeviceTablet,
  cmdDeviceMobile
} from './../consts';

export default (editor, config) => {
  const cm = editor.Commands;

  cm.add(cmdDeviceDesktop, e => e.setDevice('Desktop'));
  cm.add(cmdDeviceTablet, e => e.setDevice('Tablet'));
  cm.add(cmdDeviceMobile, e => e.setDevice('Mobile portrait'));

    cm.add('cms:open-modal', e => console.debug('cms:open-modal'))



    cm.add('export-template', e => {
      const dumpCmsEditable = (component) => {
          if (!(component.getEl() && component.getEl().dataset[config.editableAreaAttribute])) {
              component.get('components').each(c => dumpCmsEditable(c))
          } else {
            const html = component.get('components').map(c => c.toHTML()).reduce((a,b) => a +''+ b, '')


              const css = component.get('components').map(c => {

                console.debug(c, c.styleToString())
                return c.styleToString()
              }).reduce((a,b) => a +''+ b, '')

              console.debug(html)
              console.debug(css)
          }
      }

        dumpCmsEditable(editor.DomComponents.getWrapper())
    })
}
