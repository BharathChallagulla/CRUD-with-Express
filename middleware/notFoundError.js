function serverNotFound(req, res, next) {
  res.status(404).json({ msg: "Server Not Found" });
}

export default serverNotFound;
