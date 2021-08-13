const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const SaleSchema = new Schema(
  {
    billId: { type: Number, required: true, unique: true },
    // userId: {type: Schema.Types.ObjectId, ref: 'User'},
    // sellerId: {type: Schema.Types.ObjectId, ref: 'Seller'},
    products: [
        {
            product: {type: Schema.Types.ObjectId, ref: 'Product'},
            quantity: {type: Number, required: true},
        }
    ],
    state: {type: String, required: true, enum: ['start', 'on-way', 'finished', 'canceled'], default: 'start'},
    tracing: [
        {
            datetime: {type: Date, required: true},
            sellerId: {type: Schema.Types.ObjectId, ref: 'Seller'},
            oldState: {type: String, required: true, enum: ['start', 'on-way', 'finished', 'canceled']},
            newState: {type: String, required: true, enum: ['start', 'on-way', 'finished', 'canceled']},
        }
    ]
  }, {
    timestamps: true
  }
);


const SaleModel = mongoose.model('Sale', SaleSchema);
module.exports = SaleModel;