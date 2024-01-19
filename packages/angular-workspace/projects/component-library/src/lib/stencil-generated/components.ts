/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, NgZone } from '@angular/core';

import { ProxyCmp, proxyOutputs } from './angular-component-lib/utils';

import { Components } from 'stencil-library';


@ProxyCmp({
  inputs: ['first', 'last', 'middle']
})
@Component({
  selector: 'my-component',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['first', 'last', 'middle'],
})
export class MyComponent {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['simpleEvent', 'objectEvent']);
  }
}


export declare interface MyComponent extends Components.MyComponent {
  /**
   * Emits a simple event that only contains a string
   */
  simpleEvent: EventEmitter<CustomEvent<string>>;
  /**
   * Emits an event that contains an object
   */
  objectEvent: EventEmitter<CustomEvent<{ count: number, text: string, isSomething: boolean }>>;
}


@ProxyCmp({
  inputs: ['value']
})
@Component({
  selector: 'simple-input',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['value'],
})
export class SimpleInput {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['myChange']);
  }
}


export declare interface SimpleInput extends Components.SimpleInput {

  myChange: EventEmitter<CustomEvent<string>>;
}


