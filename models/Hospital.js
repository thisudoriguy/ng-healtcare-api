import mongoose from "mongoose";

const Hospital = mongoose.model('Hospital', {
    name:{
        type: String
    }
})

export default Hospital;