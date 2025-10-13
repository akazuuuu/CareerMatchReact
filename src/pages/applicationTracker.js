import React, { useEffect, useState } from "react";
import { db } from "../pages/Firebase";
import { collection, getDocs, query, where, orderBy } from "firebase/firestore";
import "../styles/ApplicationTracker.css";

const ApplicationTracker = ({ userEmail }) => {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        // Try to use email from prop or fallback to localStorage
        const email = userEmail || localStorage.getItem("userEmail");
        if (!email) {
          console.warn("⚠️ No user email found. Unable to load applications.");
          setLoading(false);
          return;
        }

        console.log("📧 Fetching applications for:", email);

        // Query Firestore for applications under userApplications collection
        const q = query(
          collection(db, "userApplications"),
          where("userEmail", "==", email),
          orderBy("submittedAt", "desc")
        );

        const snapshot = await getDocs(q);

        if (snapshot.empty) {
          console.log("❌ No applications found for this user.");
          setApplications([]);
        } else {
          const appsData = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          console.log("✅ Applications loaded:", appsData);
          setApplications(appsData);
        }
      } catch (error) {
        console.error("🔥 Error fetching applications:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchApplications();
  }, [userEmail]);

  if (loading) return <div className="tracker-container">Loading...</div>;

  return (
    <div className="tracker-container">
      <h1 className="tracker-title">Your Job Applications</h1>

      {applications.length === 0 ? (
        <p className="no-applications">No applications found.</p>
      ) : (
        <table className="applications-table">
          <thead>
            <tr>
              <th>Job Title</th>
              <th>Company</th>
              <th>Status</th>
              <th>Date Applied</th>
            </tr>
          </thead>
          <tbody>
            {applications.map((app) => (
              <tr key={app.id}>
                <td>{app.jobTitle || "Untitled"}</td>
                <td>{app.company || "N/A"}</td>
                <td className={`status ${app.status?.toLowerCase() || "pending"}`}>
                  {app.status || "Pending"}
                </td>
                <td>
                  {app.submittedAt?.toDate
                    ? app.submittedAt.toDate().toLocaleString()
                    : "N/A"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ApplicationTracker;
