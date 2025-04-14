import { useState } from "react";

export default function AppProperty() {
  const [images, setImages] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    location: "", 
    price: "",
    currency: "",
    priceType: "",
    discount: "",
    propertyType: "",
    bedrooms: "",
    bathrooms: "",
    area: "",
    yearBuilt: "",
    parking: "",// New field
  });

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    const urls = files.map((file) => URL.createObjectURL(file));
    setImages((prev) => [...prev, ...urls]);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const detectLocation = () => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setFormData((prev) => ({
          ...prev,
          location: `Lat: ${latitude.toFixed(4)}, Lng: ${longitude.toFixed(4)}`,
        }));
      },
      () => {
        alert("Unable to retrieve your location");
      }
    );
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    // Handle form submission here
  };

  return (
    <div className="w-full max-w-[75rem] mx-auto bg-white rounded-xl shadow-lg overflow-hidden p-6 mt-[100px] mb-[30px] space-y-10">
      {/* Image Upload Section */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Upload Images</h2>
        {images.length > 0 ? (
          <div className="flex gap-4 overflow-x-auto mb-4 pb-2">
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Preview ${index}`}
                className="h-40 rounded-md object-cover flex-shrink-0"
              />
            ))}
          </div>
        ) : (
          <div className="w-full h-40 bg-gray-100 rounded-md mb-4 flex items-center justify-center text-gray-400 text-sm">
            No images selected
          </div>
        )}
        <label className="block">
          <span className="sr-only">Choose files</span>
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handleImageChange}
            className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4
              file:rounded-full file:border-0
              file:text-sm file:font-semibold
              file:bg-orange-50 file:text-orange-700
              hover:file:bg-orange-100"
          />
        </label>
      </div>

      {/* Personal Information Form */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Personal Information</h2>
        <form onSubmit={handleFormSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border border-gray-300 p-2 shadow-sm focus:ring-orange-500 focus:border-orange-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border border-gray-300 p-2 shadow-sm focus:ring-orange-500 focus:border-orange-500"
                required
              />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Phone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border border-gray-300 p-2 shadow-sm focus:ring-orange-500 focus:border-orange-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Address</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border border-gray-300 p-2 shadow-sm focus:ring-orange-500 focus:border-orange-500"
              />
            </div>
          </div>

          {/* Location Field */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Location</label>
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  readOnly
                  className="mt-1 block w-full rounded-md border border-gray-300 p-2 shadow-sm bg-gray-100 cursor-not-allowed"
                />
                <button
                  type="button"
                  onClick={detectLocation}
                  className="mt-1 bg-orange-600 text-white px-4 py-2 rounded-md hover:bg-orange-700"
                >
                  Detect
                </button>
              </div>
            </div>
          </div>

{/* Price Section */}
<div className="pt-8 mt-8">
  <h2 className="text-2xl font-semibold text-gray-800 mb-4">Pricing Details</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
    {/* Price */}
    <div>
      <label className="block text-sm font-medium text-gray-700">Price</label>
      <input
        type="number"
        name="price"
        value={formData.price}
        onChange={handleInputChange}
        className="mt-1 block w-full rounded-md border border-gray-300 p-2 shadow-sm focus:ring-orange-500 focus:border-orange-500"
        placeholder="Enter price (e.g., 1500)"
        required
      />
    </div>

    {/* Currency */}
    <div>
      <label className="block text-sm font-medium text-gray-700">Currency</label>
      <select
        name="currency"
        value={formData.currency || ""}
        onChange={handleInputChange}
        className="mt-1 block w-full rounded-md border border-gray-300 p-2 shadow-sm focus:ring-orange-500 focus:border-orange-500"
      >
        <option value="">Select</option>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="INR">INR</option>
      </select>
    </div>

    {/* Price Type */}
    <div>
      <label className="block text-sm font-medium text-gray-700">Price Type</label>
      <select
        name="priceType"
        value={formData.priceType || ""}
        onChange={handleInputChange}
        className="mt-1 block w-full rounded-md border border-gray-300 p-2 shadow-sm focus:ring-orange-500 focus:border-orange-500"
      >
        <option value="">Select</option>
        <option value="Monthly">Monthly</option>
        <option value="Yearly">Yearly</option>
        <option value="One-time">One-time</option>
      </select>
    </div>

    {/* Discount */}
    <div>
      <label className="block text-sm font-medium text-gray-700">Discount (%)</label>
      <input
        type="number"
        name="discount"
        value={formData.discount || ""}
        onChange={handleInputChange}
        className="mt-1 block w-full rounded-md border border-gray-300 p-2 shadow-sm focus:ring-orange-500 focus:border-orange-500"
        placeholder="e.g., 10"
      />
    </div>
  </div>
</div>
{/* Additional Property Details */}
<div className="pt-8 mt-8">
  <h2 className="text-2xl font-semibold text-gray-800 mb-4">Addtional Infomation</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    {/* Property Type */}
    <div>
      <label className="block text-sm font-medium text-gray-700">Property Type</label>
      <select
        name="propertyType"
        value={formData.propertyType}
        onChange={handleInputChange}
        className="mt-1 block w-full rounded-md border border-gray-300 p-2 shadow-sm focus:ring-orange-500 focus:border-orange-500"
      >
        <option value="">Select</option>
        <option value="Apartment">Apartment</option>
        <option value="Villa">Villa</option>
        <option value="Bungalow">Bungalow</option>
        <option value="Studio">Studio</option>
      </select>
    </div>

    {/* Bedrooms */}
    <div>
      <label className="block text-sm font-medium text-gray-700">Bedrooms</label>
      <input
        type="number"
        name="bedrooms"
        value={formData.bedrooms}
        onChange={handleInputChange}
        className="mt-1 block w-full rounded-md border border-gray-300 p-2 shadow-sm focus:ring-orange-500 focus:border-orange-500"
      />
    </div>

    {/* Bathrooms */}
    <div>
      <label className="block text-sm font-medium text-gray-700">Bathrooms</label>
      <input
        type="number"
        name="bathrooms"
        value={formData.bathrooms}
        onChange={handleInputChange}
        className="mt-1 block w-full rounded-md border border-gray-300 p-2 shadow-sm focus:ring-orange-500 focus:border-orange-500"
      />
    </div>

    {/* Area (sqft) */}
    <div>
      <label className="block text-sm font-medium text-gray-700">Area (sqft)</label>
      <input
        type="number"
        name="area"
        value={formData.area}
        onChange={handleInputChange}
        className="mt-1 block w-full rounded-md border border-gray-300 p-2 shadow-sm focus:ring-orange-500 focus:border-orange-500"
        placeholder="e.g., 1200"
      />
    </div>

    {/* Year Built */}
    <div>
      <label className="block text-sm font-medium text-gray-700">Year Built</label>
      <input
        type="number"
        name="yearBuilt"
        value={formData.yearBuilt}
        onChange={handleInputChange}
        className="mt-1 block w-full rounded-md border border-gray-300 p-2 shadow-sm focus:ring-orange-500 focus:border-orange-500"
      />
    </div>

    {/* Parking Availability */}
    <div>
      <label className="block text-sm font-medium text-gray-700">Parking</label>
      <select
        name="parking"
        value={formData.parking}
        onChange={handleInputChange}
        className="mt-1 block w-full rounded-md border border-gray-300 p-2 shadow-sm focus:ring-orange-500 focus:border-orange-500"
      >
        <option value="">Select</option>
        <option value="Available">Available</option>
        <option value="Not Available">Not Available</option>
      </select>
    </div>
  </div>
</div>
<div className="flex justify-center mt-4">
  <button
    type="submit"
    className="bg-orange-600 text-white font-semibold py-2 px-6 rounded-md hover:bg-orange-700 transition"
  >
    Add Property
  </button>
</div>

        </form>
      </div>
    </div>
  );
}
