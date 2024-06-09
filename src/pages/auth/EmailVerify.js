import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import success from "../../assets/success.png";

const EmailVerify = () => {
  const [validUrl, setValidUrl] = useState(true);
  const param = useParams();

  useEffect(() => {
    const verifyEmailUrl = async () => {
      try {
        const url = `${process.env.REACT_APP_API}/api/v1/verifyemail/${param.id}/${param.token}`;
        const { data } = await axios.get(url);
        console.log(data);
        setValidUrl(true);
      } catch (error) {
        console.error(error);
        setValidUrl(false);
      }
    };
    verifyEmailUrl();
  }, [param]);

  return (
    <>
      {validUrl ? (
        <div className="flex flex-col justify-center items-center h-screen">
          <img src={success} alt="success_img" className="w-20 h-20" />
          <h1 className="text-xl py-3">Email verified successfully</h1>
          <Link to="/login" className="">
            <button className="bg-green-500 text-white px-3 py-1 rounded-md">
              Login
            </button>
          </Link>
        </div>
      ) : (
        <h1>404 Not Found</h1>
      )}
    </>
  );
};

export default EmailVerify;
