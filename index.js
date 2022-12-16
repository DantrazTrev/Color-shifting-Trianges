// Import stylesheets
import './style.css';

import { VERTEX_SHADER, FRAGMENT_SHADER } from './shaders.js';

function createShader(gl, type, source) {
  var shader = gl.createShader(type);
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  var success = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
  if (success) {
    return shader;
  }

  console.log(gl.getShaderInfoLog(shader));
  gl.deleteShader(shader);
}
// Write Javascript code!
const main = () => {
  const canvas = document.getElementById('webgl', { antialias: true });
  let gl = canvas.getContext('webgl');

  var vertexShader = createShader(gl, gl.VERTEX_SHADER, VERTEX_SHADER);
  var fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, FRAGMENT_SHADER);
  const program = gl.createProgram();

  gl.attachShader(program, vertexShader);
  gl.attachShader(program, fragmentShader);
  gl.linkProgram(program);

  var position = gl.getAttribLocation(program, 'position');
  var color = gl.getAttribLocation(program, 'color');

  gl.enableVertexAttribArray(position);
  gl.enableVertexAttribArray(color);

  var buffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);

  var buffer = [
    1,
    1, //1
    0,
    0, //2
    0,
    1, //3
    1,
    1,
    1,
    0,
    1,
    1,
    1,
    0,
    1,
  ];

  gl.useProgram(program);

  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(buffer), gl.STATIC_DRAW);

  gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);
  // gl.vertexAttribPointer(color, 3, gl.FLOAT, false, 0, 2 * 4 * 3);
  gl.vertexAttribPointer(color, 3, gl.FLOAT, false, 0, 0);

  gl.clearColor(0, 0, 0, 0);
  gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);

  gl.drawArrays(gl.TRIANGLES, 0, 3);
};

main();
