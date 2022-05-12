require('dotenv').config();

export class ConfigApp {
    static CREDENTIALS = process.env.CREDENTIALS;
}