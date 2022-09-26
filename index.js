let readlineSync = require('readline-sync');
const shortid = require("shortid");
let fs = require('fs');
const Data = './data.txt' ;
menu();
let yourSelect = readlineSync.question('Please choose: ');
function getData () {
    let data = fs.readFileSync(Data, "utf-8");
    if(data ==='') return []
    else return JSON.parse(data);  
};
let student = getData();
const saveData = () => {
    newStudent = JSON.stringify(student);
    fs.writeFileSync(Data, newStudent, 'utf-8');
}

const Thêmhọcsinh = () =>{
    console.log("Input new student infomation:");
    let id = shortid.generate();
    let name = readlineSync.question('Input name: ');
    let age = parseInt(readlineSync.question('Input age: '));
    let sex = readlineSync.question('Input sex: ');
    let ĐiểmTB = parseInt(readlineSync.question('Input Diểm TB : '));
    student.push({
        id: id,
        name: name,
        age: age,
        sex: sex,
        ĐiểmTB: ĐiểmTB
    })
    saveData();
    yourSelect = 0;
}
const xoáhọcsinh = () => {
    let deleteID = readlineSync.question('Input Id you want to delete:');
    student.map((item, index) => {
        if(item.id == deleteID){
            student.splice(index, 1);}});
    saveData();
    yourSelect = 0;
}
const xoáHọcsinhTheoid =() => {
        return (deleteID)

}
const EditThôngtinhọcsinh = () => {
    let editID = readlineSync.question('Input Id you want to edit:');
    student.map((index) => {
        if(index.id == editID) {
            let Name = readlineSync.question('Input name: ');
            let Age = parseInt(readlineSync.question('Input age: '));
            let Gender = readlineSync.question('Input gender: ');
            let ĐiểmTB = parseInt(readlineSync.question('Input Điểm TB: '));
            index.name = Name; index.age = Age; index.sex = Gender; index.ĐiểmTB = ĐiểmTB;
    
        }
    });
    saveData();
    yourSelect = 0;
}
const TìmkiếmHọcsinh = () => {
    let searchName = readlineSync.question('Input student name to find: ');
    let result = student.filter((item,index) => {
    if(item.name === searchName)return item;});
    console.log(result);
    yourSelect = 0;
}
const Tìmkiếmhọcsinhthủkhoavàotrường = () => {
    let data = getData();
    let max = data[0];
    for(let i = 0;i < data.length;i++){
        if(data[i] > max){
            max = data[i];
        }
    }
    return max;
}
const Hiểnthịdanhsáchhọcsinhbịcảnhcáo = () => {
    let lstStudent = student.filter((item) => {
        return item.averagePoint < 4;
    });
    console.log('List students be warned: ');
    console.log(lstStudent);
    yourSelect = 0;
}
const Sắpxếphọcsinhtheobảngchữcái = () => {
    let lstStudent = student.sort((a,b) => {
        return a.name.localeCompare(b.name);
    });
    console.log('Sort by Alphabetically: ');saveData();
    console.log(lstStudent);yourSelect = 0;
}
const Sắpxếphọcsinhtheođiểmtrungbìnhtăngdần = () => {
    let lstStudent = student.sort((a,b) => {
        return a.averagePoint - b.averagePoint;});
    console.log('Sort by Average point ascending:');
    saveData();
    console.log(lstStudent);
    yourSelect = 0;
}
function menu () {
    console.log('Quản lý SV');
    console.log('----------------');
    console.log('1.Hiển thị học sinh');
    console.log('2.Thêm học sinh');
    console.log('3.xoá học sinh');
    console.log('4.xoá Học sinh Theo id');
    console.log('5.Edit Thông tin học sinh');
    console.log('6.Tìm kiếm Học sinh');
    console.log('7.Tìm kiếm học sinh thủ khoa vào trường ');
    console.log('8.Hiển thị danh sách học sinh bị cảnh cáo ');
    console.log('9.Sắp xếp học sinh theo bảng chữ cái ');
    console.log('10.Sắp xếp học sinh theo điểm trung bình tăng dần ');
    console.log('11.Sắp xếp học sinh theo tuổi tăng dần  ');
    console.log('12.Exit');
}

while (true) {
    switch (parseInt(yourSelect)) {
        case 0:
            menu();
            yourSelect = readlineSync.question('Please choose: ');
            break;
        case 1:
            console.log(student);
            yourSelect = 0;
            break;
        case 2:
            Thêmhọcsinh();
            break;
        case 3:
            xoáhọcsinh();
            break;
        case 4:
            xoáHọcsinhTheoid();
            break;
        case 5:
            EditThôngtinhọcsinh();
            break;
        case 6:
            TìmkiếmHọcsinh();
            break; 
        case 7:
            Tìmkiếmhọcsinhthủkhoavàotrường();
            break; 
        case 8:
            Hiểnthịdanhsáchhọcsinhbịcảnhcáo();
            break; 
        case 9:
            Sắpxếphọcsinhtheobảngchữcái();
            break; 
        case 10:
            Sắpxếphọcsinhtheođiểmtrungbìnhtăngdần ();
            break; 
        case 11:
            Sắpxếphọcsinhtheotuổităngdần();
            break; 
        case 12:
            process.exit();
            break;          
        default:
            console.log('You must choose one of the menu!');
            yourSelect = 0;
    }
}