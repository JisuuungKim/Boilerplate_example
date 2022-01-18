const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const celebritySchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    area: {
      type: String,
      required: true, // 필수요소
    },
  },
  { timestamps: true }
);

celebritySchema.plugin(toJSON);
celebritySchema.plugin(paginate);

const Celebrity = mongoose.model('Celebrity', celebritySchema);

module.exports = Celebrity;
