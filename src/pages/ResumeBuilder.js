import React, { useState } from "react";
import { db } from "../pages/Firebase";
import { collection, addDoc } from "firebase/firestore";
import "../styles/ResumeBuilder.css";

const ResumeBuilder = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    maritalStatus: "",
    birthday: "",
    phoneNumber: "",
    city: "",
    gender: "",
    aboutMe: "",
    skills: "",
    workExperience: "",
    education: "",
    languages: "",
    jobPreferences: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "resumes"), {
        ...formData,
        submittedAt: new Date(),
      });

      alert("Resume submitted successfully!");
      setFormData({
        fullName: "",
        email: "",
        maritalStatus: "",
        birthday: "",
        phoneNumber: "",
        city: "",
        gender: "",
        aboutMe: "",
        skills: "",
        workExperience: "",
        education: "",
        languages: "",
        jobPreferences: "",
      });
    } catch (error) {
      console.error("Error submitting resume:", error);
      alert("Error submitting resume.");
    }
  };

  return (
    <div className="resume-page">
      <main>
        <div className="resume-builder-container">
          <h1 className="resume-title">Resume Builder</h1>

          <form onSubmit={handleSubmit} className="resume-form">
            <div className="ContainerContainer">
              {/* LEFT SIDE */}
              <div className="container1">
                <div className="logo-upload">
                  <label className="upload-label" htmlFor="userLogo">
                    Upload Image
                  </label>
                  <input type="file" id="userLogo" accept="image/*" />
                </div>

                <div>
                  <label htmlFor="fullName">Full Name</label>
                  <input
                    type="text"
                    id="fullName"
                    placeholder="e.g. John Doe"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="e.g. johndoe@gmail.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="maritalStatus">Marital Status</label>
                  <input
                    type="text"
                    id="maritalStatus"
                    placeholder="e.g. Married"
                    value={formData.maritalStatus}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="birthday">Birthday</label>
                  <input
                    type="date"
                    id="birthday"
                    value={formData.birthday}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="phoneNumber">Mobile Number</label>
                  <input
                    type="text"
                    id="phoneNumber"
                    placeholder="e.g. 09190065684"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="city">City</label>
                  <input
                    type="text"
                    id="city"
                    placeholder="e.g. Manila"
                    value={formData.city}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="gender">Gender</label>
                  <input
                    type="text"
                    id="gender"
                    placeholder="e.g. Male"
                    value={formData.gender}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              {/* RIGHT SIDE */}
              <div className="container2">
                <section>
                  <label htmlFor="aboutMe">About Me</label>
                  <textarea
                    id="aboutMe"
                    placeholder="Write a short description about yourself..."
                    value={formData.aboutMe}
                    onChange={handleChange}
                    required
                  ></textarea>
                </section>

                <section>
                  <label htmlFor="skills">Professional Skills</label>
                  <textarea
                    id="skills"
                    placeholder="e.g. Communication, Teamwork, Problem-Solving..."
                    value={formData.skills}
                    onChange={handleChange}
                    required
                  ></textarea>
                </section>

                <section>
                  <label htmlFor="workExperience">Work Experience</label>
                  <textarea
                    id="workExperience"
                    placeholder="e.g. Company, Role, Duration, Key Responsibilities..."
                    value={formData.workExperience}
                    onChange={handleChange}
                    required
                  ></textarea>
                </section>

                <section>
                  <label htmlFor="education">Education</label>
                  <textarea
                    id="education"
                    placeholder="e.g. Degree, Institution, Year of Graduation..."
                    value={formData.education}
                    onChange={handleChange}
                    required
                  ></textarea>
                </section>

                <section>
                  <label htmlFor="languages">Languages</label>
                  <textarea
                    id="languages"
                    placeholder="e.g. English, Filipino, Spanish..."
                    value={formData.languages}
                    onChange={handleChange}
                    required
                  ></textarea>
                </section>

                <section>
                  <label htmlFor="jobPreferences">Job Preferences</label>
                  <textarea
                    id="jobPreferences"
                    placeholder="e.g. Desired Job Title, Location, Salary Expectations..."
                    value={formData.jobPreferences}
                    onChange={handleChange}
                    required
                  ></textarea>
                </section>

                <div className="SaveButton">
                  <button type="submit" className="submit-btn">
                    Save Resume
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default ResumeBuilder;
