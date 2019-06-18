module.exports = {
    devServer: {
		open: process.platform === 'darwin',
		host: 'vascoframework.es',
		port: 4545,
		https: false,
		hotOnly: false,
	}
}
