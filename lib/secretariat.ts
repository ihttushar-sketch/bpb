/**
 * “পনডার আলো সচিবালয়” — every detail of the secretariat block lives here.
 *
 * EDIT THIS FILE to change the person shown on the home page:
 *  - name / role / message / bio / contacts
 *  - photo file names (see public/images/ below)
 *
 * PHOTOS — put these files in /public/images and they appear automatically.
 * Until a file exists, a labelled placeholder is shown instead, so the page
 * never breaks:
 *    rajit-portrait.jpg   → main profile photo (portrait, 3:4)
 *    rajit-1.jpg          → gallery strip, left
 *    rajit-2.jpg          → gallery strip, middle
 *    rajit-3.jpg          → gallery strip, right
 */

export const SECRETARIAT = {
  nameBn: 'রজিত চকলাদার',
  nameEn: 'RAJIT CHAKLADAR',
  role: 'সচিবালয় ও বাস্তবায়নে',
  creditEn: 'Secretariat & Executed by Rajit Chakladar',
  portrait: '/images/rajit-portrait.jpg',
  message:
    '“পনডার আলো গড়তে চাই এমন এক সংবাদমাধ্যম, যেখানে প্রতিদিনের খবরের পাশাপাশি থাকবে মানুষের কথা। সত্য ও মানুষ—এই দুটিকে সামনে রেখেই আমরা এগোব।”',
  bio: 'সচিবালয়ের দায়িত্বে থেকে রজিত চকলাদার এই পোর্টালের কনটেন্ট সমন্বয়, সম্পাদনা প্রক্রিয়া ও কারিগরি বাস্তবায়ন দেখাশোনা করছেন। প্রতিদিনের সংবাদ প্রকাশ, বিভাগভিত্তিক ডেস্ক সমন্বয় এবং দর্শকদের সঙ্গে যোগাযোগ—সবকিছুই এই দপ্তর থেকে পরিচালিত হয়।',
  contacts: {
    facebook: '#',
    email: 'rajit@ponderalo.example',
  },
  gallery: [
    { src: '/images/rajit-1.jpg', caption: 'সচিবালয় — কার্যক্রম' },
    { src: '/images/rajit-2.jpg', caption: 'মাঠ পর্যায়ে প্রতিবেদন' },
    { src: '/images/rajit-3.jpg', caption: 'সম্পাদনা দপ্তর' },
  ],
} as const;
