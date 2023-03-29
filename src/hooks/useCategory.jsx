export const useCategory = () => {
  const category = (cate) => {
    switch (cate) {
      case 1:
        return "여성의류";
      case 2:
        return "남성의류";
      case 3:
        return "신발";
      case 4:
        return "가방";
      case 5:
        return "시계/주얼리";
      case 6:
        return "패션액세서리";
      case 7:
        return "디지털/가전";
      case 8:
        return "스포츠/레저";
      default:
        return null;
    }
  };

  return { category };
};
