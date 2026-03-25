const errorHandler = (err, req, res, next) => {
  res.status(err.statusCode || 500).json({
    success: false,
    data: null,
    error: {
      message: err.message || 'Internal Server Error'
    }
  });
};

module.exports = errorHandler;