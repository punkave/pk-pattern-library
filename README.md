## wip : pk-pattern-library

#### Dependencies

This module relies on [pk-webpack](https://github.com/punkave/pk-webpack), which is currently work-in-progress. To test this module, you must clone both of these repositories and `npm-link` them.

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
    "project_name": 'Test Project',
    "project_logo": '/image.png',
    "overview": [
      {
        "name": "introduction",
        "title": 'Introduction',
        "description": 'This is a description',
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
- `Colors` is a special component that takes an array of hex values.
```
  "components": [
    {
      "name": "colors",
      "title": "Colors",
      "colors": [
        "#2F2D41",
        "#472B8A"
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

#### Cli Commands

Scaffold a component using this command, where `foo` is the group, and `bar` is the component name. This will create a `component.html` and `markdown.html` file/folder structure, and append the data to `data.json`. Very bare minimum required to render.

```
$ node app MODULE_NAME:create foo bar
```

#### Examples

[LawCoin Styleguide](http://lawcoin.punkave.net/styleguide)
