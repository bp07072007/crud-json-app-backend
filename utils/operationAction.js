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


// Add Contact into JSON file

export const AddOperationContact = (params) => {


// Add Contact into JSON file

export const AddOperationContact = (params) => {


// Add Contact into JSON file

export const AddOperationContact = (params) => {




export const AddOperationContact = (params) => {

export const getSingleContactData = (id) => {
  var existAccounts = getContactData().Contact;

  let foundContact = existAccounts.find((x) => x.id === id);
  let jsonData = JSON.stringify(foundContact);

  return JSON.parse(jsonData);
};

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


// Delet operation for deleting a contact record



// Delete operation for deleting a contact record





export const DeleteContactOperation = (id) => {
  var existContact = getContactData();
  existContact.Contact = existContact.Contact.filter(function (item) {
    return item.id != id;
  });

  return saveContactData(existContact);
};


export const ChangeStatusContactOperation = (id, cstatus) => {
  var existContact = getContactData();
  existContact.Contact.find((o) => o.id === id).cstatus = cstatus;
  return saveContactData(existContact);
};


export const ViewContactOperation = (id) => {
  const existContact = getContactData();

  existContact.Contact = getContactData().Contact.find((o) => o.id === id);

  return existContact;
};


