const path = require('path')  //variable de Node

module.exports = {
    entry: {
        
    index:'.\src\index.js',
    nosotros:'.\src\nosotros.js'
}, //entrada que es los archivos a convertir en bundle
    output: {   //salida
        filename: '[name].bundle.js',  //como se va a llamar el archivo
        path: path.join(__dirname, '\dist')
    },
    devServer:{
        contentBase:path.join(__dirname,'dist'),          //carpeta de donde se sacan los archivos
        compress: true,
        port: 9000,
    
    
    },
    
    module:{
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use:{
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use:[
                {loader: 'style-loader'},
                {loader: 'css-loader'},    
                ]
            },


        ]

    },
    optimization: {
        splitChunks:{
            cacheGroups:{
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'common',
                    chunks: 'all'

                }
            }
        }
    }


};

