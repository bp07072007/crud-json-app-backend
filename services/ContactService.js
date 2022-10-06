import ERR_CUSTOM from "../utils/error_section.js";
import { getContactData } from "../utils/operationAction.js";

export default class ContactService {
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
}
