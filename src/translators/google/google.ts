import { ConfigApp } from "../../config";

import translate from "translate";

translate.engine = "deepl";
translate.key = process.env.DEEPL_KEY;

const CREDENTIALS = JSON.parse(ConfigApp.CREDENTIALS);

const translate = new Translate({
    credentials: CREDENTIALS,
    projectId: CREDENTIALS.project_id
});

const detectLanguage = async (text) => {
    try {
        let response = await translate.detect(text);
        return response[0].language;
    } catch (error) {
        console.log(`Error at detectLanguage --> ${error}`);
        return 0;
    }
}


export class Google {
    public init() {
        // this.result('dd');

        this.translateText('jsadas', 'en')
            .then((res) => {

            }).catch((err) => {
                console.log(err);
            })
    }

    private async translateText(text, target) {
        let [translations] = await translate.translate(text, target);
        translations = Array.isArray(translations) ? translations : [translations];
        console.log('Translations:');
        translations.forEach((translation, i) => {
        console.log(`${text[i]} => (${target}) ${translation}`);
        });
    }

    private result(obj) {
        return obj;
    }
}
