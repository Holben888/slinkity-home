---
title: Rendering eagerly, lazily, or statically
---

Slinkity lets you control _how_ and _when_ your JS-laden components are rendered. Let's understand the options available to you.

## Setting the "render" prop

To choose how a given component is rendered, you'll need to pass the `render` prop.

```jsx
// Page.jsx
export function getProps() {
  return { render: 'lazy' }
}

function Page() {...}
```

[More on page and layout components](/docs/component-pages-and-layouts)

```html
<!-- page-with-shortcode.html -->
<body>
  {% raw %}{% react 'components/Example' 'render' 'lazy' %}{% endraw %}
</body>
```

[More on shortcodes](/docs/component-shortcodes)

## "eager" - the default for all components

This mirrors how "traditional" component-based frameworks operate. An eagerly loaded component will be rendered to static HTML, _and_ shipped to the client as a JavaScript bundle.

Saw we have an eagerly loaded component like this:

```html
<!-- page-with-shortcode.html -->
<body>
  {% raw %}{% react 'components/Example' 'render' 'lazy' %}{% endraw %}
</body>
```