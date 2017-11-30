import { Component, Element, Prop } from '@stencil/core';

@Component({
  tag: 'wr-slot3d',
  styleUrl: 'slot3d.scss'
})
export class Slot3d {
  @Element() element: HTMLElement;

  @Prop() isRunning = false;
  @Prop() hasOverflow = false;

  render() {
    const rotateTransform = 'rotate(0deg)';
    const styles = {
      spinnerClass: 'mk-spinner ' + (this.isRunning ? 'mk-spinning' : ''),
      marqueeClass: this.hasOverflow ? 'mk-marqee' : '',
      spinnerStyle: {
        transform: rotateTransform,
        '-webkit-transform': rotateTransform
      }
    };
    const numChildren = this.element.childElementCount;

    return (
      <div class="mk-container">
          {numChildren} children
        <div class="mk-slotContainer">
          {/* <div class={styles.spinnerClass} style={styles.spinnerStyle}> */}
          <div class={styles.spinnerClass} style={styles.spinnerStyle}>
            <slot />
          </div>
        </div>
      </div>
    );
  }
}
