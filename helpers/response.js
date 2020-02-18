module.exports = async (res, status, code, message, data = []) => {
  await res.status(code).json({
    status: status,
    code: code,
    message: message,
    data: data
  });
  return;
};
