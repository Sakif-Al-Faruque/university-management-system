import mongoose from "mongoose";

export async function Connect(){
    try{
        mongoose.connect(process.env.MONGO_URL!);
        const connection = mongoose.connection;


        connection.on('connected', () => {
            console.log('mongodb connection is established');
        });

        connection.on('error', (error) => {
            console.log('connection shows error. Please check: '+error);
            process.exit();
        });
    }catch(error: any){
        console.log({message: error});
    }
}