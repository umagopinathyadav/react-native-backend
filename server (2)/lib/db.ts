import mongoose from "mongoose"

const db = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL as string)
        console.log("mongo Connected")
    } catch (error) {
        console.log("UNABLE TO CONNECT DB", error)
    }
}

export default db