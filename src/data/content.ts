import type { ContactLink, ExperienceItem, Project, SkillGroup } from '../types'

export const profile = {
  name: 'Zein Alkhnaisee',
  title: 'Front-End Developer',
  location: 'Damascus, Syria',
  availability: 'Open to job opportunities',
  photo: '/images/profile.jpg',
  photoAlt: 'Portrait of Zein Alkhnaisee wearing a dark suit and tie',
  intro:
    'I am a software engineering graduate with hands-on experience in front-end development, and I enjoy building useful, well-structured software.',
  about: [
    "I graduated in 2026 with a Bachelor's degree in Information Engineering, specializing in Software Engineering, from Latakia University.",
    'My main focus is front-end development with React and TypeScript, backed by a foundation in programming fundamentals, data structures, and object-oriented design. I have also worked with Laravel, PHP, and SQL.',
    'I have tutored and taught programming, which keeps me practicing how to explain problems clearly. I am looking to grow as a developer by working on practical applications in a team.',
  ],
}

export const skillGroups: SkillGroup[] = [
  {
    title: 'Frontend Development',
    items: ['React.js', 'Next.js', 'TypeScript', 'JavaScript ES6+', 'Tailwind CSS', 'Redux Toolkit', 'RTK Query', 'Responsive Web Design'],
  },
  { title: 'Backend and Databases', items: ['Laravel', 'PHP', 'SQL', 'REST APIs'] },
  {
    title: 'Programming Fundamentals',
    items: ['C++', 'Python', 'Java', 'Object-Oriented Programming', 'Data Structures and Algorithms', 'Software Engineering Principles', 'Design Patterns: Adapter and Visitor'],
  },
  { title: 'Tools', items: ['Git', 'GitHub'] },
]

export const experience: ExperienceItem[] = [
  {
    role: 'Peer Programming Tutor',
    organization: 'Latakia University',
    description: 'Helped learners understand programming concepts and improve their programming skills.',
  },
  {
    role: 'Programming and STEM Instructor',
    organization: 'Mahara and Development Training Center',
    description: 'Taught programming and STEM subjects, including HTML, CSS, JavaScript, React, and C++.',
  },
]

export const education = {
  degree: "Bachelor's Degree in Information Engineering",
  specialization: 'Software Engineering',
  university: 'Latakia University',
  year: '2026',
  grade: '85%',
}

/** To add a project, append another object here. Nothing else needs to change. */
export const projects: Project[] = [
  {
    id: 'community-emergency-response',
    name: 'Community Emergency Response Platform',
    description:
      'A web platform for community emergency response, combining maps and geolocation, SOS functionality, and real-time chat with API integration and authentication.',
    technologies: ['React', 'Tailwind CSS', 'Redux Toolkit Query', 'REST APIs'],
    features: ['Maps and geolocation', 'SOS functionality', 'Real-time chat', 'API integration and authentication'],
    screenshot: '/images/projects/home.webp',
    screenshotAlt: 'Home page of the Community Emergency Response Platform',
    githubUrl: 'https://github.com/Zein-Alkhnaisee/emergency-website',
    liveUrl: '', // optional
    /** Screenshots grouped by feature. `featured: true` shows them directly; the rest go under "More screenshots". */
    gallery: [
      { src: "/images/projects/login.webp", title: "Login", caption: "Login with email and password, plus links to reset a password or create a new account.", group: "Accounts and trust", width: 1600, height: 753, featured: true },
      { src: "/images/projects/sign-up.webp", title: "Sign up", caption: "Account creation with full name, email, password and password confirmation.", group: "Accounts and trust", width: 1600, height: 782 },
      { src: "/images/projects/verify-email.webp", title: "Email verification", caption: "Entering the verification code sent to the user's email after sign-up.", group: "Accounts and trust", width: 1600, height: 675 },
      { src: "/images/projects/account-verification.webp", title: "Account verification", caption: "Form for submitting a national ID number, date of birth and identity documents to become a trusted member.", group: "Accounts and trust", width: 1600, height: 756 },
      { src: "/images/projects/role-request.webp", title: "Role request", caption: "Request form with role type and a documents link, plus a list of the user's own requests.", group: "Accounts and trust", width: 1218, height: 871 },
      { src: "/images/projects/nearby-group.webp", title: "Nearby group on the map", caption: "The emergency page finds an official group near the user's location, shown on a map with a search radius and an option to join.", group: "Maps and geolocation", width: 1600, height: 769, featured: true },
      { src: "/images/projects/emergency-hub.webp", title: "Emergency page", caption: "The user's location on the map, group search, saving a home location, and shortcuts to report an emergency, open the group chat or view the active case.", group: "Maps and geolocation", width: 1600, height: 798 },
      { src: "/images/projects/group-joined.webp", title: "Group joined", caption: "Confirmation after joining a group, with the user's current group shown above the map.", group: "Maps and geolocation", width: 1600, height: 788 },
      { src: "/images/projects/pending-group-en.webp", title: "Pending group search (English)", caption: "English interface with a pending-group notice and location search by place name or coordinates.", group: "Maps and geolocation", width: 1600, height: 856 },
      { src: "/images/projects/profile-location.webp", title: "Profile location", caption: "Saving a location in the user profile with an interactive map, coordinates, city and country.", group: "Maps and geolocation", width: 1600, height: 774 },
      { src: "/images/projects/report-emergency.webp", title: "Reporting an emergency", caption: "Report form with emergency type, severity level (low, medium or high) and optional details.", group: "SOS and case tracking", width: 1362, height: 642, featured: true },
      { src: "/images/projects/case-alert-sent.webp", title: "Alert sent", caption: "A new case after sending an alert: confirmation message, status New, and 0 of 20 rescuers responded.", group: "SOS and case tracking", width: 1600, height: 837 },
      { src: "/images/projects/active-case.webp", title: "Tracking an active case", caption: "Case type, severity, status, location, required versus responded rescuers, and response progress.", group: "SOS and case tracking", width: 1166, height: 892, featured: true },
      { src: "/images/projects/case-complete.webp", title: "Team complete", caption: "A case where all required rescuers have responded (5 of 5, 100%).", group: "SOS and case tracking", width: 1108, height: 836 },
      { src: "/images/projects/rescue-requests.webp", title: "Rescue requests", caption: "Requests near the rescuer: pending ones can be accepted or rejected, and earlier responses are listed below.", group: "Rescuer response", width: 1405, height: 681, featured: true },
      { src: "/images/projects/emergency-chat.webp", title: "Emergency group chat", caption: "Group chat with a member list, online status, message bubbles and a typing indicator.", group: "Real-time chat", width: 1600, height: 842, featured: true },
      { src: "/images/projects/posts.webp", title: "Posts and awareness articles", caption: "Articles with search, popular and most-liked filters, and category filters.", group: "Community content", width: 1600, height: 778 },
      { src: "/images/projects/my-articles.webp", title: "My articles", caption: "A user's articles organized by status: published, under review, rejected and trash, with edit and delete actions.", group: "Community content", width: 1476, height: 627 },
    ],
  },
  {
    id: 'anis-saade-association',
    name: 'Anis Saadeh Angelic Association Website',
    badge: 'Volunteer project for a non-profit organization',
    description:
      'A responsive website for a non-profit charitable organization, presenting its humanitarian initiatives, medical support, child protection and care, and community and educational awareness programs. I built the front end as a volunteer project.',
    technologies: ['React.js', 'CSS'],
    features: [
      'English and Arabic interface with right-to-left layout',
      'Light and dark themes',
      'Services, projects and volunteer sections',
      'Responsive layout for desktop and mobile',
    ],
    screenshot: '/images/projects/anis-cover.webp',
    screenshotAlt: 'About section of the Anis Saadeh Angelic Association website',
    githubUrl: 'https://github.com/Zein-Alkhnaisee/anis-saade-association',
    liveUrl: '', // no live demo URL has been provided
    gallery: [
      { src: "/images/projects/anis-hero.webp", title: "Hero section", caption: "Introduction to the association with four key figures and two buttons: Become a Volunteer and View Our Projects. The background photograph is blurred in this screenshot to protect the privacy of the children pictured.", group: "Hero and about", width: 1440, height: 900, featured: true },
      { src: "/images/projects/anis-cover.webp", title: "About section", caption: "About section with the association's introduction and four key figures: years of service, therapy sessions, children served and major programs.", group: "Hero and about", width: 1440, height: 810 },
      { src: "/images/projects/anis-positions.webp", title: "Organizational structure", caption: "Cards for each position with key responsibilities, requirements and a More Information button.", group: "Hero and about", width: 1440, height: 1150 },
      { src: "/images/projects/anis-position-modal.webp", title: "Position details", caption: "Detail view for a position with its objective and purpose and its tasks and responsibilities.", group: "Hero and about", width: 1440, height: 900, featured: true },
      { src: "/images/projects/anis-vision.webp", title: "Vision, mission and values", caption: "The last position cards, followed by the association's vision, mission and values.", group: "Hero and about", width: 1440, height: 900 },
      { src: "/images/projects/anis-services.webp", title: "Services and programs", caption: "Services and programs section with six program cards, each showing key figures and a View Details button.", group: "Services and projects", width: 1440, height: 1150, featured: true },
      { src: "/images/projects/anis-projects.webp", title: "Projects section", caption: "Category filters and project cards showing status, partner, dates, location and key figures. Project photographs are blurred in this screenshot to protect the privacy of the children pictured.", group: "Services and projects", width: 1440, height: 1150 },
      { src: "/images/projects/anis-projects-filtered.webp", title: "Filtering projects", caption: "The projects list filtered by the Health Services category. The project photograph is blurred in this screenshot to protect the privacy of the children pictured.", group: "Services and projects", width: 1440, height: 1000 },
      { src: "/images/projects/anis-project-modal.webp", title: "Project details", caption: "Project detail view with the description, duration and location. The project photograph is blurred in this screenshot to protect the privacy of the children pictured.", group: "Services and projects", width: 1440, height: 900, featured: true },
      { src: "/images/projects/anis-volunteer.webp", title: "Volunteer opportunities", caption: "Four volunteer opportunity cards: Child Protection, Education Support, Community Outreach and Program Support.", group: "Volunteering and footer", width: 1440, height: 1100, featured: true },
      { src: "/images/projects/anis-volunteer-cta.webp", title: "Reasons to volunteer", caption: "Benefits of volunteering and a call to action that opens the volunteer form in a new window.", group: "Volunteering and footer", width: 1440, height: 1000 },
      { src: "/images/projects/anis-footer.webp", title: "Footer", caption: "Quick links, services, contact details and working hours.", group: "Volunteering and footer", width: 1440, height: 760 },
      { src: "/images/projects/anis-ar-hero.webp", title: "Arabic hero section", caption: "The hero section in Arabic with a right-to-left layout. The background photograph is blurred in this screenshot to protect the privacy of the children pictured.", group: "Arabic and right-to-left", width: 1440, height: 900, featured: true },
      { src: "/images/projects/anis-ar-services.webp", title: "Arabic services", caption: "The services and programs section in Arabic, with the card order and text direction mirrored.", group: "Arabic and right-to-left", width: 1440, height: 1150 },
      { src: "/images/projects/anis-ar-projects.webp", title: "Arabic projects", caption: "The projects section in Arabic with translated filters and cards. Project photographs are blurred in this screenshot to protect the privacy of the children pictured.", group: "Arabic and right-to-left", width: 1440, height: 1150 },
      { src: "/images/projects/anis-dark-hero.webp", title: "Dark theme: hero", caption: "The hero section in the dark theme. The background photograph is blurred in this screenshot to protect the privacy of the children pictured.", group: "Dark theme", width: 1440, height: 900 },
      { src: "/images/projects/anis-dark-services.webp", title: "Dark theme: services", caption: "The services and programs section in the dark theme.", group: "Dark theme", width: 1440, height: 1150, featured: true },
      { src: "/images/projects/anis-dark-projects.webp", title: "Dark theme: projects", caption: "The projects section in the dark theme. Project photographs are blurred in this screenshot to protect the privacy of the children pictured.", group: "Dark theme", width: 1440, height: 1100 },
      { src: "/images/projects/anis-dark-position-modal.webp", title: "Dark theme: position details", caption: "A position detail view in the dark theme.", group: "Dark theme", width: 1440, height: 900 },
      { src: "/images/projects/anis-tablet-projects.webp", title: "Tablet layout", caption: "The projects section at tablet width, with filters and cards reflowed. Project photographs are blurred in this screenshot to protect the privacy of the children pictured.", group: "Tablet and mobile", width: 820, height: 1180 },
      { src: "/images/projects/anis-mobile-menu.webp", title: "Mobile menu", caption: "The navigation menu on a phone-sized screen.", group: "Tablet and mobile", width: 780, height: 1688 },
      { src: "/images/projects/anis-mobile-services.webp", title: "Mobile services", caption: "The services section on a phone-sized screen.", group: "Tablet and mobile", width: 780, height: 1688 },
      { src: "/images/projects/anis-mobile-projects.webp", title: "Mobile projects", caption: "Filters and project cards on a phone-sized screen. Project photographs are blurred in this screenshot to protect the privacy of the children pictured.", group: "Tablet and mobile", width: 780, height: 1688 },
      { src: "/images/projects/anis-mobile-project-modal.webp", title: "Mobile project details", caption: "The project detail view on a phone-sized screen. The project photograph is blurred in this screenshot to protect the privacy of the children pictured.", group: "Tablet and mobile", width: 780, height: 1688 },
      { src: "/images/projects/anis-mobile-volunteer.webp", title: "Mobile volunteer section", caption: "The volunteer section on a phone-sized screen.", group: "Tablet and mobile", width: 780, height: 1688 },
      { src: "/images/projects/anis-mobile-menu-arabic.webp", title: "Mobile menu in Arabic", caption: "The navigation menu in Arabic on a phone-sized screen.", group: "Tablet and mobile", width: 780, height: 1688 },
    ],
  },
  {
    id: 'medical-healthcare-management-platform',
    name: 'Medical Healthcare Management Platform',
    badge: 'Team project · February 2024 – August 2024',
    description:
      'A healthcare management web platform that connects patients, doctors and hospital staff through a unified web application. I contributed to the frontend as part of a team and worked on integrating it with the backend through REST APIs.',
    technologies: ['React.js', 'CSS', 'REST APIs'],
    features: [
      'Patient registration and account management',
      'Appointment booking and management',
      'Medical records interfaces',
      'Healthcare information and services',
      'Service evaluations and feedback',
      'API integration with the backend',
    ],
    screenshot: '/images/projects/hms-hero.webp',
    screenshotAlt: 'Home page of the Medical Healthcare Management Platform',
    githubUrl: 'https://github.com/Zein-Alkhnaisee/hospital-management-system',
    liveUrl: '', // no live demo URL has been provided
    gallery: [
      { src: "/images/projects/hms-hero.webp", title: "Home page", caption: "Home page hero with the main navigation, a signed-in user chip showing a wallet balance, and New Job Application and Learn More buttons.", group: "Home and information", width: 1430, height: 657, featured: true },
      { src: "/images/projects/hms-why-choose.webp", title: "Why choose the hospital", caption: "Three feature cards: featured medical staff, integrated medical care and modern infrastructure.", group: "Home and information", width: 1430, height: 485 },
      { src: "/images/projects/hms-news.webp", title: "News and updates", caption: "Latest News & Updates section with dated news cards.", group: "Home and information", width: 1430, height: 499 },
      { src: "/images/projects/hms-services.webp", title: "Services", caption: "Services page with category filters (All, Clinical, Emergency and Support) and cards such as Outpatient Clinics, Laboratory Tests, Emergency Department and Cardiac Care.", group: "Home and information", width: 1430, height: 709 },
      { src: "/images/projects/hms-create-account.webp", title: "Create account", caption: "Account creation form with name, email, password and password confirmation.", group: "Accounts and profiles", width: 522, height: 441 },
      { src: "/images/projects/hms-login.webp", title: "Login", caption: "Login form with email and password, a Remember Me option, and links to create an account or reset a forgotten password.", group: "Accounts and profiles", width: 452, height: 387 },
      { src: "/images/projects/hms-verify-account.webp", title: "Account verification", caption: "Verification screen where the user enters their verification code, with a Resend Code button.", group: "Accounts and profiles", width: 532, height: 327 },
      { src: "/images/projects/hms-create-profile.webp", title: "Create profile", caption: "Profile form with date of birth, gender, address, phone, personal photo, about you, blood type and marital status.", group: "Accounts and profiles", width: 314, height: 259 },
      { src: "/images/projects/hms-role-request.webp", title: "Role change request", caption: "Request form for the Receptionist role with languages, skills, typing speed, cover letter, education, start date and preferred shift.", group: "Accounts and profiles", width: 560, height: 610 },
      { src: "/images/projects/hms-specialties.webp", title: "Medical departments", caption: "Department cards for cardiology, pediatrics, general surgery and family medicine, each with a View department information button.", group: "Doctors and departments", width: 1430, height: 498 },
      { src: "/images/projects/hms-department.webp", title: "Department information", caption: "A department page with its description, status and creation date, and the doctors who work in it.", group: "Doctors and departments", width: 1413, height: 517 },
      { src: "/images/projects/hms-doctors.webp", title: "Doctors directory", caption: "Doctor cards showing each doctor's name, specialty and years of experience, with a view doctor button.", group: "Doctors and departments", width: 454, height: 344 },
      { src: "/images/projects/hms-book-specialty.webp", title: "Booking: choose a specialty", caption: "Step 1 of the four-step booking flow (Specialty, Doctor, Time, Confirm): selecting a medical specialty.", group: "Appointments", width: 809, height: 496, featured: true },
      { src: "/images/projects/hms-book-doctor.webp", title: "Booking: choose a doctor", caption: "Step 2: selecting a doctor from the chosen specialty, with years of experience and rating.", group: "Appointments", width: 846, height: 444 },
      { src: "/images/projects/hms-book-time.webp", title: "Booking: choose a time", caption: "Step 3: selecting an available time slot, showing the time, duration and price.", group: "Appointments", width: 716, height: 282 },
      { src: "/images/projects/hms-book-confirm.webp", title: "Booking: confirm", caption: "Step 4: reviewing the department, doctor, date, time and price before confirming. The screen notes that the amount is deducted from the account balance.", group: "Appointments", width: 502, height: 633 },
      { src: "/images/projects/hms-appointment-booked.webp", title: "Appointment booked", caption: "Confirmation after booking, with date, time, doctor, status, appointment ID, duration, price and location, Modify Appointment and Cancel Appointment buttons, and appointment instructions.", group: "Appointments", width: 628, height: 489, featured: true },
      { src: "/images/projects/hms-medical-record.webp", title: "Medical record", caption: "A medical record showing its details, diagnosis, treatment plan, doctor information, related appointments and prescriptions.", group: "Medical records", width: 556, height: 529, featured: true },
      { src: "/images/projects/hms-seminars.webp", title: "Seminars", caption: "Seminar cards with date, location or online format, registered count, available seats and a View Details button.", group: "Seminars", width: 936, height: 549, featured: true },
      { src: "/images/projects/hms-seminar-detail.webp", title: "Seminar details", caption: "Seminar page with date and time, location, presenter, seat availability and description, plus Register Now and View My Seminars buttons.", group: "Seminars", width: 570, height: 629 },
      { src: "/images/projects/hms-seminar-registration.webp", title: "Registration details", caption: "A seminar registration with the seminar information, registration date, paid amount and status, and Update Registration and Cancel Registration buttons.", group: "Seminars", width: 640, height: 351 },
      { src: "/images/projects/hms-invoice.webp", title: "Invoice details", caption: "Invoice with appointment information, financial information and a payment history table.", group: "Billing, wallet and insurance", width: 843, height: 503, featured: true },
      { src: "/images/projects/hms-payments.webp", title: "Payment history", caption: "Payment history card showing the amount, invoice, date, doctor and appointment date, with a View Details button.", group: "Billing, wallet and insurance", width: 632, height: 309 },
      { src: "/images/projects/hms-topups.webp", title: "Wallet top-up requests", caption: "List of previous top-up requests with amount, status, request date and a Details button, plus New Request and Refresh List buttons.", group: "Billing, wallet and insurance", width: 1430, height: 249 },
      { src: "/images/projects/hms-topup-detail.webp", title: "Top-up request details", caption: "A top-up request showing its amount, status, dates, review notes and receipt image.", group: "Billing, wallet and insurance", width: 1430, height: 497 },
      { src: "/images/projects/hms-insurance-add.webp", title: "Add health insurance", caption: "Form to add a new insurance with the company name and an uploaded insurance document image.", group: "Billing, wallet and insurance", width: 917, height: 437 },
      { src: "/images/projects/hms-insurance-active.webp", title: "Active health insurance", caption: "Active insurance showing company name, coverage percentage, validity and status, with a list of previous insurance requests.", group: "Billing, wallet and insurance", width: 936, height: 393 },
      { src: "/images/projects/hms-patient-reviews.webp", title: "Patient reviews", caption: "Patient reviews with star ratings, and a form to leave a rating with a name, star count and feedback.", group: "Reviews and feedback", width: 1289, height: 556 },
      { src: "/images/projects/hms-doctor-ratings.webp", title: "Doctor ratings", caption: "Rating form for a doctor with a star rating, a review field and Submit Rating and Cancel buttons.", group: "Reviews and feedback", width: 613, height: 337 },
    ],
  },
]

/** Entries without a valid link are hidden. `display` is the text shown to visitors. */
export const contactLinks: ContactLink[] = [
  { label: 'Email', href: 'mailto:zeinalkhnaisee@gmail.com', display: 'zeinalkhnaisee@gmail.com' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/zein-alkhnaisee-3b44033a0/', display: 'linkedin.com/in/zein-alkhnaisee' },
  { label: 'GitHub', href: 'https://github.com/Zein-Alkhnaisee', display: 'github.com/Zein-Alkhnaisee' },
]

/** Shown as plain text exactly as provided (no country code was given, so it is not a tel: link). */
export const contactPhone = '0983436003'
