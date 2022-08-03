import bcrypt from "bcrypt";

// When a user registers hash is password
export const hashPassword = (password) => {
    return new Promise((resolve, reject) => {
        bcrypt.genSalt(12, (err, salt) => {
            if(err){
                reject(err);
            }
            bcrypt.hash(password, salt, (err, hash) => {
                if(err){
                    reject(err)
                }
                resolve(hash);
            });
        });
    });
};

// When a user logs in check his password and hash
export const comparePassword = (password, hashed) => {
    return bcrypt.compare(password, hashed);
}