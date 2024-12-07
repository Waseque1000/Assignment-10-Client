import { useContext, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/Authproviders";

const AddVisa = () => {
  const data = useContext(AuthContext);
  const { user } = data;
  console.log(user);
  const [formData, setFormData] = useState({
    countryImage: "",
    countryName: "",
    visaType: "",
    processingTime: "",
    requiredDocuments: [],
    description: "",
    ageRestriction: "",
    fee: "",
    validity: "",
    applicationMethod: "",
    author: user?.email,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        requiredDocuments: checked
          ? [...prev.requiredDocuments, value]
          : prev.requiredDocuments.filter((doc) => doc !== value),
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:5000/addvisa", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("Visa added successfully");

        // Reset the form data state
        setFormData({
          countryImage: "",
          countryName: "",
          visaType: "",
          processingTime: "",
          requiredDocuments: [],
          description: "",
          ageRestriction: "",
          fee: "",
          validity: "",
          applicationMethod: "",
          author: user?.email,
        });

        // Optionally reset the native form
        e.target.reset(); // Clears form input fields
      })
      .catch((err) => {
        console.error("Error adding visa:", err);
        toast.error("Failed to add visa. Please try again.");
      });
  };

  return (
    <div className="dark:bg-gray-900 bg-white">
      <div className="max-w-4xl mx-auto  pt-10 pb-12  p-6 dark:bg-gray-900 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
          Add Visa
        </h2>
        <form onSubmit={handleSubmit}>
          {/* Country Image */}
          <div className="mb-4">
            <label
              className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300"
              htmlFor="countryImage"
            >
              Country Image URL
            </label>
            <input
              type="text"
              id="countryImage"
              name="countryImage"
              className="input input-bordered w-full dark:bg-gray-700 dark:text-white dark:border-gray-600"
              placeholder="Enter image URL"
              value={formData.countryImage}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300"
              htmlFor="countryName"
            >
              Country Name
            </label>
            <input
              type="text"
              id="countryName"
              name="countryName"
              className="input input-bordered w-full dark:bg-gray-700 dark:text-white dark:border-gray-600"
              placeholder="Enter country name"
              value={formData.countryName}
              onChange={handleChange}
              required
            />
          </div>

          {/* Visa Type */}
          <div className="mb-4">
            <label
              className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300"
              htmlFor="visaType"
            >
              Visa Type
            </label>
            <select
              id="visaType"
              name="visaType"
              className="select select-bordered w-full dark:bg-gray-700 dark:text-white dark:border-gray-600"
              value={formData.visaType}
              onChange={handleChange}
              required
            >
              <option value="">Select Visa Type</option>
              <option value="Tourist visa">Tourist Visa</option>
              <option value="Student visa">Student Visa</option>
              <option value="Official visa">Official Visa</option>
            </select>
          </div>

          {/* Processing Time */}
          <div className="mb-4">
            <label
              className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300"
              htmlFor="processingTime"
            >
              Processing Time
            </label>
            <input
              type="text"
              id="processingTime"
              name="processingTime"
              className="input input-bordered w-full dark:bg-gray-700 dark:text-white dark:border-gray-600"
              placeholder="Enter processing time"
              value={formData.processingTime}
              onChange={handleChange}
              required
            />
          </div>

          {/* Required Documents */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
              Required Documents
            </label>
            <div className="space-y-2">
              <label className="flex items-center text-gray-700 dark:text-gray-300">
                <input
                  type="checkbox"
                  name="requiredDocuments"
                  value="Valid passport"
                  checked={formData.requiredDocuments.includes(
                    "Valid passport"
                  )}
                  onChange={handleChange}
                />
                <span className="ml-2">Valid passport</span>
              </label>
              <label className="flex items-center text-gray-700 dark:text-gray-300">
                <input
                  type="checkbox"
                  name="requiredDocuments"
                  value="Visa application form"
                  checked={formData.requiredDocuments.includes(
                    "Visa application form"
                  )}
                  onChange={handleChange}
                />
                <span className="ml-2">Visa application form</span>
              </label>
              <label className="flex items-center text-gray-700 dark:text-gray-300">
                <input
                  type="checkbox"
                  name="requiredDocuments"
                  value="Recent passport-sized photograph"
                  checked={formData.requiredDocuments.includes(
                    "Recent passport-sized photograph"
                  )}
                  onChange={handleChange}
                />
                <span className="ml-2">Recent passport-sized photograph</span>
              </label>
            </div>
          </div>

          {/* Description */}
          <div className="mb-4">
            <label
              className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300"
              htmlFor="description"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              className="textarea textarea-bordered w-full dark:bg-gray-700 dark:text-white dark:border-gray-600"
              placeholder="Enter visa description"
              value={formData.description}
              onChange={handleChange}
              required
            />
          </div>

          {/* Age Restriction */}
          <div className="mb-4">
            <label
              className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300"
              htmlFor="ageRestriction"
            >
              Age Restriction
            </label>
            <input
              type="number"
              id="ageRestriction"
              name="ageRestriction"
              className="input input-bordered w-full dark:bg-gray-700 dark:text-white dark:border-gray-600"
              placeholder="Enter age restriction"
              value={formData.ageRestriction}
              onChange={handleChange}
              required
            />
          </div>

          {/* Fee */}
          <div className="mb-4">
            <label
              className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300"
              htmlFor="fee"
            >
              Fee
            </label>
            <input
              type="number"
              id="fee"
              name="fee"
              className="input input-bordered w-full dark:bg-gray-700 dark:text-white dark:border-gray-600"
              placeholder="Enter visa fee"
              value={formData.fee}
              onChange={handleChange}
              required
            />
          </div>

          {/* Validity */}
          <div className="mb-4">
            <label
              className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300"
              htmlFor="validity"
            >
              Validity
            </label>
            <input
              type="text"
              id="validity"
              name="validity"
              className="input input-bordered w-full dark:bg-gray-700 dark:text-white dark:border-gray-600"
              placeholder="Enter visa validity"
              value={formData.validity}
              onChange={handleChange}
              required
            />
          </div>

          {/* Application Method */}
          <div className="mb-4">
            <label
              className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300"
              htmlFor="applicationMethod"
            >
              Application Method
            </label>
            <input
              type="text"
              id="applicationMethod"
              name="applicationMethod"
              className="input input-bordered w-full dark:bg-gray-700 dark:text-white dark:border-gray-600"
              placeholder="Enter application method"
              value={formData.applicationMethod}
              onChange={handleChange}
              required
            />
          </div>

          {/* Submit Button */}
          <button type="submit" className="btn btn-primary w-full mt-4">
            Add Visa
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddVisa;
