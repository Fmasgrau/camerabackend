const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const SelfieSchema = new Schema({
    imageb64: {
        type: String
    },
    id_selfie: {
        type: Number
    },
    img_quality: {
        type: String
    },
    match: {
        type: Boolean
    },
    proof: {
        type: Boolean
    },
    suspicious: {
        type: Boolean
    }

})

const RenaperResponse = new Schema({
    error: {
        type: String
    },
    ejemplar: {
        type: String
    },
    emision: {
        type: String
    }
})

const DNI = new Schema({
    dni_side: {
        type: String
    },
    img_quality: {
        type: String
    }
})


const ExtractedData = new Schema({
    apellidos: {
        type: String || null
    },
    categoria_ingreso: {
        type: String || null
    },
    codigo_dorso: {
        type: String || null
    },
    cuil: {
        type: String || null
    },
    disposicion: {
        type: String || null
    },
    dni_numero: {
        type: String || null
    },
    dni_numero2: {
        type: String || null
    },
    domicilio: {
        type: String || null
    },
    ejemplar: {
        type: String || null
    },
    expediente: {
        type: String || null
    },
    fecha_emision: {
        type: String || null
    },
    fecha_ingreso: {
        type: String || null
    },
    fecha_nacimiento: {
        type: String || null
    },
    fecha_radicacion: {
        type: String || null
    },
    fecha_vencimiento: {
        type: String || null
    },
    lugar_nacimiento: {
        type: String || null
    },
    nacionalidad: {
        type: String || null
    },
    nombres: {
        type: String || null
    },
    numero_tramite: {
        type: String || null
    },
    sexo: {
        type: String || null
    }
})

const Photos = new Schema({
    front : {
        type: String
    },
    back:{
        type: String
    },
    selfie1 : {
        type: String
    },
    selfie2: {
        type: String
    }
    
})

module.exports = {
    SelfieSchema,
    RenaperResponse,
    DNI,
    ExtractedData,
    Photos
}