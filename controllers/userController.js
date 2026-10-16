
let users = [
  { id: 1, name: "Aman", age: 22 },
  { id: 2, name: "Sara", age: 25 }
];

// GET all users
exports.getUsers = (req, res) => {
  res.status(200).json(users);
};

// GET one user by ID
exports.getUserById = (req, res) => {
  const user = users.find(u => u.id == req.params.id);

  if (!user) {
    return res.status(404).json({
      error: "User not found"
    });
  }

  res.status(200).json(user);
};

// POST create a new user
exports.createUser = (req, res) => {
  const { name, age } = req.body;

  if (!name || age == null) {
    return res.status(400).json({
      error: "Name and age are required"
    });
  }

  const newUser = {
    id: users.length
      ? Math.max(...users.map(u => u.id)) + 1
      : 1,
    name,
    age
  };

  users.push(newUser);

  res.status(201).json(newUser);
};

// PUT update user
exports.updateUser = (req, res) => {
  const user = users.find(u => u.id == req.params.id);

  if (!user) {
    return res.status(404).json({
      error: "User not found"
    });
  }

  if (req.body.name !== undefined) {
    user.name = req.body.name;
  }

  if (req.body.age !== undefined) {
    user.age = req.body.age;
  }

  res.status(200).json(user);
};

// DELETE user
exports.deleteUser = (req, res) => {
  const user = users.find(u => u.id == req.params.id);

  if (!user) {
    return res.status(404).json({
      error: "User not found"
    });
  }

  users = users.filter(u => u.id != req.params.id);

  res.status(200).json({
    message: "User deleted"
  });
};
