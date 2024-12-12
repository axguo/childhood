const path = require('path');

module.exports = {
    entry: './src/index.js', // Entry point
    output: {
        filename: 'main.js', // Output file name
        path: path.resolve(__dirname, 'dist'), // Output directory
    },
    mode: 'development', // Change to 'production' for production builds
    module: {
        rules: [
            {
                test: /\.js$/, // Apply this rule to .js files
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader', // Use Babel to transpile ES6+
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
        ],
    },
};