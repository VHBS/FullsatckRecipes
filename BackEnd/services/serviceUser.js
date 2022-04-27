const { User } = require('../models');

const create = async ({
  userName,
  email,
  password,
  nationality,
  name,
  lastName,
  phoneNumber,
  secretQuestion,
  sex
}) => {
  const result = await User.create({
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

  if (!result) return { message: 'User Not Created', code: 400 };

  return { result, message: 'User Created', code: 201 };
};

module.exports = {
  create,
};