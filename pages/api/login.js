import { isNewUser } from "@/lib/db/hasura";
import { magicAdmin } from "@/lib/magic";
import jwt from "jsonwebtoken";

export default async function login(req,res){
    if(req.method==="POST"){
        try {
            const auth= req.headers.authorization;
            const didtoken= auth? auth.substr(7):"";
            console.log({didtoken});
            
            const metadata= await magicAdmin.users.getMetadataByToken(didtoken);
            console.log({metadata});

            //CREATE JWT
            const token= jwt.sign({
                ...metadata,
                iat: Math.floor(Date.now() / 1000),
                exp: Math.floor(Date.now() / 1000 + 7 * 24 * 60 * 60),
                "https://hasura.io/jwt/claims": {
                  "x-hasura-allowed-roles": ["user", "admin"],
                  "x-hasura-default-role": "user",
                  "x-hasura-user-id": `${metadata.issuer}`,
                },
            },"704505060470450506047045050604AS")
            console.log({token});
             // CHECK IF USER EXISTS

      const isNewUserQuery = await isNewUser(token);
      res.send({ done: true, isNewUserQuery });


            
        } catch (error) {
            console.log(error);
            res.status(500).send({"Name":"No_Name"})
        }
    }
    else{
        res.send({"Name":"No_Name"})
    }
    
}