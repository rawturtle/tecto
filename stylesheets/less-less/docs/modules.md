# Modules

The modules folder contains a variety of less files which are used to describe certian `less.less` functions.

Each less function can be used within an [Element](elements.md) or [Helper](helpers.md) script (or any other less script) to simplify styling.

For example:

```less
.size(@width, @height);
```

This function takes a paramater `@width` which can be any valid css `width` value and a `@height` paramater which can be any valid css `height` value.

----

## Usage

We can execute a function from within an [Element](elements.md) or [Helper](helpers.md) like so:

```less
.card {
  .size(300px, 200px);
}
```

Our function outputs the following CSS:

```less
.card {
  width: 300px;
  height: 200px;
}
```