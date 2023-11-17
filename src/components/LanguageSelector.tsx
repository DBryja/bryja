import { useState, useRef } from "react";
import i18n from "../i18n";
import { GB, PL } from "country-flag-icons/react/3x2";

export default function LanguageSelector() {
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);
  const refCheckbox = useRef<HTMLInputElement>(null);

  const chooseLanguage = (e: React.SyntheticEvent) => {
    const target = e.target as HTMLInputElement;
    const value = target.checked ? "pl" : "en";
    i18n.changeLanguage(value);
    setSelectedLanguage(value);
  };

  return (
    <div className="langCheckbox">
      <input type="checkbox" id="lang" name="lang" ref={refCheckbox} onChange={chooseLanguage} />
      <label htmlFor="lang">{refCheckbox.current?.checked ? <PL className="flag" /> : <GB className="flag" />}</label>
    </div>
  );
}
