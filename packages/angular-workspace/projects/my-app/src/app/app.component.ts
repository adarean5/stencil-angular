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

  constructor(private dr: DestroyRef) {}

  ngOnInit(): void {

    this.formControl.valueChanges.pipe(takeUntilDestroyed(this.dr)).subscribe((changes) => {
      console.log("Form control value changes", changes)
    })
  }

  onSubmit() {
    console.log("On submit", this.formControl.value)
  }
}
