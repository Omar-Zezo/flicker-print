import { Link } from "react-router-dom";
import { t } from "i18next";

const Navigation3 = ({current, prev}) => {
  return (
    <div className="flex gap-2 text-base font-medium">
      <Link to="/">{t("home")}</Link>
      <span>/</span>
      <Link to={t(prev.link)}>{t(prev.name)}</Link>
      <span>/</span>
      <p className="text-black-200">{`${t(current)}`}</p>
    </div>
  );
};

export default Navigation3;
