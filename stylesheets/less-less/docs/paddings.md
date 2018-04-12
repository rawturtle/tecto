# Paddings

Paddings are used to create spacing within an element in the DOM.

The base size of the padding is defined by `@padding-base` as used in `.pd:1`

Each padding is twice as big as the previous, for example:
  - `.pd:3` = `2em` 
  - `.pd:4` = `4em`

When no tags are added to mobile, each size is out by a factor of one, for example:
  - Destop and Tablet
    - `.pd:3` = `2em` 
    - `.pd:4` = `4em`
 - Mobile
    - `.pd:3` = `1em` 
    - `.pd:4` = `2em`

----

## Usage  

```css
.pd:[number]
``` 
- Add padding to the element
  - number: `0` to `6`

```css
.pd:[side]:[number]
``` 
- Add padding to specified side of the element
  - side: `left`, `right`, `top`, `bottom`
  - number: `0` to `6`


##### Tablet Devices (Styles only apply screen sizes below the `@breakpoint-tablet`) #####
```css
.tb:pd:[number]
``` 
- Add padding to the element
  - number: `0` to `6`

```css
.tb:pd:[side]:[number]
``` 
- Add padding to specified side of the element
  - side: `left`, `right`, `top`, `bottom`
  - number: `0` to `6`

##### Mobile Devices (Styles only apply screen sizes below the `@breakpoint-mobile`) #####
```css
.mb:pd:[number]
``` 
- Add padding to the element
  - number: `0` to `6`

```css
.mb:pd:[side]:[number]
``` 
- Add padding to specified side of the element
  - side: `left`, `right`, `top`, `bottom`
  - number: `0` to `6`

