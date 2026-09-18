'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import {
  Lock,
  Eye,
  EyeOff,
  KeyRound,
  ArrowLeft,
  AlertCircle,
  CheckCircle2,
  Check,
} from 'lucide-react';
import { useAdmin } from '../../../context/AdminContext';

function ResetPasswordContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { resetPasswordWithCode } = useAdmin();

  const urlEmail = searchParams.get('email') || '';
  const urlToken = searchParams.get('token') || '';

  const [email, setEmail] = useState(urlEmail || 'admin@carcrush24.com');
  const [token, setToken] = useState(urlToken || '');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (urlEmail) setEmail(urlEmail);
    if (urlToken) setToken(urlToken);
  }, [urlEmail, urlToken]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!email.trim()) {
      setError('Please provide your administrator email address.');
      return;
    }

    if (!token.trim()) {
      setError('Please enter the reset token or verification code.');
      return;
    }

    if (!newPassword || newPassword.length < 6) {
      setError('New password must be at least 6 characters long.');
      return;
    }

    if (newPassword !== confirmPassword) {
      setError('New password and confirmation password do not match.');
      return;
    }

    setLoading(true);
    try {
      const res = await resetPasswordWithCode(email.trim(), token.trim(), newPassword);
      setLoading(false);
      if (res.success) {
        setIsSuccess(true);
      } else {
        setError(res.error || 'Invalid or expired token / code.');
      }
    } catch {
      setLoading(false);
      setError('Failed to reach authentication server.');
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F9F5] flex flex-col justify-center py-12 sm:px-6 lg:px-8 font-sans">
      <div className="sm:mx-auto sm:w-full sm:max-w-md px-4">
        <div className="mb-4">
          <Link
            href="/admin/login"
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#1F5C33] hover:text-[#16311F] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Staff Login</span>
          </Link>
        </div>

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
              Reset Password Link
            </div>
            <h1 className="text-xl font-bold text-[#131A15] tracking-tight font-heading">
              Set New Password
            </h1>
            <p className="text-xs text-[#5B6660]">
              Enter your reset verification code or token along with your desired new password.
            </p>
          </div>

          {error && (
            <div className="p-3.5 rounded-2xl bg-[#D9534F]/10 border border-[#D9534F]/20 text-[#D9534F] text-xs flex items-start gap-2.5 animate-fadeIn">
              <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
              <div className="flex-1 leading-relaxed">{error}</div>
            </div>
          )}

          {isSuccess ? (
            <div className="text-center space-y-4 py-4 animate-fadeIn">
              <div className="w-12 h-12 rounded-full bg-[#188A38]/15 text-[#188A38] mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h2 className="text-base font-bold text-[#131A15]">
                Password Reset Successfully!
              </h2>
              <p className="text-xs text-[#5B6660]">
                Your administrator credentials have been securely updated.
              </p>
              <div className="pt-2">
                <Link
                  href="/admin/login"
                  className="inline-flex items-center justify-center w-full py-3 rounded-xl bg-[#1F5C33] text-white text-xs font-bold hover:bg-[#16311F] transition-all shadow-xs"
                >
                  Proceed to Login
                </Link>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-[#131A15] uppercase tracking-wider mb-1.5">
                  Staff Login Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@carcrush24.com"
                  className="w-full px-4 py-2.5 rounded-xl bg-[#F8F9F5] border border-[#E4E7DE] text-sm text-[#131A15] focus:outline-none focus:border-[#1F5C33]"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#131A15] uppercase tracking-wider mb-1.5">
                  Reset Token / OTP Code
                </label>
                <input
                  type="text"
                  value={token}
                  onChange={(e) => setToken(e.target.value)}
                  placeholder="e.g. 123456 or token"
                  className="w-full px-4 py-2.5 rounded-xl bg-[#F8F9F5] border border-[#E4E7DE] font-mono text-sm text-[#131A15] focus:outline-none focus:border-[#1F5C33]"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#131A15] uppercase tracking-wider mb-1.5">
                  New Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    placeholder="Minimum 6 characters"
                    className="w-full pl-4 pr-10 py-2.5 rounded-xl bg-[#F8F9F5] border border-[#E4E7DE] text-sm text-[#131A15] focus:outline-none focus:border-[#1F5C33]"
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

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 rounded-xl bg-[#1F5C33] text-white text-xs font-bold hover:bg-[#16311F] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs disabled:opacity-60"
                >
                  {loading ? (
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <Check className="w-4 h-4 text-[#6FCF3C]" />
                  )}
                  <span>Reset & Update Password</span>
                </button>
              </div>
            </form>
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

export default function AdminResetPasswordPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#F8F9F5] flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-[#1F5C33]/20 border-t-[#1F5C33] rounded-full animate-spin" />
        </div>
      }
    >
      <ResetPasswordContent />
    </Suspense>
  );
}
