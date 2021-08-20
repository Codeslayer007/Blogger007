import mongoose from "mongoose";

const Connection = async () => {
    try {
        const URL = ""; // add mongo db url
        await mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });
        console.log("data base connected");
        
    } catch(error){
        console.log("error while connecting ",error);
    }
}

export default Connection;