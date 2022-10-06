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
}
