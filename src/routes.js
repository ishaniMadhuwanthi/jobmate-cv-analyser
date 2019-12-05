
import Index from "views/Index.jsx";
import Profile from "views/examples/Profile.jsx";
import SubmitCV from "views/examples/SubmitCV.jsx";
import Login from "views/examples/Login.jsx";
import CVcustomise from "views/examples/CVcustomise.jsx";
import Welcome from "views/examples/Welcome.jsx";
import Review from "views/examples/Review.jsx";
import SampleForms from "./views/examples/SampleForms.jsx";
import CompanyCV from "./views/examples/CompanyCV.jsx";


var routes = [

  {
    path: "/aboutme",
    name: "Welcome",
    icon: "ni ni-single-02 text-green",
    component: Welcome,
    layout: "/about"
  },

  {
    path: "/index",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: Index,
    layout: "/admin"
  },
 
 
  {
    path: "/maps",
    name: "Smaple Forms",
    icon: "ni ni-planet text-blue",
    component: SampleForms,
    layout: "/admin"
  },
  
  {
    path: "/tables",
    name: "CV Customize",
    icon: "ni ni-bullet-list-67 text-red",
    component: CVcustomise,
    layout: "/admin"
  },
  {
    path: "/login",
    name: "Login",
    icon: "ni ni-key-25 text-info",
    component: Login,
    layout: "/auth"
  },
  
  
  {
    path: "/documentation",
    name: "Submit CV",
    icon: "ni ni-planet text-blue",
    component: SubmitCV,
    layout: "/admin"
  },
  {
    path: "/review",
    name: "Review",
    icon: "ni ni-key-25 text-info",
    component: Review,
    layout: "/auth"
  },

  {
    path: "/companycv",
    name: "Company Requirements",
    icon: "ni ni-bullet-list-67 text-red",
    component: CompanyCV,
    layout: "/admin"
  },

  {
    path: "/user-profile",
    name: "",
    icon: "ni ni-single-02 text-white",
    component: Profile,
    layout: "/admin"
  },

 

  
];
export default routes;
