import { TranslateFormJson } from "../src/index";

const text = {
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

const app = new TranslateFormJson();
app.init(text, 'ru', 'google');