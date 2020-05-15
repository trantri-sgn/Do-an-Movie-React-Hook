

const nameSpace = "user:";

export const SET_USER_INFOR = `${nameSpace}SET_USER_INFOR `;

export const actSetUserInfo = (data) => {
  return {
    type: SET_USER_INFOR,
    payload: data,
  };
};


