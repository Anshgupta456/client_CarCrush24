'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import {
  Lock,
  Mail,
  Eye,
  EyeOff,
  ShieldCheck,
  ArrowLeft,
  AlertCircle,
  CheckCircle2,
  Truck,
  KeyRound,
  X,
  Check,
} from 'lucide-react';
import { useAdmin } from '../../../context/AdminContext';

export default function AdminLoginPage() {
  const router = useRouter();
  const {
    login,
    isAuthenticated,
    isLoadingAuth,
    requestPasswordReset,
    resetPasswordWithCode,
  } = useAdmin();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Forgot Password modal state
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [forgotStep, setForgotStep] = useState('request'); // 'request' | 'verify' | 'success'
  const [forgotEmail, setForgotEmail] = useState('');
  const [forgotOtp, setForgotOtp] = useState('');
  const [newPasswordInput, setNewPasswordInput] = useState('');
  const [confirmPasswordInput, setConfirmPasswordInput] = useState('');
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [forgotLoading, setForgotLoading] = useState(false);
  const [forgotError, setForgotError] = useState('');
  const [forgotSuccess, setForgotSuccess] = useState('');
  const [devOtpHint, setDevOtpHint] = useState('');

  // If already authenticated, redirect straight to dashboard
  useEffect(() => {
    if (!isLoadingAuth && isAuthenticated) {
      router.replace('/admin');
    }
  }, [isAuthenticated, isLoadingAuth, router]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!email.trim() || !password.trim()) {
      setError('Please provide both your administrator email and password.');
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await login(email, password);
      setIsSubmitting(false);
      if (res.success) {
        router.push('/admin');
      } else {
        setError(res.error || 'Authentication failed. Please verify your credentials.');
      }
    } catch {
      setIsSubmitting(false);
      setError('Unable to reach authentication server. Please try again.');
    }
  };

  const handleFillDemo = () => {
    setEmail('admin@carcrush24.com');
    setPassword('admin123');
    setError('');
  };

  // Step 1: Request reset code
  const handleRequestResetCode = async (e) => {
    e.preventDefault();
    setForgotError('');
    setForgotSuccess('');

    if (!forgotEmail.trim()) {
      setForgotError('Please enter your administrator email.');
      return;
    }

    setForgotLoading(true);
    try {
      const res = await requestPasswordReset(forgotEmail.trim());
      setForgotLoading(false);
      if (res.success) {
        setForgotStep('verify');
        setForgotSuccess(res.message || 'Verification code sent.');
        if (res.devOtp) {
          setDevOtpHint(res.devOtp);
        }
      } else {
        setForgotError(res.error || 'Failed to generate reset code.');
      }
    } catch {
      setForgotLoading(false);
      setForgotError('Could not connect to server.');
    }
  };

  // Step 2: Verify code and set new password
  const handlePerformReset = async (e) => {
    e.preventDefault();
    setForgotError('');
    setForgotSuccess('');

    if (!forgotOtp.trim()) {
      setForgotError('Please enter the 6-digit verification code.');
      return;
    }

    if (!newPasswordInput || newPasswordInput.length < 6) {
      setForgotError('New password must be at least 6 characters long.');
      return;
    }

    if (newPasswordInput !== confirmPasswordInput) {
      setForgotError('Passwords do not match. Please re-enter.');
      return;
    }

    setForgotLoading(true);
    try {
      const res = await resetPasswordWithCode(forgotEmail.trim(), forgotOtp.trim(), newPasswordInput);
      setForgotLoading(false);
      if (res.success) {
        setForgotStep('success');
        setForgotSuccess(res.message || 'Password has been reset successfully!');
        // Pre-fill login form with new password
        setEmail(forgotEmail.trim());
        setPassword(newPasswordInput);
      } else {
        setForgotError(res.error || 'Failed to reset password.');
      }
    } catch {
      setForgotLoading(false);
      setForgotError('Network error resetting password.');
    }
  };

  if (isLoadingAuth) {
    return (
      <div className="min-h-screen bg-[#F8F9F5] flex items-center justify-center">
        <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-[#1F5C33]"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F8F9F5] flex flex-col justify-between relative overflow-hidden font-sans">
      {/* Background Decorative Rings & Glows */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#1F5C33]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#6FCF3C]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header bar with Back to Website link */}
      <header className="w-full max-w-7xl mx-auto px-6 py-6 flex items-center justify-between z-10">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-[#5B6660] hover:text-[#1F5C33] transition-colors group"
        >
          <div className="w-8 h-8 rounded-full bg-white border border-[#E4E7DE] flex items-center justify-center group-hover:border-[#1F5C33] transition-colors">
            <ArrowLeft className="w-4 h-4 text-[#1F5C33]" />
          </div>
          <span>Back to CarCrush24</span>
        </Link>

        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#16311F]/5 border border-[#16311F]/10 text-xs font-semibold text-[#16311F]">
          <span className="w-2 h-2 rounded-full bg-[#6FCF3C] animate-pulse" />
          RVSF Facility Operations v2.4
        </div>
      </header>

      {/* Main Login Card Container */}
      <main className="flex-1 flex items-center justify-center px-4 py-8 z-10">
        <div className="w-full max-w-md bg-white border border-[#E4E7DE] rounded-3xl p-8 sm:p-10 shadow-sm relative">
          {/* Top Brand & Security Lockup */}
          <div className="flex flex-col items-center text-center mb-8">
            <div className="relative mb-4">
              <Image
                src="/logo/light_bg_logo.png"
                alt="CarCrush24"
                width={200}
                height={32}
                priority
                className="h-9 w-auto object-contain"
              />
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1F5C33]/10 text-[#1F5C33] text-xs font-medium mb-2">
              <ShieldCheck className="w-3.5 h-3.5 text-[#1F5C33]" />
              Internal Operations Portal
            </div>

            <h1 className="text-2xl font-bold text-[#131A15] tracking-tight font-heading">
              Admin Console Login
            </h1>
          </div>

          {/* Error Notice */}
          {error && (
            <div className="mb-6 p-3.5 rounded-2xl bg-[#D9534F]/10 border border-[#D9534F]/20 text-[#D9534F] text-xs flex items-start gap-2.5 animate-fadeIn">
              <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
              <div className="flex-1 leading-relaxed">{error}</div>
            </div>
          )}

          {/* Credentials Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email Field */}
            <div>
              <label className="block text-xs font-semibold text-[#131A15] uppercase tracking-wider mb-1.5">
                Staff Email
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
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#F8F9F5] border border-[#E4E7DE] text-sm text-[#131A15] placeholder:text-[#5B6660]/60 focus:outline-none focus:border-[#1F5C33] focus:ring-2 focus:ring-[#1F5C33]/10 transition-all"
                  autoComplete="email"
                  required
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="block text-xs font-semibold text-[#131A15] uppercase tracking-wider">
                  Password
                </label>
                <button
                  type="button"
                  onClick={() => {
                    setShowForgotPassword(true);
                    setForgotEmail(email || 'admin@carcrush24.com');
                    setForgotStep('request');
                    setForgotError('');
                    setForgotSuccess('');
                    setDevOtpHint('');
                  }}
                  className="text-[11px] font-semibold text-[#1F5C33] hover:text-[#16311F] hover:underline transition-colors cursor-pointer"
                >
                  Forgot password?
                </button>
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#5B6660]">
                  <Lock className="w-4 h-4" />
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-10 pr-11 py-3 rounded-xl bg-[#F8F9F5] border border-[#E4E7DE] text-sm text-[#131A15] placeholder:text-[#5B6660]/60 focus:outline-none focus:border-[#1F5C33] focus:ring-2 focus:ring-[#1F5C33]/10 transition-all"
                  autoComplete="current-password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-[#5B6660] hover:text-[#131A15] transition-colors focus:outline-none cursor-pointer"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Quick Demo Pre-Fill Helper Box */}
            <div className="pt-2">
              <button
                type="button"
                onClick={handleFillDemo}
                className="w-full py-2 px-3 rounded-xl border border-dashed border-[#1F5C33]/30 bg-[#1F5C33]/5 text-[#1F5C33] hover:bg-[#1F5C33]/10 transition-colors text-xs font-medium flex items-center justify-center gap-2 group cursor-pointer"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-[#1F5C33] group-hover:scale-110 transition-transform" />
                <span>Fill Demo Credentials (admin@carcrush24.com)</span>
              </button>
            </div>

            {/* Submit Button */}
            <div className="pt-3">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 px-6 rounded-full bg-[#1F5C33] text-white font-semibold text-sm hover:bg-[#16311F] active:scale-[0.99] transition-all flex items-center justify-center gap-2 shadow-sm disabled:opacity-60 cursor-pointer"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Verifying Credentials...</span>
                  </>
                ) : (
                  <>
                    <span>Enter Operations Dashboard</span>
                    <Truck className="w-4 h-4 text-[#6FCF3C]" />
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </main>

      {/* ================= FORGOT PASSWORD MODAL ================= */}
      {showForgotPassword && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-fadeIn">
          <div className="w-full max-w-md bg-white rounded-3xl p-6 sm:p-8 border border-[#E4E7DE] shadow-xl relative animate-scaleUp">
            {/* Close Button */}
            <button
              onClick={() => setShowForgotPassword(false)}
              className="absolute top-5 right-5 p-2 rounded-full text-[#5B6660] hover:text-[#131A15] hover:bg-[#F8F9F5] transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-2.5 mb-2">
              <div className="w-9 h-9 rounded-2xl bg-[#1F5C33]/10 text-[#1F5C33] flex items-center justify-center">
                <KeyRound className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#131A15] font-heading">
                  Reset Password
                </h3>
                <span className="text-[11px] text-[#5B6660]">Admin Account Recovery</span>
              </div>
            </div>

            {/* Error Message */}
            {forgotError && (
              <div className="mt-4 p-3 rounded-xl bg-[#D9534F]/10 border border-[#D9534F]/20 text-[#D9534F] text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 flex-shrink-0" />
                <span>{forgotError}</span>
              </div>
            )}

            {/* Success / Notice Message */}
            {forgotSuccess && forgotStep !== 'success' && (
              <div className="mt-4 p-3 rounded-xl bg-[#1F5C33]/10 border border-[#1F5C33]/20 text-[#1F5C33] text-xs flex items-center gap-2">
                <Check className="w-4 h-4 flex-shrink-0 text-[#188A38]" />
                <span>{forgotSuccess}</span>
              </div>
            )}

            {/* STEP 1: Enter Email & Request Code */}
            {forgotStep === 'request' && (
              <form onSubmit={handleRequestResetCode} className="mt-5 space-y-4">
                <p className="text-xs text-[#5B6660] leading-relaxed">
                  Enter your registered administrator email address to generate a secure 6-digit verification code.
                </p>

                <div>
                  <label className="block text-xs font-semibold text-[#131A15] uppercase tracking-wider mb-1.5">
                    Administrator Email
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#5B6660]">
                      <Mail className="w-4 h-4" />
                    </div>
                    <input
                      type="email"
                      value={forgotEmail}
                      onChange={(e) => setForgotEmail(e.target.value)}
                      placeholder="admin@carcrush24.com"
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#F8F9F5] border border-[#E4E7DE] text-sm text-[#131A15] focus:outline-none focus:border-[#1F5C33]"
                      required
                    />
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => setShowForgotPassword(false)}
                    className="px-4 py-2 rounded-full text-xs font-semibold text-[#5B6660] hover:bg-[#F8F9F5] cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={forgotLoading}
                    className="px-5 py-2.5 rounded-full bg-[#1F5C33] text-white text-xs font-semibold hover:bg-[#16311F] transition-all flex items-center gap-2 cursor-pointer disabled:opacity-60"
                  >
                    {forgotLoading ? (
                      <div className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <span>Send Verification Code</span>
                    )}
                  </button>
                </div>
              </form>
            )}

            {/* STEP 2: Input Code and Set New Password */}
            {forgotStep === 'verify' && (
              <form onSubmit={handlePerformReset} className="mt-5 space-y-4">
                <p className="text-xs text-[#5B6660] leading-relaxed">
                  Enter the 6-digit verification code and your new administrator password.
                </p>

                {devOtpHint && (
                  <div className="p-3 rounded-xl bg-[#6FCF3C]/15 border border-[#6FCF3C]/40 text-[#16311F] text-xs flex items-center justify-between">
                    <span>
                      Demo Reset Code: <strong className="font-mono font-bold tracking-widest text-sm">{devOtpHint}</strong>
                    </span>
                    <button
                      type="button"
                      onClick={() => setForgotOtp(devOtpHint)}
                      className="text-[11px] underline font-bold cursor-pointer hover:opacity-80"
                    >
                      Auto-fill
                    </button>
                  </div>
                )}

                <div>
                  <label className="block text-xs font-semibold text-[#131A15] uppercase tracking-wider mb-1.5">
                    6-Digit Verification Code
                  </label>
                  <input
                    type="text"
                    value={forgotOtp}
                    onChange={(e) => setForgotOtp(e.target.value)}
                    placeholder="e.g. 123456"
                    maxLength={12}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#F8F9F5] border border-[#E4E7DE] text-sm text-[#131A15] font-mono tracking-widest text-center focus:outline-none focus:border-[#1F5C33]"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#131A15] uppercase tracking-wider mb-1.5">
                    New Password
                  </label>
                  <div className="relative">
                    <input
                      type={showNewPassword ? 'text' : 'password'}
                      value={newPasswordInput}
                      onChange={(e) => setNewPasswordInput(e.target.value)}
                      placeholder="Minimum 6 characters"
                      className="w-full px-4 py-2.5 rounded-xl bg-[#F8F9F5] border border-[#E4E7DE] text-sm text-[#131A15] focus:outline-none focus:border-[#1F5C33]"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowNewPassword(!showNewPassword)}
                      className="absolute inset-y-0 right-0 pr-3 flex items-center text-[#5B6660] hover:text-[#131A15] cursor-pointer"
                    >
                      {showNewPassword ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#131A15] uppercase tracking-wider mb-1.5">
                    Confirm New Password
                  </label>
                  <input
                    type="password"
                    value={confirmPasswordInput}
                    onChange={(e) => setConfirmPasswordInput(e.target.value)}
                    placeholder="Re-type new password"
                    className="w-full px-4 py-2.5 rounded-xl bg-[#F8F9F5] border border-[#E4E7DE] text-sm text-[#131A15] focus:outline-none focus:border-[#1F5C33]"
                    required
                  />
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setForgotStep('request')}
                    className="text-xs text-[#5B6660] hover:underline cursor-pointer"
                  >
                    ← Back to Email
                  </button>

                  <button
                    type="submit"
                    disabled={forgotLoading}
                    className="px-5 py-2.5 rounded-full bg-[#1F5C33] text-white text-xs font-semibold hover:bg-[#16311F] transition-all flex items-center gap-2 cursor-pointer disabled:opacity-60"
                  >
                    {forgotLoading ? (
                      <div className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <span>Confirm & Reset Password</span>
                    )}
                  </button>
                </div>
              </form>
            )}

            {/* STEP 3: Success Confirmation */}
            {forgotStep === 'success' && (
              <div className="mt-6 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-[#6FCF3C]/20 text-[#1F5C33] flex items-center justify-center mx-auto text-2xl font-bold">
                  ✓
                </div>
                <h4 className="text-base font-bold text-[#131A15]">
                  Password Successfully Reset!
                </h4>
                <p className="text-xs text-[#5B6660] max-w-xs mx-auto leading-relaxed">
                  Your administrator password has been updated. You can now log into the operations console with your new password.
                </p>

                <button
                  type="button"
                  onClick={() => setShowForgotPassword(false)}
                  className="w-full py-3 rounded-full bg-[#1F5C33] text-white text-xs font-semibold hover:bg-[#16311F] transition-all cursor-pointer shadow-sm"
                >
                  Return to Sign In
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Footer copyright */}
      <footer className="w-full max-w-7xl mx-auto px-6 py-4 text-center text-xs text-[#5B6660] z-10">
        © {new Date().getFullYear()} CarCrush24 (Garhwal Scrape). Internal Operations System.
      </footer>
    </div>
  );
}
