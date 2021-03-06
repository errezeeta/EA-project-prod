import mongoose, { Schema, Document} from 'mongoose';
import Usuario, {IUsuario} from './usuario';

const barSchema = new Schema({
    id: {
        type: String, unique: true
    },
    name: {
        type: String
    },
    address: {
        type: String
    },
    musicTaste: {
        type: String
    },
    owner:{
        type: String,
        ref: Usuario
    },
    idOwner:{
        type: String,
        ref: Usuario
    },

    aforo:{
        type: Number
    },

    aforoMax:{
        type: Number
    },

    horario:{
        type: String
    },

    descripcion:{
        type: String
    },

    imageUrl:{
        type: String
    }
    });

export interface IBar extends Document {
    id: String;
    name: String;
    address: String;
    musicTaste: String;
    owner: String;
    idOwner: String;
    aforo: Number;
    aforoMax: Number;
    horario: String;
    descripcion: String;
    imageUrl: String;
}

export default mongoose.model<IBar>('Bar', barSchema);