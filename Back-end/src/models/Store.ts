import mongoose, { Document, Schema } from 'mongoose';

export interface IStore {
    name: string;
    address: string;
}

export interface IStoreModel extends IStore, Document {}

const StoreSchema: Schema = new Schema(
    {
        name: { type: String, required: true },
        address: { type: String, required: true }
    },
    {
        versionKey: false,
        timestamps: false
    }
);

export default mongoose.model<IStoreModel>('Store', StoreSchema);
