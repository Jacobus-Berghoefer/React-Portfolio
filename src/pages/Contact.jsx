import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Clear errors when user types
    setErrors({ ...errors, [name]: "" });
  };

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    let newErrors = { ...errors };

    if (!value.trim()) {
      newErrors[name] = "This field is required.";
    } else if (name === "email" && !validateEmail(value)) {
      newErrors.email = "Please enter a valid email address.";
    }

    setErrors(newErrors);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "This field is required.";
    if (!formData.email.trim()) {
      newErrors.email = "This field is required.";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!formData.message.trim()) newErrors.message = "This field is required.";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Handle form submission logic (e.g., API call)
    console.log("Form submitted:", formData);
    alert("Your message has been sent!");

    // Reset form after submission
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="container mx-auto max-w-lg mt-5 p-6 border rounded shadow">
      <h1 className="text-3xl font-bold text-center">Contact Me</h1>

      <form onSubmit={handleSubmit} className="mt-4">
        {/* Name Field */}
        <div className="mb-4">
          <label className="block text-lg font-medium">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            onBlur={handleBlur}
            className="w-full p-2 border rounded"
            placeholder="Enter your name"
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
        </div>

        {/* Email Field */}
        <div className="mb-4">
          <label className="block text-lg font-medium">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className="w-full p-2 border rounded"
            placeholder="Enter your email"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        </div>

        {/* Message Field */}
        <div className="mb-4">
          <label className="block text-lg font-medium">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            onBlur={handleBlur}
            className="w-full p-2 border rounded"
            placeholder="Enter your message"
            rows="4"
          ></textarea>
          {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}