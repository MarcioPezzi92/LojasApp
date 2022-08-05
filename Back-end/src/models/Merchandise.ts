import mongoose, { Document, Schema } from 'mongoose';

export interface IMerchandise {
    description: string;
    price: number;
    store: string;
}

export interface IMerchandiseModel extends IMerchandise, Document {}

const MerchandiseSchema: Schema = new Schema(
    {
        description: { type: String, required: true },
        price: { type: Number, required: true },
        store: { type: Schema.Types.ObjectId, required: true, ref: 'Store' }
    },
    {
        timestamps: false,
        versionKey: false
    }
);

export default mongoose.model<IMerchandiseModel>('Merchandise', MerchandiseSchema);
