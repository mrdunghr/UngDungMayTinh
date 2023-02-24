function Plus(){
    let sothunhat = document.getElementById('SoThuNhat').value;
    let sothuhai = document.getElementById('SoThuHai').value;
    let Ketqua;
    Ketqua = Number(sothunhat) + Number(sothuhai);

    document.getElementById('KetQua').innerHTML = 'Kết Quả: ' + Ketqua;
}
function Sub(){
    let sothunhat = document.getElementById("SoThuNhat").value;
    let sothuhai = document.getElementById("SoThuHai").value;
    let Ketqua;
    Ketqua = Number(sothunhat)-Number(sothuhai)

    document.getElementById('KetQua').innerHTML = 'Kết Quả: ' + Ketqua;
}
function Multi(){
    let sothunhat = document.getElementById("SoThuNhat").value;
    let sothuhai = document.getElementById("SoThuHai").value;
    let Ketqua;
    Ketqua = Number(sothunhat)*Number(sothuhai)

    document.getElementById('KetQua').innerHTML = 'Kết Quả: ' + Ketqua;
}
function Divi(){
    let sothunhat = document.getElementById("SoThuNhat").value;
    let sothuhai = document.getElementById("SoThuHai").value;
    let Ketqua;
    Ketqua = Number(sothunhat)/Number(sothuhai)

    document.getElementById('KetQua').innerHTML = 'Kết Quả: ' + Ketqua;
}
