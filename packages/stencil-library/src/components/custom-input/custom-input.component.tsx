import { Component, Event, EventEmitter, h, Prop } from '@stencil/core';

@Component({
  tag: 'custom-input',
  shadow: true,
})
export class CustomInput {
  @Prop() disabled: boolean = false;
  @Prop({mutable: true}) value: string;
  @Event() myChange: EventEmitter<string>;

  private handleChanges = (): void => {
    const newValue = `${this.value}!`;
    this.value = newValue;
    this.myChange.emit(newValue);
  }

  render() {
    return <div>
      <p>Hey this is the value: {this.value}</p>
      <button disabled={this.disabled} class={"custom-input-button"} onClick={() => this.handleChanges()}>Change value!</button>
    </div>;
  }
}
