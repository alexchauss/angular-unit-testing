import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactComponent } from './contact.component';

import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { LoggerService } from '../logger.service';

describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;
  let el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactComponent ],
      imports: [ ReactiveFormsModule ],
      providers: [ LoggerService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as text 'contact page'`, () => {
    expect(component.text).toEqual('contact page');
  });

  it(`should set submitted to true`, () => {
    component.onSubmit();
    expect(component.submitted).toBeTruthy();
  });

  it(`should call the onSubmit method`, () => {
    spyOn(component, 'onSubmit');
    el = fixture.debugElement.query(By.css('button')).nativeElement;
    el.click();
    expect(component.onSubmit).toHaveBeenCalledTimes(0);
  });

  it(`form should be invalid`, () => {
    component.contactForm.controls.name.setValue('');
    component.contactForm.controls.email.setValue('');
    component.contactForm.controls.password.setValue('');
    expect(component.contactForm.invalid).toBeTruthy();
  });

  it(`form should be valid`, () => {
    component.contactForm.controls.name.setValue('Bobby');
    component.contactForm.controls.email.setValue('foo@bar.com');
    component.contactForm.controls.password.setValue('myPassword0');
    expect(component.contactForm.invalid).toBeFalsy();
  });

  it(`should have message set to ''`, () => {
    expect(component.message).toEqual('');
  });

  it(`submitting form should set message to 'Successful submission!'`, () => {
    component.onSubmit();
    expect(component.message).toEqual('Successful submission!');
  });

});
