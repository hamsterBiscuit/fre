import cleanup from 'rollup-plugin-cleanup'
import license from 'rollup-plugin-license'
// import babel from 'rollup-plugin-babel'

let env = process.env.NODE_ENV

export default {
  input: './src/index.js',
  output: {
    file: env === 'cjs' ? './dist/fre.js' : './dist/fre.umd.js',
    format: env === 'cjs' ? 'cjs' : 'umd',
    name: 'fre'
  },
  plugins: [
    license({
      banner: `by 132yse Copyright ${JSON.stringify(new Date()).replace(
        /T.*|"/g,
        ''
      )}`
    }),
    cleanup()
  ]
}

