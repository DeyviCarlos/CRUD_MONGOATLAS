import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuProductorComponent } from './menu-productor.component';

describe('MenuProductorComponent', () => {
  let component: MenuProductorComponent;
  let fixture: ComponentFixture<MenuProductorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuProductorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuProductorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
