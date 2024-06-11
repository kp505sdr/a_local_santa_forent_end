import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/auth/register";
import Login from "./pages/auth/login";
import Details from "./components/Blogs";
import PublicRoute from "./Routes/PublicRoute";
// import D2 from "./components/Blogs/d2";
// import D3 from "./components/Blogs/d3";
// import Video from "./components/Blogs/video";
import PostAnAdvertise from "./components/form/PostAnAdvertise";
// import Layout from "./components/Layout";
import Layout1 from "./components/Layout/Layout1";
import Pricing from "./components/Pricing";
import AdswithUs from "./pages/AdswithUs/adswithus";
import AboutUs from "./pages/AboutUs/AboutUs";
import Contact from "./pages/Contact/Contact";
import ForgetPassword from "./pages/auth/ForgetPassword";
import Termcondition from "./pages/termcondition";
import Privacypolicy from "./pages/Privacypolicy ";
// import Userpanel from "./pages/user";
import Mylisting from "./pages/user/mylisting";
import Changepassword from "./pages/user/Changepassword";
import Reviews from "./pages/user/Reviews";
import Editprofile from "./pages/user/Editprofile";
import Myjobpost from "./pages/user/myjobpost";
import Admindashboard from "./pages/Admin";
import Userslist from "./pages/Admin/uerslist";
import Latestlings from "./pages/Admin/latestlistings";
import Activated from "./pages/Admin/Activated";
import FixedAds from "./pages/Admin/FixedAds";
import SpansoredAds from "./pages/Admin/SpansoredAds";
import Ourblogdetails from "./pages/ourblogdetails";
import Userdashboard from "./pages/user";
import Comments from "./pages/Admin/Comments";

import MailsAlert from "./pages/Admin/MailsAlert";
import ProfileSetting from "./pages/Admin/ProfileSetting";
import Chats from "./pages/user/chats";
import EmailVerify from "./pages/auth/EmailVerify";
import ProtectedRoute from "./Routes/ProtectedRoute";
import Wishist from "./pages/user/Wishist";

import Addblog from "./pages/Admin/AddBlog";
import Bloglist from "./pages/Admin/Blog";
import CommentView from "./pages/Admin/CommentView";
import Reviewsdetails from "./pages/user/reviewdeatils";
import Allusers from "./pages/Admin/allusers";
import AllBlogs from "./pages/AllBlogs";
import BlogsDetails from "./pages/BlogsDetails";
import UserBloglist from "./pages/user/Blog";
import UserAddblog from "./pages/user/userAddblog";
import EditUserblog from "./pages/user/editblog";
import { useSelector } from "react-redux";
import UserRoute from "./Routes/userRoute";
import AdminRoute from "./Routes/AdminRoute";
import ProtectedAdmin from "./Routes/ProtectedAdmin";
import ProtectedUser from "./Routes/ProtectedUser";
import EditprofileAdmin from "./pages/Admin/EditprofileAdmin";
import ChangepasswordAdmin from "./pages/Admin/ChangepasswordAdmin";
import PendingListing from "./pages/user/pendingListing";
import ProfileDetails from "./pages/user/ProfileDetails";
import AdminProfileDetails from "./pages/Admin/AdminProfileDetails";
import AdminReviews from "./pages/Admin/AdminReviews";
import PortSeting from "./pages/Admin/PortSeting";
import AllListing from "./pages/Admin/AllListing";
import EditBlogAdmin from "./pages/Admin/EditBlogAdmin";
import ListingDetailsFun from "./components/Blogs";
import AllLocalBussiess from "./pages/ViewMoreLocalBussiess";
import ReviewsAndListing from "./pages/user/reviewsAndListing";
import Buyandsell from "./pages/buyandsell";
import Divhobbytraining from "./pages/divhobbytraining";
import HealthandWellness from "./pages/health";
import LocalBusinessAds from "./pages/LocalBusinessAds";
import Listdatadetails from "./pages/Admin/listdatadetails";
import Updatelistdata from "./pages/Admin/updatelistdata";
import ChangePsd from "./pages/auth/changepassword";
import ViewMoreLocalBussiess from "./pages/ViewMoreLocalBussiess";
import ViewMoreLocalRental from "./pages/ViewMoreLocalRental";
import ActiveTable from "./components/Table/ActiveTable";
import InActiveTable from "./components/Table/InActiveTable";
import ViewMoreBuySell from "./pages/ViewMoreBuySell";
import ViewMoreLocalTalks from "./pages/ViewMoreLocalTalks";
import ViewsMoreDIY from "./pages/ViewsMoreDIY";
import ViewMoreKidsEduction from "./pages/ViewMoreKidsEduction";
import ViewMoreEventMovies from "./pages/ViewMoreEventMovies";
import ViewMoreHealthWellness from "./pages/ViewMoreHealthWellness";
import ViewMoreEntrepreneurial from "./pages/ViewMoreEntrepreneurial";
import PortUpdate from "./pages/Admin/PortUpdate";
import PortCreate from "./pages/Admin/PortCreate";
import UserSponsored from "./pages/user/userSponsored";

import ActiveAdminTable from "./components/Table/ActiveTable";
import PendingAdminTable from "./components/Table/PendingListingTable";
import InactiveAdminTable from "./components/Table/InActiveTable";
import SponsoredAllAds from "./pages/Admin/sponsoredallAds";
import SponsoredAdsDetails from "./pages/Admin/sponsoredadsdetails";
import LocalRentals from "./pages/localRentals";
import EntrepreneurialBusiness from "./pages/EntrepreneurialBusiness";
import LocalTalks from "./pages/LocalTalks";
import Allblogpost from "./pages/allblogpost";
import LocalEventsMoives from "./pages/LocalEvents&Moives";
import ActiveListing from "./pages/user/activeListing";
import InactiveListing from "./pages/user/inactiveListing";
import UserRole from "./pages/Admin/UserRole";
import SuccessPage from "./pages/SuccessPage";
import CancelPage from "./pages/CancelPage";
import UserListingCount from "./pages/Admin/UserListingCount";
import SeeReviews from "./components/Table/SeeReviews";
import UpdateBlogByAdmin from "./pages/Admin/UpdateBlogByAdmin";
import GoogleUserPage from "./pages/auth/GoogleUserPage";







function App() {
  const user = useSelector((state) => state.user);
  const userInfo = localStorage.getItem("UserInformation");
  const userdata = JSON.parse(userInfo);
  let userinfo = userdata?.user?.isAdmin;

  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/register" element={<Register />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/google-login" element={<GoogleUserPage/>} />
      
      <Route exact path="/verify/:id/:token" element={<EmailVerify />} />
      <Route exact path="/forget-password" element={<ForgetPassword />} />
      <Route exact path="/resetpassword/:token" element={<ChangePsd />} />
      <Route exact path="/ads-with-us" element={<AdswithUs />} />
      <Route exact path="/about-us" element={<AboutUs />} />
      <Route exact path="/contact-us" element={<Contact />} />
      {/* <Route exact path="/listing-details/:id" element={<ListingDetailsFun/>} /> */}
      <Route
        exact
        path="/view-more/LocalBussiess"
        element={<ViewMoreLocalBussiess />}
      />
      <Route
        exact
        path="/view-more/LocalRental"
        element={<ViewMoreLocalRental />}
      />
      <Route exact path="/view-more/BuySell" element={<ViewMoreBuySell />} />
      <Route
        exact
        path="/view-more/LocalTalks"
        element={<ViewMoreLocalTalks />}
      />
      <Route exact path="/view-more/DIY" element={<ViewsMoreDIY />} />
      <Route
        exact
        path="/view-more/Kids-education"
        element={<ViewMoreKidsEduction />}
      />
      <Route
        exact
        path="/view-more/EventMovies"
        element={<ViewMoreEventMovies />}
      />
      <Route
        exact
        path="/success"
        element={<SuccessPage/>}
      />
       <Route
        exact
        path="/cancel"
        element={<CancelPage/>}
      />


      <Route
        exact
        path="/view-more/health-wellness"
        element={<ViewMoreHealthWellness />}
      />
      <Route
        exact
        path="/view-more/Entrepreneurial"
        element={<ViewMoreEntrepreneurial />}
      />
      <Route exact path="/ourblogdetails" element={<Ourblogdetails />} />
      <Route exact path="/buy-sell" element={<Buyandsell />} />
      <Route exact path="/job-div" element={<Divhobbytraining />} />
      <Route
        exact
        path="/health-and-wellness"
        element={<HealthandWellness />}
      />
      <Route exact path="/local-business-ads" element={<LocalBusinessAds />} />
      <Route exact path="/local-rentals" element={<LocalRentals />} />
      <Route
        exact
        path="/entrepreneurial-local-business"
        element={<EntrepreneurialBusiness />}
      />
      <Route
        exact
        path="/local-events-moives"
        element={<LocalEventsMoives />}
      />
      <Route exact path="/local-talks" element={<LocalTalks />} />
      <Route exact path="/local-blog-post" element={<Allblogpost />} />
      {/* <Route exact path="/d2" element={<D2 />} />
      <Route exact path="/d3" element={<D3 />} />
      <Route exact path="/video" element={<Video />} /> */}
      <Route
        exact
        path="/business-form"
        element={
          <Layout1 title="Post An Advertise">
            <ProtectedRoute>
              <PostAnAdvertise />
            </ProtectedRoute>
          </Layout1>
        }
      />
      <Route exact path="/pricing" element={<Pricing />} />
      <Route exact path="/term-condition" element={<Termcondition />} />
      <Route exact path="/privacy-policy" element={<Privacypolicy />} />
      {/* --------------------------------------------------user-panel-------------------------------------------- */}
      {/* <Route
        exact
        path="/user-dashboard"
        element={
          <Userdashboard />
          // <UserRoute>

          // </UserRoute>
        }
      /> */}
      <Route
        exact
        path="/user-dashboard"
        element={<ProtectedUser Userdashboard={Userdashboard} />}
      />
      <Route
        exact
        path="/my-listing"
        element={
          <ProtectedRoute>
            <Mylisting />
          </ProtectedRoute>
        }
      />
      <Route
        exact
        path="/pending-userlisting"
        element={
          <ProtectedRoute>
            <PendingListing/>
          </ProtectedRoute>
        }
      />
      <Route
        exact
        path="/active-userlisting"
        element={
          <ProtectedRoute>
            <ActiveListing/>
          </ProtectedRoute>
        }
      />
      <Route
        exact
        path="/inactive-userlisting"
        element={
          <ProtectedRoute>
            <InactiveListing />
          </ProtectedRoute>
        }
      />
      <Route
        exact
        path="/user-bloglist"
        element={
          <ProtectedRoute>
            <UserBloglist />
          </ProtectedRoute>
        }
      />
      <Route
        exact
        path="/user-bloglist-add-blog"
        element={
          <ProtectedRoute>
            <UserAddblog />
          </ProtectedRoute>
        }
      />

      <Route
        exact
        path="/user-bloglist-edit-blog/:id"
        element={
          <ProtectedRoute>
            <EditUserblog />
          </ProtectedRoute>
        }
      />
      <Route
        exact
        path="/Change-password"
        element={
          <ProtectedRoute>
            <Changepassword />
          </ProtectedRoute>
        }
      />
      {/* <Route
        exact
        path="/wishist"
        element={
          <ProtectedRoute>
            <Wishist />
          </ProtectedRoute>
        }
      /> */}
      <Route
        exact
        path="/reviews"
        element={
          <ProtectedRoute>
            <Reviews />
          </ProtectedRoute>
        }
      />
      <Route exact path="/reviews-details/:id" element={<Reviewsdetails />} />
      <Route
        exact
        path="/edit-profile"
        element={
          <ProtectedRoute>
            <Editprofile />
          </ProtectedRoute>
        }
      />
   
       <Route
        exact
        path="/view-user-listing/:id"
        element={
          <ProtectedRoute>
          <UserListingCount/>
          </ProtectedRoute>
          
        }
      />

      <Route
        exact
        path="/reviews-and-listing/:id"
        element={<ReviewsAndListing />}
      />
   
        <Route
        exact
        path="/reviews-view/:id"
        element={
          <ProtectedRoute>
            <SeeReviews/>
          </ProtectedRoute>
        }
      />

      <Route
        exact
        path="/profile-details"
        element={
          <ProtectedRoute>
            <ProfileDetails />
          </ProtectedRoute>
        }
      />
   
      <Route
        exact
        path="/add-blog"
        element={
          <ProtectedRoute>
            <Addblog />
          </ProtectedRoute>
        }
      />
    
      <Route
        exact
        path="/profile-setting"
        element={
          <ProtectedRoute>
            <ProfileSetting />
          </ProtectedRoute>
        }
      />
      <Route
        exact
        path="/user-sponsored"
        element={
          <ProtectedRoute>
            <UserSponsored />
          </ProtectedRoute>
        }
      />
      <Route
        exact
        path="/user-fixed"
        element={
          <ProtectedRoute>
            <UserSponsored />
          </ProtectedRoute>
        }
      />
      <Route
        exact
        path="/chats"
        element={
          <ProtectedRoute>
            <Chats />
          </ProtectedRoute>
        }
      />
      <Route exact path="/allblogs" element={<AllBlogs />} /> {/*by karan */}
      <Route exact path="/user-blogdetails/:id" element={<BlogsDetails />} />
      {/*------------------------------------------------ Admin panel ----------------------------------------- */}
      <Route
        exact
        path="/admin"
        element={<ProtectedAdmin Admindashboard={Admindashboard} />}
      />
      <Route
        exact
        path="/admin/allusers"
        element={<ProtectedAdmin Admindashboard={Allusers} />}
      />
      <Route
        exact
        path="/latestlings"
        element={<ProtectedAdmin Admindashboard={Latestlings} />}
      />
      <Route
        exact
        path="/listing"
        element={<ProtectedAdmin Admindashboard={AllListing} />}
      />
      <Route
        exact
        path="/active-listing"
        element={<ProtectedAdmin Admindashboard={ActiveAdminTable} />}
      />
      <Route
        exact
        path="/pending-listing"
        element={<ProtectedAdmin Admindashboard={PendingAdminTable} />}
      />
      <Route
        exact
        path="/inactive-listing"
        element={<ProtectedAdmin Admindashboard={InactiveAdminTable} />}
      />
      <Route
        exact
        path="/admin-edit-blog/:id"
        element={<ProtectedAdmin Admindashboard={EditBlogAdmin} />}
      />
      <Route
        exact
        path="/admin-reviews"
        element={<ProtectedAdmin Admindashboard={AdminReviews} />}
      />
      <Route
        exact
        path="/smtp-seting"
        element={<ProtectedAdmin Admindashboard={PortSeting} />}
      />
      <Route
        exact
        path="/port-update"
        element={<ProtectedAdmin Admindashboard={PortUpdate} />}
      />
      <Route
        exact
        path="/port-create"
        element={<ProtectedAdmin Admindashboard={PortCreate} />}
      />
      {/* <Route exact path="/userslist" element={<ProtectedAdmin Admindashboard ={Userslist} />} /> */}
      <Route
        exact
        path="/activated"
        element={<ProtectedAdmin Admindashboard={Activated} />}
      />
      <Route
        exact
        path="/create-sponsored-ads"
        element={<ProtectedAdmin Admindashboard={SpansoredAds} />}
      />{" "}
      <Route
        exact
        path="/sponsored-ads-details/:id"
        element={<ProtectedAdmin Admindashboard={SponsoredAdsDetails} />}
      />
      <Route
        exact
        path="/sponsored-all-ads"
        element={<ProtectedAdmin Admindashboard={SponsoredAllAds} />}
      />
      <Route
        exact
        path="/fixed-ads"
        element={<ProtectedAdmin Admindashboard={FixedAds} />}
      />
      <Route
        exact
        path="/edit-profile-admin"
        element={<ProtectedAdmin Admindashboard={EditprofileAdmin} />}
      />
      <Route
        exact
        path="/admin-profile-detail"
        element={<ProtectedAdmin Admindashboard={AdminProfileDetails} />}
      />
       <Route
        exact
        path="/user-details/:id"
        element={<ProtectedAdmin Admindashboard={UserRole} />}
      />


     <Route
        exact
        path="/mails-alerts"
        element={<ProtectedAdmin Admindashboard={MailsAlert} />}
      />
      <Route
        exact
        path="/Change-password-admin"
        element={<ProtectedAdmin Admindashboard={ChangepasswordAdmin} />}
      />
      <Route
        exact
        path="/listing-ads-details/:id"
        element={<ProtectedAdmin Admindashboard={Listdatadetails} />}
      />{" "}
      <Route
        exact
        path="/listing-ads-update/:id"
        element={<ProtectedAdmin Admindashboard={Updatelistdata} />}
      />
        <Route
        exact
        path="/blogs"
        element={<ProtectedAdmin Admindashboard={Bloglist} />}
      />
        <Route
        exact
        path="/comments"
        element={<ProtectedAdmin Admindashboard={Comments} />}
      />
          <Route
        exact
        path="/comments-view/:id"
        element={<ProtectedAdmin Admindashboard={CommentView} />}
      />
          <Route
        exact
        path="/blogs-edit/:id"
        element={<ProtectedAdmin Admindashboard={UpdateBlogByAdmin} />}
      />

      

    </Routes>
  );
}

export default App;
