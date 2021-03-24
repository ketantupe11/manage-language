import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LanguageData } from '../../language-data';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-add-list',
  templateUrl: './add-list.component.html',
  styleUrls: ['./add-list.component.css']
})
export class AddListComponent implements OnInit {

  languages:Observable<LanguageData[]>;

  language="";
  date="";
  parentPosts:any[]=[];

  languageData: LanguageData=new LanguageData();
  submitted=false;
  constructor(public languageService:LanguageService, private router:Router ) { }

  ngOnInit(): void {
  }

  save() {
    this.languageService.saveLanguage(this.languageData).subscribe(data => {
      console.log(data)
      this.parentPosts.push(data);
      this.languageData = new LanguageData();
      
    }, 
    error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.save();   
  }

  reLoadData(){
    this.languages=this.languageService.getLanguageData();
    }
}
