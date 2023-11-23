const express = require("express");
const app = express();
require("./config/mongo.config");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Contact App");
});

app.get("/contacts", (req, res) => {
  res.send("contacts");
});

app.post("/contacts", (req, res) => {
  const contact = req.body;
  let contactObj = {};
  contactObj.firstName = contact.firstName;
  contactObj.lastName = contact.lastName;
  contactObj.userName = contact.userName;
  contactObj.phone = contact.phone;
  contactObj.email = contact.email;
  res.status(201).send({
    status: 201,
    id: "144fhe542eee755",
  });
});

app.put("/contacts/:id", (req, res) => {
  const contact = req.body;
  const contactId = req.params.id;
  const getContact = () => {
    res.send("contact not found");
  };
  getContact();
  let contactObj = {};
  contactObj.firstName = contact.firstName;
  contactObj.lastName = contact.lastName;
  contactObj.userName = contact.userName;
  contactObj.phone = contact.phone;
  contactObj.email = contact.email;
  res.status(201).send({
    status: 201,
    id: "144fhe542eee755",
  });
});

app.delete("/contacts/:id", (req, res) => {
  const contact = req.body;
  const contactId = req.params.id;
  const getContact = () => {
    res.send("contact not found");
  };
  getContact();
  let contactObj = {};
  contactObj.firstName = contact.firstName;
  contactObj.lastName = contact.lastName;
  contactObj.userName = contact.userName;
  contactObj.phone = contact.phone;
  contactObj.email = contact.email;
  res.status(204).send({
    status: 204,
    id: "144fhe542eee755",
  });
});

app.listen(3000, () => {
  console.log("server run in port 3000");
});
