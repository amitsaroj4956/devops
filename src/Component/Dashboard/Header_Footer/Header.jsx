import axios from "axios";
import React,{useEffect, useState} from "react";
import HeaderNavbarLogo from "../DashboardMenu/HeaderNavbarLogo";
import HeaderNavbarRight from "../DashboardMenu/HeaderNavbarRight";

function Header() {

  const curentuseremail=localStorage.getItem("email");

  const [apiData,SetApiData]=useState({
    name: "",
    email: "",
    mobile: "",
    about: "",
    address: "",
     
 
  })
  sessionStorage.setItem("name", apiData.name)
  sessionStorage.setItem("mobile", apiData.mobile)
  sessionStorage.setItem("about", apiData.about)
  sessionStorage.setItem("address", apiData.address)
    useEffect(() => {
      const loadData = {
        email: curentuseremail,
      };
      axios.post("http://localhost:4000/api/profile", loadData).then(function (response) {
          console.log("logindata", response.data);
         
          if (response.status === 200) {
            SetApiData((prevState) => ({
              ...prevState,
              name :response.data.fullName,
              mobile: response.data.contact,
              about: response.data.about,
              address: response.data.address,
              
            }));
            

          } 
        })
        .catch(function (error) {
          console.log("catch error",error);
        });
         
  },[curentuseremail])
  

  return (
    <>
      <header id="page-topbar">
        <div className="navbar-header">
       
          <HeaderNavbarLogo />
          <HeaderNavbarRight userData={apiData} />
        </div>
      </header>
    </>
  );
}

export default Header;
