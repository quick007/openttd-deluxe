import { useEffect, useRef, useState } from "react";

export default function Game() {
	const canvas = useRef<HTMLCanvasElement>(null);
	const [fps, setFPS] = useState(0)

	const createShader = (
		gl: WebGL2RenderingContext,
		type: GLenum,
		source: string,
	) => {
		const shader = gl.createShader(type);

		gl.shaderSource(shader, source);
		gl.compileShader(shader);

		const success = gl.getShaderParameter(shader, gl.COMPILE_STATUS);

		if (success) {
			return shader;
		}

		console.log(gl.getShaderInfoLog(shader));
		gl.deleteShader(shader);
	};

	const createProgram = (
		gl: WebGL2RenderingContext,
		vertexShader: WebGLShader,
		fragmentShader: WebGLShader,
	) => {
		const program = gl.createProgram();

		gl.attachShader(program, vertexShader);
		gl.attachShader(program, fragmentShader);
		gl.linkProgram(program);

		const success = gl.getProgramParameter(program, gl.LINK_STATUS);

		if (success) {
			return program;
		}

		console.log(gl.getProgramInfoLog(program));
		gl.deleteProgram(program);
	};

	function resizeCanvasToDisplaySize(canvas: HTMLCanvasElement) {
		// Set the display size directly instead of using the Map
		const displayWidth = window.innerWidth;
		const displayHeight = window.innerHeight;

		// Check if the canvas is not the same size.
		const needResize =
			canvas.width !== displayWidth || canvas.height !== displayHeight;

		if (needResize) {
			// Make the canvas the same size
			canvas.width = displayWidth;
			canvas.height = displayHeight;
		}
	}

	useEffect(() => {
		if (canvas && canvas.current) {
			const gl = canvas.current.getContext("webgl2");

			// gl.clearColor(0.9, 0.9, 1, 1);
			// gl.clear(gl.COLOR_BUFFER_BIT);

			const vsSource = `#version 300 es
			
			in vec4 aPosition;

			void main() {
				gl_Position = aPosition;
			}
			`;

			const fragmentSource = `#version 300 es
			
			precision highp float;
			out vec4 outColor;

			void main() {
				outColor = vec4(1, 0, 0.5, 1);
			}
			`;
			const vsShader = createShader(gl, gl.VERTEX_SHADER, vsSource);
			const fragmentShader = createShader(
				gl,
				gl.FRAGMENT_SHADER,
				fragmentSource,
			);

			const program = createProgram(gl, vsShader, fragmentShader);
			const positionAttributeLocation = gl.getAttribLocation(
				program,
				"aPosition",
			);
			const positionBuffer = gl.createBuffer();

			gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
			const positions = [0, 0, 0, 0.5, 0.7, 0];

			gl.bufferData(
				gl.ARRAY_BUFFER,
				new Float32Array(positions),
				gl.STATIC_DRAW,
			);
			const vao = gl.createVertexArray();
			gl.bindVertexArray(vao);
			gl.enableVertexAttribArray(positionAttributeLocation);

			gl.vertexAttribPointer(
				positionAttributeLocation,
				2, // 2 components per iteration
				gl.FLOAT, // the data is 32bit floats
				false, // don't normalize the data
				0, // 0 = move forward size * sizeof(type) each iteration to get the next position
				0, // start at the beginning of the buffer
			);

			let time = performance.now();
			let currFps = 0;
			let newFps = 0;

			requestAnimationFrame(draw);

			function draw() {
				const t = (performance.now() - time)
				if (t >= 1000) {
					time = performance.now();
					// console.log("fps", currFps * 1);
					// console.log(performance.now(), t)
					// normalize fps number as sometimes it's a bit off and take out decimals
					setFPS(Number((currFps * (t / 1000)).toFixed(0)))
					currFps = newFps;
					newFps = 0;
				}

				newFps += 1;

				resizeCanvasToDisplaySize(canvas.current as HTMLCanvasElement);
				gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);

				// Clear the canvas
				gl.clearColor(0.9, 0.9, 1, 1);
				gl.clear(gl.COLOR_BUFFER_BIT);

				gl.useProgram(program);
				gl.bindVertexArray(vao);

				const primitiveType = gl.TRIANGLES;
				const offset = 0;
				const count = 3;
				gl.drawArrays(primitiveType, offset, count);

				requestAnimationFrame(draw);
			}
		}
	}, []);

	return (
		<div className="relative">
			<canvas className="h-screen w-screen" ref={canvas}></canvas>
			<p className="text-black right-2 bottom-2 absolute text-sm font-bold">
				FPS: {fps}
			</p>
		</div>
	);
}
