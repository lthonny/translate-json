// import { ConfigApp } from "../../config";
const translate = require('translate-google');

export class Google {
    public init(json, target) {
        this.translateText(json, target);
    }

    private translateText(json, target) {
        translate(json, {to: target, except:['a']}).then(res => {
            console.log(res);
        }).catch(err => {
            console.error(err);
        })
    }

    private result(obj) {
        return obj;
    }
}
