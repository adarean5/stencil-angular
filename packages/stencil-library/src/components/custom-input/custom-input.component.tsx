import { Component, Event, EventEmitter, h, Prop } from '@stencil/core';

@Component({
  tag: 'custom-input',
  shadow: true,
})
export class CustomInput {
  @Prop({mutable: true}) value: string;
  @Event() myChange: EventEmitter<string>;

  private handleChanges = (event: InputEvent): void => {
    const value = (event.target as HTMLInputElement).value
    this.value = value
    this.myChange.emit(value)
  }

  render() {
    return <div>
      <label>
        Test label
        <input type={"text"} value={this.value} onInput={(event) => this.handleChanges(event)}/>
      </label>
    </div>;
  }
}
