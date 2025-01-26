import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdieComponent } from './adie.component';

describe('AdieComponent', () => {
  let component: AdieComponent;
  let fixture: ComponentFixture<AdieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdieComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
