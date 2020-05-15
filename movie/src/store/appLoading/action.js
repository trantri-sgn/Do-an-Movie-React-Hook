const nameSpace = "app:";

export const SHOW_LOADING = `${nameSpace}SHOW_LOADING`;
export const HIDDEN_LOADING = `${nameSpace}HIDDEN_LOADING`;

//type , payload

export const actShowLoading = () => {
  return {
    type: SHOW_LOADING,
    payload: null,
  };
};

export const actHiddenLoading = () => {
  return {
    type: HIDDEN_LOADING,
    payload: null,
  };
};
