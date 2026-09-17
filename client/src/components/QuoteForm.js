'use client';

import React, { useState } from 'react';

// Lightweight SVGs for the 3 Individual & 3 Commercial vehicle types
const Icons = {
  Car: () => (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 17a2 2 0 104 0 2 2 0 00-4 0zM15 17a2 2 0 104 0 2 2 0 00-4 0z" />
      <path d="M5 17H3v-4l2.5-5.5a1 1 0 01.9-.5h11.2a1 1 0 01.9.5L21 13v4h-2M5 17h10" />
      <path d="M7 11h10" />
    </svg>
  ),
  Bike: () => (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="5.5" cy="17.5" r="3.5" />
      <circle cx="18.5" cy="17.5" r="3.5" />
      <path d="M15 6h-3l-3 6h7l3-3.5h2.5" />
      <path d="M9 17.5l2-5.5h4l2 5.5" />
    </svg>
  ),
  Truck: () => (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="1" y="4" width="13" height="12" rx="1" />
      <path d="M14 8h4l3 3v5h-7V8z" />
      <circle cx="5.5" cy="18.5" r="2.5" />
      <circle cx="17.5" cy="18.5" r="2.5" />
    </svg>
  ),
  Bus: () => (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="3" width="16" height="15" rx="2" />
      <path d="M4 11h16" />
      <path d="M4 7h16" />
      <circle cx="8" cy="18" r="2" />
      <circle cx="16" cy="18" r="2" />
      <path d="M8 14h.01M16 14h.01" />
    </svg>
  ),
  Others: () => (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="6" cy="12" r="1.8" />
      <circle cx="12" cy="12" r="1.8" />
      <circle cx="18" cy="12" r="1.8" />
    </svg>
  ),
  Check: () => (
    <svg className="w-3 h-3 text-[#1F5C33]" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
    </svg>
  )
};

// 3 Options for Individual, 3 Options for Commercial
const VEHICLE_CATEGORIES = {
  personal: [
    { id: 'car', label: 'CAR', icon: Icons.Car },
    { id: 'bike', label: 'BIKE', icon: Icons.Bike },
    { id: 'others', label: 'OTHERS', icon: Icons.Others },
  ],
  commercial: [
    { id: 'truck', label: 'TRUCK', icon: Icons.Truck },
    { id: 'bus', label: 'BUS', icon: Icons.Bus },
    { id: 'others', label: 'OTHERS', icon: Icons.Others },
  ]
};

const POPULAR_MAKES = {
  car: ['Maruti Suzuki', 'Hyundai', 'Tata', 'Mahindra', 'Honda', 'Toyota', 'Other'],
  bike: ['Hero', 'Bajaj', 'Honda', 'TVS', 'Royal Enfield', 'Other'],
  truck: ['Tata Motors', 'Ashok Leyland', 'Eicher', 'BharatBenz', 'Other'],
  bus: ['Tata Starbus', 'Ashok Leyland', 'Eicher', 'Volvo', 'Other'],
  others: ['Other / Custom Make']
};

export default function QuoteForm({ isStandalone = false, className = '' }) {
  // Main Category: 'personal' vs 'commercial'
  const [clientType, setClientType] = useState('personal');

  // Selected Vehicle Type (CAR, BIKE, OTHERS / TRUCK, BUS, OTHERS)
  const [vehicleType, setVehicleType] = useState('car');

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    city: 'Delhi NCR',
    postalCode: '',
    vehicleNumber: '',
    year: '2016',
    make: 'Maruti Suzuki',
    model: '',
    fuel: 'Petrol',
    mileage: '50,000 - 100,000 km',
    runs: 'Yes, starts & drives',
    pickupTimeline: 'Within 2-3 Days',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Switch category
  const handleClientTypeChange = (type) => {
    setClientType(type);
    if (type === 'personal') {
      setVehicleType('car');
      setFormData((prev) => ({ ...prev, make: 'Maruti Suzuki' }));
    } else {
      setVehicleType('truck');
      setFormData((prev) => ({ ...prev, make: 'Tata Motors' }));
    }
  };

  // Switch vehicle type
  const handleVehicleTypeChange = (typeId) => {
    setVehicleType(typeId);
    const makes = POPULAR_MAKES[typeId] || POPULAR_MAKES.car;
    setFormData((prev) => ({ ...prev, make: makes[0] }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission to backend / team
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleResetForm = () => {
    setIsSubmitted(false);
    setFormData({
      name: '',
      phone: '',
      city: 'Delhi NCR',
      postalCode: '',
      vehicleNumber: '',
      year: '2016',
      make: 'Maruti Suzuki',
      model: '',
      fuel: 'Petrol',
      mileage: '50,000 - 100,000 km',
      runs: 'Yes, starts & drives',
      pickupTimeline: 'Within 2-3 Days',
    });
  };

  const activeCategories = VEHICLE_CATEGORIES[clientType];
  const activeMakes = POPULAR_MAKES[vehicleType] || POPULAR_MAKES.car;

  // Render Thank You State
  if (isSubmitted) {
    return (
      <div className={`w-full ${isStandalone ? 'max-w-xl' : 'max-w-[430px]'} mx-auto ${className}`}>
        <div className={`bg-white rounded-3xl border border-[#E4E7DE] shadow-xl text-[#131A15] transition-all text-center ${
          isStandalone ? 'p-8 sm:p-10' : 'p-5 sm:p-6'
        }`}>
          {/* Circular Green Checkmark Icon */}
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-[3.5px] border-[#22c55e] flex items-center justify-center mx-auto text-[#22c55e] bg-green-50/70 mb-4 shadow-sm">
            <svg className="w-8 h-8 sm:w-10 sm:h-10 text-[#22c55e]" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>

          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#131A15] tracking-tight">
            Valuation Request Received!
          </h2>

          {/* Subtitle Message */}
          <p className="text-[#5B6660] text-sm mt-2 max-w-sm mx-auto leading-relaxed">
            Thank you, <span className="font-bold text-[#131A15]">{formData.name || 'valued customer'}</span>. Our vehicle scrap appraiser is analyzing current metal indices and will contact you within <strong className="text-[#188A38]">15 minutes</strong> with the highest guaranteed payout.
          </p>

          {/* Submitted Summary Info */}
          <div className="mt-5 p-4 bg-[#F8F9F5] rounded-2xl border border-[#E4E7DE] text-left text-xs sm:text-sm space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-[#7A867F]">Vehicle Reg:</span>
              <span className="font-bold text-[#131A15] uppercase tracking-wider">
                {formData.vehicleNumber || `${formData.year} ${formData.make} ${formData.model}`}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[#7A867F]">Category:</span>
              <span className="font-semibold text-[#131A15] capitalize">
                {clientType} • {vehicleType.toUpperCase()}
              </span>
            </div>
            {formData.phone && (
              <div className="flex items-center justify-between">
                <span className="text-[#7A867F]">Contact Phone:</span>
                <span className="font-semibold text-[#131A15]">{formData.phone}</span>
              </div>
            )}
            {formData.postalCode && (
              <div className="flex items-center justify-between">
                <span className="text-[#7A867F]">Pickup Location:</span>
                <span className="font-semibold text-[#131A15]">{formData.city} ({formData.postalCode})</span>
              </div>
            )}
          </div>

          {/* WhatsApp Fast-Track Button */}
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={`https://wa.me/919876543210?text=Hi%20CarCrush24,%20I%20just%20submitted%20a%20quote%20request%20for%20my%20vehicle%20${encodeURIComponent(formData.vehicleNumber || formData.make)}.%20Please%20share%20the%20valuation.`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs sm:text-sm shadow-md transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.699c.971.53 1.905.814 2.802.814h.001c3.18 0 5.767-2.586 5.768-5.766 0-3.18-2.587-5.766-5.775-5.766zm8.81 5.766c-.003 4.877-3.968 8.841-8.847 8.841-1.503 0-2.978-.38-4.281-1.099l-4.713 1.236 1.258-4.592c-.789-1.374-1.205-2.946-1.206-4.546.003-4.878 3.969-8.842 8.848-8.842 2.363 0 4.584.92 6.255 2.593 1.671 1.673 2.586 3.902 2.586 6.368z" />
              </svg>
              <span>Fast-Track on WhatsApp</span>
            </a>

            <button
              type="button"
              onClick={handleResetForm}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[#F4F6F1] hover:bg-[#EAEFE6] text-[#131A15] font-semibold text-xs sm:text-sm border border-[#DCE1D7] transition-all cursor-pointer"
            >
              <span>Submit Another Vehicle</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Standalone Full-Feature Mode (Used on /quote)
  if (isStandalone) {
    return (
      <div className={`w-full ${className}`}>
        <div className="bg-white rounded-3xl shadow-[0_16px_40px_rgba(0,0,0,0.06)] border border-[#E4E7DE] p-5 sm:p-7 md:p-8 text-[#131A15]">
          
          {/* Header Switcher: 2 Options (Individual vs Commercial) */}
          <div className="mb-5">
            <div className="text-[11px] font-bold text-[#5B6660] uppercase tracking-wider mb-2 flex items-center justify-between">
              <span>Select Customer Category</span>
              <span className="text-[#188A38] font-semibold">100% Free Service</span>
            </div>
            <div className="grid grid-cols-2 p-1.5 bg-[#F4F6F1] rounded-2xl border border-[#DCE1D7]">
              <button
                type="button"
                onClick={() => handleClientTypeChange('personal')}
                className={`py-2.5 px-3 text-xs sm:text-sm font-bold rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer ${
                  clientType === 'personal'
                    ? 'bg-white text-[#131A15] shadow-sm font-extrabold border border-black/5'
                    : 'text-[#5B6660] hover:text-[#131A15]'
                }`}
              >
                <span>Individual / Personal</span>
              </button>

              <button
                type="button"
                onClick={() => handleClientTypeChange('commercial')}
                className={`py-2.5 px-3 text-xs sm:text-sm font-bold rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer ${
                  clientType === 'commercial'
                    ? 'bg-white text-[#131A15] shadow-sm font-extrabold border border-black/5'
                    : 'text-[#5B6660] hover:text-[#131A15]'
                }`}
              >
                <span>Commercial / Fleet</span>
              </button>
            </div>
          </div>

          {/* Vehicle Type Tabs */}
          <div className="mb-6">
            <label className="block text-[11px] font-bold text-[#5B6660] uppercase tracking-wider mb-2">
              Vehicle Type
            </label>
            <div className="grid grid-cols-3 gap-2.5 sm:gap-3">
              {activeCategories.map((tab) => {
                const isSelected = vehicleType === tab.id;
                const IconComponent = tab.icon;

                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => handleVehicleTypeChange(tab.id)}
                    className={`flex flex-col items-center justify-center py-3 px-2 rounded-2xl transition-all relative cursor-pointer ${
                      isSelected
                        ? 'bg-white border-2 border-[#188A38] shadow-sm text-[#188A38]'
                        : 'bg-[#F8F9F5] border border-[#E4E7DE] text-[#6B7770] hover:bg-[#EEF1EB] hover:text-[#131A15]'
                    }`}
                  >
                    <div className={`transition-transform duration-150 ${isSelected ? 'scale-110 text-[#188A38]' : 'text-current'}`}>
                      <IconComponent />
                    </div>

                    <span className={`text-[11px] sm:text-xs font-black tracking-wider mt-1.5 uppercase leading-tight ${
                      isSelected ? 'text-[#131A15]' : 'text-[#6B7770]'
                    }`}>
                      {tab.label}
                    </span>

                    {isSelected && (
                      <span className="absolute -bottom-1 w-6 h-1 bg-[#188A38] rounded-full" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Main Form */}
          <form onSubmit={handleSubmit} className="space-y-5">

            {/* SECTION 1: Vehicle Identification */}
            <div className="bg-[#F8F9F5] p-4 sm:p-5 rounded-2xl border border-[#E4E7DE] space-y-3.5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-black uppercase tracking-wider text-[#1F5C33] flex items-center gap-1.5">
                  <span className="w-5 h-5 rounded-full bg-[#188A38] text-white flex items-center justify-center text-[10px] font-bold">1</span>
                  Vehicle Identification
                </span>
                <span className="text-[11px] text-[#7A867F]">MoRTH Verified</span>
              </div>

              {/* Vehicle Registration Number */}
              <div>
                <label className="block text-[11px] font-bold text-[#5B6660] uppercase tracking-wider mb-1">
                  Vehicle Registration Number <span className="text-[#D9534F]">*</span>
                </label>

                <div className="flex items-center border border-[#D0D6CA] rounded-xl overflow-hidden bg-white shadow-xs focus-within:ring-2 focus-within:ring-[#188A38] focus-within:border-transparent">
                  <div className="bg-[#0e2415] text-white px-3 py-2.5 flex flex-col items-center justify-center flex-shrink-0 select-none border-r border-[#D0D6CA]">
                    <span className="text-[9px] leading-tight text-[#6FCF3C] font-black">IND</span>
                    <div className="w-1.5 h-1.5 rounded-full bg-[#6FCF3C] mt-0.5" />
                  </div>

                  <input
                    type="text"
                    name="vehicleNumber"
                    required
                    placeholder="e.g. DL 01 AB 1234 or HR 26 BK 9999"
                    value={formData.vehicleNumber}
                    onChange={(e) => {
                      handleInputChange({
                        target: { name: 'vehicleNumber', value: e.target.value.toUpperCase() },
                      });
                    }}
                    className="flex-1 px-3.5 py-2.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#131A15] placeholder:text-[#9AA59D] placeholder:font-normal focus:outline-none"
                  />
                </div>
              </div>

              {/* Year, Make, Model & Fuel Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-1">
                {/* Year */}
                <div>
                  <label className="block text-[10px] font-bold text-[#5B6660] uppercase tracking-wider mb-1">
                    Mfg Year
                  </label>
                  <div className="relative">
                    <select
                      name="year"
                      value={formData.year}
                      onChange={handleInputChange}
                      className="w-full appearance-none bg-white border border-[#DCE1D7] rounded-xl px-2.5 py-2 pr-6 text-xs font-semibold text-[#131A15] focus:outline-none focus:ring-1 focus:ring-[#188A38] cursor-pointer"
                    >
                      <option value="2025">2025</option>
                      <option value="2024">2024</option>
                      <option value="2023">2023</option>
                      <option value="2022">2022</option>
                      <option value="2020">2020 - 2021</option>
                      <option value="2018">2017 - 2019</option>
                      <option value="2016">2014 - 2016</option>
                      <option value="2012">2010 - 2013</option>
                      <option value="2008">2005 - 2009</option>
                      <option value="2000">2000 - 2004</option>
                      <option value="older">1999 &amp; Older</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-[#5B6660]">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Make */}
                <div>
                  <label className="block text-[10px] font-bold text-[#5B6660] uppercase tracking-wider mb-1">
                    Make
                  </label>
                  <div className="relative">
                    <select
                      name="make"
                      value={formData.make}
                      onChange={handleInputChange}
                      className="w-full appearance-none bg-white border border-[#DCE1D7] rounded-xl px-2.5 py-2 pr-6 text-xs font-semibold text-[#131A15] focus:outline-none focus:ring-1 focus:ring-[#188A38] cursor-pointer"
                    >
                      {activeMakes.map((m) => (
                        <option key={m} value={m}>{m}</option>
                      ))}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-[#5B6660]">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Model */}
                <div>
                  <label className="block text-[10px] font-bold text-[#5B6660] uppercase tracking-wider mb-1">
                    Model
                  </label>
                  <input
                    type="text"
                    name="model"
                    placeholder="e.g. Swift, City"
                    value={formData.model}
                    onChange={handleInputChange}
                    className="w-full bg-white border border-[#DCE1D7] rounded-xl px-2.5 py-2 text-xs font-semibold text-[#131A15] placeholder:text-[#9AA59D] placeholder:font-normal focus:outline-none focus:ring-1 focus:ring-[#188A38]"
                  />
                </div>

                {/* Fuel Type */}
                <div>
                  <label className="block text-[10px] font-bold text-[#5B6660] uppercase tracking-wider mb-1">
                    Fuel
                  </label>
                  <div className="relative">
                    <select
                      name="fuel"
                      value={formData.fuel}
                      onChange={handleInputChange}
                      className="w-full appearance-none bg-white border border-[#DCE1D7] rounded-xl px-2.5 py-2 pr-6 text-xs font-semibold text-[#131A15] focus:outline-none focus:ring-1 focus:ring-[#188A38] cursor-pointer"
                    >
                      <option value="Petrol">Petrol</option>
                      <option value="Diesel">Diesel</option>
                      <option value="CNG">CNG / Hybrid</option>
                      <option value="Electric">Electric (EV)</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-[#5B6660]">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* SECTION 2: Condition & Running Status */}
            <div className="bg-[#F8F9F5] p-4 sm:p-5 rounded-2xl border border-[#E4E7DE] space-y-3.5">
              <span className="text-xs font-black uppercase tracking-wider text-[#1F5C33] flex items-center gap-1.5">
                <span className="w-5 h-5 rounded-full bg-[#188A38] text-white flex items-center justify-center text-[10px] font-bold">2</span>
                Vehicle Condition &amp; Running Status
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* Mileage */}
                <div>
                  <label className="block text-[10px] font-bold text-[#5B6660] uppercase tracking-wider mb-1">
                    Approximate Odometer (KM)
                  </label>
                  <div className="relative">
                    <select
                      name="mileage"
                      value={formData.mileage}
                      onChange={handleInputChange}
                      className="w-full appearance-none bg-white border border-[#DCE1D7] rounded-xl px-3 py-2.5 pr-8 text-xs font-semibold text-[#131A15] focus:outline-none focus:ring-1 focus:ring-[#188A38] cursor-pointer"
                    >
                      <option value="Under 30,000 km">Under 30,000 km</option>
                      <option value="30,000 - 70,000 km">30,000 - 70,000 km</option>
                      <option value="70,000 - 120,000 km">70,000 - 120,000 km</option>
                      <option value="120,000+ km">120,000+ km</option>
                      <option value="Scrap / Total Loss">Accidental / Total Loss</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2.5 text-[#5B6660]">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Running Condition */}
                <div>
                  <label className="block text-[10px] font-bold text-[#5B6660] uppercase tracking-wider mb-1">
                    Does it start &amp; drive?
                  </label>
                  <div className="relative">
                    <select
                      name="runs"
                      value={formData.runs}
                      onChange={handleInputChange}
                      className="w-full appearance-none bg-white border border-[#DCE1D7] rounded-xl px-3 py-2.5 pr-8 text-xs font-semibold text-[#131A15] focus:outline-none focus:ring-1 focus:ring-[#188A38] cursor-pointer"
                    >
                      <option value="Yes, starts & drives">Yes, starts &amp; drives normally</option>
                      <option value="Starts, doesn't drive">Starts, but cannot drive</option>
                      <option value="Does not start / Seized">Non-running / Seized engine</option>
                      <option value="Scrapped / Dismantled">Accidental shell / Partially stripped</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2.5 text-[#5B6660]">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* SECTION 3: Owner & Pickup Location */}
            <div className="bg-[#F8F9F5] p-4 sm:p-5 rounded-2xl border border-[#E4E7DE] space-y-3.5">
              <span className="text-xs font-black uppercase tracking-wider text-[#1F5C33] flex items-center gap-1.5">
                <span className="w-5 h-5 rounded-full bg-[#188A38] text-white flex items-center justify-center text-[10px] font-bold">3</span>
                Owner &amp; Free Doorstep Towing Details
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* Full Name */}
                <div>
                  <label className="block text-[10px] font-bold text-[#5B6660] uppercase tracking-wider mb-1">
                    Full Name <span className="text-[#D9534F]">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full bg-white border border-[#DCE1D7] rounded-xl px-3 py-2.5 text-xs sm:text-sm font-medium text-[#131A15] placeholder:text-[#8E9B91] focus:outline-none focus:ring-1 focus:ring-[#188A38]"
                  />
                </div>

                {/* Phone Number */}
                <div>
                  <label className="block text-[10px] font-bold text-[#5B6660] uppercase tracking-wider mb-1">
                    Mobile / WhatsApp <span className="text-[#D9534F]">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="10-digit mobile number"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full bg-white border border-[#DCE1D7] rounded-xl px-3 py-2.5 text-xs sm:text-sm font-medium text-[#131A15] placeholder:text-[#8E9B91] focus:outline-none focus:ring-1 focus:ring-[#188A38]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                {/* Pincode & City */}
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-[10px] font-bold text-[#5B6660] uppercase tracking-wider mb-1">
                      City / Region
                    </label>
                    <select
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      className="w-full bg-white border border-[#DCE1D7] rounded-xl px-2.5 py-2 text-xs font-semibold text-[#131A15] focus:outline-none focus:ring-1 focus:ring-[#188A38] cursor-pointer"
                    >
                      <option value="Delhi NCR">Delhi NCR</option>
                      <option value="Noida / Greater Noida">Noida / Gr. Noida</option>
                      <option value="Gurugram">Gurugram</option>
                      <option value="Faridabad">Faridabad</option>
                      <option value="Ghaziabad">Ghaziabad</option>
                      <option value="Haryana">Haryana</option>
                      <option value="Punjab">Punjab</option>
                      <option value="Other Region">Other Region</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold text-[#5B6660] uppercase tracking-wider mb-1">
                      Pincode
                    </label>
                    <input
                      type="text"
                      name="postalCode"
                      placeholder="e.g. 110001"
                      value={formData.postalCode}
                      onChange={handleInputChange}
                      className="w-full bg-white border border-[#DCE1D7] rounded-xl px-2.5 py-2 text-xs font-semibold text-[#131A15] placeholder:text-[#8E9B91] focus:outline-none focus:ring-1 focus:ring-[#188A38]"
                    />
                  </div>
                </div>

                {/* Preferred Pickup Timeline */}
                <div>
                  <label className="block text-[10px] font-bold text-[#5B6660] uppercase tracking-wider mb-1">
                    Preferred Pickup Window
                  </label>
                  <select
                    name="pickupTimeline"
                    value={formData.pickupTimeline}
                    onChange={handleInputChange}
                    className="w-full bg-white border border-[#DCE1D7] rounded-xl px-3 py-2 text-xs font-semibold text-[#131A15] focus:outline-none focus:ring-1 focus:ring-[#188A38] cursor-pointer"
                  >
                    <option value="Urgent (Today / Tomorrow)">Urgent (Today / Tomorrow)</option>
                    <option value="Within 2-3 Days">Within 2-3 Days</option>
                    <option value="This Weekend">This Weekend</option>
                    <option value="Just Exploring Valuation">Just checking scrap rate</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Action CTA Button */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 sm:py-4 px-6 rounded-2xl bg-gradient-to-r from-[#188A38] to-[#126829] hover:from-[#157931] hover:to-[#0f5421] text-white font-black text-sm sm:text-base tracking-wide uppercase shadow-[0_10px_25px_rgba(24,138,56,0.25)] transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 cursor-pointer"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
                    </svg>
                    <span>Calculating Scrap Rate...</span>
                  </>
                ) : (
                  <>
                    <span>Calculate Guaranteed Valuation</span>
                    <span className="font-extrabold text-base">↗</span>
                  </>
                )}
              </button>

              {/* Micro Trust Proof */}
              <div className="mt-3 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-[11.5px] text-[#6B7770]">
                <span className="flex items-center gap-1">
                  <svg className="w-3.5 h-3.5 text-[#188A38]" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 1a9 9 0 100 18 9 9 0 000-18zm3.707 7.707a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  100% Free Doorstep Towing
                </span>
                <span className="flex items-center gap-1">
                  <svg className="w-3.5 h-3.5 text-[#188A38]" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 1a9 9 0 100 18 9 9 0 000-18zm3.707 7.707a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Zero Hidden Charges
                </span>
                <span className="flex items-center gap-1">
                  <svg className="w-3.5 h-3.5 text-[#188A38]" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 1a9 9 0 100 18 9 9 0 000-18zm3.707 7.707a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Official CoD Parivahan Certificate
                </span>
              </div>
            </div>
          </form>

        </div>
      </div>
    );
  }

  // Compact Mode (Used in Homepage Hero widget)
  return (
    <div className={`w-full max-w-[430px] mx-auto ${className}`}>
      {/* Compact Card Container */}
      <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-[0_16px_40px_rgba(0,0,0,0.3)] border border-white/80 p-4 sm:p-4.5 text-[#131A15] transition-all">

        {/* Header Switcher: 2 Options (Individual vs Commercial) */}
        <div className="mb-3">
          <div className="grid grid-cols-2 p-1 bg-[#EEF1EB] rounded-xl border border-[#DCE1D7]">
            <button
              type="button"
              onClick={() => handleClientTypeChange('personal')}
              className={`py-1.5 px-2 text-xs font-bold rounded-lg transition-all flex items-center justify-center gap-1.5 ${
                clientType === 'personal'
                  ? 'bg-white text-[#131A15] shadow-sm font-extrabold border border-black/5'
                  : 'text-[#5B6660] hover:text-[#131A15]'
              }`}
            >
              <span>Individual / Personal</span>
            </button>

            <button
              type="button"
              onClick={() => handleClientTypeChange('commercial')}
              className={`py-1.5 px-2 text-xs font-bold rounded-lg transition-all flex items-center justify-center gap-1.5 ${
                clientType === 'commercial'
                  ? 'bg-white text-[#131A15] shadow-sm font-extrabold border border-black/5'
                  : 'text-[#5B6660] hover:text-[#131A15]'
              }`}
            >
              <span>Commercial / Fleet</span>
            </button>
          </div>
        </div>

        {/* Vehicle Format: Exactly 3 Tabs (Car, Bike, Others / Truck, Bus, Others) */}
        <div className="mb-3">
          <div className="grid grid-cols-3 gap-2">
            {activeCategories.map((tab) => {
              const isSelected = vehicleType === tab.id;
              const IconComponent = tab.icon;

              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => handleVehicleTypeChange(tab.id)}
                  className={`flex flex-col items-center justify-center py-2 px-1 rounded-xl transition-all relative ${
                    isSelected
                      ? 'bg-white border-2 border-[#131A15] shadow-sm text-[#131A15]'
                      : 'bg-[#F4F6F1] border border-transparent text-[#6B7770] hover:bg-[#EAEFE6] hover:text-[#131A15]'
                  }`}
                >
                  <div className={`transition-transform duration-150 ${isSelected ? 'scale-105 text-[#1F5C33]' : 'text-current'}`}>
                    <IconComponent />
                  </div>

                  <span className={`text-[10px] font-extrabold tracking-wider mt-1 uppercase leading-tight ${
                    isSelected ? 'text-[#131A15]' : 'text-[#6B7770]'
                  }`}>
                    {tab.label}
                  </span>

                  {isSelected && (
                    <span className="absolute -bottom-1 w-5 h-1 bg-[#6FCF3C] rounded-full" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Compact Form */}
        <form onSubmit={handleSubmit} className="space-y-2.5">

          {/* FIELD 1: Vehicle Registration Number */}
          <div>
            <label className="block text-[10px] font-bold text-[#5B6660] uppercase tracking-wider mb-1">
              Vehicle Number <span className="text-[#D9534F]">*</span>
            </label>

            <div className="flex items-center border border-[#D0D6CA] rounded-xl overflow-hidden bg-white shadow-xs focus-within:ring-2 focus-within:ring-[#6FCF3C] focus-within:border-transparent">
              <div className="bg-[#0e2415] text-white px-2.5 py-2 flex flex-col items-center justify-center flex-shrink-0 select-none border-r border-[#D0D6CA]">
                <span className="text-[8px] leading-tight text-[#6FCF3C] font-bold">IND</span>
                <div className="w-1.5 h-1.5 rounded-full bg-[#6FCF3C] mt-0.5" />
              </div>

              <input
                type="text"
                name="vehicleNumber"
                required
                placeholder="e.g. DL 01 AB 1234"
                value={formData.vehicleNumber}
                onChange={(e) => {
                  handleInputChange({
                    target: { name: 'vehicleNumber', value: e.target.value.toUpperCase() },
                  });
                }}
                className="flex-1 px-3 py-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#131A15] placeholder:text-[#9AA59D] placeholder:font-normal focus:outline-none"
              />
            </div>
          </div>

          {/* FIELD ROW 2: Vehicle Details (Year | Make | Model) */}
          <div>
            <label className="block text-[10px] font-bold text-[#5B6660] uppercase tracking-wider mb-1">
              Vehicle Details
            </label>
            <div className="grid grid-cols-3 gap-1.5 bg-[#F8F9F5] p-1 rounded-xl border border-[#E4E7DE]">
              {/* Year */}
              <div className="relative">
                <select
                  name="year"
                  value={formData.year}
                  onChange={handleInputChange}
                  className="w-full appearance-none bg-white border border-[#DCE1D7] rounded-lg px-2 py-1.5 pr-5 text-xs font-semibold text-[#131A15] focus:outline-none focus:ring-1 focus:ring-[#6FCF3C] cursor-pointer"
                >
                  <option value="2025">2025</option>
                  <option value="2024">2024</option>
                  <option value="2023">2023</option>
                  <option value="2022">2022</option>
                  <option value="2020">2020 - 2021</option>
                  <option value="2018">2017 - 2019</option>
                  <option value="2016">2014 - 2016</option>
                  <option value="2012">2010 - 2013</option>
                  <option value="2008">2005 - 2009</option>
                  <option value="2000">2000 - 2004</option>
                  <option value="older">1999 &amp; Older</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-1 text-[#5B6660]">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>

              {/* Make */}
              <div className="relative">
                <select
                  name="make"
                  value={formData.make}
                  onChange={handleInputChange}
                  className="w-full appearance-none bg-white border border-[#DCE1D7] rounded-lg px-2 py-1.5 pr-5 text-xs font-semibold text-[#131A15] focus:outline-none focus:ring-1 focus:ring-[#6FCF3C] cursor-pointer"
                >
                  {activeMakes.map((m) => (
                    <option key={m} value={m}>{m}</option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-1 text-[#5B6660]">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>

              {/* Model */}
              <div>
                <input
                  type="text"
                  name="model"
                  placeholder="Model"
                  value={formData.model}
                  onChange={handleInputChange}
                  className="w-full bg-white border border-[#DCE1D7] rounded-lg px-2 py-1.5 text-xs font-semibold text-[#131A15] placeholder:text-[#9AA59D] placeholder:font-normal focus:outline-none focus:ring-1 focus:ring-[#6FCF3C]"
                />
              </div>
            </div>
          </div>

          {/* FIELD ROW 3: Condition (Mileage & Does it run?) */}
          <div>
            <label className="block text-[10px] font-bold text-[#5B6660] uppercase tracking-wider mb-1">
              Condition
            </label>
            <div className="grid grid-cols-2 gap-1.5 bg-[#F8F9F5] p-1 rounded-xl border border-[#E4E7DE]">
              {/* Mileage */}
              <div className="relative">
                <select
                  name="mileage"
                  value={formData.mileage}
                  onChange={handleInputChange}
                  className="w-full appearance-none bg-white border border-[#DCE1D7] rounded-lg px-2 py-1.5 pr-6 text-xs font-semibold text-[#131A15] focus:outline-none focus:ring-1 focus:ring-[#6FCF3C] cursor-pointer"
                >
                  <option value="Under 30,000 km">&lt; 30,000 km</option>
                  <option value="30,000 - 70,000 km">30k - 70k km</option>
                  <option value="70,000 - 120,000 km">70k - 120k km</option>
                  <option value="120,000+ km">120k+ km</option>
                  <option value="Scrap / Total Loss">Accidental / Total Loss</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-1.5 text-[#5B6660]">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>

              {/* Does it run? */}
              <div className="relative">
                <select
                  name="runs"
                  value={formData.runs}
                  onChange={handleInputChange}
                  className="w-full appearance-none bg-white border border-[#DCE1D7] rounded-lg px-2 py-1.5 pr-6 text-xs font-semibold text-[#131A15] focus:outline-none focus:ring-1 focus:ring-[#6FCF3C] cursor-pointer"
                >
                  <option value="Yes, starts & drives">Does it run? Yes</option>
                  <option value="Starts, doesn't drive">Starts, won&apos;t drive</option>
                  <option value="Does not start / Seized">Doesn&apos;t run</option>
                  <option value="Scrapped / Dismantled">Dismantled / Shell</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-1.5 text-[#5B6660]">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* FIELD ROW 4: Contact Details (Name, Phone, Pickup Pincode) */}
          <div className="space-y-1.5">
            <input
              type="text"
              name="name"
              required
              placeholder="Full Name *"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full bg-[#F8F9F5] border border-[#DCE1D7] rounded-xl px-2.5 py-1.5 text-xs font-medium text-[#131A15] placeholder:text-[#8E9B91] focus:outline-none focus:ring-1 focus:ring-[#6FCF3C] focus:bg-white"
            />

            <div className="grid grid-cols-2 gap-1.5">
              <input
                type="tel"
                name="phone"
                required
                placeholder="Phone Number *"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full bg-[#F8F9F5] border border-[#DCE1D7] rounded-xl px-2.5 py-1.5 text-xs font-medium text-[#131A15] placeholder:text-[#8E9B91] focus:outline-none focus:ring-1 focus:ring-[#6FCF3C] focus:bg-white"
              />

              <input
                type="text"
                name="postalCode"
                placeholder="Pickup Pincode"
                value={formData.postalCode}
                onChange={handleInputChange}
                className="w-full bg-[#F8F9F5] border border-[#DCE1D7] rounded-xl px-2.5 py-1.5 text-xs font-medium text-[#131A15] placeholder:text-[#8E9B91] focus:outline-none focus:ring-1 focus:ring-[#6FCF3C] focus:bg-white"
              />
            </div>
          </div>

          {/* Action CTA Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full mt-1 py-2.5 px-4 rounded-xl bg-gradient-to-r from-[#6FCF3C] to-[#5AB82E] hover:from-[#5AB82E] hover:to-[#4EA326] text-[#08180c] font-black text-xs sm:text-sm tracking-wider uppercase shadow-[0_8px_20px_rgba(111,207,60,0.35)] transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-1.5 cursor-pointer"
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin h-4 w-4 text-[#08180c]" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
                </svg>
                <span>Submitting Details...</span>
              </>
            ) : (
              <>
                <span>GET INSTANT ESTIMATE</span>
                <span className="font-extrabold text-sm">↗</span>
              </>
            )}
          </button>
        </form>

      </div>
    </div>
  );
}
