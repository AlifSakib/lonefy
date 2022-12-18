import { Tab } from "@headlessui/react";
import { Fragment, useState } from "react";
import { toast } from "react-hot-toast";
import BusinessDetails from "./BusinessDetails";
import Loan from "./Loan";
import PersonalDetails from "./PersonalDetails";

function LoadApplication() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [details, setLoanDetails] = useState({
    personalDetails: {},
    businessDetails: {},
    loanDetails: {},
  });

  const handleLoanApplication = () => {
    fetch("https://lonefy-server-alifsakib.vercel.app/load-details", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(details),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          toast.success("Application Submited");
        }
      });
  };
  return (
    <div className="w-9/12 mx-auto ">
      <Tab.Group selectedIndex={selectedIndex} onChange={setSelectedIndex}>
        <div>
          <div className="container flex items-center px-6 py-4 mx-auto overflow-x-auto whitespace-nowrap">
            <Tab.List>
              <div className="flex">
                <div className="flex">
                  <Tab as={Fragment}>
                    {({ selected }) => (
                      <button
                        className={selected ? "text-blue-500 " : "text-white "}
                      >
                        Personal Details
                      </button>
                    )}
                  </Tab>
                  <span className="mx-5 text-gray-500 dark:text-gray-300 rtl:-scale-x-100">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </div>
                <div className="flex">
                  <Tab as={Fragment}>
                    {({ selected }) => (
                      /* Use the `selected` state to conditionally style the selected tab. */

                      <button
                        className={selected ? "text-blue-500 " : "text-white "}
                      >
                        Business Details
                      </button>
                    )}
                  </Tab>
                  <span className="mx-5 text-gray-500 dark:text-gray-300 rtl:-scale-x-100">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </div>
                <div className="flex">
                  <Tab as={Fragment}>
                    {({ selected }) => (
                      /* Use the `selected` state to conditionally style the selected tab. */

                      <button
                        className={selected ? "text-blue-500 " : "text-white "}
                      >
                        Loan Application
                      </button>
                    )}
                  </Tab>
                </div>
              </div>
            </Tab.List>
          </div>
          <Tab.Panels className="mt-2">
            <Tab.Panel className="container flex items-center px-6 py-4 mx-auto overflow-x-auto whitespace-nowrap">
              <PersonalDetails
                setSelectedIndex={setSelectedIndex}
                setLoanDetails={setLoanDetails}
                details={details}
              ></PersonalDetails>
            </Tab.Panel>
            <Tab.Panel className="container flex items-center px-6 py-4 mx-auto overflow-x-auto whitespace-nowrap">
              <BusinessDetails
                setSelectedIndex={setSelectedIndex}
                details={details}
                setLoanDetails={setLoanDetails}
              ></BusinessDetails>
            </Tab.Panel>
            <Tab.Panel className="container flex items-center px-6 py-4 mx-auto overflow-x-auto whitespace-nowrap">
              <Loan
                setLoanDetails={setLoanDetails}
                details={details}
                handleLoanApplication={handleLoanApplication}
              ></Loan>
            </Tab.Panel>
          </Tab.Panels>
        </div>
      </Tab.Group>
    </div>
  );
}

export default LoadApplication;
