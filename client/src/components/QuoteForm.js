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
  Sparkles: () => (
    <svg className="w-3.5 h-3.5 text-[#1F5C33]" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
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

export default function QuoteForm() {
  // Main Category: 'personal' vs 'commercial'
  const [clientType, setClientType] = useState('personal');

  // Selected Vehicle Type (CAR, BIKE, OTHERS / TRUCK, BUS, OTHERS)
  const [vehicleType, setVehicleType] = useState('car');

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    postalCode: '',
    vehicleNumber: '',
    year: '2016',
    make: 'Maruti Suzuki',
    model: '',
    mileage: '50,000 - 100,000 km',
    runs: 'Yes, starts & drives',
  });

  const [isFetchingParivahan, setIsFetchingParivahan] = useState(false);
  const [parivahanFetched, setParivahanFetched] = useState(false);
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

  // Parivahan Auto-Fetch Handler
  const handleFetchParivahan = () => {
    const rawNum = formData.vehicleNumber.trim();
    if (!rawNum) {
      alert('Please enter a vehicle registration number first (e.g. DL 01 AB 1234)');
      return;
    }

    setIsFetchingParivahan(true);

    // Simulate Parivahan API fetch delay
    setTimeout(() => {
      setIsFetchingParivahan(false);
      setParivahanFetched(true);

      // Populate mock data if fields are empty or as sample fetch
      if (vehicleType === 'bike') {
        setFormData((prev) => ({
          ...prev,
          year: '2017',
          make: 'Hero',
          model: 'Splendor Plus',
          vehicleNumber: rawNum.toUpperCase(),
        }));
      } else if (vehicleType === 'truck' || vehicleType === 'bus') {
        setFormData((prev) => ({
          ...prev,
          year: '2015',
          make: 'Tata Motors',
          model: 'LPT 1613',
          vehicleNumber: rawNum.toUpperCase(),
        }));
      } else {
        setFormData((prev) => ({
          ...prev,
          year: '2016',
          make: 'Maruti Suzuki',
          model: 'Swift Dzire VDi',
          vehicleNumber: rawNum.toUpperCase(),
        }));
      }
    }, 700);
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
    setParivahanFetched(false);
    setFormData({
      name: '',
      phone: '',
      postalCode: '',
      vehicleNumber: '',
      year: '2016',
      make: 'Maruti Suzuki',
      model: '',
      mileage: '50,000 - 100,000 km',
      runs: 'Yes, starts & drives',
    });
  };

  const activeCategories = VEHICLE_CATEGORIES[clientType];
  const activeMakes = POPULAR_MAKES[vehicleType] || POPULAR_MAKES.car;

  return (
    <div className="w-full max-w-[430px] mx-auto">
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
              <span>👤</span>
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
              <span>🏢</span>
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

        {/* Form Body or Result */}
        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="space-y-2.5">

            {/* FIELD 1: Indian Vehicle Registration Plate (First field + Parivahan Integration) */}
            <div>
              <div className="flex items-center justify-between mb-1">
                <label className="text-[10px] font-bold text-[#5B6660] uppercase tracking-wider flex items-center gap-1">
                  <span>Vehicle Number</span>
                  <span className="text-[#D9534F]">*</span>
                </label>
                {parivahanFetched ? (
                  <span className="text-[10px] font-semibold text-[#1F5C33] flex items-center gap-0.5">
                    <Icons.Check /> Parivahan Verified
                  </span>
                ) : (
                  <span className="text-[10px] text-[#7A867F]">
                    Fetches details via Parivahan API
                  </span>
                )}
              </div>

              <div className="flex items-center border border-[#D0D6CA] rounded-xl overflow-hidden bg-white shadow-xs focus-within:ring-2 focus-within:ring-[#6FCF3C] focus-within:border-transparent">
                {/* Indian Plate IND Badge */}
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

                <button
                  type="button"
                  onClick={handleFetchParivahan}
                  disabled={isFetchingParivahan}
                  className="px-2.5 py-2 bg-[#F1F5EB] hover:bg-[#E3EDD9] text-[#1F5C33] text-[10px] sm:text-[11px] font-bold flex items-center gap-1 border-l border-[#D0D6CA] transition-colors whitespace-nowrap cursor-pointer"
                  title="Auto-fetch vehicle details from Parivahan VAHAN database"
                >
                  {isFetchingParivahan ? (
                    <span className="animate-pulse">Fetching...</span>
                  ) : (
                    <>
                      <Icons.Sparkles />
                      <span>Fetch</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* FIELD ROW 2: Vehicle Details (Year | Make | Model) - Editable after auto-fetch */}
            <div>
              <label className="block text-[10px] font-bold text-[#5B6660] uppercase tracking-wider mb-1">
                Vehicle Details (Auto-filled / Editable)
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

            {/* FIELD ROW 3: Condition (Mileage & Does it run? - RC removed as it is mandatory) */}
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
                    <option value="Starts, doesn't drive">Starts, won't drive</option>
                    <option value="Does not start / Seized">Doesn't run</option>
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

            {/* Streamlined Trust Line */}
            <div className="pt-1 flex items-center justify-between text-[10px] font-semibold text-[#5B6660] px-1">
              <span className="flex items-center gap-0.5"><Icons.Check /> Free Towing</span>
              <span className="flex items-center gap-0.5"><Icons.Check /> Instant Payment</span>
              <span className="flex items-center gap-0.5"><Icons.Check /> COD Certificate</span>
            </div>

          </form>
        ) : (
          /* Thank You Screen (Matching user reference) */
          <div className="py-5 px-2 text-center animate-fadeIn">
            {/* Circular Green Checkmark Icon */}
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-[3.5px] border-[#22c55e] flex items-center justify-center mx-auto text-[#22c55e] bg-green-50/50 mb-3 shadow-xs">
              <svg className="w-8 h-8 sm:w-10 sm:h-10 text-[#22c55e]" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>

            {/* Heading */}
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#131A15] tracking-tight">
              Thank You!
            </h2>

            {/* Subtitle Message */}
            <p className="text-[#5B6660] text-xs sm:text-sm mt-2 max-w-xs mx-auto leading-relaxed">
              Your detail has been successfully submitted. Our team will get back to you shortly.
            </p>

            {/* Submitted Summary Info */}
            <div className="mt-4 p-3 bg-[#F8F9F5] rounded-xl border border-[#E4E7DE] text-left text-xs space-y-1">
              <div className="flex items-center justify-between">
                <span className="text-[#7A867F]">Vehicle:</span>
                <span className="font-bold text-[#131A15] uppercase">
                  {formData.vehicleNumber || `${formData.year} ${formData.make}`}
                </span>
              </div>
              {formData.name && (
                <div className="flex items-center justify-between">
                  <span className="text-[#7A867F]">Contact Person:</span>
                  <span className="font-semibold text-[#131A15]">{formData.name}</span>
                </div>
              )}
              {formData.phone && (
                <div className="flex items-center justify-between">
                  <span className="text-[#7A867F]">Phone:</span>
                  <span className="font-semibold text-[#131A15]">{formData.phone}</span>
                </div>
              )}
            </div>

            {/* Back to Home Button */}
            <div className="mt-5">
              <button
                type="button"
                onClick={handleResetForm}
                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-[#1F5C33] hover:bg-[#164426] text-white font-bold text-xs sm:text-sm shadow-md transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                <span>Back to Home</span>
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
