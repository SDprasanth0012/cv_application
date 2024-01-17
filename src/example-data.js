import uniqid from "uniqid";

const exampleData = {
  personalInfo: {
    fullName: "S D Prasanth",
    email: "saiprasanth0028@gmail.com",
    phoneNumber: "+91 8688956980",
    address: "Vijaywada, India",
  },

  sections: {
    educations: [
      {
        degree: "Bachelors in Computer Science",
        schoolName: "National institue of technology Warangal",
        location: "Telangana",
        startDate: "07/2019",
        endDate: "06/2023",
        isCollapsed: true,
        isHidden: false,
        id: uniqid(),
      },
      {
        degree: "Intermediate Mpc",
        schoolName: "Viganan junior College",
        location: "Guntur, Ap",
        startDate: "06/2017",
        endDate: "07/2019",
        isCollapsed: true,
        isHidden: true,
        id: uniqid(),
      },
    ],

    experiences: [
      {
        companyName: "bizactivity",
        positionTitle: "UX & UI Designer",
        location: "Hyderabad,India",
        description:
          "Designed and prototyped user interface patterns for various clients in various industries, ranging from self-service apps within the telecommunications-sector to mobile games for IOS and Android",
        startDate: "08/2023",
        endDate: "present",
        isCollapsed: true,
        isHidden: false,
        id: uniqid(),
      },
      {
        companyName: "Black Mesa Labs",
        positionTitle: "UX Research Assistant",
        location: "Berlin, Germany",
        description:
          "Supported senior researchers on accessibility standards for the open web. Created and usability tested wireframes and prototypes. Produced interactive documentation for quick onboarding of new researchers.",
        startDate: "04/2018",
        endDate: "02/2019",
        isCollapsed: true,
        isHidden: false,
        id: uniqid(),
      },
    ],
  },
};

export default exampleData;
