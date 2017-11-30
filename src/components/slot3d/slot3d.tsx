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
      spinnerClass: 'mk-spinner ' + this.isRunning ?  'mk-spinning' : '',
      marqueeClass: this.hasOverflow ? 'mk-marqee' : '',
      spinnerStyle: {
        transform: rotateTransform,
        '-webkit-transform': rotateTransform
      }
    };

    return (
      <div>
        <div class="mk-slotContainer">
          <ul class={styles.spinnerClass} style={styles.spinnerStyle}>
          {this.element.children}
          </ul>
        </div>
      </div>
    );
  }
}
