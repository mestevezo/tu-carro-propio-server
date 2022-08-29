import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import AdminModel from "../models/Admin.js";

const secret = 'test';


export const signin = async (req, res) => {

  try {

    const { email, password } = req.body;
    const oldUser = await AdminModel.findOne({ email });
    console.log(oldUser)
    console.log(password)
    console.log(email)
    if (!oldUser) return res.status(404).json({ message: "User doesn't exist" });
    console.log(password === oldUser.password)
    const isPasswordCorrect = await bcrypt.compare(password, oldUser.password);
    console.log(isPasswordCorrect)
    if (!isPasswordCorrect) return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign({ email: oldUser.email, id: oldUser._id }, secret, { expiresIn: "1h" });
    res.status(200).json({ result: oldUser, token });

  } catch (err) {
    res.status(500).json({ message: "Something went wrong" });
  }

};


export const signup = async (req, res) => {
  
  try {

    const { email, password, firstName, lastName } = req.body;
    const oldUser = await AdminModel.findOne({ email });

    if (oldUser) return res.status(400).json({ message: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 12);
    const result = await AdminModel.create({ email, password: hashedPassword, name: `${firstName} ${lastName}` })
    const token = jwt.sign( { email: result.email, id: result._id }, secret, { expiresIn: "1h" } );

    res.status(201).json({ result, token });

  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }

};