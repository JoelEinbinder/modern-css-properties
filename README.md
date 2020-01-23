# Modern CSS Properties

The CSS properties supported by all three major web browser engines: Blink (Chrome/Edge), Gecko (Firefox), and WebKit (Safari).

```js
const cssProperties = require('modern-css-properties');
console.log(cssProperties); // ["-webkit-appearance","-webkit-backface-visibility", ... "z-index"]
```

The list is built by using [Playwright](https://github.com/Microsoft/playwright). Each browser is launched, and the css properties it supports are extracted. The [intersection](https://en.wikipedia.org/wiki/Intersection_(set_theory)) of these sets is written as the final list.

## Why doesn't this list match the spec?
This list of properties is generated from the browser engines themselves. It may contain non-standard properties that happen to be implemented in all browsers. It may be missing standard properties that some browsers don't currently support.

## Why are there properties that start with -webkit-?
Firefox supports some -webkit-* properties in order to improve thier compatibility with the web. You can technically use these properties in any browser, although you probably shouldn't.

## I don't care about your package, I just want the list!
<!-- gen list -->
 - [-webkit-appearance](https://developer.mozilla.org/docs/Web/CSS/appearance)
 - [-webkit-backface-visibility](https://developer.mozilla.org/docs/Web/CSS/backface-visibility)
 - [-webkit-background-clip](https://developer.mozilla.org/docs/Web/CSS/background-clip)
 - [-webkit-background-origin](https://developer.mozilla.org/docs/Web/CSS/background-origin)
 - [-webkit-background-size](https://developer.mozilla.org/docs/Web/CSS/background-size)
 - [-webkit-border-image](https://developer.mozilla.org/docs/Web/CSS/border-image)
 - [-webkit-border-radius](https://developer.mozilla.org/docs/Web/CSS/border-radius)
 - [-webkit-box-align](https://developer.mozilla.org/docs/Web/CSS/box-align)
 - [-webkit-box-direction](https://developer.mozilla.org/docs/Web/CSS/box-direction)
 - [-webkit-box-flex](https://developer.mozilla.org/docs/Web/CSS/box-flex)
 - [-webkit-box-ordinal-group](https://developer.mozilla.org/docs/Web/CSS/box-ordinal-group)
 - [-webkit-box-orient](https://developer.mozilla.org/docs/Web/CSS/box-orient)
 - [-webkit-box-pack](https://developer.mozilla.org/docs/Web/CSS/box-pack)
 - [-webkit-box-shadow](https://developer.mozilla.org/docs/Web/CSS/box-shadow)
 - [-webkit-line-clamp](https://developer.mozilla.org/docs/Web/CSS/line-clamp)
 - [-webkit-mask](https://developer.mozilla.org/docs/Web/CSS/mask)
 - [-webkit-mask-clip](https://developer.mozilla.org/docs/Web/CSS/mask-clip)
 - [-webkit-mask-composite](https://developer.mozilla.org/docs/Web/CSS/mask-composite)
 - [-webkit-mask-image](https://developer.mozilla.org/docs/Web/CSS/mask-image)
 - [-webkit-mask-origin](https://developer.mozilla.org/docs/Web/CSS/mask-origin)
 - [-webkit-mask-position](https://developer.mozilla.org/docs/Web/CSS/mask-position)
 - [-webkit-mask-position-x](https://developer.mozilla.org/docs/Web/CSS/mask-position-x)
 - [-webkit-mask-position-y](https://developer.mozilla.org/docs/Web/CSS/mask-position-y)
 - [-webkit-mask-repeat](https://developer.mozilla.org/docs/Web/CSS/mask-repeat)
 - [-webkit-mask-size](https://developer.mozilla.org/docs/Web/CSS/mask-size)
 - [-webkit-text-fill-color](https://developer.mozilla.org/docs/Web/CSS/text-fill-color)
 - [-webkit-text-stroke](https://developer.mozilla.org/docs/Web/CSS/text-stroke)
 - [-webkit-text-stroke-color](https://developer.mozilla.org/docs/Web/CSS/text-stroke-color)
 - [-webkit-text-stroke-width](https://developer.mozilla.org/docs/Web/CSS/text-stroke-width)
 - [-webkit-transform-style](https://developer.mozilla.org/docs/Web/CSS/transform-style)
 - [-webkit-user-select](https://developer.mozilla.org/docs/Web/CSS/user-select)
 - [align-content](https://developer.mozilla.org/docs/Web/CSS/align-content)
 - [align-items](https://developer.mozilla.org/docs/Web/CSS/align-items)
 - [align-self](https://developer.mozilla.org/docs/Web/CSS/align-self)
 - [all](https://developer.mozilla.org/docs/Web/CSS/all)
 - [animation](https://developer.mozilla.org/docs/Web/CSS/animation)
 - [animation-delay](https://developer.mozilla.org/docs/Web/CSS/animation-delay)
 - [animation-direction](https://developer.mozilla.org/docs/Web/CSS/animation-direction)
 - [animation-duration](https://developer.mozilla.org/docs/Web/CSS/animation-duration)
 - [animation-fill-mode](https://developer.mozilla.org/docs/Web/CSS/animation-fill-mode)
 - [animation-iteration-count](https://developer.mozilla.org/docs/Web/CSS/animation-iteration-count)
 - [animation-name](https://developer.mozilla.org/docs/Web/CSS/animation-name)
 - [animation-play-state](https://developer.mozilla.org/docs/Web/CSS/animation-play-state)
 - [animation-timing-function](https://developer.mozilla.org/docs/Web/CSS/animation-timing-function)
 - [background](https://developer.mozilla.org/docs/Web/CSS/background)
 - [background-attachment](https://developer.mozilla.org/docs/Web/CSS/background-attachment)
 - [background-blend-mode](https://developer.mozilla.org/docs/Web/CSS/background-blend-mode)
 - [background-clip](https://developer.mozilla.org/docs/Web/CSS/background-clip)
 - [background-color](https://developer.mozilla.org/docs/Web/CSS/background-color)
 - [background-image](https://developer.mozilla.org/docs/Web/CSS/background-image)
 - [background-origin](https://developer.mozilla.org/docs/Web/CSS/background-origin)
 - [background-position](https://developer.mozilla.org/docs/Web/CSS/background-position)
 - [background-position-x](https://developer.mozilla.org/docs/Web/CSS/background-position-x)
 - [background-position-y](https://developer.mozilla.org/docs/Web/CSS/background-position-y)
 - [background-repeat](https://developer.mozilla.org/docs/Web/CSS/background-repeat)
 - [background-size](https://developer.mozilla.org/docs/Web/CSS/background-size)
 - [block-size](https://developer.mozilla.org/docs/Web/CSS/block-size)
 - [border](https://developer.mozilla.org/docs/Web/CSS/border)
 - [border-block-end](https://developer.mozilla.org/docs/Web/CSS/border-block-end)
 - [border-block-end-color](https://developer.mozilla.org/docs/Web/CSS/border-block-end-color)
 - [border-block-end-style](https://developer.mozilla.org/docs/Web/CSS/border-block-end-style)
 - [border-block-end-width](https://developer.mozilla.org/docs/Web/CSS/border-block-end-width)
 - [border-block-start](https://developer.mozilla.org/docs/Web/CSS/border-block-start)
 - [border-block-start-color](https://developer.mozilla.org/docs/Web/CSS/border-block-start-color)
 - [border-block-start-style](https://developer.mozilla.org/docs/Web/CSS/border-block-start-style)
 - [border-block-start-width](https://developer.mozilla.org/docs/Web/CSS/border-block-start-width)
 - [border-bottom](https://developer.mozilla.org/docs/Web/CSS/border-bottom)
 - [border-bottom-color](https://developer.mozilla.org/docs/Web/CSS/border-bottom-color)
 - [border-bottom-left-radius](https://developer.mozilla.org/docs/Web/CSS/border-bottom-left-radius)
 - [border-bottom-right-radius](https://developer.mozilla.org/docs/Web/CSS/border-bottom-right-radius)
 - [border-bottom-style](https://developer.mozilla.org/docs/Web/CSS/border-bottom-style)
 - [border-bottom-width](https://developer.mozilla.org/docs/Web/CSS/border-bottom-width)
 - [border-collapse](https://developer.mozilla.org/docs/Web/CSS/border-collapse)
 - [border-color](https://developer.mozilla.org/docs/Web/CSS/border-color)
 - [border-image](https://developer.mozilla.org/docs/Web/CSS/border-image)
 - [border-image-outset](https://developer.mozilla.org/docs/Web/CSS/border-image-outset)
 - [border-image-repeat](https://developer.mozilla.org/docs/Web/CSS/border-image-repeat)
 - [border-image-slice](https://developer.mozilla.org/docs/Web/CSS/border-image-slice)
 - [border-image-source](https://developer.mozilla.org/docs/Web/CSS/border-image-source)
 - [border-image-width](https://developer.mozilla.org/docs/Web/CSS/border-image-width)
 - [border-inline-end](https://developer.mozilla.org/docs/Web/CSS/border-inline-end)
 - [border-inline-end-color](https://developer.mozilla.org/docs/Web/CSS/border-inline-end-color)
 - [border-inline-end-style](https://developer.mozilla.org/docs/Web/CSS/border-inline-end-style)
 - [border-inline-end-width](https://developer.mozilla.org/docs/Web/CSS/border-inline-end-width)
 - [border-inline-start](https://developer.mozilla.org/docs/Web/CSS/border-inline-start)
 - [border-inline-start-color](https://developer.mozilla.org/docs/Web/CSS/border-inline-start-color)
 - [border-inline-start-style](https://developer.mozilla.org/docs/Web/CSS/border-inline-start-style)
 - [border-inline-start-width](https://developer.mozilla.org/docs/Web/CSS/border-inline-start-width)
 - [border-left](https://developer.mozilla.org/docs/Web/CSS/border-left)
 - [border-left-color](https://developer.mozilla.org/docs/Web/CSS/border-left-color)
 - [border-left-style](https://developer.mozilla.org/docs/Web/CSS/border-left-style)
 - [border-left-width](https://developer.mozilla.org/docs/Web/CSS/border-left-width)
 - [border-radius](https://developer.mozilla.org/docs/Web/CSS/border-radius)
 - [border-right](https://developer.mozilla.org/docs/Web/CSS/border-right)
 - [border-right-color](https://developer.mozilla.org/docs/Web/CSS/border-right-color)
 - [border-right-style](https://developer.mozilla.org/docs/Web/CSS/border-right-style)
 - [border-right-width](https://developer.mozilla.org/docs/Web/CSS/border-right-width)
 - [border-spacing](https://developer.mozilla.org/docs/Web/CSS/border-spacing)
 - [border-style](https://developer.mozilla.org/docs/Web/CSS/border-style)
 - [border-top](https://developer.mozilla.org/docs/Web/CSS/border-top)
 - [border-top-color](https://developer.mozilla.org/docs/Web/CSS/border-top-color)
 - [border-top-left-radius](https://developer.mozilla.org/docs/Web/CSS/border-top-left-radius)
 - [border-top-right-radius](https://developer.mozilla.org/docs/Web/CSS/border-top-right-radius)
 - [border-top-style](https://developer.mozilla.org/docs/Web/CSS/border-top-style)
 - [border-top-width](https://developer.mozilla.org/docs/Web/CSS/border-top-width)
 - [border-width](https://developer.mozilla.org/docs/Web/CSS/border-width)
 - [bottom](https://developer.mozilla.org/docs/Web/CSS/bottom)
 - [box-shadow](https://developer.mozilla.org/docs/Web/CSS/box-shadow)
 - [box-sizing](https://developer.mozilla.org/docs/Web/CSS/box-sizing)
 - [break-after](https://developer.mozilla.org/docs/Web/CSS/break-after)
 - [break-before](https://developer.mozilla.org/docs/Web/CSS/break-before)
 - [break-inside](https://developer.mozilla.org/docs/Web/CSS/break-inside)
 - [caption-side](https://developer.mozilla.org/docs/Web/CSS/caption-side)
 - [caret-color](https://developer.mozilla.org/docs/Web/CSS/caret-color)
 - [clear](https://developer.mozilla.org/docs/Web/CSS/clear)
 - [clip](https://developer.mozilla.org/docs/Web/CSS/clip)
 - [clip-path](https://developer.mozilla.org/docs/Web/CSS/clip-path)
 - [clip-rule](https://developer.mozilla.org/docs/Web/SVG/Attribute/clip-rule)
 - [color](https://developer.mozilla.org/docs/Web/CSS/color)
 - [color-interpolation](https://developer.mozilla.org/docs/Web/SVG/Attribute/color-interpolation)
 - [color-interpolation-filters](https://developer.mozilla.org/docs/Web/SVG/Attribute/color-interpolation-filters)
 - [column-count](https://developer.mozilla.org/docs/Web/CSS/column-count)
 - [column-fill](https://developer.mozilla.org/docs/Web/CSS/column-fill)
 - [column-gap](https://developer.mozilla.org/docs/Web/CSS/column-gap)
 - [column-rule](https://developer.mozilla.org/docs/Web/CSS/column-rule)
 - [column-rule-color](https://developer.mozilla.org/docs/Web/CSS/column-rule-color)
 - [column-rule-style](https://developer.mozilla.org/docs/Web/CSS/column-rule-style)
 - [column-rule-width](https://developer.mozilla.org/docs/Web/CSS/column-rule-width)
 - [column-span](https://developer.mozilla.org/docs/Web/CSS/column-span)
 - [column-width](https://developer.mozilla.org/docs/Web/CSS/column-width)
 - [columns](https://developer.mozilla.org/docs/Web/CSS/columns)
 - [content](https://developer.mozilla.org/docs/Web/CSS/content)
 - [counter-increment](https://developer.mozilla.org/docs/Web/CSS/counter-increment)
 - [counter-reset](https://developer.mozilla.org/docs/Web/CSS/counter-reset)
 - [cursor](https://developer.mozilla.org/docs/Web/CSS/cursor)
 - [cx](https://developer.mozilla.org/docs/Web/SVG/Attribute/cx)
 - [cy](https://developer.mozilla.org/docs/Web/SVG/Attribute/cy)
 - [direction](https://developer.mozilla.org/docs/Web/CSS/direction)
 - [display](https://developer.mozilla.org/docs/Web/CSS/display)
 - [dominant-baseline](https://developer.mozilla.org/docs/Web/SVG/Attribute/dominant-baseline)
 - [empty-cells](https://developer.mozilla.org/docs/Web/CSS/empty-cells)
 - [fill](https://developer.mozilla.org/docs/Web/SVG/Attribute/fill)
 - [fill-opacity](https://developer.mozilla.org/docs/Web/SVG/Attribute/fill-opacity)
 - [fill-rule](https://developer.mozilla.org/docs/Web/SVG/Attribute/fill-rule)
 - [filter](https://developer.mozilla.org/docs/Web/CSS/filter)
 - [flex](https://developer.mozilla.org/docs/Web/CSS/flex)
 - [flex-basis](https://developer.mozilla.org/docs/Web/CSS/flex-basis)
 - [flex-direction](https://developer.mozilla.org/docs/Web/CSS/flex-direction)
 - [flex-flow](https://developer.mozilla.org/docs/Web/CSS/flex-flow)
 - [flex-grow](https://developer.mozilla.org/docs/Web/CSS/flex-grow)
 - [flex-shrink](https://developer.mozilla.org/docs/Web/CSS/flex-shrink)
 - [flex-wrap](https://developer.mozilla.org/docs/Web/CSS/flex-wrap)
 - [float](https://developer.mozilla.org/docs/Web/CSS/float)
 - [flood-color](https://developer.mozilla.org/docs/Web/SVG/Attribute/flood-color)
 - [flood-opacity](https://developer.mozilla.org/docs/Web/SVG/Attribute/flood-opacity)
 - [font](https://developer.mozilla.org/docs/Web/CSS/font)
 - [font-family](https://developer.mozilla.org/docs/Web/CSS/font-family)
 - [font-feature-settings](https://developer.mozilla.org/docs/Web/CSS/font-feature-settings)
 - [font-optical-sizing](https://developer.mozilla.org/docs/Web/CSS/font-optical-sizing)
 - [font-size](https://developer.mozilla.org/docs/Web/CSS/font-size)
 - [font-stretch](https://developer.mozilla.org/docs/Web/CSS/font-stretch)
 - [font-style](https://developer.mozilla.org/docs/Web/CSS/font-style)
 - [font-variant](https://developer.mozilla.org/docs/Web/CSS/font-variant)
 - [font-variant-caps](https://developer.mozilla.org/docs/Web/CSS/font-variant-caps)
 - [font-variant-east-asian](https://developer.mozilla.org/docs/Web/CSS/font-variant-east-asian)
 - [font-variant-ligatures](https://developer.mozilla.org/docs/Web/CSS/font-variant-ligatures)
 - [font-variant-numeric](https://developer.mozilla.org/docs/Web/CSS/font-variant-numeric)
 - [font-variation-settings](https://developer.mozilla.org/docs/Web/CSS/font-variation-settings)
 - [font-weight](https://developer.mozilla.org/docs/Web/CSS/font-weight)
 - [gap](https://developer.mozilla.org/docs/Web/CSS/gap)
 - [grid](https://developer.mozilla.org/docs/Web/CSS/grid)
 - [grid-area](https://developer.mozilla.org/docs/Web/CSS/grid-area)
 - [grid-auto-columns](https://developer.mozilla.org/docs/Web/CSS/grid-auto-columns)
 - [grid-auto-flow](https://developer.mozilla.org/docs/Web/CSS/grid-auto-flow)
 - [grid-auto-rows](https://developer.mozilla.org/docs/Web/CSS/grid-auto-rows)
 - [grid-column](https://developer.mozilla.org/docs/Web/CSS/grid-column)
 - [grid-column-end](https://developer.mozilla.org/docs/Web/CSS/grid-column-end)
 - [grid-column-start](https://developer.mozilla.org/docs/Web/CSS/grid-column-start)
 - [grid-row](https://developer.mozilla.org/docs/Web/CSS/grid-row)
 - [grid-row-end](https://developer.mozilla.org/docs/Web/CSS/grid-row-end)
 - [grid-row-start](https://developer.mozilla.org/docs/Web/CSS/grid-row-start)
 - [grid-template](https://developer.mozilla.org/docs/Web/CSS/grid-template)
 - [grid-template-areas](https://developer.mozilla.org/docs/Web/CSS/grid-template-areas)
 - [grid-template-columns](https://developer.mozilla.org/docs/Web/CSS/grid-template-columns)
 - [grid-template-rows](https://developer.mozilla.org/docs/Web/CSS/grid-template-rows)
 - [height](https://developer.mozilla.org/docs/Web/CSS/height)
 - [image-orientation](https://developer.mozilla.org/docs/Web/CSS/image-orientation)
 - [image-rendering](https://developer.mozilla.org/docs/Web/CSS/image-rendering)
 - [inline-size](https://developer.mozilla.org/docs/Web/CSS/inline-size)
 - [isolation](https://developer.mozilla.org/docs/Web/CSS/isolation)
 - [justify-content](https://developer.mozilla.org/docs/Web/CSS/justify-content)
 - [justify-items](https://developer.mozilla.org/docs/Web/CSS/justify-items)
 - [justify-self](https://developer.mozilla.org/docs/Web/CSS/justify-self)
 - [left](https://developer.mozilla.org/docs/Web/CSS/left)
 - [letter-spacing](https://developer.mozilla.org/docs/Web/CSS/letter-spacing)
 - [lighting-color](https://developer.mozilla.org/docs/Web/SVG/Attribute/lighting-color)
 - [line-break](https://developer.mozilla.org/docs/Web/CSS/line-break)
 - [line-height](https://developer.mozilla.org/docs/Web/CSS/line-height)
 - [list-style](https://developer.mozilla.org/docs/Web/CSS/list-style)
 - [list-style-image](https://developer.mozilla.org/docs/Web/CSS/list-style-image)
 - [list-style-position](https://developer.mozilla.org/docs/Web/CSS/list-style-position)
 - [list-style-type](https://developer.mozilla.org/docs/Web/CSS/list-style-type)
 - [margin](https://developer.mozilla.org/docs/Web/CSS/margin)
 - [margin-block-end](https://developer.mozilla.org/docs/Web/CSS/margin-block-end)
 - [margin-block-start](https://developer.mozilla.org/docs/Web/CSS/margin-block-start)
 - [margin-bottom](https://developer.mozilla.org/docs/Web/CSS/margin-bottom)
 - [margin-inline-end](https://developer.mozilla.org/docs/Web/CSS/margin-inline-end)
 - [margin-inline-start](https://developer.mozilla.org/docs/Web/CSS/margin-inline-start)
 - [margin-left](https://developer.mozilla.org/docs/Web/CSS/margin-left)
 - [margin-right](https://developer.mozilla.org/docs/Web/CSS/margin-right)
 - [margin-top](https://developer.mozilla.org/docs/Web/CSS/margin-top)
 - [marker](https://developer.mozilla.org/docs/Web/SVG/Attribute/marker)
 - [marker-end](https://developer.mozilla.org/docs/Web/SVG/Attribute/marker-end)
 - [marker-mid](https://developer.mozilla.org/docs/Web/SVG/Attribute/marker-mid)
 - [marker-start](https://developer.mozilla.org/docs/Web/SVG/Attribute/marker-start)
 - [mask](https://developer.mozilla.org/docs/Web/CSS/mask)
 - [mask-type](https://developer.mozilla.org/docs/Web/CSS/mask-type)
 - [max-block-size](https://developer.mozilla.org/docs/Web/CSS/max-block-size)
 - [max-height](https://developer.mozilla.org/docs/Web/CSS/max-height)
 - [max-inline-size](https://developer.mozilla.org/docs/Web/CSS/max-inline-size)
 - [max-width](https://developer.mozilla.org/docs/Web/CSS/max-width)
 - [min-block-size](https://developer.mozilla.org/docs/Web/CSS/min-block-size)
 - [min-height](https://developer.mozilla.org/docs/Web/CSS/min-height)
 - [min-inline-size](https://developer.mozilla.org/docs/Web/CSS/min-inline-size)
 - [min-width](https://developer.mozilla.org/docs/Web/CSS/min-width)
 - [mix-blend-mode](https://developer.mozilla.org/docs/Web/CSS/mix-blend-mode)
 - [object-fit](https://developer.mozilla.org/docs/Web/CSS/object-fit)
 - [object-position](https://developer.mozilla.org/docs/Web/CSS/object-position)
 - [opacity](https://developer.mozilla.org/docs/Web/CSS/opacity)
 - [order](https://developer.mozilla.org/docs/Web/CSS/order)
 - [outline](https://developer.mozilla.org/docs/Web/CSS/outline)
 - [outline-color](https://developer.mozilla.org/docs/Web/CSS/outline-color)
 - [outline-offset](https://developer.mozilla.org/docs/Web/CSS/outline-offset)
 - [outline-style](https://developer.mozilla.org/docs/Web/CSS/outline-style)
 - [outline-width](https://developer.mozilla.org/docs/Web/CSS/outline-width)
 - [overflow](https://developer.mozilla.org/docs/Web/CSS/overflow)
 - [overflow-wrap](https://developer.mozilla.org/docs/Web/CSS/overflow-wrap)
 - [overflow-x](https://developer.mozilla.org/docs/Web/CSS/overflow-x)
 - [overflow-y](https://developer.mozilla.org/docs/Web/CSS/overflow-y)
 - [padding](https://developer.mozilla.org/docs/Web/CSS/padding)
 - [padding-block-end](https://developer.mozilla.org/docs/Web/CSS/padding-block-end)
 - [padding-block-start](https://developer.mozilla.org/docs/Web/CSS/padding-block-start)
 - [padding-bottom](https://developer.mozilla.org/docs/Web/CSS/padding-bottom)
 - [padding-inline-end](https://developer.mozilla.org/docs/Web/CSS/padding-inline-end)
 - [padding-inline-start](https://developer.mozilla.org/docs/Web/CSS/padding-inline-start)
 - [padding-left](https://developer.mozilla.org/docs/Web/CSS/padding-left)
 - [padding-right](https://developer.mozilla.org/docs/Web/CSS/padding-right)
 - [padding-top](https://developer.mozilla.org/docs/Web/CSS/padding-top)
 - [page-break-after](https://developer.mozilla.org/docs/Web/CSS/page-break-after)
 - [page-break-before](https://developer.mozilla.org/docs/Web/CSS/page-break-before)
 - [page-break-inside](https://developer.mozilla.org/docs/Web/CSS/page-break-inside)
 - [paint-order](https://developer.mozilla.org/docs/Web/CSS/paint-order)
 - [perspective](https://developer.mozilla.org/docs/Web/CSS/perspective)
 - [perspective-origin](https://developer.mozilla.org/docs/Web/CSS/perspective-origin)
 - [place-content](https://developer.mozilla.org/docs/Web/CSS/place-content)
 - [place-items](https://developer.mozilla.org/docs/Web/CSS/place-items)
 - [place-self](https://developer.mozilla.org/docs/Web/CSS/place-self)
 - [pointer-events](https://developer.mozilla.org/docs/Web/CSS/pointer-events)
 - [position](https://developer.mozilla.org/docs/Web/CSS/position)
 - [quotes](https://developer.mozilla.org/docs/Web/CSS/quotes)
 - [r](https://developer.mozilla.org/docs/Web/SVG/Attribute/r)
 - [resize](https://developer.mozilla.org/docs/Web/CSS/resize)
 - [right](https://developer.mozilla.org/docs/Web/CSS/right)
 - [row-gap](https://developer.mozilla.org/docs/Web/CSS/row-gap)
 - [rx](https://developer.mozilla.org/docs/Web/SVG/Attribute/rx)
 - [ry](https://developer.mozilla.org/docs/Web/SVG/Attribute/ry)
 - [scroll-behavior](https://developer.mozilla.org/docs/Web/CSS/scroll-behavior)
 - [shape-image-threshold](https://developer.mozilla.org/docs/Web/CSS/shape-image-threshold)
 - [shape-margin](https://developer.mozilla.org/docs/Web/CSS/shape-margin)
 - [shape-outside](https://developer.mozilla.org/docs/Web/CSS/shape-outside)
 - [shape-rendering](https://developer.mozilla.org/docs/Web/SVG/Attribute/shape-rendering)
 - [stop-color](https://developer.mozilla.org/docs/Web/SVG/Attribute/stop-color)
 - [stop-opacity](https://developer.mozilla.org/docs/Web/SVG/Attribute/stop-opacity)
 - [stroke](https://developer.mozilla.org/docs/Web/SVG/Attribute/stroke)
 - [stroke-dasharray](https://developer.mozilla.org/docs/Web/SVG/Attribute/stroke-dasharray)
 - [stroke-dashoffset](https://developer.mozilla.org/docs/Web/SVG/Attribute/stroke-dashoffset)
 - [stroke-linecap](https://developer.mozilla.org/docs/Web/SVG/Attribute/stroke-linecap)
 - [stroke-linejoin](https://developer.mozilla.org/docs/Web/SVG/Attribute/stroke-linejoin)
 - [stroke-miterlimit](https://developer.mozilla.org/docs/Web/SVG/Attribute/stroke-miterlimit)
 - [stroke-opacity](https://developer.mozilla.org/docs/Web/SVG/Attribute/stroke-opacity)
 - [stroke-width](https://developer.mozilla.org/docs/Web/SVG/Attribute/stroke-width)
 - [table-layout](https://developer.mozilla.org/docs/Web/CSS/table-layout)
 - [text-align](https://developer.mozilla.org/docs/Web/CSS/text-align)
 - [text-anchor](https://developer.mozilla.org/docs/Web/SVG/Attribute/text-anchor)
 - [text-decoration](https://developer.mozilla.org/docs/Web/CSS/text-decoration)
 - [text-decoration-color](https://developer.mozilla.org/docs/Web/CSS/text-decoration-color)
 - [text-decoration-line](https://developer.mozilla.org/docs/Web/CSS/text-decoration-line)
 - [text-decoration-style](https://developer.mozilla.org/docs/Web/CSS/text-decoration-style)
 - [text-indent](https://developer.mozilla.org/docs/Web/CSS/text-indent)
 - [text-overflow](https://developer.mozilla.org/docs/Web/CSS/text-overflow)
 - [text-rendering](https://developer.mozilla.org/docs/Web/CSS/text-rendering)
 - [text-shadow](https://developer.mozilla.org/docs/Web/CSS/text-shadow)
 - [text-transform](https://developer.mozilla.org/docs/Web/CSS/text-transform)
 - [top](https://developer.mozilla.org/docs/Web/CSS/top)
 - [touch-action](https://developer.mozilla.org/docs/Web/CSS/touch-action)
 - [transform](https://developer.mozilla.org/docs/Web/CSS/transform)
 - [transform-box](https://developer.mozilla.org/docs/Web/CSS/transform-box)
 - [transform-origin](https://developer.mozilla.org/docs/Web/CSS/transform-origin)
 - [transform-style](https://developer.mozilla.org/docs/Web/CSS/transform-style)
 - [transition](https://developer.mozilla.org/docs/Web/CSS/transition)
 - [transition-delay](https://developer.mozilla.org/docs/Web/CSS/transition-delay)
 - [transition-duration](https://developer.mozilla.org/docs/Web/CSS/transition-duration)
 - [transition-property](https://developer.mozilla.org/docs/Web/CSS/transition-property)
 - [transition-timing-function](https://developer.mozilla.org/docs/Web/CSS/transition-timing-function)
 - [unicode-bidi](https://developer.mozilla.org/docs/Web/CSS/unicode-bidi)
 - [vector-effect](https://developer.mozilla.org/docs/Web/SVG/Attribute/vector-effect)
 - [vertical-align](https://developer.mozilla.org/docs/Web/CSS/vertical-align)
 - [visibility](https://developer.mozilla.org/docs/Web/CSS/visibility)
 - [white-space](https://developer.mozilla.org/docs/Web/CSS/white-space)
 - [width](https://developer.mozilla.org/docs/Web/CSS/width)
 - [will-change](https://developer.mozilla.org/docs/Web/CSS/will-change)
 - [word-break](https://developer.mozilla.org/docs/Web/CSS/word-break)
 - [word-spacing](https://developer.mozilla.org/docs/Web/CSS/word-spacing)
 - [word-wrap](https://developer.mozilla.org/docs/Web/CSS/word-wrap)
 - [writing-mode](https://developer.mozilla.org/docs/Web/CSS/writing-mode)
 - [x](https://developer.mozilla.org/docs/Web/SVG/Attribute/x)
 - [y](https://developer.mozilla.org/docs/Web/SVG/Attribute/y)
 - [z-index](https://developer.mozilla.org/docs/Web/CSS/z-index)