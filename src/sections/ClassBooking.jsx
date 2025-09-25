import { Calendar, User, Mail, Phone, Users, CreditCard } from 'lucide-react';
import { useState } from 'react';

const upcomingClasses = [
  { id: 1, name: 'Viral Buttercream Basics', date: '2025-01-11', time: '10:00 AM', price: 65, spots: 3 },
  { id: 2, name: 'Instagram Cake Artistry', date: '2025-01-11', time: '2:00 PM', price: 85, spots: 2 },
  { id: 3, name: 'Beginner Cake Decorating', date: '2025-01-12', time: '1:00 PM', price: 75, spots: 5 },
  { id: 4, name: 'Viral Buttercream Basics', date: '2025-01-18', time: '10:00 AM', price: 65, spots: 6 },
  { id: 5, name: 'Advanced Sculpted Cakes', date: '2025-01-18', time: '2:00 PM', price: 120, spots: 1 },
  { id: 6, name: 'Instagram Cake Artistry', date: '2025-01-19', time: '11:00 AM', price: 85, spots: 4 }
];

export function ClassBooking() {
  const [selectedClass, setSelectedClass] = useState('');
  const [formData, setFormData] = useState({
    className: '',
    studentName: '',
    email: '',
    phone: '',
    participants: 1,
    dietaryRestrictions: '',
    experience: 'beginner',
    hearAbout: ''
  });

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { 
      weekday: 'long',
      month: 'short', 
      day: 'numeric' 
    });
  };

  const handleClassSelect = (classInfo) => {
    setSelectedClass(classInfo.id);
    setFormData(prev => ({ ...prev, className: `${classInfo.name} - ${formatDate(classInfo.date)} ${classInfo.time}` }));
  };

  return (
    <section id="book-class" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center mb-12">
          <h2 className="font-display text-3xl text-white sm:text-4xl">Book Your Sacramento Class</h2>
          <p className="mt-4 text-base text-white/70 sm:text-lg">
            Select an upcoming class and reserve your spot! Payment is due upon booking to secure your place.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1fr_minmax(320px,380px)]">
          <div className="space-y-8">
            {/* Class Selection */}
            <div className="rounded-3xl border border-white/5 bg-white/5 p-6 backdrop-blur">
              <div className="flex items-center gap-2 mb-6">
                <Calendar className="h-5 w-5 text-lavender-200" />
                <h3 className="text-lg font-semibold text-white">Choose Your Class</h3>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {upcomingClasses.map((classInfo) => (
                  <button
                    key={classInfo.id}
                    onClick={() => handleClassSelect(classInfo)}
                    className={`text-left p-4 rounded-2xl border transition ${
                      selectedClass === classInfo.id
                        ? 'border-lavender-400 bg-lavender-500/10'
                        : 'border-white/10 bg-white/5 hover:border-white/20'
                    }`}
                  >
                    <div className="font-semibold text-white text-sm mb-1">{classInfo.name}</div>
                    <div className="text-xs text-white/60 mb-2">{formatDate(classInfo.date)} • {classInfo.time}</div>
                    <div className="flex justify-between items-center">
                      <span className="text-lavender-200 font-semibold">${classInfo.price}</span>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        classInfo.spots <= 2 
                          ? 'bg-red-500/20 text-red-200' 
                          : 'bg-green-500/20 text-green-200'
                      }`}>
                        {classInfo.spots} spots left
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Student Information */}
            {selectedClass && (
              <form className="space-y-6 rounded-3xl border border-white/5 bg-white/5 p-6 backdrop-blur">
                <div className="flex items-center gap-2 mb-6">
                  <User className="h-5 w-5 text-lavender-200" />
                  <h3 className="text-lg font-semibold text-white">Student Information</h3>
                </div>

                <div className="grid gap-6 lg:grid-cols-2">
                  <div>
                    <label className="text-xs uppercase tracking-wide text-white/60">Full Name *</label>
                    <input
                      type="text"
                      value={formData.studentName}
                      onChange={(e) => setFormData(prev => ({ ...prev, studentName: e.target.value }))}
                      className="mt-1 w-full rounded-2xl border border-white/10 bg-night/70 px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-lavender-500"
                      placeholder="Your name for class roster"
                    />
                  </div>
                  <div>
                    <label className="text-xs uppercase tracking-wide text-white/60">Email Address *</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                      className="mt-1 w-full rounded-2xl border border-white/10 bg-night/70 px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-lavender-500"
                      placeholder="you@example.com"
                    />
                  </div>
                  <div>
                    <label className="text-xs uppercase tracking-wide text-white/60">Phone Number *</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                      className="mt-1 w-full rounded-2xl border border-white/10 bg-night/70 px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-lavender-500"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  <div>
                    <label className="text-xs uppercase tracking-wide text-white/60">Experience Level</label>
                    <select
                      value={formData.experience}
                      onChange={(e) => setFormData(prev => ({ ...prev, experience: e.target.value }))}
                      className="mt-1 w-full rounded-2xl border border-white/10 bg-night/70 px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-lavender-500"
                    >
                      <option value="beginner">Complete Beginner</option>
                      <option value="some">Some Experience</option>
                      <option value="intermediate">Intermediate</option>
                      <option value="advanced">Advanced</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-xs uppercase tracking-wide text-white/60">Dietary Restrictions / Allergies</label>
                  <textarea
                    value={formData.dietaryRestrictions}
                    onChange={(e) => setFormData(prev => ({ ...prev, dietaryRestrictions: e.target.value }))}
                    rows={3}
                    className="mt-1 w-full resize-none rounded-2xl border border-white/10 bg-night/70 px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-lavender-500"
                    placeholder="Any allergies or dietary needs we should know about..."
                  />
                </div>

                <div>
                  <label className="text-xs uppercase tracking-wide text-white/60">How did you hear about us?</label>
                  <select
                    value={formData.hearAbout}
                    onChange={(e) => setFormData(prev => ({ ...prev, hearAbout: e.target.value }))}
                    className="mt-1 w-full rounded-2xl border border-white/10 bg-night/70 px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-lavender-500"
                  >
                    <option value="">Select an option</option>
                    <option value="tiktok">TikTok (@tootietreatsclasses)</option>
                    <option value="instagram">Instagram</option>
                    <option value="google">Google Search</option>
                    <option value="friend">Friend/Word of Mouth</option>
                    <option value="facebook">Facebook</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center rounded-full bg-gradient-to-r from-lavender-500 to-lavender-600 px-6 py-4 text-base font-semibold shadow-lg shadow-lavender-500/40 transition hover:shadow-glow"
                >
                  <CreditCard className="mr-2 h-5 w-5" />
                  Complete Booking & Pay
                </button>
              </form>
            )}
          </div>

          {/* Booking Summary Sidebar */}
          <div className="space-y-6">
            {selectedClass && (
              <div className="rounded-3xl border border-white/5 bg-white/5 p-6 backdrop-blur">
                <h3 className="font-display text-xl text-white mb-4">Booking Summary</h3>
                {(() => {
                  const classInfo = upcomingClasses.find(c => c.id === selectedClass);
                  return classInfo ? (
                    <div className="space-y-4">
                      <div>
                        <div className="font-semibold text-white">{classInfo.name}</div>
                        <div className="text-sm text-white/60">
                          {formatDate(classInfo.date)} at {classInfo.time}
                        </div>
                      </div>
                      <div className="flex justify-between text-lg font-semibold text-white border-t border-white/10 pt-4">
                        <span>Total:</span>
                        <span className="text-lavender-200">${classInfo.price}</span>
                      </div>
                      <div className="text-xs text-white/60 bg-night/50 p-3 rounded-xl">
                        <strong>What's Included:</strong>
                        <ul className="mt-2 space-y-1">
                          <li>• All materials & tools</li>
                          <li>• Professional instruction</li>
                          <li>• Your finished cake to take home</li>
                          <li>• Light refreshments</li>
                          <li>• Photos for your social media</li>
                        </ul>
                      </div>
                    </div>
                  ) : null;
                })()}
              </div>
            )}
            
            <div className="rounded-3xl border border-white/5 bg-white/5 p-6 backdrop-blur">
              <h3 className="font-display text-lg text-white mb-4">Class Information</h3>
              <div className="space-y-3 text-sm text-white/70">
                <p><strong className="text-white">Location:</strong> Sacramento Cake Studio<br />
                1234 Creative Way, Sacramento, CA</p>
                <p><strong className="text-white">Parking:</strong> Free on-site parking available</p>
                <p><strong className="text-white">Cancellation:</strong> 48 hours notice required for full refund</p>
                <p><strong className="text-white">Age:</strong> 16+ recommended (13-15 with guardian)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}