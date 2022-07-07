import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdbookdialogComponent } from './adbookdialog.component';

describe('AdbookdialogComponent', () => {
  let component: AdbookdialogComponent;
  let fixture: ComponentFixture<AdbookdialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdbookdialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdbookdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
