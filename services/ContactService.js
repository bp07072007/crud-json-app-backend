import ERR_CUSTOM from "../utils/error_section.js";

import {
  getContactData,
  AddOperationContact,
  getSingleContactData,
  UpdateContactDate,
  DeleteContactOperation,
  ChangeStatusContactOperation,
  ViewContactOperation,
} from "../utils/operationAction.js";

export default class ContactService {
  // Service for get all record of contact
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

  // Service for get single record
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

  // Servive for update the contact record
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

  // Service for delete the record
  static async DeleteContact(id) {
    try {
      const ContactDelete = DeleteContactOperation(id);
      return {
        status: "success",
        data: ContactDelete,
      };
    } catch (error) {
      return {
        status: "Error",
        message: ERR_CUSTOM[500].message,
      };
    }
  }

  // Service for completed or not completed
  static async GetCompletedContact(id, cstatus) {
    try {
      //Change operation of the status of the contact

      const ContactUpdateStatus = ChangeStatusContactOperation(id, cstatus);
      return {
        status: "success",
        data: ContactUpdateStatus,
      };
    } catch (error) {
      return {
        status: "Error",
        message: ERR_CUSTOM[500].message,
      };
    }
  }

  // Service for view single record
  static async ViewContact(id) {
    try {
      //Get particular records
      const ContactSingle = ViewContactOperation(id);

      return ContactSingle;
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
      return {
        status: HTTPStatus.INTERNAL_SERVER_ERROR,
        message: ERR_CUSTOM[500].message,
      };
    }
  }
}
