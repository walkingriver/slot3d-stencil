import { Component, Element, Prop, Method, State } from '@stencil/core';

@Component({
  tag: 'wr-slot3d',
  styleUrl: 'slot3d.scss'
})
export class Slot3d {
  @Element() element: HTMLElement;

  @Prop() isRunning = false;
  @Prop() hasOverflow = false;
  @Prop() item = 0;

  itemCount = 0;
  itemAngle = 0;

  componentWillLoad() {
    this.itemCount = this.element.childElementCount;
    console.log('Items: ', this.itemCount);
    this.itemAngle = 360 / this.itemCount;
    console.log('Angle: ', this.itemAngle);
  }

  render() {
    const rotateAngle = this.item * this.itemAngle;
    const rotateTransform = `rotateX(${rotateAngle}deg)`;
    const styles = {
      spinnerClass: 'mk-spinner ' + (this.isRunning ? 'mk-spinning' : ''),
      marqueeClass: this.hasOverflow ? 'mk-marqee' : '',
      spinnerStyle: {
        transform: rotateTransform,
        '-webkit-transform': rotateTransform
      }
    };
    // const numChildren = this.element.childElementCount;

    return (
      <div class="mk-container">
        <div class="mk-slotContainer">
          <div class={styles.spinnerClass} style={styles.spinnerStyle}>
            <slot />
          </div>
        </div>
      </div>
    );
  }
}
