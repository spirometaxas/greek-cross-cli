# greek-cross-cli
Print the Greek Cross Fractal to the console!

![What greek-cross-cli prints to the console](https://raw.githubusercontent.com/spirometaxas/greek-cross-cli/main/img/greek-cross-banner.png)

[![npm version](https://img.shields.io/npm/v/greek-cross-cli)](https://www.npmjs.com/package/greek-cross-cli)
[![bundle size](https://img.shields.io/bundlephobia/min/greek-cross-cli)](https://bundlephobia.com/package/greek-cross-cli)
[![downloads](https://img.shields.io/npm/dy/greek-cross-cli)](https://www.npmjs.com/package/greek-cross-cli)
[![license](https://img.shields.io/npm/l/greek-cross-cli)](https://github.com/spirometaxas/greek-cross-cli/blob/main/LICENSE)

Why the console?  Because it's the *cool* way.  

[See All Fractals](https://spirometaxas.com/projects/fractals-cli) in the [fractals-cli](https://www.npmjs.com/package/fractals-cli) project.

## Usage
### Via `npx`:
```
$ npx greek-cross-cli <n>
$ npx greek-cross-cli <n> [size] [options]
```
where `n >= 0` and `size >= n` (if provided).

### Via Global Install
```
$ npm install --global greek-cross-cli
$ greek-cross-cli <n>
$ greek-cross-cli <n> [size] [options]
```
where `n >= 0` and `size >= n` (if provided).

### Via Import
```
$ npm install greek-cross-cli
```
then:
```
const greek_cross = require('greek-cross-cli');
console.log(greek_cross.create(<n>);
console.log(greek_cross.create(<n>, { 
    size: <number>, 
    line: <bold|double|standard> 
});
```
The config params are optional. 

## Options
### Recursive Step  
```
$ greek-cross-cli <n>
```
The first param `<n>` is the recursive step.  `<n>` should be an integer greater than or equal to 0.

#### Examples:
```
$ greek-cross-cli 3
```
![What greek-cross-cli prints to the console](https://raw.githubusercontent.com/spirometaxas/greek-cross-cli/main/img/greek-cross-3.png)

```
$ greek-cross-cli 4
```
![What greek-cross-cli prints to the console](https://raw.githubusercontent.com/spirometaxas/greek-cross-cli/main/img/greek-cross-4.png)

### Size
```
$ greek-cross-cli <n> [size]
```
The optional `[size]` param allows the Greek Cross fractal to be drawn at larger sizes.  `[size]` should be an integer greater than or equal to `<n>`.  Including size will draw a Greek Cross fractal of `<n>` recursive steps the size of a Greek Cross fractal with `[size]` recursive steps.  

#### Example:
```
$ greek-cross-cli 2 4
```
![What greek-cross-cli prints to the console](https://raw.githubusercontent.com/spirometaxas/greek-cross-cli/main/img/greek-cross-2-4.png)

### Line Type
```
$ greek-cross-cli <n> --line=<bold|double|standard>
```
The optional `--line` param draws the Greek Cross fractal using different line types.  Supported values:

- `bold`: Draw using bold lines
- `double`: Draw using double lines
- `standard`: Draw using standard lines (default)

#### Examples:
```
$ greek-cross-cli 4 --line=bold
```
![What greek-cross-cli prints to the console](https://raw.githubusercontent.com/spirometaxas/greek-cross-cli/main/img/greek-cross-4-line_bold.png)

```
$ greek-cross-cli 4 --line=double
```
![What greek-cross-cli prints to the console](https://raw.githubusercontent.com/spirometaxas/greek-cross-cli/main/img/greek-cross-4-line_double.png)

## Related

#### Main Project
- [fractals-cli](https://www.npmjs.com/package/fractals-cli) - Print 22 Fractals to the console

#### Fractal Shapes
- [sierpinski-triangle-cli](https://www.npmjs.com/package/sierpinski-triangle-cli) - Print the Sierpinski Triangle to the console
- [sierpinski-carpet-cli](https://www.npmjs.com/package/sierpinski-carpet-cli) - Print the Sierpinski Carpet to the console
- [sierpinski-hexagon-cli](https://www.npmjs.com/package/sierpinski-hexagon-cli) - Print the Sierpinski Hexagon to the console
- [hexaflake-cli](https://www.npmjs.com/package/hexaflake-cli) - Print the Hexaflake Fractal to the console
- [koch-snowflake-cli](https://www.npmjs.com/package/koch-snowflake-cli) - Print the Koch Snowflake to the console
- [koch-antisnowflake-cli](https://www.npmjs.com/package/koch-antisnowflake-cli) - Print the Koch Anti-Snowflake to the console
- [triflake-cli](https://www.npmjs.com/package/triflake-cli) - Print the Triflake Fractal to the console

#### Fractal Patterns
- [cantor-set-cli](https://www.npmjs.com/package/cantor-set-cli) - Print the Cantor Set to the console
- [cantor-dust-cli](https://www.npmjs.com/package/cantor-dust-cli) - Print the Cantor Dust Fractal to the console
- [h-tree-cli](https://www.npmjs.com/package/h-tree-cli) - Print the H-Tree Fractal to the console
- [minkowski-sausage-cli](https://www.npmjs.com/package/minkowski-sausage-cli) - Print the Minkowski Sausage to the console
- [t-square-cli](https://www.npmjs.com/package/t-square-cli) - Print the T-Square Fractal to the console
- [vicsek-fractal-cli](https://www.npmjs.com/package/vicsek-fractal-cli) - Print the Vicsek Fractal to the console
- [v-tree-cli](https://www.npmjs.com/package/v-tree-cli) - Print the V-Tree Fractal to the console

#### Space Filling Curves
- [dragon-curve-cli](https://www.npmjs.com/package/dragon-curve-cli) - Print the Dragon Curve to the console
- [hilbert-curve-cli](https://www.npmjs.com/package/hilbert-curve-cli) - Print the Hilbert Curve to the console
- [moore-curve-cli](https://www.npmjs.com/package/moore-curve-cli) - Print the Moore Curve to the console
- [peano-curve-cli](https://www.npmjs.com/package/peano-curve-cli) - Print the Peano Curve to the console
- [gosper-curve-cli](https://www.npmjs.com/package/gosper-curve-cli) - Print the Gosper Curve to the console
- [sierpinski-arrowhead-cli](https://www.npmjs.com/package/sierpinski-arrowhead-cli) - Print the Sierpinski Arrowhead Curve to the console
- [sierpinski-curve-cli](https://www.npmjs.com/package/sierpinski-curve-cli) - Print the Sierpinski "Square" Curve to the console

## License
- [MIT](https://github.com/spirometaxas/greek-cross-cli/blob/main/LICENSE) &copy; [Spiro Metaxas](https://spirometaxas.com)