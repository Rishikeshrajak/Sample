var app = angular.module('myapp',[]);
app.controller('mycontroller',function($scope){
    $scope.users = [
        {"name":"Rishikesh Rajak","Email":"rishikeshrajak035@gmail.com","dob":"1996/09/12"},
        {"name":"satya prakash nandy","Email":"150301120033@cutm.ac.in","dob":"1998/12/22"},
        {"name":"Rahul Kumar","Email":"150301120034@cutm.ac.in","dob":"1997/12/23"},
        {"name":"Aslam Malik","Email":"150301120035@cutm.ac.in","dob":"1996/12/24"},
        {"name":"Rajan Panda","Email":"150301120036@cutm.ac.in","dob":"1996/12/25"},
        {"name":"Abishek Purty","Email":"150301120037@cutm.ac.in","dob":"1996/12/26"},
        {"name":"Zishan Ahmad","Email":"150301120038@cutm.ac.in","dob":"1996/12/27"},
        {"name":"Ravi Kumar","Email":"150301120039@cutm.ac.in","dob":"1996/12/28"},
        {"name":"Lakshamn Prashad","Email":"150301120040@cutm.ac.in","dob":"1996/12/29"},
        {"name":"Ritik kumar shaw","Email":"150301120041@cutm.ac.in","dob":"1996/12/01"},
        {"name":"Debashis padhi","Email":"150301120042@cutm.ac.in","dob":"1996/12/02"},
        {"name":"Debabrata linka","Email":"150301120043@cutm.ac.in","dob":"1996/12/03"},
        {"name":"Sachin Mandal","Email":"150301120044@cutm.ac.in","dob":"1996/12/04"},
        {"name":"Deepk Mandal","Email":"150301120045@cutm.ac.in","dob":"1996/12/05"},
        {"name":"Bablu Mandal","Email":"150301120046@cutm.ac.in","dob":"1996/12/06"},
        {"name":"Pradeep Verma","Email":"150301120047@cutm.ac.in","dob":"1996/12/07"},
        {"name":"Anil Mandal","Email":"150301120048@cutm.ac.in","dob":"1996/12/08"},
        {"name":"krisuna panda","Email":"150301120049@cutm.ac.in","dob":"1996/12/09"},
        {"name":"Sangita kumari","Email":"150301120050@cutm.ac.in","dob":"1996/12/10"},
        {"name":"Roshan Patro","Email":"150301120051@cutm.ac.in","dob":"1996/12/11"}
    ];
    $scope.birthday_boy = [];
    var date = new Date();
    angular.forEach($scope.users,function(user){
        var arr = user.dob.split("/");
        if((arr[1]==(date.getMonth()+1))&&(arr[2]==date.getDate()))
        {
            $scope.birthday_boy.push(user);
        }
    });
    console.log($scope.birthday_boy);
})