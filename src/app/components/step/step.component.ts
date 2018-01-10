import { Component, OnInit, Input } from '@angular/core';
import { StepService } from '../../services/step/step.service';

@Component({
  selector: 'app-step',
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.css']
})
export class StepComponent implements OnInit {
  @Input() step: any ;

  constructor(private stepService: StepService) { }

  saveStep() {
    let arr = this.stepService.steps.value.slice(0,this.stepService.steps.value.length-1)
    arr.push(this.step)
    this.stepService.steps.next(arr)


    console.log(this.stepService.steps.value)
  }

  ngOnInit() {
  }

}
