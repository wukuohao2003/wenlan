import $request from "../tools/$request";

export const signAPI = (userAccount: string) => {
  return $request({
    url: "sign",
    method: "post",
    data: { userAccount },
  });
};
