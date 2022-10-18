import crypto, { Encoding } from "crypto"

// const hash512 = crypto.createHash('sha512');

// const harsh = (pw: string, utf: Encoding) => {

//     return hash512.update(pw, utf);
// }

// const harshDigest = (hex:any) => {

//     return hash512.digest(hex);

// }



export const harsh = (data:any) => {
    const hash512 = crypto.createHash('sha512');
    const hashData = hash512.update(data, 'utf-8');
    const hashedPassword = hashData.digest("hex");

    return hashedPassword;

}
