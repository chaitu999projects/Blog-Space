"use server"
import { DBConnection } from "../utils/config/db"
import ContactModel from "../utils/models/Contacts";

export const ContactDetailsServer = async(ContactDetails)=> {
    await DBConnection();
    await ContactModel.create(ContactDetails);
    return {success:true}
}