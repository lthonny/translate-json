import { Google } from "./translators/google/google";
import { Translaters } from "./enum/translaters";
import { Yandex } from "translators/yandex/yandex";

class TranslateJSON {
    public init(apiKey, translators) {
        console.log('init');
    
        if(translators === Translaters.google) {
            this.translateGoogle();
        } 

        if(translators === Translaters.yandex) {
            this.translateYandex();
        }

    }

    private translateGoogle() {
        const google = new Google;
        google.init();
    }

    private translateYandex() {
        const yandex = new Yandex();
        yandex.init();
    }
}

const test = new TranslateJSON

test.init('sadasdasd', 'yandex');
// export = TranslateJSON;