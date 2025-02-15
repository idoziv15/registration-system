module.exports = {
    server: {
      enhanceMiddleware: (middleware) => {
        return (req, res, next) => {
          res.setHeader("Access-Control-Allow-Origin", "*");
          return middleware(req, res, next);
        };
      },
    },
  };
  