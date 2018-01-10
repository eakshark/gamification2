import { Component, OnInit } from '@angular/core';
import { StepService } from '../../services/step/step.service';
import { Step } from '../../models/Step';
import { Input } from '@angular/core/src/metadata/directives';

@Component({
  selector: 'app-steps',
  templateUrl: './steps.component.html',
  styleUrls: ['./steps.component.css']
})
export class StepsComponent implements OnInit {

  steps: Array<Step>;
  sub;

  constructor(private stepService: StepService) {
    this.sub = this.stepService.steps.subscribe(data => {
      this.steps = data

    });
  }

  ngOnInit() {
  }

  onDestroy() {
    if (this.sub) {
      this.sub.unsubscribe()
    }
  }

}
