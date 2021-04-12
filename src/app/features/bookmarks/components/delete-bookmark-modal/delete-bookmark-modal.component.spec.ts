import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { DeleteBookmarkModalComponent } from './delete-bookmark-modal.component';

describe('DeleteBookmarkModalComponent', () => {
  let component: DeleteBookmarkModalComponent;
  let fixture: ComponentFixture<DeleteBookmarkModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        DeleteBookmarkModalComponent,
      ],
      imports: [
        MatDialogModule,
        NoopAnimationsModule,
      ],
      providers: [
        { provide: MatDialogRef, useValue: {} },
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteBookmarkModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
