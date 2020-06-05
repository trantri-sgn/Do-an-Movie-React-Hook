//custom Hook

import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";

import { PATHS } from "../../constants";

//khong dang nhap moi dc phep vao

export default function useAuth() {
  const history = useHistory();
  const location = useLocation();
  const user = useSelector((state) => state.User.TTUSER);

  //lang nghe su thay doi cua location (router)
  //moi lan dung dan url thay doi minh phai check

  //dang nhap k dc phep vao
  useEffect(() => {
    if (!user) {
      history.push(PATHS.LOGIN);
    }
  }, [location, history, user]);
}
