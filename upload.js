const { web3, myAccount } = require("./utils");
const { abi, address } = require("./contractArtifacts");

let contract = new web3.eth.Contract(JSON.parse(abi), address);

async function addRecord(
  recordId,
  patientName,
  hospitalName,
  doctorName,
  year,
  date,
  vitalStatistics,
  symptoms,
  treatment,
  nextCheckupDate,
  extraNote
) {
  try{
    const reciept = await contract.methods.addRecord(
          recordId,
          patientName,
          hospitalName,
          doctorName,
          year,
          date,
          vitalStatistics,
          symptoms,
          treatment,
          nextCheckupDate,
          extraNote
        ).send({from:myAccount.address,gas:800000})
        return reciept;
  }catch(error){
    console.error("Error in addRecord:", error); // Log error from smart contract
    throw error; // Rethrow error to catch block
  }
  // await contract.methods
  //   .addRecord(
  //     recordId,
  //     patientName,
  //     hospitalName,
  //     doctorName,
  //     year,
  //     date,
  //     vitalStatistics,
  //     symptoms,
  //     treatment,
  //     nextCheckupDate,
  //     extraNote
  //   )
  //   .send({ from: myAccount.address, gas: 800000 })
  //   .on("receipt", (receipt) => {
  //     console.log(receipt);
  //     return receipt;
  //   });
}

window.addEventListener("load", () => {
  document.getElementById("adddata"),
    (onclick = () => {
      //   generate random id
      const recordId = Math.floor(Math.random() * 100000);
      const patientName = document.getElementById("patientName").value;
      const hospitalName = document.getElementById("hospitalName").value;
      const doctorName = document.getElementById("doctorName").value;
      const year = document.getElementById("year").value;
      const date = document.getElementById("date").value;
      const vitalStatistics = document.getElementById("vitalStatistics").value;
      const symptoms = document.getElementById("symptoms").value;
      const treatment = document.getElementById("treatment").value;
      const nextCheckupDate = document.getElementById("nextCheckupDate").value;
      const extraNote = document.getElementById("extraNote").value;
      console.log(
        recordId,
        patientName,
        hospitalName,
        doctorName,
        year,
        date,
        vitalStatistics,
        symptoms,
        treatment,
        nextCheckupDate,
        extraNote
      );
      addRecord(
        recordId,
        patientName,
        hospitalName,
        doctorName,
        year,
        date,
        vitalStatistics,
        symptoms,
        treatment,
        nextCheckupDate,
        extraNote
      ).then((r) => {
        const confirmtxt =
        "Data added successfully with patient id: " + recordId;
        document.getElementById("confirmtxt").innerHTML = confirmtxt;
      });
    });
});
