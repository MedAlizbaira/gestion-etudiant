import { Component } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent {
  student={
    name:'',
    image:'',
    resultat:''
   }
  
   students :any[]=[]
   ajout(){
    this.students.push(this.student)
    this.student={
      name:'',
      image:'',
      resultat:''
     }
   }
}
