import { Component, OnInit } from '@angular/core';
import { BuildDetails } from '../common/BuildDetails';
import { AutodevopsService } from '../autodevops.service';

@Component({
  selector: 'app-autodevops',
  templateUrl: './autodevops.component.html',
  styleUrls: ['./autodevops.component.css']
})
export class AutodevopsComponent implements OnInit {

  model: BuildDetails;

  constructor(private buildService: AutodevopsService) { }

  ngOnInit() {
    this.model = new BuildDetails();
  }

  submit() {
    console.log(this.model);
    this.buildService.build(this.model);
  }

}
