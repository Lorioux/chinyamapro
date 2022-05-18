const { createProxyMiddleware } = require('http-proxy-middleware');
const { env } = require('process')

var PROXY_HOSTNAME = env.PROXY_HOSTNAME || "http://0.0.0.0:5000"

module.exports = function(app) {
    app.use(
        ['/img', '/css', '/js', '/fonts', '/inc', '/favicon.ico'],
        createProxyMiddleware({
          hostRewrite: 307,
          target: `${PROXY_HOSTNAME}`,
          changeOrigin: true,
        })
      );

    // Services
    app.use(
      ['/contactinfo', '/socialmedia/info', '/contact/info', ],
      createProxyMiddleware({
        hostRewrite: 307,
        target: `${PROXY_HOSTNAME}`,
        changeOrigin: true,
      })
    );

    app.use(
      [
        '/core/capabilities/create', 
        '/core/desclaim/create',
      ],
      createProxyMiddleware({
        hostRewrite: 307,
        target: `${PROXY_HOSTNAME}`,
        changeOrigin: true,
      })
    );

    app.use(
      [ '/service/packages', '/service/portfolio' ],
      createProxyMiddleware({
        hostRewrite: 307,
        target: `${PROXY_HOSTNAME}`,
        changeOrigin: true,
      })
    );

    app.use(
      [ '/testimonial/all' ],
      createProxyMiddleware({
        hostRewrite: 307,
        target: `${PROXY_HOSTNAME}`,
        changeOrigin: true,
      })
    );

    app.use(
      [ '/*.html' ],
      createProxyMiddleware({
        hostRewrite: 307,
        target: `${PROXY_HOSTNAME}`,
        changeOrigin: true,
      })
    );    
};