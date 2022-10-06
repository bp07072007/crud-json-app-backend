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


