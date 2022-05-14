import { Google } from "./translators/google/google";
import { Translaters } from "./enum/translaters";
import { Yandex } from "./translators/yandex/yandex";

export interface IParamsInit {
    target: string;
    translators: string;
}

export class TranslateFormJson {
    public init(json, target, translators) {    
        if(translators === Translaters.google) {
            this.translateGoogle(json, target);
        } 

        if(translators === Translaters.yandex) {
            this.translateYandex();
        }

    }

    private translateGoogle(json, target) {
        const google = new Google;
        google.init(json, target);
    }

    private translateYandex() {
        const yandex = new Yandex();
        yandex.init();
    }
}
