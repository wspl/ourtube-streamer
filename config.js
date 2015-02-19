var config = {
	// Streamer front-end information
	listen: {
		host: '127.0.0.1',
		port: 8090
	},
	// Streaming youtube video with proxy?
	// (Please enable this if server were located in China / North Korea)
	enableProxy: true,
	// Proxy Setting
	// ( You can only use HTTP/HTTPS proxy, if you use
	// 	 Shadowsocks please running a Polipo to convert
	//   SOCKS5 proxy to a HTTP/HTTPS proxy. )
	proxySetting: {
		host: 'localhost',
		port: 1080,
		ssl: false
	}
}

module.exports = config;

module.exports.proxy = config.enableProxy
											 ?(config.proxySetting.ssl
											 	 ?'https://' + config.proxySetting.host + ':' + config.proxySetting.port
											   :'http://' + config.proxySetting.host + ':' + config.proxySetting.port
											  ):'';