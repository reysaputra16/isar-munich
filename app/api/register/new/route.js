import { connectToDB } from "@utils/database";
import User from "@models/user";

export const POST = async (req) => {
    const { firstName, lastName, address, postCode, city, tel, email, password, nationality, birthDate } = await req.json();

    try {
        await connectToDB();
        const newUser = new User({
            firstName: firstName, 
            lastName: lastName, 
            address: address, 
            postCode: postCode, 
            city: city, 
            tel: tel, 
            email: email, 
            password: password,
            nationality: nationality, 
            birthDate: birthDate,
            image: "",
        });

        const emailRegistered = await User.findOne({ email: email});
        if(emailRegistered) {
            return new Response("Email is already registered to a user", {status: 406});
        } else {
            await newUser.save();
            return new Response(JSON.stringify(newUser), { status: 201 });
        }
    } catch (error) {
        console.log(error);
        return new Response("Failed to create a new user", { status: 500 });
    }
}