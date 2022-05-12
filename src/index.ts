import { Google } from "./translators/google/google";
import { Translaters } from "./enum/translaters";
import { Yandex } from "./translators/yandex/yandex";

const test = {
    "GENERAL": {
        "ACTIONS": {
          "OK": "Ok",
          "YES": "Yes",
          "NO": "No",
          "CANCEL": "Cancel",
          "CONFIRM": "Confirm",
          "DELETE": "Delete",
          "REMOVE": "Remove",
          "EDIT": "Edit",
          "UNFOLLOW": "Unfollow",
          "FOLLOW": "Follow",
          "REPORT": "Report",
          "SAVE": "Save",
          "LINK": "Link",
          "SHARE": "Share",
        }    
    }
};

class TranslateJSON {
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

const app = new TranslateJSON();
app.init(test, 'ru', 'google');
// export = TranslateJSON;