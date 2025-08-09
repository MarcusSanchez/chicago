'use client';

import { User, Mail, Phone, MessageSquare, Send } from 'lucide-react';

export default function ContactForm() {
  return (
    <div>
      <h2 className="text-3xl font-bold text-[#002552] mb-6">Send Us a Message</h2>
      <p className="text-gray-700 mb-8 leading-relaxed">
        Ready to get started? Fill out the form below and we'll get back to you within 24 hours 
        to discuss your career goals and how we can help you achieve them.
      </p>
      
      <form className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
              First Name *
            </label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                id="firstName"
                name="firstName"
                required
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-200 hover:border-gray-400 text-gray-900 placeholder-gray-500"
                placeholder="Your first name"
              />
            </div>
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
              Last Name *
            </label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                id="lastName"
                name="lastName"
                required
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-200 hover:border-gray-400 text-gray-900 placeholder-gray-500"
                placeholder="Your last name"
              />
            </div>
          </div>
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Email Address *
          </label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-200 hover:border-gray-400 text-gray-900 placeholder-gray-500"
              placeholder="your.email@example.com"
            />
          </div>
        </div>
        
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
            Phone Number
          </label>
          <div className="relative">
            <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="tel"
              id="phone"
              name="phone"
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-200 hover:border-gray-400 text-gray-900 placeholder-gray-500"
              placeholder="(555) 123-4567"
            />
          </div>
        </div>
        
        <div>
          <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
            Service Interest
          </label>
          <select
            id="service"
            name="service"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-200 hover:border-gray-400 text-gray-500"
            onChange={(e) => {
              e.target.className = e.target.value === '' 
                ? "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-200 hover:border-gray-400 text-gray-500"
                : "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-200 hover:border-gray-400 text-gray-900";
            }}
          >
            <option value="" className="text-gray-500">Select a service...</option>
            <option value="career-coaching" className="text-gray-900">Career Coaching</option>
            <option value="interview-prep" className="text-gray-900">Interview Preparation</option>
            <option value="resume-linkedin" className="text-gray-900">Resume & LinkedIn</option>
            <option value="ai-services" className="text-gray-900">AI-Driven Services</option>
            <option value="salary-negotiation" className="text-gray-900">Salary Negotiation</option>
            <option value="group-coaching" className="text-gray-900">Group Coaching</option>
            <option value="consultation" className="text-gray-900">General Consultation</option>
          </select>
        </div>
        
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
            Message *
          </label>
          <div className="relative">
            <MessageSquare className="absolute left-3 top-4 w-5 h-5 text-gray-400" />
            <textarea
              id="message"
              name="message"
              rows={6}
              required
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent resize-none transition-all duration-200 hover:border-gray-400 text-gray-900 placeholder-gray-500"
              placeholder="Tell us about your career goals and how we can help you..."
            ></textarea>
          </div>
        </div>
        
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-[#002552] px-8 py-4 rounded-lg font-semibold hover:from-yellow-300 hover:to-yellow-400 transition-all duration-200 flex items-center justify-center group shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
        >
          Send Message
          <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </form>
    </div>
  );
}