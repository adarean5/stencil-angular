import {Component, Prop, h, EventEmitter, Event} from '@stencil/core';
import { format } from '../../utils/utils';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {
  /**
   * The first name
   */
  @Prop() first: string;

  /**
   * The middle name
   */
  @Prop() middle: string;

  /**
   * The last name
   */
  @Prop() last: string;

  /**
   * Emits a simple event that only contains a string
   */
  @Event() simpleEvent: EventEmitter<string>

  /**
   * Emits an event that contains an object
   */
  @Event() objectEvent: EventEmitter<{
    count: number,
    text: string,
    isSomething: boolean
  }>

  private getText(): string {
    return format(this.first, this.middle, this.last);
  }

  private handleSimpleClick = (): void => {
    this.simpleEvent.emit("Test text")
  }

  private handleObjectClick = (): void => {
    this.objectEvent.emit({
      count: 100,
      text: "Test text",
      isSomething: true
    })
  }

  render() {
    return <div>
      <p>Hello, World! I'm {this.getText()}</p>
      <button onClick={this.handleSimpleClick}>Click me for a simple event</button>
      <button onClick={this.handleObjectClick}>Click me for an object event</button>
    </div>;
  }
}
