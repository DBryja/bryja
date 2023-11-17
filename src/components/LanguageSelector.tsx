import { useState } from "react";
import i18n from "../i18n";

export default function LanguageSelector() {
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);

  const chooseLanguage = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const target = e.target as HTMLSelectElement;
    i18n.changeLanguage(target.value);
    setSelectedLanguage(target.value);
  };

  return (
    <select
      defaultValue={selectedLanguage}
      onChange={chooseLanguage}
      style={{ position: "fixed", top: "2%", left: "20%", zIndex: "9999" }}
    >
      <option value="en" className="en">
        english
      </option>
      <option value="pl" className="pl">
        polski
      </option>
    </select>
  );
}
