export const splitDate = (date) => {
  let splitT = date.split("T");
  let splitStrip = splitT[0].split("-");
  var months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return `${splitStrip[2]}  ${months[splitStrip[1] - 1]}  ${splitStrip[0]}`;
};

// Fungsi untuk mengubah format tanggal
export const formatDate = (dateString) => {
  const options = { day: "numeric", month: "long", year: "numeric" };
  return new Date(dateString).toLocaleDateString("id-ID", options);
};

// Fungsi bantu untuk mengonversi format tanggal
export const formatDate2 = (dateString) => {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

export const formatTime = (dateString) => {
  const date = new Date(dateString);
  return `${date.getHours()}:${date.getMinutes()}`;
};
