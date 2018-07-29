
export default {
    Query: {
        allHospitals: async (parent, args, { Hospital }) =>{
            const hospitals = await Hospital.find()

            return hospitals.map(hospital =>{
                hospital._id = hospital._id.toString()

                return hospital 
            })
        },
        getHospital: async (parent, args, { Hospital }) =>{
            const hospital = await Hospital.findById(args.id)

            return hospital 
        }
    },
    Mutation:{
        createHospital: async (parent, args, { Hospital }) =>{
            const hospital = await new Hospital(args).save()
            hospital._id = hospital._id.toString()

            return hospital
        }
    }
}