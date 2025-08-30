const { default: mongoose } = require("mongoose");

const BlogSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
}, {timeseries:true});

const BlogModel = mongoose.models.Blog || mongoose.model("Blog", BlogSchema);
export default BlogModel;
