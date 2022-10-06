import ContactService from "../services/ContactService.js";
import ERR_CUSTOM from "../utils/error_section.js";
import { v4 as UID } from "uuid";
import HTTPStatus from "http-status";

export default class {
  static async GetAllContact(req, res) {
    try {
      //Controller for getting all information from database.json file

      const Contactdata = await ContactService.GetAllContact();
      return res.status(HTTPStatus.OK).json({
        status: "success",
        message: "Getting all Contact information ",
        data: Contactdata,
      });
    } catch (error) {
      return res.status(HTTPStatus[401]).json({
        status: "Error",
        message: ERR_CUSTOM[401].message,
      });
    }
  }

  static async AddContact(req, res) {
    try {
      // validate the input fields, we can use middleware validators, as of now doing validation here.

      if (req.body && !req.body.cname) {
        return {
          status: "Error",
          message: ERR_CUSTOM.cname.message,
        };
      }
      if (req.body && !req.body.email) {
        return {
          status: "Error",
          message: ERR_CUSTOM.email.message,
        };
      }
      if (req.body && !req.body.contact) {
        return {
          status: "Error",
          message: ERR_CUSTOM.contact.message,
        };
      }
      //capture the input data came from the front end.
      const params = {
        id: UID(),
        cname: req.body.cname,
        email: req.body.email,
        contact: req.body.contact,
        cstatus: 0,
      };
      //call the Contact service to add the data in database
      const Contact = await ContactService.AddContact(params);
      return res.status(HTTPStatus.OK).json({
        status: "success",
        message: " Successfully addded Contact",
        data: Contact,
      });
    } catch (error) {
      return res.status(HTTPStatus[401]).json({
        status: "Error",
        message: ERR_CUSTOM[401].message,
      });
    }
  }

  static async SingleContact(req, res) {
    try {
      const id = req.params.id;

      //call the Contact service to fetch all the Contact.
      const Contact = await ContactService.GetContact(id);
      return res.status(HTTPStatus.OK).json({
        status: "success",
        message: "Get single contact data ",
        data: Contact,
      });
      // Catching error section
    } catch (error) {
      return res.status(HTTPStatus[401]).json({
        status: "Error",
        message: ERR_CUSTOM[401].message,
      });
    }
  }

  static async UpdateContact(req, res) {
    try {
      // Form fields validation
      if (req.body && !req.body.id) {
        return {
          status: "Error",
          message: ERR_CUSTOM.id.message,
        };
      }
      if (req.body && !req.body.cname) {
        return {
          status: "Error",
          message: ERR_CUSTOM.cname.message,
        };
      }
      if (req.body && !req.body.email) {
        return {
          status: "Error",
          message: ERR_CUSTOM.email.message,
        };
      }
      if (req.body && !req.body.contact) {
        return {
          status: "Error",
          message: ERR_CUSTOM.contact.message,
        };
      }
      //Get the data from front end section
      const params = {};
      const id = req.body.id;
      if (req.body && req.body.cname) {
        params.cname = req.body.cname;
      }

      if (req.body && req.body.email) {
        params.email = req.body.email;
      }
      if (req.body && req.body.contact) {
        params.contact = req.body.contact;
      }

      //To check database or not.
      const ContactData = await ContactService.GetContact(id);
      if (!ContactData) {
        return {
          status: "Error",
          message: ERR_CUSTOM.notfound.message,
        };
      }
      //Function for the contact update the Contact.
      const Contact = await ContactService.UpdateContact(id, params);
      return res.status(HTTPStatus.OK).json({
        status: "success",
        message: "updated the Contact data",
      });
    } catch (error) {
      return res.status(HTTPStatus[401]).json({
        status: "Error",
        message: ERR_CUSTOM[401].message,
      });
    }
  }
}
