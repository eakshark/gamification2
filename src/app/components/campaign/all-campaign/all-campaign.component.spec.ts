import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllCampaignComponent } from './all-campaign.component';

describe('AllCampaignComponent', () => {
  let component: AllCampaignComponent;
  let fixture: ComponentFixture<AllCampaignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllCampaignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllCampaignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
