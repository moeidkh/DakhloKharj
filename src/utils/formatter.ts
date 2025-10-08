const persianDigitRegex = /[۰-۹]/g;
const englishDigitsRegex = /[0-9]/g;
const persianZero = "۰".charCodeAt(0);
const englishZero = "0".charCodeAt(0);

export function localizeDigits(str: string) {
  return str
    .replace(englishDigitsRegex, (d) => String.fromCharCode(d.charCodeAt(0) - englishZero + persianZero))
    .replace(/%/g, "٪");
}
