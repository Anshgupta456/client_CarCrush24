'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  UserCog,
  Mail,
  Lock,
  Eye,
  EyeOff,
  CheckCircle2,
  ShieldAlert,
  ShieldCheck,
  Save,
  KeyRound,
  ArrowRight,
  Sparkles,
} from 'lucide-react';
import { useAdmin } from '../../context/AdminContext';
import { useCompany } from '../../context/CompanyContext';

export default function AdminProfileView() {
  const { adminUser, updateProfile, changePassword } = useAdmin();
  const { company } = useCompany();

  // Profile fields state
  const [profileForm, setProfileForm] = useState({
    name: adminUser?.name || 'Sanjay Rawat',
    email: adminUser?.email || 'admin@carcrush24.com',
  });
  const [profileSaving, setProfileSaving] = useState(false);
  const [profileStatus, setProfileStatus] = useState({ success: '', error: '' });

  // Password fields state
  const [passwordForm, setPasswordForm] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });
  const [showCurrentPw, setShowCurrentPw] = useState(false);
  const [showNewPw, setShowNewPw] = useState(false);
  const [passwordSaving, setPasswordSaving] = useState(false);
  const [passwordStatus, setPasswordStatus] = useState({ success: '', error: '' });

  // Sync with context if adminUser changes
  useEffect(() => {
    if (adminUser) {
      queueMicrotask(() => {
        setProfileForm({
          name: adminUser.name || 'Sanjay Rawat',
          email: adminUser.email || 'admin@carcrush24.com',
        });
      });
    }
  }, [adminUser]);

  // Handle Profile Update
  const handleSaveProfile = async (e) => {
    e.preventDefault();
    setProfileStatus({ success: '', error: '' });

    if (!profileForm.name.trim() || !profileForm.email.trim()) {
      setProfileStatus({ error: 'Name and email are required fields.' });
      return;
    }

    setProfileSaving(true);
    try {
      const res = await updateProfile(profileForm.name, profileForm.email);
      setProfileSaving(false);
      if (res.success) {
        setProfileStatus({ success: 'Administrator profile details updated successfully.' });
        setTimeout(() => setProfileStatus({ success: '', error: '' }), 5000);
      } else {
        setProfileStatus({ error: res.error || 'Failed to update admin profile.' });
      }
    } catch {
      setProfileSaving(false);
      setProfileStatus({ error: 'Failed to connect to authentication server.' });
    }
  };

  // Handle Password Reset
  const handleResetPassword = async (e) => {
    e.preventDefault();
    setPasswordStatus({ success: '', error: '' });

    if (!passwordForm.currentPassword) {
      setPasswordStatus({ error: 'Please enter your current administrator password.' });
      return;
    }

    if (!passwordForm.newPassword || passwordForm.newPassword.length < 6) {
      setPasswordStatus({ error: 'New password must be at least 6 characters long.' });
      return;
    }

    if (passwordForm.newPassword !== passwordForm.confirmPassword) {
      setPasswordStatus({ error: 'New password and confirmation password do not match.' });
      return;
    }

    setPasswordSaving(true);
    try {
      const res = await changePassword(passwordForm.currentPassword, passwordForm.newPassword);
      setPasswordSaving(false);
      if (res.success) {
        setPasswordStatus({ success: 'Password changed successfully! Keep your new credentials safe.' });
        setPasswordForm({
          currentPassword: '',
          newPassword: '',
          confirmPassword: '',
        });
        setTimeout(() => setPasswordStatus({ success: '', error: '' }), 6000);
      } else {
        setPasswordStatus({ error: res.error || 'Failed to update administrator password.' });
      }
    } catch {
      setPasswordSaving(false);
      setPasswordStatus({ error: 'Server connection error during password update.' });
    }
  };

  const scrollToResetSection = () => {
    const el = document.getElementById('reset-password-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Top Banner / Breadcrumb */}
      <div className="bg-white border border-[#E4E7DE] rounded-3xl p-6 sm:p-8 shadow-2xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1F5C33]/10 text-[#1F5C33] text-xs font-semibold mb-2">
            <UserCog className="w-3.5 h-3.5 text-[#1F5C33]" />
            Security & Identity
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-[#131A15] tracking-tight font-heading">
            Admin Profile
          </h1>
          <p className="text-xs sm:text-sm text-[#5B6660] mt-1">
            Manage your credentials, login email, authorized role, and console security.
          </p>
        </div>

        {/* Quick Reset Password Link Button */}
        <div className="flex items-center gap-3 flex-wrap">
          <button
            type="button"
            onClick={scrollToResetSection}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#F8F9F5] border border-[#E4E7DE] hover:border-[#1F5C33] text-xs font-semibold text-[#1F5C33] hover:bg-[#1F5C33] hover:text-white transition-all cursor-pointer shadow-2xs"
          >
            <KeyRound className="w-3.5 h-3.5" />
            <span>Reset Password Link</span>
          </button>

          <Link
            href="/admin/forgot-password"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#1F5C33]/10 hover:bg-[#1F5C33]/20 text-xs font-semibold text-[#1F5C33] transition-all cursor-pointer"
          >
            <span>Forgot Password Page</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

      {/* Status Alerts */}
      {profileStatus.success && (
        <div className="p-4 rounded-2xl bg-[#188A38]/10 border border-[#188A38]/20 text-[#188A38] text-xs flex items-center gap-2.5 font-medium animate-fadeIn">
          <CheckCircle2 className="w-4 h-4 text-[#188A38] flex-shrink-0" />
          <span>{profileStatus.success}</span>
        </div>
      )}
      {profileStatus.error && (
        <div className="p-4 rounded-2xl bg-[#D9534F]/10 border border-[#D9534F]/20 text-[#D9534F] text-xs flex items-center gap-2.5 font-medium animate-fadeIn">
          <ShieldAlert className="w-4 h-4 text-[#D9534F] flex-shrink-0" />
          <span>{profileStatus.error}</span>
        </div>
      )}
      {passwordStatus.success && (
        <div className="p-4 rounded-2xl bg-[#188A38]/10 border border-[#188A38]/20 text-[#188A38] text-xs flex items-center gap-2.5 font-medium animate-fadeIn">
          <CheckCircle2 className="w-4 h-4 text-[#188A38] flex-shrink-0" />
          <span>{passwordStatus.success}</span>
        </div>
      )}
      {passwordStatus.error && (
        <div className="p-4 rounded-2xl bg-[#D9534F]/10 border border-[#D9534F]/20 text-[#D9534F] text-xs flex items-center gap-2.5 font-medium animate-fadeIn">
          <ShieldAlert className="w-4 h-4 text-[#D9534F] flex-shrink-0" />
          <span>{passwordStatus.error}</span>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Admin Profile Card & Update Form (6 cols) */}
        <div className="lg:col-span-6 space-y-6">
          {/* Identity & Role Overview Card */}
          <div className="bg-white border border-[#E4E7DE] rounded-3xl p-6 sm:p-8 shadow-2xs space-y-6">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-3xl bg-[#1F5C33] text-white flex items-center justify-center font-black text-xl tracking-wider shadow-sm">
                  {(adminUser?.name || 'Admin')
                    .split(' ')
                    .map((n) => n[0])
                    .join('')
                    .substring(0, 2)
                    .toUpperCase()}
                </div>
                <div>
                  <h2 className="text-lg font-bold text-[#131A15] font-heading">
                    {adminUser?.name || 'Sanjay Rawat'}
                  </h2>
                  <p className="text-xs text-[#5B6660]">{adminUser?.email || 'admin@carcrush24.com'}</p>
                  <div className="mt-2 flex items-center gap-2 flex-wrap">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#188A38]/15 text-[#188A38] text-xs font-bold">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#188A38]" />
                      Role: Admin
                    </span>
                    <span className="text-[10px] text-[#5B6660] font-mono bg-gray-100 px-2 py-0.5 rounded-md">
                      Verified Operations Staff
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Profile Specifications */}
            <div className="pt-4 border-t border-[#E4E7DE] space-y-2.5 text-xs">
              <div className="flex items-center justify-between py-1.5 border-b border-gray-100">
                <span className="text-[#5B6660]">Login Email</span>
                <strong className="text-[#131A15] font-semibold">{adminUser?.email || 'admin@carcrush24.com'}</strong>
              </div>
              <div className="flex items-center justify-between py-1.5 border-b border-gray-100">
                <span className="text-[#5B6660]">Name</span>
                <strong className="text-[#131A15] font-semibold">{adminUser?.name || 'Sanjay Rawat'}</strong>
              </div>
              <div className="flex items-center justify-between py-1.5 border-b border-gray-100">
                <span className="text-[#5B6660]">Role</span>
                <span className="font-bold text-[#188A38] uppercase tracking-wider text-[11px] bg-[#188A38]/10 px-2 py-0.5 rounded-full">
                  Admin
                </span>
              </div>
              <div className="flex items-center justify-between py-1.5 border-b border-gray-100">
                <span className="text-[#5B6660]">Authorized Unit</span>
                <span className="text-[#131A15]">
                  {(adminUser?.facility && adminUser.facility !== 'Mayapuri Authorized RVSF Unit #1')
                    ? adminUser.facility
                    : company?.facilityAddress || company?.address || 'Primary RVSF Processing Yard'}
                </span>
              </div>
              <div className="flex items-center justify-between py-1.5">
                <span className="text-[#5B6660]">Authorization Status</span>
                <span className="inline-flex items-center gap-1.5 text-[#188A38] font-semibold text-[11px]">
                  <span className="w-2 h-2 rounded-full bg-[#6FCF3C] animate-pulse" />
                  Active Secure Session
                </span>
              </div>
            </div>
          </div>

          {/* Edit Name & Email Form */}
          <div className="bg-white border border-[#E4E7DE] rounded-3xl p-6 sm:p-8 shadow-2xs space-y-5">
            <div className="flex items-center gap-2 pb-3 border-b border-[#E4E7DE]">
              <UserCog className="w-4 h-4 text-[#1F5C33]" />
              <h3 className="text-sm font-bold text-[#131A15] font-heading">
                Update Admin Identity & Email
              </h3>
            </div>

            <form onSubmit={handleSaveProfile} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-[#131A15] uppercase tracking-wider mb-1.5">
                  Full Name
                </label>
                <input
                  type="text"
                  value={profileForm.name}
                  onChange={(e) => setProfileForm({ ...profileForm, name: e.target.value })}
                  placeholder="Sanjay Rawat"
                  className="w-full px-4 py-2.5 rounded-xl bg-[#F8F9F5] border border-[#E4E7DE] text-sm text-[#131A15] focus:outline-none focus:border-[#1F5C33]"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#131A15] uppercase tracking-wider mb-1.5">
                  Login Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#5B6660]">
                    <Mail className="w-4 h-4" />
                  </div>
                  <input
                    type="email"
                    value={profileForm.email}
                    onChange={(e) => setProfileForm({ ...profileForm, email: e.target.value })}
                    placeholder="admin@carcrush24.com"
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#F8F9F5] border border-[#E4E7DE] text-sm text-[#131A15] focus:outline-none focus:border-[#1F5C33]"
                    required
                  />
                </div>
                <span className="text-[10px] text-[#5B6660] mt-1 block">
                  This email is used to log into the CarCrush24 Operations Dashboard.
                </span>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={profileSaving}
                  className="px-6 py-2.5 rounded-full bg-[#1F5C33] text-white text-xs font-semibold hover:bg-[#16311F] transition-all flex items-center gap-2 cursor-pointer shadow-xs disabled:opacity-60"
                >
                  {profileSaving ? (
                    <div className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <Save className="w-3.5 h-3.5" />
                  )}
                  <span>Save Profile Details</span>
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Right Column: Reset Password Section (6 cols) */}
        <div id="reset-password-section" className="lg:col-span-6 space-y-6">
          <div className="bg-white border border-[#E4E7DE] rounded-3xl p-6 sm:p-8 shadow-2xs space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-[#E4E7DE]">
              <div className="flex items-center gap-2">
                <Lock className="w-4 h-4 text-[#1F5C33]" />
                <h3 className="text-sm font-bold text-[#131A15] font-heading">
                  Reset Password Link & Form
                </h3>
              </div>
              <span className="text-[11px] font-semibold text-[#1F5C33] bg-[#1F5C33]/10 px-2.5 py-0.5 rounded-full">
                Account Security
              </span>
            </div>

            <p className="text-xs text-[#5B6660] leading-relaxed">
              Modify your administrator password below. Ensure your new password is at least 6 characters. If you have forgotten your existing password, you can use our OTP recovery link below.
            </p>

            <form onSubmit={handleResetPassword} className="space-y-4">
              {/* Current Password */}
              <div>
                <label className="block text-xs font-semibold text-[#131A15] uppercase tracking-wider mb-1.5">
                  Current Password
                </label>
                <div className="relative">
                  <input
                    type={showCurrentPw ? 'text' : 'password'}
                    value={passwordForm.currentPassword}
                    onChange={(e) => setPasswordForm({ ...passwordForm, currentPassword: e.target.value })}
                    placeholder="••••••••"
                    className="w-full pl-4 pr-10 py-2.5 rounded-xl bg-[#F8F9F5] border border-[#E4E7DE] text-sm text-[#131A15] focus:outline-none focus:border-[#1F5C33]"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowCurrentPw(!showCurrentPw)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-[#5B6660] hover:text-[#131A15] cursor-pointer"
                  >
                    {showCurrentPw ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>

              {/* New Password */}
              <div>
                <label className="block text-xs font-semibold text-[#131A15] uppercase tracking-wider mb-1.5">
                  New Password
                </label>
                <div className="relative">
                  <input
                    type={showNewPw ? 'text' : 'password'}
                    value={passwordForm.newPassword}
                    onChange={(e) => setPasswordForm({ ...passwordForm, newPassword: e.target.value })}
                    placeholder="Minimum 6 characters"
                    className="w-full pl-4 pr-10 py-2.5 rounded-xl bg-[#F8F9F5] border border-[#E4E7DE] text-sm text-[#131A15] focus:outline-none focus:border-[#1F5C33]"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowNewPw(!showNewPw)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-[#5B6660] hover:text-[#131A15] cursor-pointer"
                  >
                    {showNewPw ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>

              {/* Confirm New Password */}
              <div>
                <label className="block text-xs font-semibold text-[#131A15] uppercase tracking-wider mb-1.5">
                  Confirm New Password
                </label>
                <input
                  type="password"
                  value={passwordForm.confirmPassword}
                  onChange={(e) => setPasswordForm({ ...passwordForm, confirmPassword: e.target.value })}
                  placeholder="Re-type new password"
                  className="w-full px-4 py-2.5 rounded-xl bg-[#F8F9F5] border border-[#E4E7DE] text-sm text-[#131A15] focus:outline-none focus:border-[#1F5C33]"
                  required
                />
              </div>

              {/* Password criteria checklist */}
              <div className="p-3 rounded-2xl bg-[#F8F9F5] border border-[#E4E7DE] space-y-1.5 text-[11px] text-[#5B6660]">
                <span className="font-semibold text-[#131A15] block">Password Security Standards:</span>
                <div className="flex items-center gap-2">
                  <span className={passwordForm.newPassword.length >= 6 ? 'text-[#188A38] font-bold' : 'text-gray-400'}>
                    {passwordForm.newPassword.length >= 6 ? '✓' : '○'} At least 6 characters
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span
                    className={
                      passwordForm.newPassword && passwordForm.newPassword === passwordForm.confirmPassword
                        ? 'text-[#188A38] font-bold'
                        : 'text-gray-400'
                    }
                  >
                    {passwordForm.newPassword && passwordForm.newPassword === passwordForm.confirmPassword ? '✓' : '○'} Passwords match
                  </span>
                </div>
              </div>

              <div className="pt-2 flex items-center justify-between flex-wrap gap-2">
                <button
                  type="submit"
                  disabled={passwordSaving}
                  className="px-6 py-2.5 rounded-full bg-[#1F5C33] text-white text-xs font-semibold hover:bg-[#16311F] transition-all flex items-center gap-2 cursor-pointer shadow-xs disabled:opacity-60"
                >
                  {passwordSaving ? (
                    <div className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <Lock className="w-3.5 h-3.5" />
                  )}
                  <span>Reset Password Now</span>
                </button>

                <Link
                  href="/admin/forgot-password"
                  className="text-xs text-[#1F5C33] hover:underline font-semibold"
                >
                  Forgot Current Password?
                </Link>
              </div>
            </form>
          </div>

          {/* Security Advisory Card */}
          <div className="p-5 rounded-3xl bg-gradient-to-br from-[#1F5C33]/5 to-[#6FCF3C]/10 border border-[#1F5C33]/20 space-y-2">
            <div className="flex items-center gap-2 text-[#1F5C33] font-bold text-xs">
              <ShieldCheck className="w-4 h-4 text-[#188A38]" />
              <span>Authorized Administrator Access Only</span>
            </div>
            <p className="text-[11px] text-[#5B6660] leading-relaxed">
              Administrator accounts possess full clearance to manage scrap vehicle leads, customer WhatsApp communications, blog publications, and live company details. Always keep your password confidential.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
