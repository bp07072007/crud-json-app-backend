import ERR_CUSTOM from "../utils/error_section.js";
import {
  getContactData,
  AddOperationContact,
  getSingleContactData,
  UpdateContactDate,
} from "../utils/operationAction.js";

export default class ContactService {
  // Get all Contact detail from JSON File
  static async GetAllContact() {
    try {
      //Get all the Contact information from the database.
      const ContactData = getContactData();
      return ContactData;
      // Error handing section
    } catch (error) {
      return {
        status: "Error",
        message: ERR_CUSTOM[500].message,
      };
    }
  }

  // ADD FUNCTIONALITY for th contact
  static async AddContact(params) {
    try {
      const ContactData = AddOperationContact(params);

      return ContactData;
    } catch (error) {
      const err = {
        status: HTTPStatus.INTERNAL_SERVER_ERROR,
        message: ERR_CUSTOM[500].message,
      };
      throw err;
    }
  }

  static async GetContact(id) {
    try {
      const ContactSingleData = getSingleContactData(id);

      return ContactSingleData;
    } catch (error) {
      return {
        status: HTTPStatus.INTERNAL_SERVER_ERROR,
        message: ERR_CUSTOM[500].message,
      };
    }
  }

  static async UpdateContact(id, params) {
    try {
      const ContactUpdate = UpdateContactDate(id, params);
      return ContactUpdate;
    } catch (error) {
      return {
        status: "Error",
        message: ERR_CUSTOM[500].message,
      };
    }
  }
}
