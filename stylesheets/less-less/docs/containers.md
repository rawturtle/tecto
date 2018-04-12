# Containers

Containers emulate a grid like system for easy laying out of elements within the DOM.

----
## Usage ##

### Container Layouts ###

```css
.ct:hori
``` 
- Create a container whose elements flow from left to right (rows)

```css
.ct:vert
``` 
- Create a container whose elements flow from top to bottom (cols)

##### Tablet Devices (Styles only apply screen sizes below the `@breakpoint-tablet`) #####

```css
.tb:ct:hori
```` 
- Create a container whose elements flow from left to right

```css
.tb:ct:vert
```
- Create a container whose elements flow from top to bottom

##### Mobile Devices (Styles only apply screen sizes below `@breakpoint-mobile`) #####

```css
.mb:ct:hori
``` 
- Create a container whose elements flow from left to right

```css
.mb:ct:vert
``` 
- Create a container whose elements flow from top to bottom

----

### Container Sizing ###

```css
.cs:auto
```
- Automatically set the size of the container

```css
.cs:content
```
- Set the maximum width of the container to `@container-content-width`


```css
.cs:gutter
```
- Set the width and height of the container to `@container-gutter`

```css
.cs:fwh
```
- Set the container width and height to be 100% of the parent element

```css
.cs:fw
```
- Set the container width to be 100% of the parent element

```css
.cs:fh
```
- Set the container width to be 100% of the parent element

```css
.cs:[fraction]
```
- Set the container size to be a fraction size of it's parent
  - fraction: `1/2` to `7/8` (zero decimal places allowed)

##### Tablet Devices (Styles only apply screen sizes below the `@breakpoint-tablet`) #####

```css
.tb:cs:fwh
```
- Set the container width and height to be 100% of the parent element

```css
.tb:cs:fw
```
- Set the container width to be 100% of the parent element

```css
.tb:cs:fh
```
- Set the container width to be 100% of the parent element

```css
.tb:cs:[fraction]
```
- Set the container size to be a fraction size of it's parent
  - fraction: `1/2` to `7/8` (zero decimal places allowed)

##### Mobile Devices (Styles only apply screen sizes below the `@breakpoint-mobile`) #####

```css
.mb:cs:fwh
```
- Set the container width and height to be 100% of the parent element

```css
.mb:cs:fw
```
- Set the container width to be 100% of the parent element

```css
.mb:cs:fh
```
- Set the container width to be 100% of the parent element

```css
.mb:cs:[fraction]
```
- Set the container size to be a fraction size of it's parent
  - fraction: `1/2` to `7/8` (zero decimal places allowed)

----

### Container Positioning ###

```css
.cp:absolute
```
 - Set a container to be absolutely positioned

```css
.cp:fixed
``` 
- Set a container to be fixed positioned

```css
.ci:[number]
```
- Sets the z-index of a container 
  - number: `-5` to `5`

----

### Container Alignments ###

Containers will by default align their contents to the center veritcally and horizontally.

```css
.ca:left
```
- Align the container contents to the left horizontally and center vertically

```css
.ca:right
``` 
- Align the container contents to the right horizontally and center vertically

```css
.ca:top
``` 
- Align the container contents to the center horizontally and top vertically

```css
.ca:bottom
``` 
- Align the container contents to the center horizontally and bottom vertically

```css
.ca:top-left
``` 
- Align the container contents to the left horizontally and top vertically

```css
.ca:top-right
``` 
- Align the container contents to the right horizontally and top vertically

```css
.ca:bottom-left
``` 
- Align the container contents to the left horizontally and top vertically

```css
.ca:bottom-right
``` 
- Align the container contents to the right horizontally and bottom vertically

----

### Miscellaneous ###

```css
.cd:reverse
```
- Reverse the direction (flow) of the container contents

```css
.cw:wrap
```
- Wrap the container contents

```css
.cw:none
```
- Prevent the container contents from wrapping

```css
.cv:hide
```
- Hide the container

##### Tablet Devices (Styles only apply screen sizes below the `@breakpoint-tablet`) #####

```css
.tb:cd:reverse
```
- Reverse the direction (flow) of the container contents

```css
.tb:cw:wrap
```
- Wrap the container contents

```css
.tb:cw:none
```
- Prevent the container contents from wrapping

```css
.tb:cv:show
```
- Show the container

```css
.tb:cv:hide
```
- Hide the container

##### Mobile Devices (Styles only apply screen sizes below the `@breakpoint-mobile`) #####

```css
.mb:cd:reverse
```
- Reverse the direction (flow) of the container contents

```css
.mb:cw:wrap
```
- Wrap the container contents

```css
.mb:cw:none
```
- Prevent the container contents from wrapping

```css
.mb:cv:show
```
- Show the container

```css
.mb:cv:hide
```
- Hide the container

----

### Container Examples ###

Example One:

1. Create a container whose children flow from top to bottom.
```html
<section class="ct:vert">
</section>
```

2. Create two equal sized child containers.
```html
<section class="ct:vert">
  <section class="ct:vert cs:1/2">
  </section>
  <section class="ct:vert cs:1/2">
  </section>
</section>
```

3. Align the children to the top of the container vertically.
```html
<section class="ct:vert ca:top">
  <section class="ct:vert cs:1/2">
    <h1>Top 50% Section</h1>
  </section>
  <section class="ct:vert cs:1/2">
    <h1>Bottom 50% Section</h1>
  </section>
</section>
```

4. Reverse the direction of the contents when in mobile.
```html
<section class="ct:vert ca:top mb:cd:reverse">
  <section class="ct:vert cs:1/2">
    <h1>Top Desktop & Tablet | Bottom Mobile</h1>
  </section>
  <section class="ct:vert cs:1/2">
    <h1>Bottom Desktop & Tablet | Top Mobile</h1>
  </section>
</section>
```

Example Two:

1. Create a fixed container whose children flow from left to right.
```html
<section class="ct:hori cp:fixed">
</section>
```

2. Create three child containers.
```html
<section class="ct:hori cp:fixed">
  <section class="ct:vert">
  </section>
  <section class="ct:vert">
  </section>
  <section class="ct:vert">
  </section>
</section>
```

3. Size the first child (left) to fill one eighth of the parent container.
```html
<section class="ct:hori cp:fixed">
  <section class="ct:vert cs:1/8">
  </section>
  <section class="ct:vert">
  </section>
  <section class="ct:vert">
  </section>
</section>
```

4. Size the second child (center) to fill six eighths of the parent container.
```html
<section class="ct:hori cp:fixed">
  <section class="ct:vert cs:1/8">
  </section>
  <section class="ct:vert cs:6/8">
  </section>
  <section class="ct:vert">
  </section>
</section>
```

5. Size the third child (right) to fill one eighth of the parent container. 
```html
<section class="ct:hori cp:fixed">
  <section class="ct:vert cs:1/8">
    <h1>one eighth</h1>
  </section>
  <section class="ct:vert cs:6/8">
    <h1>six eighths</h1>
  </section>
  <section class="ct:vert cs:1/8">
    <h1>one eighth</h1>
  </section>
</section>
``` 

6. Hide the first and third child in tablet & mobile view
```html
<section class="ct:hori cp:fixed">
  <section class="ct:vert cs:1/8 tb:cv:hide">
    <h1>one eighth</h1>
    <h2>hidden in tablet & mobile</h2>
  </section>
  <section class="ct:vert cs:6/8">
    <h1>six eighths</h1>
    <h2>100% in tablet & mobile</h2>
  </section>
  <section class="ct:vert cs:1/8 tb:cv:hide">
    <h1>one eighth</h1>
    <h2>hidden in tablet & mobile</h2>
  </section>
</section>
``` 