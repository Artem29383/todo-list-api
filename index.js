require('@babel/register')({
    ignore: [/(node_modules)/],
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    presets: [[
        "@babel/preset-env",
        {
            targets: {
                node: "current"
            }
        }
    ]]
});

require('./server.js')