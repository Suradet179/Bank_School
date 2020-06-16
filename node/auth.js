require("firebase/auth");
require("firebase/firestore");
var firebase = require("firebase/app");
let firestore = firebase.firestore();

const login = async (req, res) => {
  try {
    const { username, password } = req.params;
    const loginResult = await firebase
      .auth()
      .signInWithEmailAndPassword(username, password);
    res.json(loginResult)
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
};

module.exports = {
  login,
};
