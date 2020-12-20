const  URL = "https://covid19.mathdro.id/api"; 

let app = angular.module("MyApp",[]);
app.controller("MyCtrl",($scope,$http)=>{
 $scope.title ="romromji";

 $http.get(URL).then(
     (response)=>{
        console.log(response.data)
        $scope.all_data = response.data;
     },
     (error)=>{
        console.log(error);
     });
     $scope.get_c_data = () =>{
         console.log($scope.c);
         let country = $scope.c;
         if (country == '') {
             return;
         }
         $http.get(`${URL}/countries/${country}`).then((response) =>{
            console.log(response.data)
            $scope.c_data = response.data;
         },
         (error) => {
             console.log(error);
             $scope.c_data = null;
         });
         
         
     }
});