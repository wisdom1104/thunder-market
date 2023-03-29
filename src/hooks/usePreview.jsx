import { useState } from "react";
export const usePreview = () => {
  const [previewUrl, setPreviewUrl] = useState(null);
  const preview = (imgFile) => {
    if (!imgFile) {
      return null;
    }

    const reader = new FileReader();
    reader.onload = () => {
      const previewUrl = reader.result;
      return setPreviewUrl(previewUrl);
    };
    reader.readAsDataURL(imgFile);
  };
  return { preview, previewUrl };
};
