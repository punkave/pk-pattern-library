## wip : pk-pattern-library

#### Getting Started

```
app.js

const apos = require('apostrophe')({
...
  modules: {
    'my-pattern-library': { extend: 'pk-pattern-library' }
  }
```

By default, visiting `/styleguide` will load the pattern library. This is configurable (see below).


#### Global Options

Key | Default | Description
---|---|---
slug | '/styleguide' | Slug for visiting the pattern library.

Global `data.json` options for configuration

Key | Default | Description
---|---|---
project_name | null | `string`: Name of the project
project_logo | null | `string`: Optional logo for the navigation
hide_project_name | null | `boolean`: Hides the project name, if you prefer a logo.
overview | array | `array`: contains an object configuration with introductory information.
groups | null | `array`: contains a single group object, and your array of components.
components | null | `array`: a collection of components that you wish to include in your group.

Example of `data.json` for configuring component groups
```
  {
    "project_name": "Test Project",
    "project_logo": "/image.png",
    "overview": [
      {
        "name": "introduction",
        "title": "Introduction",
        "description": "This is a description"
      }
    ],
    "groups": [
      {
        "name": "typography",
        "title": "Typography",
        "description": "This is my description",
        "components": [
          {
            "name": "typography/title-primary",
            "title": "Title Primary",
            "description": "This is another description",
            "options": {
                "size": "half"
            }
          }
        ]
      }
    ]
  }
```

#### Special Component Types
- `Colors` is a special component that takes an array of hex values, or objects that contain information about the color. Available properties are

Key | Default | Description
---|---|---
label | null | `string`: Variable name
hex | null | `string`: Hex value
cmyk | null | `string` or `boolean`: CMYK value, or if `true`, will automatically convert based on hex value.
gradient | null | `string`: Gradient css values
```
  "components": [
    {
      "name": "colors",
      "title": "Colors",
      "colors": [
        "#2F2D41",
        "#472B8A",
        {
          "label": "Primary",
          "hex": "#000",
          "cmyk": true
        },
        {
          "label": "Secondary",
          "gradient": "linear-gradient(to bottom right, #472B8A, #834192)"
        }
      ],
      "options": {
        "size": "full"
      }
    }
  ]
```

#### Other component options

Key | Default | Description
---|---|---
size | null | `string`: 'full' or 'half', displaying the components at either 50% or 100%
hide_code_block | null | `boolean`: hide the code block for the component
externals | null | `array` of `objects`: provide a `label` and `url` pointing to any external file.
background_color | null | `hex` value: make the area around the component something besides white `#ffffff`

#### CLI Command

Scaffold a component using this command, where `group` is the group name, and `component` is the component name. This will create a `component.html` and `markdown.html` file/folder structure, and append the data to `data.json`. The bare minimum required to render.

```
$ node app MODULE_NAME:create group component
```

#### Examples

[LawCoin Styleguide](http://lawcoin.punkave.net/styleguide)
