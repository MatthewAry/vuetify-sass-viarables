# sass-variables

## This is to demonstrate that adjusting the slider height on tabs is not possible

[Per this issue](https://github.com/vuetifyjs/vuetify/issues/7683) the dev team has informed us that to adjust the
slider tab height, we should use the available sass variable `$tabs-slider-height` to set the height. Yet the rendered
HTML for this component is something like this:
```
<div class="v-tabs-slider-wrapper" style="height: 2px; left: 885px; width: 214px;">
   <div class="v-tabs-slider primary"></div>
</div>
```

Because the div with the `v-tabs-slider` class is wrapped by a parent div that has a height of 2px applied
via the style property, the slider height gets clipped and this effort becomes ineffective.
