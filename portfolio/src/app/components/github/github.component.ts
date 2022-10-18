import { Component, OnInit } from '@angular/core';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {
  projects: any;
  page: number = 1;
  count:number =0;
  Size:number=6;
  constructor(private projectService: ProjectsService) { }

  ngOnInit(): void {
    this.getList();
  }
  getList():void{
    this.projectService.getProjects().subscribe(
      (data) =>{
        // console.log(data);
        this.projects = data;
        console.log(this.projects)
      },
      (error)=>{
        console.log(error);
      }
    );
  }
  onDataChange(event:any){
    this.page=event;
    this.getList();
  }
  onSizeChange(event:any):void{
    this.Size = event.target.value;
    this.page =1;
    this.getList();
  }

}
