import  Jwt  from "jsonwebtoken";
export const authentication = (req,res , next) => {
    const token = req.cookie;
    try {
        const decoded = Jwt.verify(token, process.env.JWT_SECRET)
        req.user=decoded;
        next();
    }catch(error) {
        return res.redirect('/dcotor/login')
              
    }

}