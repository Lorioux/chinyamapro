const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        ['/img', '/css', '/js', '/fonts', '/inc'],
        createProxyMiddleware({
          target: 'http://0.0.0.0:5001',
          changeOrigin: true,
        })
      );

    // Services
    app.use(
      ['/ContactInfo', '/SocialMediaInfo', '/SocialMedia/Info', '/Contact/Info', ],
      createProxyMiddleware({
        target: 'http://0.0.0.0:5000',
        changeOrigin: true,
      })
    );

    app.use(
      [
        '/Core/Service/Create', 
        '/Core/Desclaim/Create',
      ],
      createProxyMiddleware({
        hostRewrite: 302,
        target: 'http://0.0.0.0:5002',
        changeOrigin: true,
      })
    );
};