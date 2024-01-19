import { APP_INITIALIZER, NgModule } from '@angular/core';
import { DIRECTIVES } from './stencil-generated';
import { defineCustomElements } from 'stencil-library/loader';
import {TextValueAccessor} from "./stencil-generated/text-value-accessor";

@NgModule({
  declarations: [...DIRECTIVES, TextValueAccessor],
  exports: [...DIRECTIVES, TextValueAccessor],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: () => defineCustomElements,
      multi: true
    },
  ]
})
export class ComponentLibraryModule { }
