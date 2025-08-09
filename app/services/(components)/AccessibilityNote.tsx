export default function AccessibilityNote() {
  return (
    <div className="bg-[#fefaf7] border border-yellow-200 rounded-xl p-6 mb-16">
      <div className="flex items-start">
        <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
          <span className="text-[#002552] text-sm font-bold">!</span>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#002552] mb-2">Sliding Scale Available</h3>
          <p className="text-gray-700 leading-relaxed">
            We believe career coaching should be accessible to everyone. Sliding scale pricing and payment plans
            are available for artists, students, and job seekers facing financial constraints. Contact us to
            discuss options that work for your budget.
          </p>
        </div>
      </div>
    </div>
  );
}