# Fiber Utilities

```package
pins=github:bsiever/pxt-fiberutils
```

This extension provides some utilities to work with fibers and implement faster looping without starving other foreground tasks.
# Forever

```sig
fastForever.fastForever(handler: handler: () => void) : void
``` 

A superfast forever loop.  Top frequency is about 320kHz on the micro:bit V2.

# Acknowledgements 

Icon based on [Font Awesome icon 0xF21E](https://fontawesome.com/icons/heart-pulse?f=classic&s=solid) SVG.

<script src="https://makecode.com/gh-pages-embed.js"></script>
<script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{{ site.github.repository_name }}");</script>
