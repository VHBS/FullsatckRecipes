const create = (req, res) => {
  const {
    userName,
    email,
    password,
    nationality,
    name,
    lastName,
    phoneNumber,
    secretQuestion,
    sex
  } = req.body;

  const { result, message, code } = ServiceUser.create({
    userName,
    email,
    password,
    nationality,
    name,
    lastName,
    phoneNumber,
    secretQuestion,
    sex
  });

  if (!result) return res.status(code).json({ message });

  res.status(code).json({ message });
};