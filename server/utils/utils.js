exports.sendError = (res, error, statusCode = 401) => {
  res.status(statusCode).json({ error });
};
