import { useState } from 'react';
import image7 from "../assets/image-7.webp";
export default function AppLoan() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    amount: '',
    reason: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", form);
    // Add actual submission logic here
  };

  return (
    <div className="overflow-hidden bg-white py-10 sm:py-18">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Heading and Subheading */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Do you need a home loan?
          Get pre-approved
          </h2>
          <p className="mt-4 text-xl text-gray-600">
          Find a lender who can offer competitive mortgage rates and help you with pre-approval.
          </p>
        </div>

        {/* Form + Image Grid */}
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          
          {/* Loan Application Form */}
          <div className="lg:pt-4 lg:pr-8">
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">Apply for a Loan</h3>

              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label htmlFor="amount" className="block text-sm font-medium text-gray-700">Loan Amount ($)</label>
                <input
                  type="number"
                  name="amount"
                  value={form.amount}
                  onChange={handleChange}
                  required
                  className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label htmlFor="reason" className="block text-sm font-medium text-gray-700">Reason for Loan</label>
                <textarea
                  name="reason"
                  value={form.reason}
                  onChange={handleChange}
                  rows={4}
                  className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-orange-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-orange-700 transition duration-300"
              >
                Submit Application
              </button>
            </form>
          </div>

          {/* Image on Right */}
          <img
            alt="Loan illustration"
            src={image7}
            className="h-[24rem] w-full object-cover rounded-xl ring-1 shadow-xl ring-gray-400/10"
          />
        </div>
      </div>
    </div>
  );
}
