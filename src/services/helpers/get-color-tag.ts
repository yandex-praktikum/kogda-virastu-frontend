const getColorTag = (
  isActive : boolean | undefined,
  isShowIcon : boolean | undefined,
  activeColorFollow: string,
  activeColorPopular: string,
  baseColor : string,
) : string => {
  if (isActive && !isShowIcon) {
    return activeColorFollow;
  }
  if (isActive && isShowIcon) {
    return activeColorPopular;
  }
  return baseColor;
};

export default getColorTag;
