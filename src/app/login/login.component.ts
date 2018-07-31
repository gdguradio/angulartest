import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

interface myData{
  obj: Object
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  someVar = "";
  someVar1 = "";
  records = [];
  constructor(private Auth: AuthService) {
    
    // setInterval(()=>{
    //   this.someVar = Math.random().toString();
    //   this.someVar1 = Math.random().toString();
    // },500)
  }
  i = 0;
  username = "Username!";
  password = "Password!";
  bitwiseOR = 2 | 5 ;//010 101 => 0 | 1 = 1 then 1 | 0 = 1 then 0 | 1 = 1; 111 
  
  



  doSomeHeavyTask(){
    console.log(`doSomeHeavyTask ${this.i++} times`)

  }
  ngOnInit() {

    this.Auth.getData().subscribe(data =>{
      this.records = data.obj;
    })


  }
  userNameValue(e){
    this.someVar = e.target.value;

  }
  loginUser(event){
    event.preventDefault();
    const  target = event.target;
    const username = target.querySelector('#username').value;
    const password = target.querySelector('#password').value;
    console.log(username,password)

    this.Auth.getUserDetails(username,password).subscribe(data =>{

      if(data.success){

      }else{
        window.alert(data.secret);
      }
    })
  }
}
