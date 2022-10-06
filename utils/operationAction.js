import fs from "fs";
const dataPath = "./database/database.json";

export const getContactData = () => {
  const jsonData = fs.readFileSync(dataPath);
  return JSON.parse(jsonData);
};

const saveContactData = (data) => {
  const stringifyData = JSON.stringify(data);
  fs.writeFileSync(dataPath, stringifyData);
};

// Add Contact into JSON file

export const AddOperationContact = (params) => {
  var existAccounts = getContactData();

  existAccounts.Contact.push({
    id: params.id,
    cname: params.cname,
    email: params.email,
    contact: params.contact,
    cstatus: params.cstatus,
  });

  return saveContactData(existAccounts);
};

// To get single contact info

export const getSingleContactData = (id) => {
  var existAccounts = getContactData().Contact;

  let foundContact = existAccounts.find((x) => x.id === id);
  let jsonData = JSON.stringify(foundContact);

  return JSON.parse(jsonData);
};

// Updating particular infor

export const UpdateContactDate = (id, params) => {
  var existContact = getContactData();

  existContact.Contact.find((o) => o.id === id).cname = params.cname;
  existContact.Contact.find((o) => o.id === id).email = params.email;
  existContact.Contact.find((o) => o.id === id).contact = params.contact;

  return saveContactData(existContact);
};
