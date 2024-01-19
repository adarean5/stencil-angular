import {Component, DestroyRef, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";
import {takeUntil} from "rxjs";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'my-app';
  formControl = new FormControl(null);
  customInputControl = new FormControl("Hello world")

  constructor(private dr: DestroyRef) {}

  ngOnInit(): void {

    this.formControl.valueChanges.pipe(takeUntilDestroyed(this.dr)).subscribe((changes) => {
      console.log("Form control value changes", changes)
    })
  }

  disableInputs() {
    this.formControl.disable();
    this.customInputControl.disable();
  }

  enableInputs() {
    this.formControl.enable();
    this.customInputControl.enable();
  }

  onSubmit() {
    console.log("On submit simple input", this.formControl.value)
    console.log("On submit custom input", this.customInputControl.value)
  }
}
