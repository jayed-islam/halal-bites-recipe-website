/* eslint-disable no-undef */
export const uploadImageOnImgbb = async (image) => {
  const formData = new FormData();
  formData.append("image", image);
  const url = `https://api.imgbb.com/1/upload?key=${process.env.VITE_IMGBB_API}`;

  const res = await fetch(url, {
    method: "POST",
    body: formData,
  });
  const data = await res.json();
  return data.data.display_url;
};
