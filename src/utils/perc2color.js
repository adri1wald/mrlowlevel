
// export default perc => {
// 	let r, g, b = 0;
// 	if(perc < 50) {
// 		r = 255;
// 		g = Math.round(5.1 * perc);
// 	}
// 	else {
// 		g = 255;
// 		r = Math.round(510 - 5.10 * perc);
// 	}
// 	let h = r * 0x10000 + g * 0x100 + b * 0x1;
// 	return '#' + ('000000' + h.toString(16)).slice(-6);
// }

export default function pickHex(color1, color2, weight) {
  var p = weight;
  var w = p * 2 - 1;
  var w1 = (w/1+1) / 2;
  var w2 = 1 - w1;
  var rgb = [Math.round(color1[0] * w1 + color2[0] * w2),
      Math.round(color1[1] * w1 + color2[1] * w2),
      Math.round(color1[2] * w1 + color2[2] * w2)];
  return rgb;
}