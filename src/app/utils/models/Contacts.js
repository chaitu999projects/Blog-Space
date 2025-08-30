const { default: mongoose } = require("mongoose");

const ContactSchema = new mongoose.Schema({
    name: {

    },
    email:{

    },
    subject: {

    },
    message: {

    }
})

const ContactModel = mongoose.models.Contact || mongoose.model("Contact", ContactSchema);

export default ContactModel;