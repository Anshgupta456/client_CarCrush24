'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  ShieldCheck,
  ArrowLeft,
  AlertCircle,
  CheckCircle2,
  KeyRound,
  Check,
} from 'lucide-react';
import { useAdmin } from '../../../context/AdminContext';

export default function AdminForgotPasswordPage() {
  const { requestPasswordReset, resetPasswordWithCode } = useAdmin();

  const [step, setStep] = useState('request'); // 'request' | 'verify' | 'success'
  const [email, setEmail] = useState('admin@carcrush24.com');
  const [otp, setOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [devOtpHint, setDevOtpHint] = useState('');

  // Step 1: Request reset code
  const handleRequestCode = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!email.trim()) {
      setError('Please enter your registered administrator email address.');
      return;
    }

    setLoading(true);
    try {
      const res = await requestPasswordReset(email.trim());
      setLoading(false);
      if (res.success) {
        setSuccess(res.message || 'A 6-digit verification code has been dispatched.');
        if (res.devOtp) {
          setDevOtpHint(res.devOtp);
          setOtp(res.devOtp);
        }
        setStep('verify');
      } else {
        setError(res.error || 'Unable to process reset request for this email.');
      }
    } catch {
      setLoading(false);
      setError('Connection to authentication server failed. Please try again.');
    }
  };

  // Step 2: Verify code & set new password
  const handleResetPassword = async (e) => {
    e.preventDefault();
    setError('');

    if (!otp.trim()) {
      setError('Please enter the 6-digit verification code.');
      return;
    }

    if (!newPassword || newPassword.length < 6) {
      setError('Your new password must be at least 6 characters long.');
      return;
    }

    if (newPassword !== confirmPassword) {
      setError('New password and confirmation password do not match.');
      return;
    }

    setLoading(true);
    try {
      const res = await resetPasswordWithCode(email.trim(), otp.trim(), newPassword);
      setLoading(false);
      if (res.success) {
        setStep('success');
      } else {
        setError(res.error || 'Invalid or expired verification code.');
      }
    } catch {
      setLoading(false);
      setError('Connection error while resetting password.');
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F9F5] flex flex-col justify-center py-12 sm:px-6 lg:px-8 font-sans">
      <div className="sm:mx-auto sm:w-full sm:max-w-md px-4">
        {/* Back Link */}
        <div className="mb-4">
          <Link
            href="/admin/login"
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#1F5C33] hover:text-[#16311F] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Staff Login</span>
          </Link>
        </div>

        {/* Card */}
        <div className="bg-white border border-[#E4E7DE] rounded-3xl p-8 shadow-md space-y-6">
          <div className="text-center space-y-2">
            <div className="flex justify-center mb-2">
              <Image
                src="/logo/light_bg_logo.png"
                alt="CarCrush24"
                width={160}
                height={32}
                priority
                className="h-9 w-auto object-contain"
              />
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1F5C33]/10 text-[#1F5C33] text-xs font-medium">
              <KeyRound className="w-3.5 h-3.5 text-[#1F5C33]" />
              Password Recovery
            </div>
            <h1 className="text-xl font-bold text-[#131A15] tracking-tight font-heading">
              {step === 'request' && 'Forgot Administrator Password'}
              {step === 'verify' && 'Verify Code & Set Password'}
              {step === 'success' && 'Password Reset Complete'}
            </h1>
            <p className="text-xs text-[#5B6660] max-w-sm mx-auto">
              {step === 'request' &&
                'Enter your staff login email. A verification code will be generated to reset your credentials.'}
              {step === 'verify' &&
                `Enter the verification code sent for ${email} along with your new password.`}
              {step === 'success' &&
                'Your administrator credentials have been updated successfully.'}
            </p>
          </div>

          {/* Error & Success notices */}
          {error && (
            <div className="p-3.5 rounded-2xl bg-[#D9534F]/10 border border-[#D9534F]/20 text-[#D9534F] text-xs flex items-start gap-2.5 animate-fadeIn">
              <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
              <div className="flex-1 leading-relaxed">{error}</div>
            </div>
          )}
          {success && step === 'verify' && (
            <div className="p-3.5 rounded-2xl bg-[#188A38]/10 border border-[#188A38]/20 text-[#188A38] text-xs flex items-start gap-2.5 animate-fadeIn">
              <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5" />
              <div className="flex-1 leading-relaxed">{success}</div>
            </div>
          )}

          {/* Dev OTP Hint */}
          {devOtpHint && step === 'verify' && (
            <div className="p-3 rounded-2xl bg-[#6FCF3C]/15 border border-[#6FCF3C]/30 text-[#16311F] text-xs">
              <span className="font-bold">Development / Demo Reset Code: </span>
              <span className="font-mono font-black text-sm bg-white/60 px-2 py-0.5 rounded-md">
                {devOtpHint}
              </span>
            </div>
          )}

          {/* Step 1: Email Form */}
          {step === 'request' && (
            <form onSubmit={handleRequestCode} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-[#131A15] uppercase tracking-wider mb-1.5">
                  Staff Login Email
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#5B6660]">
                    <Mail className="w-4 h-4" />
                  </div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="admin@carcrush24.com"
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#F8F9F5] border border-[#E4E7DE] text-sm text-[#131A15] focus:outline-none focus:border-[#1F5C33] transition-all"
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 rounded-xl bg-[#1F5C33] text-white text-xs font-bold hover:bg-[#16311F] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs disabled:opacity-60"
              >
                {loading ? (
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <KeyRound className="w-4 h-4 text-[#6FCF3C]" />
                )}
                <span>Send Verification Code</span>
              </button>
            </form>
          )}

          {/* Step 2: Verify & New Password Form */}
          {step === 'verify' && (
            <form onSubmit={handleResetPassword} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-[#131A15] uppercase tracking-wider mb-1.5">
                  6-Digit Verification Code
                </label>
                <input
                  type="text"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  placeholder="e.g. 123456"
                  maxLength={6}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#F8F9F5] border border-[#E4E7DE] text-center font-mono text-lg font-bold tracking-widest text-[#131A15] focus:outline-none focus:border-[#1F5C33]"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#131A15] uppercase tracking-wider mb-1.5">
                  New Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#5B6660]">
                    <Lock className="w-4 h-4" />
                  </div>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    placeholder="Minimum 6 characters"
                    className="w-full pl-10 pr-10 py-2.5 rounded-xl bg-[#F8F9F5] border border-[#E4E7DE] text-sm text-[#131A15] focus:outline-none focus:border-[#1F5C33]"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-[#5B6660] hover:text-[#131A15] cursor-pointer"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#131A15] uppercase tracking-wider mb-1.5">
                  Confirm New Password
                </label>
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Re-type new password"
                  className="w-full px-4 py-2.5 rounded-xl bg-[#F8F9F5] border border-[#E4E7DE] text-sm text-[#131A15] focus:outline-none focus:border-[#1F5C33]"
                  required
                />
              </div>

              <div className="pt-2 flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setStep('request')}
                  className="px-4 py-2.5 rounded-xl bg-[#F8F9F5] border border-[#E4E7DE] text-xs font-semibold text-[#5B6660] hover:text-[#131A15] cursor-pointer"
                >
                  Change Email
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="flex-1 py-2.5 rounded-xl bg-[#1F5C33] text-white text-xs font-bold hover:bg-[#16311F] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs disabled:opacity-60"
                >
                  {loading ? (
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <Check className="w-4 h-4 text-[#6FCF3C]" />
                  )}
                  <span>Save New Password</span>
                </button>
              </div>
            </form>
          )}

          {/* Step 3: Success Screen */}
          {step === 'success' && (
            <div className="text-center space-y-4 py-4 animate-fadeIn">
              <div className="w-12 h-12 rounded-full bg-[#188A38]/15 text-[#188A38] mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h2 className="text-base font-bold text-[#131A15]">
                Password Reset Successfully!
              </h2>
              <p className="text-xs text-[#5B6660] leading-relaxed">
                Your administrator credentials have been updated. You can now login with your new password.
              </p>
              <div className="pt-2">
                <Link
                  href="/admin/login"
                  className="inline-flex items-center justify-center w-full py-3 rounded-xl bg-[#1F5C33] text-white text-xs font-bold hover:bg-[#16311F] transition-all shadow-xs"
                >
                  Login to Admin Console
                </Link>
              </div>
            </div>
          )}

          <div className="pt-4 border-t border-[#E4E7DE] text-center">
            <Link
              href="/admin/login"
              className="text-xs text-[#1F5C33] hover:underline font-semibold"
            >
              Back to Admin Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
