export const VERTEX_SHADER = `
attribute vec4 position;
attribute vec3 color; 
varying vec3 vColor;
void main () {
  gl_Position= position;
  vColor = color;
 }
`;
export const FRAGMENT_SHADER = `
precision mediump float;
varying vec3 vColor;
void main() {
  gl_FragColor = vec4(vColor,1);
}
`;
