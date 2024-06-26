import Blog from "../../../assets/icon/Blogs -  alocalsanta.com.png";
import Commenticon from "../../../assets/icon/Comments -  alocalsanta.com.png";
import createlst from "../../../assets/icon/create-96.png";
import Fixedads from "../../../assets/icon/Fixed Ads -  alocalsanta.com.png";
import Listings from "../../../assets/icon/Listings -  alocalsanta.com.png";
import Livechat from "../../../assets/icon/Live Chat -  alocalsanta.com.png";
import Reviews from "../../../assets/icon/Reviews -  alocalsanta.com.png";
import SponseredAds from "../../../assets/icon/Sponsered Ads -alocalsanta.com.png";
import Wishist from "../../../assets/icon/wishlist-64.png";
import changepsd from "../../../assets/icon/change-password-58.png";
import home from "../../../assets/icon/home-48.png";
import MailsAlert from "../../../assets/icon/alert-50.png";
import job from "../../../assets/icon/job-64.png";
import editprofile from "../../../assets/icon/edit-profile-24.png";
import Ads from "../../../assets/icon/ad-icon.png";

export const user = [
  { id: 1, heading: "Dashboard", link: "/user-dashboard", img: home },
  {
    id: 2,
    heading: "My Listings",
    link: "/my-listing",
    img: Listings,
  },
  {
    id: 3,
    heading: "All Ads",
    link: "/ads",
    img: Ads,
  },
  {
    id: 4,
    heading: "Blog",
    link: "/user-bloglist",
    img: Blog,
  },
  {
    id: 5,
    heading: "Create listing",
    link: "/business-form",
    img: job,
  },

  { id: 6, heading: "Reviews", link: "/reviews", img: Reviews },
  {
    id: 7,
    heading: "Edit Profile",
    link: "/edit-profile",
    img: editprofile,
  },
  {
    id: 8,
    heading: "Change Password",
    link: "/Change-password",
    img: changepsd,
  },
  {
    id: 9,
    heading: "Chats & Email",
    link: "/chats",
    img: Livechat,
  },
];

export const admin = [
  {
    id: 1,
    heading: "Dashboard",
    link: "/admin",
    img: home,
  },
  {
    id: 2,
    heading: "Listings",
    img: Listings,
    link: "/listing",
    subheading: [
      {
        id: 1,
        heading: "Latest Listings",
      },
    ],
  },
  {
    id: 3,
    heading: "Comments",
    link: "/comments",
    img: Commenticon,
  },
  {
    id: 4,
    heading: "Blogs",
    link: "/blogs",
    img: Blog,
  },
  {
    id: 5,
    heading: "All Ads",
    link: "/all-ads-view",
    img: Ads,
  },
  // {
  //   id: 6,
  //   heading: "Fixed Ads",
  //   link: "/fixed-ads",
  //   img: Fixedads,
  // },
  {
    id: 6,
    heading: "Mails & Alerts",
    link: "/mails-alerts",
    img: MailsAlert,
  },
  {
    id: 7,
    heading: "PORT Seting",
    link: "/smtp-seting",
    img: changepsd,
  },

  {
    id: 8,
    heading: "Edit Profile",
    link: "/edit-profile-admin",
    img: editprofile,
  },
  {
    id: 9,
    heading: "Change Password",
    link: "/Change-password-admin",
    img: changepsd,
  },
];
