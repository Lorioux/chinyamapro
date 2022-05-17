const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        ['/img', '/css', '/js', '/fonts', '/inc', '/favicon.ico'],
        createProxyMiddleware({
          hostRewrite: 307,
          target: 'http://0.0.0.0:5000/',
          changeOrigin: true,
        })
      );

    // Services
    app.use(
      ['/contactinfo', '/socialmedia/info', '/contact/info', ],
      createProxyMiddleware({
        target: 'http://0.0.0.0:5000',
        changeOrigin: true,
      })
    );

    app.use(
      [
        '/core/capabilities/create', 
        '/core/desclaim/create',
      ],
      createProxyMiddleware({
        hostRewrite: 302,
        target: 'http://0.0.0.0:5000',
        changeOrigin: true,
      })
    );

    app.use(
      [ '/service/packages', '/service/portfolio' ],
      createProxyMiddleware({
        hostRewrite: 307,
        target: 'http://0.0.0.0:5000',
        changeOrigin: true,
      })
    );

    app.use(
      [ '/testimonial/all' ],
      createProxyMiddleware({
        hostRewrite: 307,
        target: 'http://0.0.0.0:5000',
        changeOrigin: true,
      })
    );

    app.use(
      [ '/*.html' ],
      createProxyMiddleware({
        hostRewrite: 307,
        target: 'http://0.0.0.0:5000',
        changeOrigin: true,
      })
    );

    
};