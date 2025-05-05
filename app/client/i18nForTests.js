// src/i18nForTests.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  lng: 'en', // default language for tests
  fallbackLng: 'en',
  debug: false,
  resources: {
    en: {
      translation: {
        "about iris": "About IRIS",
        "writeup": "Our comparison tool was developed to simplify the process of comparing insurance policies.",
        "meet the team": "Meet the Team", // This should match what you search for in the test
        "writeup_3": "We are dedicated to providing the best experience.",
        "writeup_4": "Our team is here to assist you in every step.",
        "analytics overview": "Analytics Overview",
        "key metrics": "Key Metrics",
        "graphed analytics": "Graphed Analytics",
        "home": "Home",
        "dashboard": "Dashboard",
        "compare_policies": "Compare Policies",
        "alerts_button": "Alerts",
        "settings": "Settings",
        "contact_us": "Contact Us",
        "contact_us_instruction": "For support, email us at",
        "cannot_login": "I cannot login to my account?",
        "reset_password_instruction": "To reset your password, click on the 'Reset Password' button below and follow the instructions.",
        "reset_password": "Reset Password",
        "change_language": "How can I change the language used in the application?",
        "language_settings_instruction": "Go to the settings page to change the language.",
        "review_compare_policies": "How do I review or compare two insurance policies?",
        "compare_policies_instruction": "Use the comparison tool to view policies side-by-side.",
        "save_policy_reviews": "Can I save my policy reviews for later?",
        "save_reviews_instruction": "Your reviews can be saved for later access.",
        "technical_issue": "What should I do if I encounter a technical issue?",
        "technical_support_instruction": "Contact support for assistance with technical issues.",
        "submit_policy_review": "How do I submit a policy for review?",
        "submit_policy_instruction": "Use the submission form to send a policy for review.",
        "post_submission": "What happens after I submit a policy for review?",
        "post_submission_instruction": "Your submission will be reviewed by our team.",
        "log_in":"Log in",
        "recent_reviews": "Recent Reviews",
        "document_id": "Document ID",
        "name": "Name",
        "date": "Date",
        "status": "Status",
        "fun_file": "Fun File",
        "amazing_file": "Amazing File",
        "pending_file": "Pending File",
        "rejected_file": "Rejected File",
        "good_file": "Good File",
        "broker_registry": "Broker Registry",
        "blank_for_now": "Blank for Now",
        "user_task_completion": "Overall User Task Completion",
        "all_rights_reserved": "All rights reserved",
        "404": "404",
        "page_not_found": "Page Not Found",
        "old_document": "Old Document",
        "new_document": "New Document",
        "chooseFile":"Choose File",
        "chooseTwoFiles":"Please choose two files before submitting for comparison",
        "compareDocuments":"Compare Documents",
        "loading":"Loading...",
        "next":"Next",
        "previous":"Previous",
        "discrepency": "Discrepancy",
        "remaining": "Remaining"
      },
    },
  },
});

export default i18n;
