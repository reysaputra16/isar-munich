import { connectToDB } from "@utils/database";
import User from "@models/user";

export const POST = async (req) => {
    const { email, password } = await req.json();

    try {
        await connectToDB();
        const matchCredentials = await User.findOne({email: email, password: password});
        if(matchCredentials) {
            return {id: matchCredentials._id, email: matchCredentials.email};
        } else {
            return null;
        }
    } catch (error) {
        console.log(error);
        return new Response("Failed to get the matching credentials", {status: 500});
    }
}