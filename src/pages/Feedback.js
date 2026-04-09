import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Feedback.css";

function Feedback() {
  // React Hooks - useState
  const [count, setCount] = useState(0);
  const [chars, setChars] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    feedbackType: "",
    rating: "",
    feedback: ""
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // React Hooks - useEffect (load count from localStorage)
  useEffect(() => {
    const saved = localStorage.getItem("feedbackCount");
    if (saved) setCount(parseInt(saved));
  }, []);

  // React Events - handleInputChange
  function handleInputChange(e) {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error for this field when user types
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ""
      });
    }
  }

  // React Events - handleRatingChange
  function handleRatingChange(e) {
    setFormData({
      ...formData,
      rating: e.target.value
    });
    
    if (errors.rating) {
      setErrors({
        ...errors,
        rating: ""
      });
    }
  }

  // React Events - handleTextareaChange
  function handleTextareaChange(e) {
    const value = e.target.value;
    setFormData({
      ...formData,
      feedback: value
    });
    setChars(value.length);
    
    if (errors.feedback) {
      setErrors({
        ...errors,
        feedback: ""
      });
    }
  }

  // Validation function
  function validateForm() {
    const newErrors = {};
    
    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }
    
    // Email validation - must end with @gmail.com
    const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Email must end with @gmail.com";
    }
    
    // Phone validation (optional but if provided must be 10 digits)
    if (formData.phone && !/^[0-9]{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone must be exactly 10 digits";
    }
    
    // Feedback type validation
    if (!formData.feedbackType) {
      newErrors.feedbackType = "Please select feedback type";
    }
    
    // Rating validation
    if (!formData.rating) {
      newErrors.rating = "Please select a rating";
    }
    
    // Feedback validation
    if (!formData.feedback.trim()) {
      newErrors.feedback = "Feedback cannot be empty";
    } else if (formData.feedback.trim().length < 10) {
      newErrors.feedback = "Feedback must be at least 10 characters";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  // Form Submission - handleSubmit
  function handleSubmit(e) {
    e.preventDefault(); // Prevent default form submission
    setIsSubmitting(true);
    
    // Validate form
    if (!validateForm()) {
      setIsSubmitting(false);
      return;
    }
    
    // Submit logic
    let newCount = count + 1;
    setCount(newCount);
    localStorage.setItem("feedbackCount", newCount);
    
    // Show success message
    alert(`✅ Feedback submitted successfully!\n\n📊 Total Feedback: ${newCount}\n👤 Name: ${formData.name}\n⭐ Rating: ${formData.rating}/5\n📝 Thank you for your feedback!`);
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      feedbackType: "",
      rating: "",
      feedback: ""
    });
    setChars(0);
    setIsSubmitting(false);
    
    // Optional: Reset form fields
    e.target.reset();
  }

  return (
    <div>
      {/* React Router - Navigation Links */}
      <div className="navbar">
        <Link to="/">Home</Link>
        <Link to="/register">Register</Link>
        <Link to="/course">Course</Link>
        <Link to="/assessment">Assessment</Link>
        <Link to="/feedback" className="active">Feedback</Link>
      </div>

      <div className="header">
        <h1>Feedback & Contact Us</h1>
      </div>

      {/* Total Count Display */}
      <div className="totalFeedbackBox">
        📊 Total Feedback Submitted: <span className="count-number">{count}</span>
      </div>

      <hr className="divider" />

      <div className="container">
        {/* Feedback Form - React Component */}
        <div className="card feedback-form">
          <h2>📝 Feedback Form</h2>

          {/* React Form Submission */}
          <form onSubmit={handleSubmit} noValidate>
            
            {/* Name Field */}
            <div className="form-group">
              <label>👤 Name:</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Enter your name"
                className={errors.name ? "error-input" : ""}
              />
              {errors.name && <span className="error-text">{errors.name}</span>}
            </div>

            {/* Email Field */}
            <div className="form-group">
              <label>📧 Email:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter your email (must be @gmail.com)"
                className={errors.email ? "error-input" : ""}
              />
              {errors.email && <span className="error-text">{errors.email}</span>}
            </div>

            {/* Phone Field (Optional) */}
            <div className="form-group">
              <label>📞 Phone (Optional):</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="10 digit phone number"
                className={errors.phone ? "error-input" : ""}
              />
              {errors.phone && <span className="error-text">{errors.phone}</span>}
            </div>

            {/* Feedback Type Dropdown */}
            <div className="form-group">
              <label>📌 Feedback Type:</label>
              <select
                name="feedbackType"
                value={formData.feedbackType}
                onChange={handleInputChange}
                className={errors.feedbackType ? "error-input" : ""}
              >
                <option value="">Select Type</option>
                <option value="Suggestion">💡 Suggestion</option>
                <option value="Query">❓ Query</option>
                <option value="Bug">🐛 Bug Report</option>
                <option value="Appreciation">🎉 Appreciation</option>
              </select>
              {errors.feedbackType && <span className="error-text">{errors.feedbackType}</span>}
            </div>

            {/* Rating - Radio Buttons */}
            <div className="form-group">
              <label>⭐ Rating:</label>
              <div className="ratingBox">
                {[0, 1, 2, 3, 4, 5].map((rate) => (
                  <label key={rate} className="rating-label">
                    <input
                      type="radio"
                      name="rating"
                      value={rate}
                      checked={formData.rating === rate.toString()}
                      onChange={handleRatingChange}
                    />
                    {rate}
                  </label>
                ))}
              </div>
              {errors.rating && <span className="error-text">{errors.rating}</span>}
            </div>

            {/* Feedback Textarea */}
            <div className="form-group">
              <label>📝 Your Feedback:</label>
              <textarea
                name="feedback"
                value={formData.feedback}
                onChange={handleTextareaChange}
                maxLength="200"
                rows="4"
                placeholder="Write your feedback here (max 200 characters) ..."
                className={errors.feedback ? "error-input" : ""}
              ></textarea>
              <div className="smallText">
                Characters: <span className={chars >= 190 ? "warning" : ""}>{chars}</span>/200
              </div>
              {errors.feedback && <span className="error-text">{errors.feedback}</span>}
            </div>

            {/* Submit Button */}
            <button type="submit" className="submit-btn" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "📨 Send Feedback"}
            </button>

          </form>
        </div>

        {/* Contact Us Card */}
        <div className="card contact-card">
          <h2>📞 Contact Us</h2>
          <div className="contact-info">
            <p>📧 <strong>Email:</strong> support@geolearn.com</p>
            <p>📞 <strong>Phone:</strong> +91 9876543210</p>
            <p>📍 <strong>Address:</strong> GeoLearn Pvt. Ltd., India</p>
            <p className="reply-text">✅ We reply within 24 hours</p>
          </div>
        </div>
      </div>

      <hr className="divider" />

      {/* Footer Navigation - React Router */}
      <div className="footer-nav">
        <Link to="/">🏠 Home</Link>
        <Link to="/course">📚 Course</Link>
      </div>
    </div>
  );
}

export default Feedback;