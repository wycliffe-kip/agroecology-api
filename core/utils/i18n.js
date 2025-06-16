// core/utils/i18n.js
const i18next = require("i18next");
const Backend = require("i18next-fs-backend");
const path = require("path");

const initI18n = async (lng = "en") => {
  const instance = i18next.createInstance();

  await instance
    .use(Backend)
    .init({
      lng,
      fallbackLng: "en",
      preload: ["en", "fr"],
      ns: ["translation"],
      defaultNS: "translation",
      backend: {
        loadPath: path.join(__dirname, "../../locales/{{lng}}/{{lng}}.json"),
      },
      interpolation: {
        escapeValue: false,
      },
    });

  return instance;
};

module.exports = initI18n;
