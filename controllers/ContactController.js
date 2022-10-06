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
}
