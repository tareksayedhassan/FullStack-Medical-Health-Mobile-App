import AsyncStorage from "@react-native-async-storage/async-storage";
import Lang from "./languages";

/**
 * Retrieve a localized string based on keyword and language.
 * Safe to use with SSR (checks for window before accessing localStorage).
 *
 * @param {string} keyword
 * @param {string|null} local
 * @returns {string} ا
 *
 *  */
export default async function translate(keyword, local = null) {
  let lang = local;

  if (!lang) {
    try {
      const storage = await AsyncStorage.getItem("local");
      lang = storage;
    } catch (e) {
      console.log(e);
    }
  }

  return Lang[lang] && Lang[lang][keyword] ? Lang[lang][keyword] : keyword;
}
