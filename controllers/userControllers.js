const sdk = require("node-appwrite");

const client = new sdk.Client();
const users = new sdk.Users(client);
client
  .setEndpoint("http://localhost/v1") // Your API Endpoint
  .setProject("6384d94f1a41450e9494") // Your project ID
  .setKey(
    "2c5bc31b8b8730b574a294b87c4184ffd39580b08d8720fd086cfac73ed2d6fa75017cfa28e276463f4bd4a513b1166cdf246c4cc889e5d5ea9a422a4b6b46aa3c0b3cfba9706db689e91efe5f4d82fe9a9e0a6f878ebea8df1c0ae1be51015ebdeafcc6cf45c19495f31a18bd523bb7fdffd3a7d6893cde46a7ae63ffdff3ac"
  ); // Your secret API key

exports.createUserController = async function (req, res) {
  try {
    const { name, email, password } = req.body;

    if (name && email && password) {
      const newUser = await users.create(
        sdk.ID.unique(),
        email,
        "",
        password,
        name
      );
      const { $id, name: naam, email: eMail } = newUser;
      return res.status(201).json({ $id, name: naam, email: eMail });
    }
    return res.status(400).json("error occurred");
  } catch (error) {
    console.log(error);
  }
};
