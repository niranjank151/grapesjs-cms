# GrapesJS Preset SCMS

## Summary

* Plugin name: **`cms-editor`**
* Includes:
  * `grapesjs-blocks-basic` Basic set of blocks
  * `server-component` Components which are rendered on server
  * `editable-area` Opt-in of editable areas
* Blocks:
  * `gallery`

## Options

| Option | Description | Default |
| - | - | - |
| `blocks` | Which blocks to add | `['link-block', 'quote', 'text-basic']` |
| `showStylesOnChange` | Show the Style Manager on component change | `true` |
| `textGeneral` | Text for General sector in Style Manager | `'General'` |
| `textLayout` | Text for Layout sector in Style Manager | `'Layout'` |
| `textTypography` | Text for Typography sector in Style Manager | `'Typography'` |
| `textDecorations` | Text for Decorations sector in Style Manager | `'Decorations'` |
| `textExtra` | Text for Extra sector in Style Manager | `'Extra'` |
| `customStyleManager` | Use custom set of sectors for the Style Manager | `[]` |
| `blocksBasicOpts` | `grapesjs-blocks-basic` plugin options. By setting this option to `false` will avoid loading the plugin | `{}` |

## Usage

```html
<link href="path/to/grapes.min.css" rel="stylesheet"/>
<link href="path/to/grapesjs-preset-scms.min.css" rel="stylesheet"/>
<script src="path/to/grapes.min.js"></script>
<script src="path/to/grapesjs-preset-scms.min.js"></script>

<div id="gjs"></div>

<script type="text/javascript">
  var editor = grapesjs.init({
      container : '#gjs',
      ...
      plugins: ['cms-editor'],
      pluginsOpts: {
        'cms-editor': {
          // options
        }
      }
  });
</script>
```
