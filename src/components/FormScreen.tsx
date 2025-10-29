import { useState } from 'react';
import { CheckCircle2, AlertCircle, BookOpen, Clock, Target } from 'lucide-react';

interface FormScreenProps {
  onStartQuiz: (name: string, mobile: string, email?: string) => Promise<void>;
}

export default function FormScreen({ onStartQuiz }: FormScreenProps) {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!mobile.trim()) {
      newErrors.mobile = 'Mobile number is required';
    } else if (!/^\d{10}$/.test(mobile.replace(/\D/g, ''))) {
      newErrors.mobile = 'Please enter a valid 10-digit mobile number';
    }

    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!agreedToTerms) {
      newErrors.terms = 'You must agree to the terms and conditions';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      try {
        await onStartQuiz(name.trim(), mobile.trim(), email.trim() || undefined);
      } catch (error: any) {
        setErrors({ mobile: error.message || 'An error occurred. Please try again.' });
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <div className="min-h-screen p-6 flex items-start justify-start pt-20 pl-20 bg-cover bg-center bg-no-repeat relative" style={{ backgroundImage: 'url(/bg2.png)' }}>
      <div className="w-full flex items-start justify-start" >
        <div className="w-full max-w-4xl  mt-28">
            <form onSubmit={handleSubmit} >
              <div className="space-y-12">
              <div >
                <label htmlFor="name" className="block text-5xl text-[#266FB5] font-extrabold  mb-8">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={`w-full px-8 py-4 text-4xl transition-colors bg-[#F0F0F0] ${
                    errors.name
                      ? 'border-2 border-red-300 focus:border-red-500'
                      : 'border-0'
                  } focus:outline-none`}
                  style={{ borderRadius: '14px' }}
                />
                {errors.name && (
                  <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" />
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="mobile" className="block text-5xl text-[#266FB5] font-extrabold mb-8">
                  Mobile No.
                </label>
                <input
                  type="tel"
                  id="mobile"
                  value={mobile}
                  onChange={(e) => {
                    const value = e.target.value.replace(/\D/g, '');
                    if (value.length <= 10) {
                      setMobile(value);
                    }
                  }}
                  maxLength={10}
                  className={`w-full px-8 py-4 text-4xl transition-colors bg-[#F0F0F0] ${
                    errors.mobile
                      ? 'border-2 border-red-300 focus:border-red-500'
                      : 'border-0'
                  } focus:outline-none`}
                  style={{ borderRadius: '14px' }}
                />
                {errors.mobile && (
                  <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" />
                    {errors.mobile}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-5xl text-[#266FB5] font-extrabold mb-8">
                  Email ID <span className='font-normal'>(Optional)</span>
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`w-full px-8 py-4 text-4xl transition-colors bg-[#F0F0F0] ${
                    errors.email
                      ? 'border-2 border-red-300 focus:border-red-500'
                      : 'border-0'
                  } focus:outline-none`}
                  style={{ borderRadius: '14px' }}
                />
                {errors.email && (
                  <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" />
                    {errors.email}
                  </p>
                )}
              </div>

              <div>
                <label className="flex mt-12 items-start gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={agreedToTerms}
                    onChange={(e) => setAgreedToTerms(e.target.checked)}
                    className="mt-1 w-24 h-12 rounded border-2  text-[#5F259D] cursor-pointer "
                  />
                  <span className="text-3xl text-black italic leading-relaxed">
                    *By continuing, you allow to use your details for notifying
your winning status and coordinating the delivery of the
prize you may have
                  </span>
                </label>
                {errors.terms && (
                  <p className="mt-2 text-sm text-red-600 flex items-center gap-1 bg-white px-2 py-1 rounded">
                    <AlertCircle className="w-4 h-4" />
                    {errors.terms}
                  </p>
                )}
              </div>
              </div>
              <div className="flex justify-center mt-20">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-[380px] py-6 bg-gradient-to-r from-[#41B646] to-[#A8D61F] text-white text-4xl font-bold transition-all hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 "
                  style={{ borderRadius: '60px', boxShadow: '0 0 20px rgba(0, 0, 0, 0.3)' }}
                >
                  {isSubmitting ? 'Checking...' : 'Start Quiz'}
                </button>
              </div>
            </form>
        </div>
      </div>
    </div>
  );
}

function Trophy({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
      <path d="M4 22h16" />
      <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
      <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
      <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
    </svg>
  );
}
