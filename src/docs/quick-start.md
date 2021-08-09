---
title: Quick start
---

You'll need an existing 11ty site to get started. If you're new to 11ty, you can make your first project using the lovely guide + community resources [over here](https://www.11ty.dev/docs/getting-started/).

## Installation

Then, you can install Slinkity into your project repo like so:

```bash
npm i --save-dev slinkity
```

...and run our CLI command to spin up the dev server:

```bash
npx slinkity --serve
# Also consider the --incremental flag
# for faster builds during development
```

Now you're off to the races! This command will:

1. Start up [11ty in `--watch` mode](https://www.11ty.dev/docs/usage/#re-run-eleventy-when-you-save) to listen for file changes
2. Start up [a Vite server](https://vitejs.dev/guide/#index-html-and-project-root) pointed at your 11ty build. This helps us process all sorts of file types, including SASS styles, React components, and more 🚀

When you're ready for a production build, just run:

```bash
npx slinkity
```

...and your shiny new site will appear in the `_site` folder (or [wherever you tell 11ty to build your site](https://www.11ty.dev/docs/config/#output-directory)).

## Adding your first component shortcode

Alright, now let's do something... Slinkity-ish. Say you have a project directory with just 1 file: `index.html`. That file might look like this:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Slinkity time</title>
</head>
<body>
  <h1>Look ma, it's Slinkity!</h1>
</body>
</html>
```

If you run this using the `slinkity --serve` command, you'll just see the gloriously static text "Look ma, it's Slinkity!"

Now, let's add something _interactive._ Say we're keeping track of how many glasses of water we've had today (because [hydration is important](https://www.gatsbyjs.com/docs/conceptual/react-hydration/)!). If we know a little [ReactJS](https://reactjs.org/docs/getting-started.html), we can whip up a counter component like so:

```jsx
// _includes/components/GlassCounter.jsx
import React, { useState } from 'react'

function GlassCounter() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0)

  return (
    <div>
      <p>You've had {count} glasses of water 💧</p>
      <button onClick={() => setCount(count + 1)}>Add one</button>
    </div>
  )
}

export default GlassCounter
```

_**Note:** Make sure this file is under `_includes/components`. Slinkity will copy this directory over to your build._

Next, go ahead and install `react` and `react-dom` as project dependencies. This will help your Vite server compile your component.

```bash
npm i react react-dom --save-dev
```

Now how do we use this component on our `index.html` page? Let's reach for a [shortcode](https://www.11ty.dev/docs/shortcodes/):

```html
...
<body>
  <h1>Look ma, it's Slinkity!</h1>
  {% raw %}{% react 'component/GlassCounter' %}{% endraw %}
</body>
```

This will do a few things:
1. Go find `_includes/component/GlassCounter.jsx` (notice the `_includes` and `.jsx` are optional)
2. "Statically" render the component and insert it as HTML. This means you'll always see your component, even when disabling JS in your browser ([go try it!](https://developer.chrome.com/docs/devtools/javascript/disable/)).
3. ["Hydrate"](https://www.gatsbyjs.com/docs/conceptual/react-hydration/) that HTML we just rendered with our JavaScript component

Now in your browser preview, clicking the button should increase your counter 🎉

### [Learn more about component shortcodes ->](/docs/component-shortcodes)
