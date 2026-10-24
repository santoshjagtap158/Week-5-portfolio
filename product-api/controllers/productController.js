
const products = require("../data/products");

// Get all products
exports.getAllProducts = (req, res) => {
  res.json(products);
};

// Get product by ID
exports.getProductById = (req, res) => {
  const id = Number(req.params.id);
  const product = products.find((p) => p.id === id);

  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }

  res.json(product);
};

exports.createProduct = (req, res) => {
  const { name, price } = req.body;

  const newProduct = {
    id: products.length
      ? Math.max(...products.map((p) => p.id)) + 1
      : 1,
    name,
    price: Number(price),
  };

  products.push(newProduct);
  res.status(201).json(newProduct);
};

exports.updateProduct = (req, res) => {
  const id = Number(req.params.id);
  const product = products.find((p) => p.id === id);

  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }

  const { name, price } = req.body;

  if (name !== undefined) product.name = name;
  if (price !== undefined) product.price = Number(price);

  res.json(product);
};

exports.deleteProduct = (req, res) => {
  const id = Number(req.params.id);
  const index = products.findIndex((p) => p.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "Product not found" });
  }

  const deletedProduct = products.splice(index, 1)[0];
  res.json({
    message: "Product deleted successfully",
    product: deletedProduct,
  });
};
