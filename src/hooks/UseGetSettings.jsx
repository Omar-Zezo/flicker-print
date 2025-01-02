import { getSettings } from "@/store/slices/setting/settings";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const UseGetSettings = () => {
  const [settingsData, setSettingsData] = useState(null);
  const { data, error } = useSelector((state) => state.settings);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSettings());
  }, []);

  useEffect(() => {
    if (data) {
      if (data.data) {
        if (data.data.data) {
          setSettingsData(data.data.data);
        }
      }
    }
  }, [data, error]);

  return settingsData;
};

export default UseGetSettings;
