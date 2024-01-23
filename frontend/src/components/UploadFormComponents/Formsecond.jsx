import React, { useState } from "react";
import circle from "../../assets/circle.png";
import Button from "../Button";

const Form = () => {
  const [formData, setFormData] = useState({
    password: "",
    title: "",
    description: "",
    tags: "",
    date: "",
    software: "",
    thumbnailImage: "",
    sourceFile: "",
  });

  const [fileUploaded, setFileUploaded] = useState({
    thumbnailImage: false,
    sourceFile: false,
  });

  // State variable for all validation messages
  const [formErrors, setFormErrors] = useState({
    password: "",
    title: "",
    description: "",
    tags: "",
    date: "",
    software: "",
    thumbnailImage: "",
    sourceFile: "",
  });

  const handleInputChange = (e) => {
    const { name, value, type } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Clear the error for the current field
    setFormErrors({
      ...formErrors,
      [name]: "",
    });

    if (type === "file") {
      setFileUploaded({
        ...fileUploaded,
        [name]: !!e.target.value, // Set to true if a file is selected
      });
    }
  };
  const [active, setActive] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    const errors = {};

    if (!formData.password || formData.password.length < 6) {
      errors.password =
        "Password is required and must be at least 6 characters long.";
    }

    if (!formData.title) {
      errors.title = "Title is required.";
    }

    if (!formData.description || formData.description.length > 200) {
      errors.description = !formData.description
        ? "Description is required."
        : "Description must be a maximum of 200 characters.";
    }

    if (!formData.tags) {
      errors.tags = "Tags are required.";
    }

    if (!formData.date) {
      errors.date = "Date is required.";
    }

    if (!formData.software) {
      errors.software = "Software is required.";
    }

    if (!fileUploaded.thumbnailImage) {
      errors.thumbnailImage = "Thumbnail Image is required.";
    }

    if (!fileUploaded.sourceFile) {
      errors.sourceFile = "Source File is required.";
    }

    // If there are errors, update the error state and prevent form submission
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    // If all validations pass, you can proceed with the form submission
    setFormData({
      password: "",
      title: "",
      description: "",
      tags: "",
      date: "",
      software: "",
      thumbnailImage: "",
      sourceFile: "",
    });
    alert("Form submitted!");
    // Add your logic for handling form submission (e.g., sending data to a server)
  };

  return (
    <main
      className="relative flex items-center justify-center min-h-screen bg-tertiary"
      style={{
        backgroundImage: `url(${circle}),url(${circle}),url(${circle})`,
        backgroundSize: "400px,300px,150px",
        backgroundPosition: "1100px 500px,10% 95%,100px 200px",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Button />
      <div className="bg-purple opacity-80 m-5 p-8 rounded-lg text-white lg:px-52  bg-cover">
        <div className="text-3xl font-semibold text-center mb-6">
          Upload Files
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Left Column */}

          <div className="mb-4 md:col-span-1">
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-lg font-medium text-text mb-1"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleInputChange}
                className="w-full p-3 border border-black rounded-md bg-transparent bg-opacity-50"
                required
              />
              {formErrors.password && (
                <div className="text-red-500 text-sm ">
                  {formErrors.password}
                </div>
              )}
            </div>
            <div className="mb-4">
              <label
                htmlFor="title"
                className="block text-lg font-medium text-text mb-1"
              >
                Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                placeholder="Title"
                value={formData.title}
                onChange={handleInputChange}
                className="w-full p-3 border border-black rounded-md bg-transparent bg-opacity-50"
                required
              />
              {formErrors.title && (
                <div className="text-red-500 text-sm ">{formErrors.title}</div>
              )}
            </div>
            <div className="mb-4">
              <label
                htmlFor="description"
                className="block text-lg font-medium text-text mb-1"
              >
                Description
              </label>
              <textarea
                id="description"
                name="description"
                placeholder="Description"
                value={formData.description}
                onChange={handleInputChange}
                className="w-full p-3 border border-black rounded-md bg-transparent bg-opacity-50"
                rows="7"
                required
              ></textarea>
              {formErrors.description && (
                <div className="text-red-500 text-sm ">
                  {formErrors.description}
                </div>
              )}
            </div>
          </div>

          {/* Right Column */}
          <div className="mb-4 md:col-span-1">
            <div className="mb-4">
              <label
                htmlFor="tags"
                className="block text-lg font-medium text-text mb-1"
              >
                Tags
              </label>
              <input
                type="text"
                id="tags"
                name="tags"
                placeholder="Tags (comma separated)"
                value={formData.tags}
                onChange={handleInputChange}
                className="w-full p-3 border border-black rounded-md bg-transparent bg-opacity-50"
                required
              />
              {formErrors.tags && (
                <div className="text-red-500 text-sm ">{formErrors.tags}</div>
              )}
            </div>
            <div className="mb-4">
              <label
                htmlFor="date"
                className="block text-lg font-medium text-text mb-1"
              >
                Date
              </label>
              <input
                type="date"
                id="date"
                name="date"
                placeholder="DD/MM/YY"
                value={formData.date}
                onChange={handleInputChange}
                className="w-full p-3 border border-black rounded-md bg-transparent bg-opacity-50"
                required
              />
              {formErrors.date && (
                <div className="text-red-500 text-sm">{formErrors.date}</div>
              )}
            </div>
            <div className="mb-4">
              <label
                htmlFor="software"
                className="block text-lg font-medium text-text mb-1"
              >
                Software
              </label>
              <select
                id="software"
                name="software"
                value={formData.software}
                onChange={handleInputChange}
                className="w-full p-3 border border-black rounded-md bg-transparent bg-opacity-50"
                required
              >
                <option value="" disabled>
                  Select Software
                </option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
              </select>
              {formErrors.software && (
                <div className="text-red-500 text-sm ">
                  {formErrors.software}
                </div>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="mb-4">
                <label
                  htmlFor="thumbnailImage"
                  className="block text-lg font-medium text-text mb-1"
                >
                  Thumbnail Image
                </label>
                <div className="w-full p-3 border border-black rounded-md bg-transparent bg-opacity-50 relative">
                  <span className="block text-inputText text-md font-light text-center">
                    {fileUploaded.thumbnailImage
                      ? "File Chosen"
                      : "Upload File"}
                  </span>
                  <input
                    type="file"
                    id="thumbnailImage"
                    name="thumbnailImage"
                    onChange={handleInputChange}
                    className="opacity-0 absolute inset-0 w-full h-full cursor-pointer"
                    accept="image/*"
                    required
                  />
                </div>
                {!fileUploaded.thumbnailImage && (
                  <div className="text-red-500 text-md ">File not uploaded</div>
                )}
              </div>

              {/* Right Column */}
              <div className="mb-4">
                <label
                  htmlFor="sourceFile"
                  className="block text-lg font-medium text-text mb-1"
                >
                  Source File
                </label>
                <div className="w-full p-3 border border-black rounded-md bg-transparent bg-opacity-50 relative">
                  <span className="block text-inputText text-md font-light text-center">
                    {fileUploaded.sourceFile ? "File Chosen" : "Upload File"}
                  </span>
                  <input
                    type="file"
                    id="sourceFile"
                    name="sourceFile"
                    onChange={handleInputChange}
                    className="opacity-0 absolute inset-0 w-full h-full cursor-pointer"
                    required
                  />
                </div>
                {!fileUploaded.sourceFile && (
                  <div className="text-red-500 text-md ">File not uploaded</div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="text-center mt-4">
          <button
            type="submit"
            onClick={handleSubmit}
            className="bg-gradient-to-r from-red-300 to-pink-500 text-white px-8 py-2 rounded-md"
          >
            Submit
          </button>
        </div>
      </div>
    </main>
  );
};

export default Form;
