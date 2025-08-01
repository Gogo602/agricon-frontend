
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import LeftSide from './LeftSide';
import { ClipLoader } from 'react-spinners';


const base_url = import.meta.env.VITE_BASE_URL1; 

const VerifyEmailOTP = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: location.state?.email || '', code: location.state?.otp || '' });
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [loading, setLoading] = useState(false);

  // Redirect to /signup if no email is provided
  useEffect(() => {
    const token = localStorage.getItem('access_token');
    if (!formData.email || !token) {
      setError('No email or authentication token. Please sign up again.');
      setTimeout(() => navigate('/signup'), 2000);
    }
  }, [formData.email, navigate]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    setLoading(true);

    //checks if authentication tokens exists
    const token = localStorage.getItem('access_token');
    if (!token) {
      setError('No authentication token. Please sign up again.');
      setTimeout(() => navigate('/signup'), 2000);
      return;
    }
    
    try {
      const response = await axios.post(
        `${base_url}/api/v1/auth/verify-email-otp/`,
        { email: formData.email, code: formData.code },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('access_token')}`,
            'Content-Type': 'application/json',
          },
        }
      );

      setSuccess(response.data.message || 'Email verified successfully!');
      setTimeout(() => navigate('/login'), 2000);
    } catch (err) {
      setError(err.response?.data?.detail || 'Invalid OTP. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleResendOTP = async () => {
    setError(null);
    setSuccess(null);
    setLoading(true);
    try {
      const response = await axios.post(
        `${base_url}/api/v1/auth/otp/resend/`,
        { email: formData.email },
        { headers: { 'Content-Type': 'application/json' } }
      );
      const newOtp = response.data.otp || response.data.message?.match(/\d{6}/)?.[0]; // Extract OTP if in message
      if (newOtp) {
        setFormData({ ...formData, code: newOtp });
        setSuccess(`OTP resent successfully! Your new OTP is: ${newOtp}`);
      } else {
        setSuccess('OTP resent successfully, but no new OTP received.');
      }
    } catch (err) {
      setError(err.response?.data?.detail || 'Failed to resend OTP.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen lg:flex items-center justify-center bg-gray-50 p-2 md:p-6">
      <div className="py-16 lg:py-0 bg-white rounded-xl shadow-md w-full max-w-6xl grid lg:grid-cols-2 md:gap-2">
        {/* Left Side (Image & Info) */}
        <LeftSide />

        {/* Right Side (Form) */}
        <div className="flex flex-col items-center justify-center lg:px-4 lg:py-8 p-4 md:p-10 space-y-6">
          <div className='text-center'>
            <h2 className="text-2xl font-bold text-gray-900 mb-4"> OTP Verification</h2>
            {location.state?.otp && !success?.includes (
              <p className="text-green-700 text-sm font-semibold text-center mb-4">
                Your OTP is: {location.state.otp}
              </p>
            )}
            {success?.includes('Your new OTP is') && (
              <p className="text-green-700 text-sm font-semibold text-center mb-4">
                {success}
              </p>
            )}
            <p className="text-sm text-gray-600 mt-1">
              Enter the OTP sent to your email: <span className="font-semibold">{formData.email}</span>
            </p>
          </div>
          {error && <p className="text-red-500 text-sm text-center">{error}</p>}
          {success && !success.includes('Your new OTP is') && <p className="text-green-700 text-sm text-center">{success}</p>}
          <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-md">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="code">
                OTP Code
              </label>
              <input
                type="text"
                id="code"
                placeholder="123456"
                value={formData.code}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md bg-gray-100 text-sm focus:outline-none focus:ring-2 focus:ring-green-700 text-gray-700"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#02402D] text-white py-2 rounded-md hover:bg-green-800 transition disabled:opacity-50"
              disabled={loading || !formData.email}
            >
              {loading ? <ClipLoader color='#FFFFFF' size={27} /> : 'Verify OTP'}
            </button>
          </form>
          <p className="text-sm text-center text-gray-700">
            Didn’t receive an OTP?{' '}
            <button
              onClick={handleResendOTP}
              className="font-semibold text-green-900 hover:underline"
              disabled={loading || !formData.email}
            >
              Resend OTP
            </button>
          </p>
        </div>
      </div>
    </div> 
  );
};

export default VerifyEmailOTP;