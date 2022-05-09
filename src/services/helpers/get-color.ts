const getColor = (
  disabled : boolean | undefined,
  baseColor : string,
  disabledColor: string,
) : string => {
  if (disabled) {
    return disabledColor;
  }
  return baseColor;
};

export default getColor;
