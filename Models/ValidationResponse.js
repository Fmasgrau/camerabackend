const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const { Photos, ExtractedData, DNI, RenaperResponse, SelfieSchema} = require('./ValidationSchemas')

const ValidationResponseSchema = new Schema({
    
    context_match : {
        type: Boolean
    },
    control_ok : {
        type: Boolean,
    },
    data_validation_renaper :{
        type: Boolean
    },
    data_validation_renaper_response :{
        type: RenaperResponse
    },
    description: {
        type: String
    },
    dni_back :{
        type: DNI
    },
    dni_front: {
        type: DNI
    },
    extracted_data : {
        type: ExtractedData
    },
    id_op: {
        type: Number
    },
    match_front_back: {
        type: Boolean
    },
    match_front_back_faces: {
        type: Boolean
    },
    match_ocr_barcode: {
        type: Boolean
    },
    readable_barcode: {
        type: Boolean
    },
    selfies: {
        type: [SelfieSchema]
    },
    photos:{
        type: Photos
    }


})


module.exports = mongoose.model('ValidationResponse', ValidationResponseSchema)