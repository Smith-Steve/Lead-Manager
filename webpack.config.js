const path = require('path');

module.exports = {
    entry: './leadmanager/frontend/src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'leadmanager/frontend/static/frontend'),
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                    },
                },
            },
        ],
    },
};

/* This will take care of allowing us to ensure that babel is transpiling our code. */