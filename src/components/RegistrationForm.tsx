"use client";

import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Copy, CheckCircle2, ChevronRight, ChevronLeft, Upload, FileText, Download } from "lucide-react";

export default function RegistrationForm() {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    teamName: "",
    captainName: "",
    captainEmail: "",
    captainPhone: "",
    captainShirt: "",
    m2Name: "",
    m2Email: "",
    m2Phone: "",
    m2Shirt: "",
    m3Name: "",
    m3Email: "",
    m3Phone: "",
    m3Shirt: "",
    description: "",
    captainSchool: "",
    m2School: "",
    m3School: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleNextStep = () => {
    // Add validation logic here before passing
    setStep(2);
  };

  const submitForm = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  // iOS-safe scroll lock: freezes both <html> and <body>
  useEffect(() => {
    if (isSuccess) {
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    }
    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    };
  }, [isSuccess]);

  // Portal target — only available client-side
  const portalRef = useRef<Element | null>(null);
  useEffect(() => {
    portalRef.current = document.body;
  }, []);

  const renderStepOne = () => (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-8"
    >
      <div>
        <label className="block text-sm font-semibold mb-2">
          Team Name (keep it SFW) <span className="text-gold">*</span>
        </label>
        <input
          required
          type="text"
          name="teamName"
          placeholder="e.g. Lambda Squad"
          value={formData.teamName}
          onChange={handleInputChange}
          className="w-full bg-[#0a1c38] border border-[#1c4481] rounded-lg p-3 text-[#eeeae0] focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all"
        />
      </div>

      <div className="space-y-6">
        {/* Captain */}
        <div className="bg-[#0a1c38] p-4 sm:p-6 rounded-xl border border-[#1c4481]">
          <h3 className="text-base sm:text-lg font-bold text-white mb-4 flex items-center gap-2">
            <span className="bg-gold/10 text-gold px-3 py-1 rounded-full text-xs tracking-wider uppercase">Captain</span>
            Member 1 Details
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold mb-2 text-white">Full Name <span className="text-gold">*</span></label>
              <input required type="text" name="captainName" value={formData.captainName} onChange={handleInputChange} placeholder="First & Last Name" />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2 text-white">Email <span className="text-gold">*</span></label>
              <input required type="email" name="captainEmail" value={formData.captainEmail} onChange={handleInputChange} placeholder="email@school.ma" />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2 text-white">Phone Number <span className="text-gold">*</span></label>
              <input required type="tel" name="captainPhone" value={formData.captainPhone} onChange={handleInputChange} placeholder="+212 6..." />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2 text-white">T-Shirt Size <span className="text-gold">*</span></label>
              <select required name="captainShirt" value={formData.captainShirt} onChange={handleInputChange}>
                <option value="" disabled>Select Size</option>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
                <option value="XXL">XXL</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>
        </div>

        {/* Member 2 */}
        <div className="bg-[#0a1c38] p-4 sm:p-6 rounded-xl border border-[#1c4481]">
          <h3 className="text-base sm:text-lg font-bold text-white mb-4 flex items-center gap-2">
            <span className="bg-[#1c4481] text-white/70 px-3 py-1 rounded-full text-xs tracking-wider uppercase">Member 2</span>
            Member 2 Details
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold mb-2 text-white">Full Name <span className="text-gold">*</span></label>
              <input required type="text" name="m2Name" value={formData.m2Name} onChange={handleInputChange} placeholder="First & Last Name" />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2 text-white">Email <span className="text-gold">*</span></label>
              <input required type="email" name="m2Email" value={formData.m2Email} onChange={handleInputChange} placeholder="email@school.ma" />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2 text-white">Phone Number <span className="text-gold">*</span></label>
              <input required type="tel" name="m2Phone" value={formData.m2Phone} onChange={handleInputChange} placeholder="+212 6..." />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2 text-white">T-Shirt Size <span className="text-gold">*</span></label>
              <select required name="m2Shirt" value={formData.m2Shirt} onChange={handleInputChange}>
                <option value="" disabled>Select Size</option>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
                <option value="XXL">XXL</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>
        </div>

        {/* Member 3 */}
        <div className="bg-[#0a1c38] p-4 sm:p-6 rounded-xl border border-[#1c4481]">
          <h3 className="text-base sm:text-lg font-bold text-white mb-4 flex items-center gap-2">
             <span className="bg-[#1c4481] text-white/70 px-3 py-1 rounded-full text-xs tracking-wider uppercase">Member 3</span>
            Member 3 Details
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold mb-2 text-white">Full Name <span className="text-gold">*</span></label>
              <input required type="text" name="m3Name" value={formData.m3Name} onChange={handleInputChange} placeholder="First & Last Name" />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2 text-white">Email <span className="text-gold">*</span></label>
              <input required type="email" name="m3Email" value={formData.m3Email} onChange={handleInputChange} placeholder="email@school.ma" />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2 text-white">Phone Number <span className="text-gold">*</span></label>
              <input required type="tel" name="m3Phone" value={formData.m3Phone} onChange={handleInputChange} placeholder="+212 6..." />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2 text-white">T-Shirt Size <span className="text-gold">*</span></label>
              <select required name="m3Shirt" value={formData.m3Shirt} onChange={handleInputChange}>
                <option value="" disabled>Select Size</option>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
                <option value="XXL">XXL</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-end pt-6 border-t border-[#1c4481]">
        <button
          type="button"
          onClick={handleNextStep}
          className="btn-primary w-full sm:w-auto"
        >
          Continue to Step 2 <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </motion.div>
  );

  const renderStepTwo = () => (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-8"
    >
      <div className="bg-[#1c4481]/30 border border-[#1c4481] p-5 rounded-lg text-sm text-[#eeeae0]/80">
        <h4 className="font-bold text-white mb-2 text-base">Official Teams Only</h4>
        <p>Fill out this section if you are an official team. For non-official teams, you can skip the proof uploads.</p>
      </div>

      <div>
        <label className="block text-sm font-semibold mb-2">
          Description <span className="text-white/50 font-normal ml-2">(Optional)</span>
        </label>
        <textarea
          name="description"
          placeholder="Tell us a bit about your team..."
          value={formData.description}
          onChange={handleInputChange}
          className="w-full h-24"
        />
      </div>

      <div className="space-y-6">
        {/* Captain School */}
        <div className="bg-[#0a1c38] p-6 rounded-xl border border-[#1c4481]">
          <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
            <span className="bg-gold/10 text-gold px-3 py-1 rounded-full text-xs tracking-wider uppercase">Captain</span>
            School Details
          </h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold mb-2 text-white">Captain's School</label>
              <input type="text" name="captainSchool" value={formData.captainSchool} onChange={handleInputChange} placeholder="e.g. INPT, ENSAS..." />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2 text-white">Proof of Enrollment</label>
              <div className="border-2 border-dashed border-[#1c4481] rounded-lg p-8 text-center hover:border-gold/50 transition-colors cursor-pointer group">
                <Upload className="w-8 h-8 mx-auto text-[#6284b3] group-hover:text-gold mb-3 transition-colors" />
                <p className="text-sm text-[#6284b3]">
                  <span className="text-gold font-semibold">Click to upload</span> or drag and drop
                </p>
                <p className="text-xs text-[#6284b3]/70 mt-1">PDF, JPG, PNG (Max 5MB)</p>
              </div>
            </div>
          </div>
        </div>

        {/* Member 2 School */}
        <div className="bg-[#0a1c38] p-6 rounded-xl border border-[#1c4481]">
           <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
            <span className="bg-[#1c4481] text-white/70 px-3 py-1 rounded-full text-xs tracking-wider uppercase">Member 2</span>
            School Details
          </h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold mb-2 text-white">Member 2's School</label>
              <input type="text" name="m2School" value={formData.m2School} onChange={handleInputChange} placeholder="e.g. INPT, ENSAS..." />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2 text-white">Proof of Enrollment</label>
              <div className="border-2 border-dashed border-[#1c4481] rounded-lg p-8 text-center hover:border-gold/50 transition-colors cursor-pointer group">
                <Upload className="w-8 h-8 mx-auto text-[#6284b3] group-hover:text-gold mb-3 transition-colors" />
                <p className="text-sm text-[#6284b3]">
                  <span className="text-gold font-semibold">Click to upload</span> or drag and drop
                </p>
                <p className="text-xs text-[#6284b3]/70 mt-1">PDF, JPG, PNG (Max 5MB)</p>
              </div>
            </div>
          </div>
        </div>

        {/* Member 3 School */}
        <div className="bg-[#0a1c38] p-6 rounded-xl border border-[#1c4481]">
          <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
            <span className="bg-[#1c4481] text-white/70 px-3 py-1 rounded-full text-xs tracking-wider uppercase">Member 3</span>
            School Details
          </h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold mb-2 text-white">Member 3's School</label>
              <input type="text" name="m3School" value={formData.m3School} onChange={handleInputChange} placeholder="e.g. INPT, ENSAS..." />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2 text-white">Proof of Enrollment</label>
              <div className="border-2 border-dashed border-[#1c4481] rounded-lg p-8 text-center hover:border-gold/50 transition-colors cursor-pointer group">
                <Upload className="w-8 h-8 mx-auto text-[#6284b3] group-hover:text-gold mb-3 transition-colors" />
                <p className="text-sm text-[#6284b3]">
                  <span className="text-gold font-semibold">Click to upload</span> or drag and drop
                </p>
                <p className="text-xs text-[#6284b3]/70 mt-1">PDF, JPG, PNG (Max 5MB)</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col-reverse sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-6 border-t border-[#1c4481]">
        <button
          type="button"
          onClick={() => setStep(1)}
          className="text-[#6284b3] hover:text-white font-semibold flex items-center justify-center gap-2 transition-colors min-h-[48px] px-4 rounded border border-[#1c4481] hover:border-[#6284b3]"
        >
          <ChevronLeft className="w-4 h-4" /> Back to Step 1
        </button>
        <button
          onClick={submitForm}
          disabled={isSubmitting}
          className="btn-primary w-full sm:w-auto"
        >
          {isSubmitting ? "Submitting..." : "Submit Registration"}
        </button>
      </div>
    </motion.div>
  );

  const successContent = (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        background: "#020611",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        overflowY: "auto",
        WebkitOverflowScrolling: "touch",
        padding: "64px 20px",
        textAlign: "center",
        boxSizing: "border-box",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        style={{ width: "100%", maxWidth: 480 }}
      >
        {/* Icon */}
        <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gold/10 border-2 border-gold rounded-full flex items-center justify-center mx-auto mb-5">
          <CheckCircle2 className="w-8 h-8 sm:w-10 sm:h-10 text-gold" />
        </div>

        {/* Title */}
        <h2 className="text-2xl sm:text-3xl font-outfit font-bold text-white mb-3">Registration Received!</h2>
        <p className="text-[#6284b3] mb-8 text-sm sm:text-base leading-relaxed">
          Your team <strong className="text-white">{formData.teamName || 'Details'}</strong> has been registered for the 20th edition of JNJD. We will contact the captain shortly.
        </p>

        {/* Payment box */}
        <div className="bg-gold/10 border border-gold/30 p-5 rounded-xl mb-8 text-left">
          <h4 className="text-gold font-bold mb-2 uppercase tracking-wider text-xs sm:text-sm">Payment Information</h4>
          <p className="text-[#eeeae0] text-sm">Participation fee: <strong>180 MAD</strong> per team.</p>
          <p className="text-xs text-[#6284b3] mt-2">Payment via wire transfer or on-site on the day.</p>
        </div>

        <button
          onClick={() => window.location.reload()}
          className="btn-outline w-full"
        >
          Register Another Team
        </button>
      </motion.div>
    </div>
  );


  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Progress Indicator */}
      {!isSuccess && (
        <div className="flex items-center justify-center mb-8 sm:mb-12">
          <div className={`flex items-center ${step >= 1 ? 'text-gold' : 'text-[#6284b3]'}`}>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 ${step === 1 ? 'bg-gold/10 border-2 border-gold' : step > 1 ? 'bg-gold text-[#020611]' : 'border-2 border-[#1c4481]'}`}>
              {step > 1 ? <CheckCircle2 className="w-4 h-4" /> : '1'}
            </div>
            <span className="ml-2 sm:ml-3 font-semibold text-xs sm:text-sm tracking-wider uppercase">Team Details</span>
          </div>
          <div className={`w-10 sm:w-20 h-px mx-3 sm:mx-4 ${step > 1 ? 'bg-gold' : 'bg-[#1c4481]'}`}></div>
          <div className={`flex items-center ${step >= 2 ? 'text-gold' : 'text-[#6284b3]'}`}>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 ${step === 2 ? 'bg-gold/10 border-2 border-gold' : 'border-2 border-[#1c4481]'}`}>
              2
            </div>
            <span className="ml-2 sm:ml-3 font-semibold text-xs sm:text-sm tracking-wider uppercase">Verify Status</span>
          </div>
        </div>
      )}

      {/* Form Area */}
      <div className="glass-panel p-5 sm:p-8 md:p-10 rounded-2xl relative">
        {/* Decorative Grid */}
        <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none" aria-hidden>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+CjxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0ibm9uZSI+PC9yZWN0Pgo8Y2lyY2xlIGN4PSIxIiBjeT0iMSIgcj0iMSIgZmlsbD0icmdiYSg4LCAxNSwgMzEsIDAuMykiPjwvY2lyY2xlPgo8L3N2Zz4=')] opacity-20" />
        </div>

        <div className="relative z-10">
          <AnimatePresence>
            {step === 1 ? renderStepOne() : renderStepTwo()}
          </AnimatePresence>
        </div>
      </div>

      {/* Success overlay rendered into document.body via portal to bypass iOS scroll issues */}
      {isSuccess && portalRef.current && createPortal(successContent, portalRef.current)}
    </div>
  );
}
