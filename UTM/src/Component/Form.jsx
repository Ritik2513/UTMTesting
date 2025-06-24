import React, { useEffect, useState } from "react";
import "./form.css";


const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    utm_source: "",
    utm_medium: "",
    utm_campaign: "",
  });

  // Function to extract UTM params from URL
  const getUTMParameter = (name) => {
    const url = new URL(window.location.href);
    return url.searchParams.get(name) || "";
  };

  // Capture UTM parameters on page load
  useEffect(() => {
    setFormData((prevData) => ({
      ...prevData,
      utm_source: getUTMParameter("utm_source"),
      utm_medium: getUTMParameter("utm_medium"),
      utm_campaign: getUTMParameter("utm_campaign"),
    }));
  }, []);

  // Replace with your Google Form URL
  const GOOGLE_FORM_ACTION_URL =
    "https://docs.google.com/forms/d/e/1FAIpQLSdajzc2kq57Qz3AeKWTF4uM41-4U2zdpn9B_elGn_4mxaIPVw/formResponse";

  // Map to your Google Form entry IDs
  const GOOGLE_FORM_FIELDS = {
    name: "entry.1243920682",      // replace with your Name field ID
    email: "entry.311425732",     // replace with your Email field ID
    phone: "entry.1307519826",     // replace with your Phone field ID
    utm_source: "entry.1945827153",
    utm_medium: "entry.1801329976",
    utm_campaign: "entry.260384815",
  };

  return (
    <form action={GOOGLE_FORM_ACTION_URL} method="POST" target="_self">
      <input
        type="text"
        name={GOOGLE_FORM_FIELDS.name}
        placeholder="Name"
        required
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        value={formData.name}
      />

      <input
        type="email"
        name={GOOGLE_FORM_FIELDS.email}
        placeholder="Email"
        required
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        value={formData.email}
      />

      <input
        type="tel"
        name={GOOGLE_FORM_FIELDS.phone}
        placeholder="Phone"
        required
        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        value={formData.phone}
      />

      {/* Hidden UTM Fields */}
      <input
        type="hidden"
        name={GOOGLE_FORM_FIELDS.utm_source}
        value={formData.utm_source}
      />
      <input
        type="hidden"
        name={GOOGLE_FORM_FIELDS.utm_medium}
        value={formData.utm_medium}
      />
      <input
        type="hidden"
        name={GOOGLE_FORM_FIELDS.utm_campaign}
        value={formData.utm_campaign}
      />

      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
