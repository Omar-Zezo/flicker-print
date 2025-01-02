import { Link, useNavigate } from "react-router-dom";
import { t } from "i18next";

const Navigation4 = ({current, category}) => {
  const navigate = useNavigate()
  return (
    <div className="flex gap-2 text-base font-medium">
      <Link to="/">{t("home")}</Link>
      <span>/</span>
      <Link to={'/categories'}>{t('all categories')}</Link>
      <span>/</span>
      <Link to={category.id} className="text-black-200 cursor-pointer">
      {`${t(category.name)}`}
      </Link>
      <span>/</span>
      <p className="text-black-200">{current}</p>
    </div>
  );
};

export default Navigation4;
