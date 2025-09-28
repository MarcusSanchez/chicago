import { Clock, Mail, MapPin, Phone } from 'lucide-react';

export default function ContactInfo() {
  return (
    <div>
      <h2 className="text-3xl font-bold text-[#002552] mb-6">Get In Touch</h2>
      <p className="text-gray-700 mb-8 leading-relaxed">
        Multiple ways to connect with us. We're here to help you take the next step
        in your career journey.
      </p>

      <div className="space-y-6 mb-8">
        <div className="flex items-center p-6 bg-white rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
          <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mr-4">
            <Phone className="w-6 h-6 text-[#002552]" />
          </div>
          <div>
            <h4 className="text-lg font-semibold text-[#002552] mb-1">Phone</h4>
            <p className="text-gray-700 font-medium mb-1">(312) 555-0123</p>
            <p className="text-gray-500 text-sm">Mon-Fri: 9 AM - 6 PM CST</p>
          </div>
        </div>

        <div className="flex items-center p-6 bg-white rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
          <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mr-4">
            <Mail className="w-6 h-6 text-[#002552]" />
          </div>
          <div>
            <h4 className="text-lg font-semibold text-[#002552] mb-1">Email</h4>
            <p className="text-gray-700 font-medium mb-1">info@chicagocareercollective.com</p>
            <p className="text-gray-500 text-sm">24-hour response time</p>
          </div>
        </div>

        <div className="flex items-center p-6 bg-white rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
          <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mr-4">
            <MapPin className="w-6 h-6 text-[#002552]" />
          </div>
          <div>
            <h4 className="text-lg font-semibold text-[#002552] mb-1">Location</h4>
            <p className="text-gray-700 font-medium mb-1">Chicago, IL</p>
            <p className="text-gray-500 text-sm">Virtual sessions nationwide</p>
          </div>
        </div>
      </div>

      {/* Office Hours */}
      <div className="bg-[#fefaf7] rounded-xl p-6 border border-yellow-200">
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center mr-4">
            <Clock className="w-6 h-6 text-[#002552]" />
          </div>
          <div>
            <h4 className="text-lg font-semibold text-[#002552] mb-1">Office Hours</h4>
            <p className="text-gray-600 text-sm">When we're available to help</p>
          </div>
        </div>
        <div className="space-y-2">
          <div className="flex justify-between items-center py-2">
            <span className="font-medium text-[#002552]">Monday - Sunday:</span>
            <span className="text-gray-700">By Appointment</span>
          </div>
        </div>
        <div className="mt-4 pt-4 border-t border-yellow-200">
          <p className="text-sm text-gray-700 text-center">
            <strong className="text-[#002552]">Need urgent assistance?</strong> We offer emergency consultations for time-sensitive career decisions.
          </p>
        </div>
      </div>
    </div>
  );
}