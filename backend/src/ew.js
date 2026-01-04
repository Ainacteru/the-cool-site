exports.bleh = async (req, res) => {
  
  const ip = req.ip;
  console.log(`${ip} visited!`);
  res.send({ message: `Hello from the backend! Your IP is ${ip}` });
};
