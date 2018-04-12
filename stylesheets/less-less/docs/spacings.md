# Spacings

Spacings are used to create spacing between an element in the DOM.

The base size of the padding is defined by `@spacing-base` as used in `.sp:1`

Each spacing is twice as big as the previous, for example:
  - `.sp:3` = `2em` 
  - `.sp:4` = `4em`

When no tags are added to mobile, each size is out by a factor of one, for example:
  - Destop and Tablet
    - `.sp:3` = `2em` 
    - `.sp:4` = `4em`
  - Mobile
    - `.sp:3` = `1em` 
    - `.sp:4` = `2em`

----

## Usage

```css
.sp:[number]
``` 
- Add a margin to the element
  - number: `0` to `6`

```css
.sp:[side]:[number]
``` 
- Add a margin to the specified side of the element
  - side: `left`, `right`, `top`, `bottom`
  - number: `0` to `6`

##### Tablet Devices (Styles only apply screen sizes below the `@breakpoint-tablet`) #####
```css
.tb:sp:[number]
``` 
- Add spacing to the element
  - number: `0` to `6`

```css
.tb:sp:[side]:[number]
``` 
- Add spacing to specified side of the element
  - side: `left`, `right`, `top`, `bottom`
  - number: `0` to `6`

##### Mobile Devices (Styles only apply screen sizes below the `@breakpoint-mobile`) #####
```css
.mb:sp:[number]
``` 
- Add spacing to the element
  - number: `0` to `6`

```css
.mb:sp:[side]:[number]
``` 
- Add spacing to specified side of the element
  - side: `left`, `right`, `top`, `bottom`
  - number: `0` to `6`  