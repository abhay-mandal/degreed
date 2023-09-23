import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieCardComponent } from './movie-card.component';
import { GoDetailsComponent } from '../navigation/go-details/go-details.component';

describe('MovieCardComponent', () => {
  let component: MovieCardComponent;
  let fixture: ComponentFixture<MovieCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MovieCardComponent, GoDetailsComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(MovieCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });
});