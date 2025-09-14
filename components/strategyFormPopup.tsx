"use client";
import { useState, useEffect } from "react";

export default function StrategyFormPopup({ onClose }: { onClose: () => void }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    linkedin: "",
    goal: [] as string[],
    revenue: "",
    help: [] as string[],
    challenges: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // 🔒 Disable background scroll when popup is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked } = e.target;
    setFormData((prev) => {
      const currentValues = prev[name as keyof typeof prev] as string[];
      if (checked) {
        return { ...prev, [name]: [...currentValues, value] };
      } else {
        return { ...prev, [name]: currentValues.filter((v) => v !== value) };
      }
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const res = await fetch("https://ubrand-backend.vercel.app/api/sendMail", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    setLoading(false);

    if (res.ok) {
      setSuccess(true);
      setFormData({
        name: "",
        email: "",
        linkedin: "",
        goal: [],
        revenue: "",
        help: [],
        challenges: "",
      });
    } else {
      alert("Failed to send. Please try again.");
    }
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[9999] bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-lg max-h-[90vh] overflow-y-auto p-6 relative">
        {/* ❌ Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 hover:text-black text-xl"
        >
          ×
        </button>

        <h2 className="text-2xl font-semibold mb-4 text-black">Strategy Call Form</h2>

        {success ? (
          <p className="text-green-600 font-medium">
            ✅ Your submission was sent successfully!
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="text-black w-full p-2 border rounded"
              required
            />
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              type="email"
              placeholder="Your Email"
              className="text-black w-full p-2 border rounded"
              required
            />
            <input
              name="linkedin"
              value={formData.linkedin}
              onChange={handleChange}
              placeholder="LinkedIn URL"
              className="text-black w-full p-2 border rounded"
              required
            />

            {/* Goals (Checkboxes) */}
            <div>
              <p className="font-medium text-black">Your biggest goals:</p>
              {["Grow my following", "Generate more leads", "Become a thought leader", "Improve my content"].map(
                (option) => (
                  <label key={option} className="text-black flex items-center space-x-2">
                    <input
                      type="checkbox"
                      name="goal"
                      value={option}
                      checked={formData.goal.includes(option)}
                      onChange={handleCheckboxChange}
                    />
                    <span>{option}</span>
                  </label>
                )
              )}
            </div>

            {/* Revenue (Radio buttons) */}
            <div>
              <p className="font-medium text-black">Your current revenue:</p>
              {["$0 - $2,500", "$2,500 - $5,000", "$5,000 - $10,000", "$10,000 - $20,000", "$20,000+"].map(
                (option) => (
                  <label key={option} className="text-black flex items-center space-x-2">
                    <input
                      type="radio"
                      name="revenue"
                      value={option}
                      checked={formData.revenue === option}
                      onChange={handleChange}
                    />
                    <span>{option}</span>
                  </label>
                )
              )}
            </div>

            {/* Help (Checkboxes) */}
            <div>
              <p className="font-medium text-black">How can I help you?</p>
              {["LinkedIn Rebrand", "1:1 Coaching", "Content Design", "LinkedIn Strategy"].map((option) => (
                <label key={option} className="text-black flex items-center space-x-2">
                  <input
                    type="checkbox"
                    name="help"
                    value={option}
                    checked={formData.help.includes(option)}
                    onChange={handleCheckboxChange}
                  />
                  <span>{option}</span>
                </label>
              ))}
            </div>

            <textarea
              name="challenges"
              value={formData.challenges}
              onChange={handleChange}
              placeholder="Biggest challenges on LinkedIn?"
              className="text-black w-full p-2 border rounded"
              required
            />

            <button
              type="submit"
              disabled={loading}
              className="bg-[#fec400] hover:bg-yellow-500 text-black font-semibold px-4 py-2 rounded w-full"
            >
              {loading ? "Sending..." : "Submit"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
