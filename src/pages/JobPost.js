import React, { useState } from "react";
import NavbarCompany from "../component/NavbarCompany";
import FooterComponent from "../component/FooterComponent";
import { db } from "./Firebase";
import { collection, addDoc } from "firebase/firestore";
import "../styles/JobPost.css";
import "../styles/navbarCompany.css";

function JobPost() {
  const [logo, setLogo] = useState("");
  const [preview, setPreview] = useState("");
  const [formData, setFormData] = useState({
    jobTitle: "",
    companyName: "",
    location: "",
    jobType: "",
    salary: "",
    description: "",
    degree: "",
    experience: "",
    employmentLevel: "",
  });

  const handleLogoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setPreview(event.target.result);
        setLogo(event.target.result);
      };
      reader.readAsDataURL(file);
    } else {
      setPreview("");
      setLogo("");
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const jobData = {
      logo,
      title: formData.jobTitle,
      company: formData.companyName,
      location: formData.location,
      type: formData.jobType,
      salary: formData.salary,
      description: formData.description,
      degree: formData.degree,
      experience: formData.experience,
      employmentLevel: formData.employmentLevel,
      datePosted: new Date().toISOString(),
    };

    try {
      await addDoc(collection(db, "jobPosts"), jobData);
      alert("✅ Job successfully posted to Firebase!");
      setFormData({
        jobTitle: "",
        companyName: "",
        location: "",
        jobType: "",
        salary: "",
        description: "",
        degree: "",
        experience: "",
        employmentLevel: "",
      });
      setPreview("");
      setLogo("");
    } catch (error) {
      console.error("❌ Error adding document: ", error);
      alert("Error saving job. Check console for details.");
    }
  };

  return (
    <>
      <NavbarCompany />
      <main className="post-job-container" > 
        <h1>Post a Job</h1>

        <div className="logo-upload">
          <div className="logo-preview" id="logoPreview">
            {preview ? <img src={preview} alt="Company Logo" /> : "Preview"}
          </div>
          <label className="upload-label" htmlFor="companyLogo">
            Upload Logo
          </label>
          <input
            type="file"
            id="companyLogo"
            accept="image/*"
            onChange={handleLogoChange}
          />
        </div>

        <form id="postJobForm" className="post-job-form" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="jobTitle">Job Title</label>
            <input
              type="text"
              id="jobTitle"
              placeholder="e.g. Front-End Developer"
              value={formData.jobTitle}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="companyName">Company Name</label>
            <input
              type="text"
              id="companyName"
              placeholder="e.g. Tech Innovations Inc."
              value={formData.companyName}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="location">Location</label>
            <input
              type="text"
              id="location"
              placeholder="e.g. Manila, Philippines"
              value={formData.location}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="jobType">Job Type</label>
            <select
              id="jobType"
              value={formData.jobType}
              onChange={handleChange}
              required
            >
              <option value="">Select type</option>
              <option>Full-Time</option>
              <option>Part-Time</option>
              <option>Internship</option>
              <option>Remote</option>
            </select>
          </div>

          <div>
            <label htmlFor="salary">Salary Range</label>
            <input
              type="text"
              id="salary"
              placeholder="e.g. ₱40,000 - ₱60,000 / month"
              value={formData.salary}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="description">Job Description</label>
            <textarea
              id="description"
              placeholder="Write a short job description..."
              value={formData.description}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <div>
            <label htmlFor="degree">Required Degree</label>
            <input
              type="text"
              id="degree"
              placeholder="e.g. Bachelor's in Computer Science"
              value={formData.degree}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="experience">Experience</label>
            <input
              type="text"
              id="experience"
              placeholder="e.g. 2-4 years"
              value={formData.experience}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="employmentLevel">Employment Level</label>
            <select
              id="employmentLevel"
              value={formData.employmentLevel}
              onChange={handleChange}
              required
            >
              <option value="">Select level</option>
              <option>Entry-level</option>
              <option>Mid-level</option>
              <option>Senior</option>
              <option>Manager</option>
            </select>
          </div>

          <button type="submit" className="submit-btn">
            Post Job
          </button>
        </form>
      </main>

    </>
  );
}

export default JobPost;
