import { useState } from 'react';
import { Star, User, Lock, Search, ChevronRight, Calendar, Building, Briefcase, Eye, XCircle, Check, LogOut, Home } from 'lucide-react';

const MockupContainer = ({ children, title }) => (
  <div className="border rounded-lg p-6 mb-8 w-full max-w-3xl mx-auto bg-white shadow-sm">
    <h3 className="text-lg font-medium text-gray-800 mb-4">{title}</h3>
    {children}
  </div>
);

export default function FigmaMockups() {
  const [currentScreen, setCurrentScreen] = useState("login");
  
  return (
    <div className="flex flex-col items-center p-4 bg-gray-50 min-h-screen">
      <div className="w-full max-w-3xl mb-8">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center">
            <span className="text-xl font-semibold text-blue-600">RecruReview</span>
          </div>
          <div className="flex gap-4">
            <button 
              onClick={() => setCurrentScreen("login")}
              className={`px-3 py-1 rounded ${currentScreen === "login" ? "bg-blue-100 text-blue-700" : "text-gray-500"}`}
            >
              Login Screen
            </button>
            <button 
              onClick={() => setCurrentScreen("review")}
              className={`px-3 py-1 rounded ${currentScreen === "review" ? "bg-blue-100 text-blue-700" : "text-gray-500"}`}
            >
              Review Form
            </button>
            <button 
              onClick={() => setCurrentScreen("dashboard")}
              className={`px-3 py-1 rounded ${currentScreen === "dashboard" ? "bg-blue-100 text-blue-700" : "text-gray-500"}`}
            >
              User Dashboard
            </button>
          </div>
        </div>
      </div>

      {currentScreen === "login" && <LoginScreen />}
      {currentScreen === "review" && <ReviewForm />}
      {currentScreen === "dashboard" && <UserDashboard />}
    </div>
  );
}

// Login Screen Mockup
const LoginScreen = () => (
  <MockupContainer title="Login Screen">
    <div className="flex flex-col md:flex-row h-full">
      <div className="w-full md:w-1/2 p-4 md:p-8">
        <div className="mb-12">
          <h1 className="text-3xl font-bold text-blue-600 mb-2">RecruReview</h1>
          <p className="text-gray-600">Share your interview experiences. Help others prepare better.</p>
        </div>
        
        <div className="space-y-4 max-w-sm">
          <h2 className="text-xl font-medium text-gray-800">Sign In</h2>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User size={16} className="text-gray-400" />
                </div>
                <input 
                  type="email" 
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" 
                  placeholder="your@email.com"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock size={16} className="text-gray-400" />
                </div>
                <input 
                  type="password" 
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" 
                  placeholder="••••••••"
                />
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">Remember me</label>
              </div>
              <div className="text-sm">
                <a href="#" className="font-medium text-blue-600 hover:text-blue-500">Forgot password?</a>
              </div>
            </div>
            
            <button className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              Sign in
            </button>
          </div>
          
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Or continue with</span>
              </div>
            </div>
            
            <div className="mt-6 grid grid-cols-2 gap-3">
              <div>
                <a href="#" className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10,1.6c-4.6,0-8.4,3.8-8.4,8.4s3.8,8.4,8.4,8.4s8.4-3.8,8.4-8.4S14.6,1.6,10,1.6z M13.7,10.3h-2.6v2.6 c0,0.6-0.5,1.1-1.1,1.1s-1.1-0.5-1.1-1.1v-2.6H6.3c-0.6,0-1.1-0.5-1.1-1.1s0.5-1.1,1.1-1.1h2.6V5.5c0-0.6,0.5-1.1,1.1-1.1 s1.1,0.5,1.1,1.1v2.6h2.6c0.6,0,1.1,0.5,1.1,1.1S14.3,10.3,13.7,10.3z"></path>
                  </svg>
                </a>
              </div>
              <div>
                <a href="#" className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M18.9,5.8c-0.2-0.7-0.8-1.2-1.5-1.4C16,4,10,4,10,4S4,4,2.6,4.4C1.9,4.6,1.3,5.1,1.1,5.8C0.7,7.2,0.7,10,0.7,10 s0,2.8,0.4,4.2c0.2,0.7,0.8,1.2,1.5,1.4C4,16,10,16,10,16s6,0,7.4-0.4c0.7-0.2,1.3-0.7,1.5-1.4c0.4-1.4,0.4-4.2,0.4-4.2 S19.3,7.2,18.9,5.8z M8.1,12.9V7.1l4.9,2.9L8.1,12.9z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          <p className="text-center text-sm text-gray-600 mt-6">
            Don't have an account?
            <a href="#" className="font-medium text-blue-600 hover:text-blue-500 ml-1">Sign up</a>
          </p>
        </div>
      </div>
      
      <div className="hidden md:block w-1/2 bg-blue-50 p-8 rounded-lg">
        <div className="h-full flex flex-col justify-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Make recruitment processes transparent</h2>
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <Star className="h-6 w-6 text-blue-600" />
              </div>
              <div className="ml-4">
                <p className="text-base font-medium text-gray-900">Rate your interview experience</p>
                <p className="mt-1 text-sm text-gray-500">Help others prepare better for their interviews</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <Search className="h-6 w-6 text-blue-600" />
              </div>
              <div className="ml-4">
                <p className="text-base font-medium text-gray-900">Research company interviews</p>
                <p className="mt-1 text-sm text-gray-500">Know what to expect before you apply</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <ChevronRight className="h-6 w-6 text-blue-600" />
              </div>
              <div className="ml-4">
                <p className="text-base font-medium text-gray-900">Get ahead in your job search</p>
                <p className="mt-1 text-sm text-gray-500">Find companies with great recruitment practices</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </MockupContainer>
);

// Leave a Review Form Mockup
const ReviewForm = () => {
  const [rating, setRating] = useState(0);
  
  return (
    <MockupContainer title="Leave a Review">
      <div className="mb-6 pb-6 border-b border-gray-200">
        <h2 className="text-2xl font-semibold text-gray-800">Share Your Interview Experience</h2>
        <p className="text-gray-600">Your feedback helps other candidates prepare better</p>
      </div>
      
      <div className="space-y-8">
        {/* Company Details */}
        <div className="space-y-4">
          <h3 className="text-lg font-medium text-gray-800">Company Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Company Name*</label>
              <input 
                type="text" 
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" 
                placeholder="e.g. Acme Corporation"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Position Applied For*</label>
              <input 
                type="text" 
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" 
                placeholder="e.g. Senior Software Engineer"
              />
            </div>
          </div>
        </div>
        
        {/* Overall Experience */}
        <div className="space-y-4">
          <h3 className="text-lg font-medium text-gray-800">Overall Experience</h3>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Rate your overall experience*</label>
            <div className="flex items-center">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star 
                  key={star}
                  className={`h-8 w-8 cursor-pointer ${star <= rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                  onClick={() => setRating(star)}
                />
              ))}
              <span className="ml-2 text-sm text-gray-600">
                {rating === 0 ? 'Select rating' : 
                 rating === 1 ? 'Poor' :
                 rating === 2 ? 'Below Average' :
                 rating === 3 ? 'Average' :
                 rating === 4 ? 'Good' : 'Excellent'}
              </span>
            </div>
          </div>
        </div>
        
        {/* Timeline */}
        <div className="space-y-4">
          <h3 className="text-lg font-medium text-gray-800">Recruitment Timeline</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Application Date*</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Calendar size={16} className="text-gray-400" />
                </div>
                <input 
                  type="date" 
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" 
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Initial Response Date</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Calendar size={16} className="text-gray-400" />
                </div>
                <input 
                  type="date" 
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" 
                />
              </div>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Number of Interview Rounds*</label>
            <select className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500">
              <option>Select</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5+</option>
            </select>
          </div>
        </div>
        
        {/* Communication Quality */}
        <div className="space-y-4">
          <h3 className="text-lg font-medium text-gray-800">Communication Quality</h3>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Rate responsiveness (1-5)*</label>
            <div className="flex items-center space-x-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <button 
                  key={star}
                  className={`h-8 w-8 rounded-full flex items-center justify-center ${star === 4 ? 'bg-blue-600 text-white' : 'border border-gray-300 text-gray-600'}`}
                >
                  {star}
                </button>
              ))}
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Was there a named contact person?*</label>
            <div className="flex items-center space-x-4">
              <label className="inline-flex items-center">
                <input type="radio" className="form-radio h-4 w-4 text-blue-600" name="contact-person" value="yes" checked />
                <span className="ml-2 text-gray-700">Yes</span>
              </label>
              <label className="inline-flex items-center">
                <input type="radio" className="form-radio h-4 w-4 text-blue-600" name="contact-person" value="no" />
                <span className="ml-2 text-gray-700">No</span>
              </label>
            </div>
          </div>
        </div>
        
        {/* Interview Process */}
        <div className="space-y-4">
          <h3 className="text-lg font-medium text-gray-800">Interview Process</h3>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Interview formats used (select all that apply)*</label>
            <div className="grid grid-cols-2 gap-2">
              <label className="inline-flex items-center">
                <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600" />
                <span className="ml-2 text-gray-700">Structured</span>
              </label>
              <label className="inline-flex items-center">
                <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600" />
                <span className="ml-2 text-gray-700">Behavioral</span>
              </label>
              <label className="inline-flex items-center">
                <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600" checked />
                <span className="ml-2 text-gray-700">Technical</span>
              </label>
              <label className="inline-flex items-center">
                <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600" checked />
                <span className="ml-2 text-gray-700">Case Study</span>
              </label>
            </div>
          </div>
        </div>
        
        {/* Assessment Details */}
        <div className="space-y-4">
          <h3 className="text-lg font-medium text-gray-800">Technical Assessment</h3>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Type of assessment</label>
            <input 
              type="text" 
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" 
              placeholder="e.g. Coding Challenge, Design Exercise"
              value="Product Strategy Case Study"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Estimated time required</label>
              <div className="relative rounded-md shadow-sm">
                <input
                  type="number"
                  className="block w-full pl-3 pr-12 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  placeholder="0"
                  value="2"
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <span className="text-gray-500 sm:text-sm">hours</span>
                </div>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Actual time spent</label>
              <div className="relative rounded-md shadow-sm">
                <input
                  type="number"
                  className="block w-full pl-3 pr-12 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  placeholder="0"
                  value="5"
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <span className="text-gray-500 sm:text-sm">hours</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* DEI Section */}
        <div className="space-y-4">
          <h3 className="text-lg font-medium text-gray-800">Diversity & Inclusion</h3>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Was there a diverse interview panel?</label>
            <div className="flex items-center space-x-4">
              <label className="inline-flex items-center">
                <input type="radio" className="form-radio h-4 w-4 text-blue-600" name="diverse-panel" value="yes" />
                <span className="ml-2 text-gray-700">Yes</span>
              </label>
              <label className="inline-flex items-center">
                <input type="radio" className="form-radio h-4 w-4 text-blue-600" name="diverse-panel" value="no" checked />
                <span className="ml-2 text-gray-700">No</span>
              </label>
              <label className="inline-flex items-center">
                <input type="radio" className="form-radio h-4 w-4 text-blue-600" name="diverse-panel" value="unsure" />
                <span className="ml-2 text-gray-700">Unsure</span>
              </label>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Was salary information transparent?</label>
            <div className="flex items-center space-x-4">
              <label className="inline-flex items-center">
                <input type="radio" className="form-radio h-4 w-4 text-blue-600" name="salary-transparency" value="yes" />
                <span className="ml-2 text-gray-700">Yes</span>
              </label>
              <label className="inline-flex items-center">
                <input type="radio" className="form-radio h-4 w-4 text-blue-600" name="salary-transparency" value="no" checked />
                <span className="ml-2 text-gray-700">No</span>
              </label>
            </div>
          </div>
        </div>
        
        {/* Additional Comments */}
        <div className="space-y-4">
          <h3 className="text-lg font-medium text-gray-800">Additional Comments</h3>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Please share your experience</label>
            <textarea 
              rows="4" 
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" 
              placeholder="What went well? What could have been better?"
              value="The interview questions were relevant, but there was a scheduling mix-up that caused delays. The assessment took significantly longer than indicated, which was frustrating given my current work schedule."
            ></textarea>
          </div>
        </div>
        
        {/* Outcome */}
        <div className="space-y-4">
          <h3 className="text-lg font-medium text-gray-800">Outcome</h3>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">What was the result?*</label>
            <select className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500">
              <option>Select</option>
              <option>I received an offer</option>
              <option selected>I was rejected</option>
              <option>I withdrew my application</option>
              <option>Still in process</option>
            </select>
          </div>
        </div>
        
        {/* Privacy & Submission */}
        <div className="space-y-4">
          <div>
            <label className="flex items-center">
              <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600" checked />
              <span className="ml-2 text-gray-700">Make this review anonymous to the public</span>
            </label>
          </div>
          <div className="flex justify-end">
            <button type="button" className="mr-3 py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              Save Draft
            </button>
            <button type="submit" className="py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              Submit Review
            </button>
          </div>
        </div>
      </div>
    </MockupContainer>
  );
};

// User Dashboard with Reviews Mockup
const UserDashboard = () => (
  <MockupContainer title="User Dashboard">
    <div className="flex flex-col md:flex-row w-full">
      {/* Sidebar */}
      <div className="w-full md:w-64 md:pr-8 md:border-r md:border-gray-200">
        <div className="mb-8">
          <div className="flex items-center">
            <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
              <User size={24} />
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-medium text-gray-900">Sarah Johnson</h3>
              <p className="text-sm text-gray-500">Product Designer</p>
            </div>
          </div>
        </div>
        
        <nav className="space-y-1">
          <a href="#" className="bg-blue-50 text-blue-600 group flex items-center px-3 py-2 text-sm font-medium rounded-md">
            <Home className="mr-3 flex-shrink-0 h-5 w-5" />
            <span className="truncate">Dashboard</span>
          </a>
          <a href="#" className="text-gray-600 hover:bg-gray-50 group flex items-center px-3 py-2 text-sm font-medium rounded-md">
            <Eye className="mr-3 flex-shrink-0 h-5 w-5" />
            <span className="truncate">My Reviews</span>
          </a>
          <a href="#" className="text-gray-600 hover:bg-gray-50 group flex items-center px-3 py-2 text-sm font-medium rounded-md">
            <Building className="mr-3 flex-shrink-0 h-5 w-5" />
            <span className="truncate">Saved Companies</span>
          </a>
          <a href="#" className="text-gray-600 hover:bg-gray-50 group flex items-center px-3 py-2 text-sm font-medium rounded-md">
            <Briefcase className="mr-3 flex-shrink-0 h-5 w-5" />
            <span className="truncate">Job Alerts</span>
          </a>
          <a href="#" className="text-gray-600 hover:bg-gray-50 group flex items-center px-3 py-2 text-sm font-medium rounded-md">
            <LogOut className="mr-3 flex-shrink-0 h-5 w-5" />
            <span className="truncate">Sign Out</span>
          </a>
        </nav>
      </div>
      
      {/* Main Content */}
      <div className="w-full md:flex-1 md:pl-8 pt-8 md:pt-0">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-xl font-semibold text-gray-900">My Reviews</h2>
          <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            New Review
          </button>
        </div>
        
        <div className="space-y-6">
          {/* Review Card 1 */}
          <div className="bg-white shadow-sm rounded-lg border border-gray-200 overflow-hidden">
            <div className="px-4 py-4 sm:px-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <h3 className="text-lg font-medium text-gray-900">InnovateTech</h3>
                  <p className="text-sm text-gray-500">Senior Product Manager</p>
                </div>
                <div className="flex items-center">
                  <span className="flex items-center text-sm text-gray-500">
                    <Calendar className="flex-shrink-0 mr-1.5 h-4 w-4 text-gray-400" />
                    March 25, 2025
                  </span>
                  <div className="ml-4 flex-shrink-0 flex">
                    <div className="flex items-center">
                      {[1, 2, 3, 4].map((star) => (
                        <Star key={star} className="h-4 w-4 text-yellow-400 fill-current" />
                      ))}
                      <Star className="h-4 w-4 text-gray-300" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-2 sm:flex sm:justify-between">
                <div className="sm:flex">
                  <p className="flex items-center text-sm text-gray-500">
                    <Check className="flex-shrink-0 mr-1.5 h-4 w-4 text-green-500" />
                    Completed Interview Process
                  </p>
                  <p className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0 sm:ml-6">
                    <XCircle className="flex-shrink-0 mr-1.5 h-4 w-4 text-red-500" />
                    Not Selected
                  </p>
                </div>
                <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                  <button className="text-blue-600 hover:text-blue-800 font-medium">View Details</button>
                </div>
              </div>
              <div className="mt-3">
                <div className="flex flex-wrap gap-2">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    4 Interview Rounds
                  </span>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    Fast Response
                  </span>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                    Long Assessment
                  </span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Review Card 2 */}
          <div className="bg-white shadow-sm rounded-lg border border-gray-200 overflow-hidden">
            <div className="px-4 py-4 sm:px-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <h3 className="text-lg font-medium text-gray-900">TechGlobal</h3>
                  <p className="text-sm text-gray-500">UX Designer</p>
                </div>
                <div className="flex items-center">
                  <span className="flex items-center text-sm text-gray-500">
                    <Calendar className="flex-shrink-0 mr-1.5 h-4 w-4 text-gray-400" />
                    February 15, 2025
                  </span>
                  <div className="ml-4 flex-shrink-0 flex">
                    <div className="flex items-center">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="h-4 w-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-2 sm:flex sm:justify-between">
                <div className="sm:flex">
                  <p className="flex items-center text-sm text-gray-500">
                    <Check className="flex-shrink-0 mr-1.5 h-4 w-4 text-green-500" />
                    Completed Interview Process
                  </p>
                  <p className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0 sm:ml-6">
                    <Check className="flex-shrink-0 mr-1.5 h-4 w-4 text-green-500" />
                    Offer Received
                  </p>
                </div>
                <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                  <button className="text-blue-600 hover:text-blue-800 font-medium">View Details</button>
                </div>
              </div>
              <div className="mt-3">
                <div className="flex flex-wrap gap-2">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    3 Interview Rounds
                  </span>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    Great Communication
                  </span>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    Transparent Salary
                  </span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Review Card 3 */}
          <div className="bg-white shadow-sm rounded-lg border border-gray-200 overflow-hidden">
            <div className="px-4 py-4 sm:px-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <h3 className="text-lg font-medium text-gray-900">DataSphere</h3>
                  <p className="text-sm text-gray-500">Product Manager</p>
                </div>
                <div className="flex items-center">
                  <span className="flex items-center text-sm text-gray-500">
                    <Calendar className="flex-shrink-0 mr-1.5 h-4 w-4 text-gray-400" />
                    January 10, 2025
                  </span>
                  <div className="ml-4 flex-shrink-0 flex">
                    <div className="flex items-center">
                      {[1, 2].map((star) => (
                        <Star key={star} className="h-4 w-4 text-yellow-400 fill-current" />
                      ))}
                      {[3, 4, 5].map((star) => (
                        <Star key={star} className="h-4 w-4 text-gray-300" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-2 sm:flex sm:justify-between">
                <div className="sm:flex">
                  <p className="flex items-center text-sm text-gray-500">
                    <Check className="flex-shrink-0 mr-1.5 h-4 w-4 text-green-500" />
                    Completed Interview Process
                  </p>
                  <p className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0 sm:ml-6">
                    <XCircle className="flex-shrink-0 mr-1.5 h-4 w-4 text-red-500" />
                    Not Selected
                  </p>
                </div>
                <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                  <button className="text-blue-600 hover:text-blue-800 font-medium">View Details</button>
                </div>
              </div>
              <div className="mt-3">
                <div className="flex flex-wrap gap-2">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    5 Interview Rounds
                  </span>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                    Poor Communication
                  </span>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                    Disorganized Process
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Stats Section */}
        <div className="mt-8 bg-white shadow-sm rounded-lg border border-gray-200 overflow-hidden">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">Your Review Stats</h3>
            <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
              <div className="bg-gray-50 overflow-hidden rounded-lg px-4 py-5 sm:p-6">
                <dt className="text-sm font-medium text-gray-500 truncate">Total Reviews</dt>
                <dd className="mt-1 text-3xl font-semibold text-gray-900">7</dd>
              </div>
              <div className="bg-gray-50 overflow-hidden rounded-lg px-4 py-5 sm:p-6">
                <dt className="text-sm font-medium text-gray-500 truncate">Average Rating Given</dt>
                <dd className="mt-1 text-3xl font-semibold text-gray-900">3.6</dd>
              </div>
              <div className="bg-gray-50 overflow-hidden rounded-lg px-4 py-5 sm:p-6">
                <dt className="text-sm font-medium text-gray-500 truncate">Helpful Votes Received</dt>
                <dd className="mt-1 text-3xl font-semibold text-gray-900">23</dd>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </MockupContainer>
);