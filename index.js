/**
 *
 * @package set-apart.co.za
 * @version 1.0.191221.2347
 * @author Ian Neal Higginson
 *
 * @copyright iannhigginson 2022
 * @license MIT
 * @summary set-apart.co.za
 *
 * @date 19/12/2021
 *
 */

/**
 *~ This is white
 *!! red.
 *! orange.
 *# yellow.
 *$ blue.
 *% green.
 *^ red [Bold].
 *& orange [Bold].
 ** yellow [Bold].
 *? blue [Bold].
 *. green [Bold].
 *0 Black.
 */

//~ White
//!! red
//! orange
//# yellow
//$ blue
//% green
//^ red [Bold].
//& orange [Bold].
//* yellow [Bold].
//? blue  [Bold].
//. green  [Bold].
//0 Black

/**
 *# This is very cool.
 ** I like, I like!!
 *0 This should be black, bold and italic.
 *~ And this should be white bold and italic.
 */

var a = 1;
var b = 2;
var c = 3;

const o = {
 a: a,
 b: b,
 c: c,
};

console.table(o);
console.log(o.a);
console.log(o.b + c);
console.log(o.b + o.c + c);

console.info(`abc((o.a + c), (o.c + a), (o.b + b))`);
function abc(x, y, z) {
 this.x = x;
 this.y = y;
 this.z = z;
 console.info(`x => ${this.x}, y => ${this.y}, z => ${this.z}`);
}
abc(o.a + c, o.c + a, o.b + b);
