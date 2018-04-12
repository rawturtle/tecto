# Elements

Elements are used to specifically style HTML elements such as `button`, `input`, `a`.

We can use functions from [Modules](modules.md) to simplify the styling of elements

For example:

```less
.red-block {
  .position(absolute);
  .size(10px, 20px);
  .background-color(red);
}
```

The above code will create a class `red-block` which is absolutely positioned, has a width of 10px and a height of 20px.

Using the `position`, `size` and `background-color` functions simplifies the process.