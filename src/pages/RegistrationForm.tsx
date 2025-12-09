import React, { useState } from "react";
import backgroundImage from "../assets/bg.png";
import { useNavigate } from "react-router-dom";
import { Loader2 } from "lucide-react";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  mobileNumber: string;
  organization: string;
  jobTitle: string;
  industry: string;
  purposeForJoining: string;
}

interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  mobileNumber?: string;
  organization?: string;
  jobTitle?: string;
  industry?: string;
  purposeForJoining?: string;
}

export default function RegistrationForm() {
  const navigate = useNavigate();
  const SUPABASE_URL = "https://tgiqajkenaztyyghqhkt.supabase.co";
  const SUPABASE_KEY =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRnaXFhamtlbmF6dHl5Z2hxaGt0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ5MTcxODcsImV4cCI6MjA4MDQ5MzE4N30.vt0TESifCFtMeYWUAaPKRfWhJIRolQ-Qo3qbYZiiTc0";

  const [loading, setLoading] = useState(false);

  const [errors, setErrors] = useState<FormErrors>({});
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    mobileNumber: "",
    organization: "",
    jobTitle: "",
    industry: "",
    purposeForJoining: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{10}$/;

    if (!formData.firstName.trim())
      newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!emailRegex.test(formData.email))
      newErrors.email = "Invalid email format";
    if (!formData.mobileNumber.trim())
      newErrors.mobileNumber = "Mobile number is required";
    else if (!phoneRegex.test(formData.mobileNumber.replace(/\D/g, "")))
      newErrors.mobileNumber = "Mobile number must be 10 digits";
    if (!formData.organization.trim())
      newErrors.organization = "Organization is required";
    if (!formData.jobTitle.trim()) newErrors.jobTitle = "Job title is required";
    if (!formData.industry.trim()) newErrors.industry = "Industry is required";
    if (!formData.purposeForJoining.trim())
      newErrors.purposeForJoining = "Purpose for joining is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleRegister = async () => {
    if (validateForm()) {
      setLoading(true);
      try {
        const submitData = {
          first_name: formData.firstName,
          last_name: formData.lastName,
          email: formData.email,
          mobile_number: formData.mobileNumber,
          organization: formData.organization,
          job_title: formData.jobTitle,
          industry: formData.industry,
          purpose_for_joining: formData.purposeForJoining,
          created_at: new Date().toISOString(),
        };

        // Insert data into Supabase using REST API
        const response = await fetch(`${SUPABASE_URL}/rest/v1/registrations`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            apikey: SUPABASE_KEY,
            Authorization: `Bearer ${SUPABASE_KEY}`,
          },
          body: JSON.stringify(submitData),
        });

        if (!response.ok) {
          const error = await response.json();
          console.error("Supabase error:", error);
          setLoading(false);
          alert("Error saving data. Please try again.");
          return;
        }

        navigate("/success");
        setLoading(false);
      } catch (error) {
        console.error("Error submitting form:", error);
        alert("Error submitting form. Please try again.");
        setLoading(false);
      }
    }
  };

  const handleCancel = () => {
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      mobileNumber: "",
      organization: "",
      jobTitle: "",
      industry: "",
      purposeForJoining: "",
    });
  };

  return (
    <div className="pb-12">
      <img
        src={backgroundImage}
        alt="Background"
        className="w-full h-60 md:object-cover object-contain object-top"
      />

      <div className="p-3">
        <div
          className="max-w-2xl mx-auto bg-white rounded shadow-sm -mt-24 z-10 relative"
          style={{
            boxShadow:
              " rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
          }}
        >
          <div className="mb-8 border-b pb-4 p-10">
            <h1 className="text-2xl font-bold text-gray-800">
              GWC's Webinar On AI-Powered Booking Amendment
            </h1>
            <p className="text-gray-600 mt-2">
              Thursday, 18 Dec, 8:00 PM IST
            </p>
          </div>

          <div className="px-10 pb-8">
            <h2 className="text-lg font-semibold text-gray-800 mb-6">
              Registration Information
            </h2>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  First name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="firstName"
                  placeholder="First name"
                  value={formData.firstName}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 ${
                    errors.firstName
                      ? "border-red-500 focus:ring-red-500"
                      : "border-gray-300 focus:ring-blue-500"
                  }`}
                />
                {errors.firstName && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.firstName}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Last name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last name"
                  value={formData.lastName}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 ${
                    errors.lastName
                      ? "border-red-500 focus:ring-red-500"
                      : "border-gray-300 focus:ring-blue-500"
                  }`}
                />
                {errors.lastName && (
                  <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
                )}
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 ${
                  errors.email
                    ? "border-red-500 focus:ring-red-500"
                    : "border-gray-300 focus:ring-blue-500"
                }`}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Mobile Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                name="mobileNumber"
                placeholder="Mobile Number"
                value={formData.mobileNumber}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 ${
                  errors.mobileNumber
                    ? "border-red-500 focus:ring-red-500"
                    : "border-gray-300 focus:ring-blue-500"
                }`}
              />
              {errors.mobileNumber && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.mobileNumber}
                </p>
              )}
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Organization <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="organization"
                placeholder="Organization"
                value={formData.organization}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 ${
                  errors.organization
                    ? "border-red-500 focus:ring-red-500"
                    : "border-gray-300 focus:ring-blue-500"
                }`}
              />
              {errors.organization && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.organization}
                </p>
              )}
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Job Title <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="jobTitle"
                placeholder="Job Title"
                value={formData.jobTitle}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 ${
                  errors.jobTitle
                    ? "border-red-500 focus:ring-red-500"
                    : "border-gray-300 focus:ring-blue-500"
                }`}
              />
              {errors.jobTitle && (
                <p className="text-red-500 text-sm mt-1">{errors.jobTitle}</p>
              )}
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Industry <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="industry"
                placeholder="Industry"
                value={formData.industry}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 ${
                  errors.industry
                    ? "border-red-500 focus:ring-red-500"
                    : "border-gray-300 focus:ring-blue-500"
                }`}
              />
              {errors.industry && (
                <p className="text-red-500 text-sm mt-1">{errors.industry}</p>
              )}
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Purpose for Joining <span className="text-red-500">*</span>
              </label>
              <textarea
                name="purposeForJoining"
                placeholder="Purpose for Joining"
                value={formData.purposeForJoining}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 ${
                  errors.purposeForJoining
                    ? "border-red-500 focus:ring-red-500"
                    : "border-gray-300 focus:ring-blue-500"
                }`}
                rows={3}
              />
              {errors.purposeForJoining && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.purposeForJoining}
                </p>
              )}
            </div>

            <div className="flex gap-4">
              {loading ? (
                <div className="w-full">
                  <button
                    disabled
                    className="w-full bg-primary text-white font-medium py-2 px-4 rounded transition opacity-50 cursor-not-allowed"
                  >
                    <Loader2 className="animate-spin mr-2 h-5 w-5 inline-block" />
                    Registering...
                  </button>
                </div>
              ) : (
                <div className="w-full">
                  <button
                    onClick={handleRegister}
                    className="w-full bg-primary text-white font-medium py-2 px-4 rounded transition"
                  >
                    Register
                  </button>
                </div>
              )}
              <button
                onClick={handleCancel}
                className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-4 rounded transition"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
