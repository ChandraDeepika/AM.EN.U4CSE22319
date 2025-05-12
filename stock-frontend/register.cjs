const axios = require("axios");

async function register() {
  const res = await axios.post("http://20.244.56.144/evaluation-service/register", {
    email: "am.en.u4cse22319@am.students.amrita.edu",
    name: "G Chandra Deepika",
    mobileNo: "9110556506",
    githubUsername: "ChandraDeepika",
    rollNo: "AM.EN.U4CSE22319",
    collegeName: "Amrita Vishwa Vidyapeetham",
    accessCode: "SwuuKE"
  });

  console.log("Registration Response:", res.data);
}

register();
