---
layout: base-layout
---

## What is it?

Slinkity is a plugin that can extend any [11ty](https://11ty.dev/) site. Once installed, this:
- 🚀 **Unlocks component frameworks** (React, Vue, and Svelte) for writing page templates _and_ layout templates. So you can turn an existing `.html` or `.liquid` file into a `.jsx` file, and immediately start building routes on your site using React.
- 🔖 **Includes powerful shortcodes** to insert components into existing pages. Add a line like this to your markdown, HTML, Nunjucks, etc, and watch the magic happen: `{% raw %}{% react './path/to/component.jsx' %}{% endraw %}`
- 💧 **Hydrates these component-driven pages** on the client. In other words, all your [dynamic state management](https://reactjs.org/docs/hooks-intro.html) will work in development and production with 0 extras setup.
- 🔗 **(Optionally) Turns your site into a single page app.** This opens the door for animated page transitions, persistent states between pages, and more!

Let's see Slinkity in action ✨

{% include demo-embed.html %}

## Our philosophy

We built this tool to address an age-old question: **"what should I use to build my website?"**

This stumps newbies and professionals alike. In the static site space, we have 2 competing camps:
1. **The "simple" site generator** is driven by data and templating languages (markdown, HTML, liquid, etc). This approach avoids JavaScript bundles and component frameworks like React in favor of straight HTML and CSS. This camp is mostly dominated by [Jekyll](https://jekyllrb.com), [Hugo](https://gohugo.io), and our favorite, [11ty](https://11ty.dev).
2. **The "dynamic" site generator** is driven by component frameworks like React, Vue, and Svelte. These output simple HTML and CSS like the first camp, _along with_ a bundle of JS to enable dynamic user interactions. Think image carousels with arrow buttons, animated page transitions as you explore the site, and other assorted, code-driven whimsy. This camp includes [NextJS](https://nextjs.org), [GatsbyJS](https://www.gatsbyjs.com), [SvelteKit](https://kit.svelte.dev), and more.

There's some clear value to both approaches. The first dramatically reduce build times and load times for the user by avoiding JavaScript processing. The second empowers your site to do _something more_ should you ever need it, at the cost of a large code bundle and steeper learning curve.

But we're faced with a dilemma: **if we ever want to switch camps, we'll have to rewrite our site from scratch in a different tool.** This costs time, money, and user experience if anything goes wrong 😢

This is what **Slinkity** is built for. With our approach, you can:
1.  Start building your static site with 11ty. This means a lower learning curve, fast build times, and a strong developer community.
2.  When (or if) you need some dynamic user interactions, you're free to add React, Vue, or Svelte components to your existing site _with zero extra setups_. This could mean embedding components into existing templates using shortcodes (i.e. `{% raw %}{% react 'FancyComponent.js' %}{% endraw %}`), or **replacing** page and layout templates with components entirely (i.e. converting a liquid or HTML file into a JSX file).

So start in the first camp, with zero cost of switching to the second 🚀

## How can I try it?
This project is still _heavily_ under development in an early alpha phase. So there's no public NPM package for you to install, but you can expect regular updates on Twitter from these lovely accounts:

{% include twitter-links.html %}

{% include footer.html %}
