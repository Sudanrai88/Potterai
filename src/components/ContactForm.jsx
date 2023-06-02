import React from "react";
import Image from "next/image";
import { Label } from "@mui/icons-material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/router";
import emailjs from "@emailjs/browser";

function ContactForm() {
  //Router
  const router = useRouter();

  //Formik logics, instead of event.elemendId etc etc

  const formik = useFormik({
    initialValues: {
      from_name: "",
      email_id: "",
      message: "",
    },
    //Validate From

    validationSchema: Yup.object({
      from_name: Yup.string()
        .max(20, "Name must be at 20 characters or less.")
        .required("Name is required"),
      email_id: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      message: Yup.string()
        .max(200, "Name must be at 200 characters or less.")
        .required("Message is required"),
    }),

    onSubmit: (values) => {
      emailjs
        .send(
          "service_xo1vgai",
          "template_7tmn78v",
          values,
          "rySlnnZelCYwnhuiu"
        )
        .then(
          function (response) {
            console.log("SUCCESS!", response.status, response.text);
          },
          function (error) {
            console.log("FAILED...", error);
          }
        );
      router.push({
        pathname: "/Success",
        query: values,
      });
    },
  });

  const containerStyle = {
    backgroundImage: `url("https://imgur.com/RUwU1Zd.jpg")`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
  };

  return (
    <div
      className="flex items-center justify-center h-[140vh] sm:h-[140vh] md:h-[140vh] bg-fixed bg-center bg-cover "
      style={containerStyle}
    >
      <div className="flex flex-col w-[610px] text-white tracking-[0.05em] rounded-[20px] bg-black bg-opacity-20  p-10 mt-[30px] mx-[20px]">
        <div className="z-[1]">
            
              <div className=" text-center mb-[30px]">
                <div className="">
                  <h2 className="text-4xl sm:text-5xl font-bold ">
                    Contact Us
                  </h2>
                </div>
                <div>
                  <p className="py-2 text-base">
                    {" "}
                    Please get in touch if you have any enquiries!{" "}
                  </p>
                </div>
                <div>
                  <p className="py-2 text-base ">
                    {" "}
                    Just fill in the contact form below and we will get back to
                    your email asap.{" "}
                  </p>
                </div>
              </div>

              <form onSubmit={formik.handleSubmit} className="Forms z-[1] mt-4">
                <div className="flex flex-col items-center font-bold mb-[30px]">
                  <div className="w-[90%] sm:w-[100%]">
                    <h1 className=""> Contact Form</h1>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center mb-[30px]">
                  <div className="w-[90%] sm:w-[50%] ">
                    <label
                      htmlFor="name"
                      className={`mb-[10px] text-[12px] ${
                        formik.touched.from_name && formik.errors.from_name
                          ? "text-red-500"
                          : ""
                      }`}
                    >
                      {" "}
                      {formik.touched.from_name && formik.errors.from_name
                        ? formik.errors.from_name
                        : "NAME"}{" "}
                    </label>
                    <input
                      required
                      name="from_name"
                      type="text"
                      placeholder="Enter you name"
                      value={formik.values.from_name}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className=" w-[100%] sm:w-[97%] p-[6px] border-[1px] border-solid border-[#d1d0d0] bg-white/20"
                    />
                  </div>
                  <div className="w-[90%] sm:w-[50%] ">
                    <label
                      htmlFor="email"
                      className={`mb-[10px] text-[12px] ${
                        formik.touched.email_id && formik.errors.email_id
                          ? "text-red-500"
                          : ""
                      }`}
                    >
                      {" "}
                      {formik.touched.email_id && formik.errors.email_id
                        ? formik.errors.email_id
                        : "EMAIL"}{" "}
                    </label>
                    <input
                      required
                      name="email_id"
                      type="text"
                      placeholder="Enter you email"
                      value={formik.values.email_id}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className=" w-[100%] sm:w-[100%] p-[6px] border-[1px] border-solid border-[#d1d0d0] bg-white/20"
                    />
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row items-center mb-[20px]">
                  <div className="w-[90%] sm:w-[100%]">
                    <label
                      htmlFor="message"
                      className={`mb-[10px] text-[12px] ${
                        formik.touched.message && formik.errors.message
                          ? "text-red-500"
                          : ""
                      }`}
                    >
                      {" "}
                      {formik.touched.message && formik.errors.message
                        ? formik.errors.message
                        : "MESSAGE"}{" "}
                    </label>
                    <textarea
                      required
                      name="message"
                      type="text"
                      placeholder="Enter you message"
                      value={formik.values.message}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      rows="6"
                      className=" p-[6px] w-[100%] sm:w-[100%] border-[1px] border-solid border-[#d1d0d0] bg-white/20"
                    />
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row items-center">
                  <div className="w-[90%] sm:w-[100%]">
                    <button type="submit" className="px-[24px] py-[6px] border">
                      {" "}
                      Send{" "}
                    </button>
                  </div>
                </div>
              </form>
            
        </div>

        <div className="Overlay">
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/50 h-[140vh] sm:h-[140vh] md:h-[140vh]" />
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
