import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayCardComponent } from './play-card.component';

describe('PlaybookAreaComponent', () => {
  let component: PlayCardComponent;
  let fixture: ComponentFixture<PlayCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
