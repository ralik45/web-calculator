const CHACE_KEY = "calculation_history";
//cek fitur storage
function checkForStorage(){
    return typeof(storage) == 'undefined';
}
//penyimpanan 
function putHistory(data){
    if (checkForStorage()){
        let historyData = null;
        if (localStorage.getItem(CHACE_KEY) === null){
            historyData = [];
        } else {
            historyData = JSON.parse(localStorage.getItem(CHACE_KEY));
        }
        historyData.unshift(data);
        if (historyData.lenght > 5) {
            historyData.pop();
        }
        localStorage.setItem(CHACE_KEY, JSON.stringify(historyData));
    }
}
//mengambil data dari localstorage
function showHistory() {
    if (checkForStorage()){
        return JSON.parse(localStorage.getItem(CHACE_KEY)) || [];
    } else{
        return [];
    }
}
//render data
function renderHistory() {
    const historyData = showHistory();
    let historyList = document.querySelector("#historyList");

    //selalu hapus konten HTML pada elemen historyList agar tidak menampilkan data ganda
    historyList.innerHTML = "";

    for (let history of historyData) {
        let row = document.createElement('tr');
        row.innerHTML = "<td>" + history.firstNumber + "</td>";
        row.innerHTML += "<td>" + history.operator + "</td>";
        row.innerHTML += "<td>" + history.secondNumber + "</td>";
        row.innerHTML += "<td>" + history.result + "</td>";

        historyList.appendChild(row);
    }
}

renderHistory();
