import crypto, { Encoding } from "crypto"
import { stringify } from "querystring";

const hash512 = crypto.createHash('sha512');

const harsh = (pw: string, utf: Encoding) => {

    return hash512.update(pw, utf);
}

const harshDigest = (hex:any) => {

    return hash512.digest(hex);

}

export {harsh, harshDigest}