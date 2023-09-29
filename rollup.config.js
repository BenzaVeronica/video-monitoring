import resolve,{ nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import postcss from "rollup-plugin-postcss";
import babel from '@rollup/plugin-babel';


const packageJson = require("./package.json");

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      nodeResolve({
        extensions: [".js",".jsx"],
	  }),
	  babel({
		presets: ["@babel/preset-react"],
	  }),
      resolve(),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json" }),
      postcss(),
	//   typescript({
    //     tsconfig: './tsconfig.json',
    //     declaration: true,
    //     declarationDir: 'dist',
    //   })
    ],
  },
  {
    input: "dist/esm/typess/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts()],
    external: [/\.css$/],
  },
];