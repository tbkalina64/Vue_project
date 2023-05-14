import notification from "ant-design-vue/lib/notification";

function makeFormData(formValues) {
  const formData = new FormData();
  for (const [key, value] of Object.entries(formValues)) {
    formData.append(key, value);
  }
  return formData;
}
function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
}

export default ({ app }, inject) => {
  inject("makeFormData", makeFormData);
  inject("getBase64", getBase64);
  inject("notification", notification);
};
