/* eslint-disable no-unused-vars */
import { useForm } from "react-hook-form";
import FormProvider from "../../components/react-hook-form/form-provider";
import RHFInputField from "../../components/react-hook-form/rhf-input-field";
import RHFSelectField from "../../components/react-hook-form/rhf-select-field";
import RHFTextareaField from "../../components/react-hook-form/rhf-textarea-field";
import { useContext, useState } from "react";
import { IoImagesOutline } from "react-icons/io5";
import { AppContext } from "../../context/auth-context";
import { uploadImageOnImgbb } from "../../utils/upload-imag-imgbb";

const AddRecipeFormView = () => {
  const { user } = useContext(AppContext);
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [recipeImageError, setRecipeImageError] = useState(false);
  const methods = useForm({
    mode: "onSubmit",
    reValidateMode: "onChange",
  });

  const {
    handleSubmit,
    formState: { isSubmitting, errors },
  } = methods;

  const onSubmit = handleSubmit(async (data) => {
    console.log("data", data);
    try {
      if (!preview) {
        setRecipeImageError(true);
        return;
      }

      if (file !== null) {
        const imgData = await uploadImageOnImgbb(file);
        const newData = {
          ...data,
          creatorEmail: user && user.email,
          watchCount: 0,
          purchased_by: [],
          recipeImage: imgData,
        };

        console.log("newData", newData);
      }
    } catch (error) {
      console.log(error);
    }
  });

  const options = [
    { value: "appetizers", label: "Appetizers" },
    { value: "desserts", label: "Desserts" },
    { value: "soupsStews", label: "Soups and Stews" },
    { value: "salads", label: "Salads" },
    { value: "snacks", label: "Snacks" },
  ];

  const handleFileChange = (e) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      const reader = new FileReader();
      reader.onload = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-5 sm:px-20 md:px-11 lg:px-5 xl:px-0 mt-9 mb-16">
      <FormProvider methods={methods} onSubmit={onSubmit}>
        <div className="flex items-start gap-7 flex-col lg:flex-row">
          <div className="w-full lg:w-[35rem] border shadow-sm rounded-3xl p-5">
            <div className="flex items-center flex-col w-full justify-center gap-5">
              {preview && (
                <img
                  src={preview}
                  alt="Preview"
                  className="w-full rounded-xl"
                />
              )}
              <div>
                <input
                  name="recipeImage"
                  type="file"
                  accept="image/jpeg, image/png, image/bmp, image/gif, image/tiff, image/webp, image/heic, image/avif"
                  className="hidden"
                  onChange={handleFileChange}
                  id="recipeImage"
                />
                <label htmlFor="recipeImage">
                  <div className="avatar-preview border-2 border-gray-300 rounded-full h-11  flex items-center justify-center cursor-pointer px-5 gap-3">
                    <IoImagesOutline className="text-xl" />
                    <span className="text-gray-500">Upload Recipe Image</span>
                  </div>
                </label>
              </div>
              {recipeImageError && !preview && (
                <p className="text-sm text-red-500">Recipe Image is required</p>
              )}
            </div>
          </div>
          <div className="w-full border shadow-sm rounded-3xl p-5 flex flex-col gap-5">
            <RHFInputField
              label="Recipe Name"
              name="recipeName"
              type="text"
              rules={{ required: "Recipe Name is required" }}
            />
            <div className="flex items-center flex-col lg:flex-row gap-5 ">
              <RHFInputField
                label="Country"
                name="country"
                type="text"
                rules={{ required: "Country is required" }}
              />
              <RHFInputField
                label="Embed Video ID"
                name="embedVideoId"
                type="text"
                rules={{ required: "Embed Video ID is required" }}
              />
            </div>
            <RHFSelectField
              label="Category"
              name="category"
              options={options}
              rules={{ required: "Category is required" }}
            />
            <RHFTextareaField
              label="Recipe Details"
              name="recipeDetails"
              rules={{ required: "Recipe Details are required" }}
            />

            <div className="flex items-center justify-end">
              <button
                className="w-full lg:w-1/2 shrink-0 rounded-md border border-green-500 bg-green-500 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-green-500 focus:outline-none focus:ring active:text-green-500"
                type="submit"
                disabled={isSubmitting}
              >
                Add Recipe
              </button>
            </div>
          </div>
        </div>
      </FormProvider>
    </div>
  );
};

export default AddRecipeFormView;
