import $request from "../tools/$request";

export const getTypesAPI = () => {
  return $request({
    url: "getTypes",
    method: "post",
  });
};

export const getCreationAPI = (typeName: string) => {
  return $request({
    url: "getCreations-all",
    method: "post",
    data: {
      typeName,
    },
  });
};
