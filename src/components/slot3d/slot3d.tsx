import { Component, Element, Prop, State, PropWillChange, Method } from '@stencil/core';

@Component({
  tag: 'wr-slot3d',
  styleUrl: 'slot3d.scss'
})
export class Slot3d {
  @Element() element: HTMLElement;

  @Prop() hasOverflow = false;

  @Prop() item = 0;
  @PropWillChange('item')
  itemChanging(newValue: number) {
    this.currentItem = newValue;
  }

  @State() isRunning = false;
  @State() currentItem = 0;

  @Method()
  spin(duration: number) {
    return this.doSpin(duration);
  }

  @Method()
  start() {
    this.isRunning = true;
  }

  @Method()
  stop(item: number) {
    this.isRunning = false;
    if (item) {
      this.currentItem = item;
    }
  }

  itemCount = 0;
  itemAngle = 0;

  componentWillLoad() {
    this.itemCount = this.element.childElementCount;
    console.log('Items: ', this.itemCount);
    this.itemAngle = 360 / this.itemCount;
    console.log('Angle: ', this.itemAngle);
  }

  doSpin(duration) {
    return new Promise((resolve, reject) => {
      var t = duration || 2000;
      var r: number = -1;

      setTimeout(() => {
        this.start();

        if (r < 0) {
          r = Math.floor(Math.random() * (this.itemCount - 1));
        }

        setTimeout(() => {
          this.stop(r);
          resolve(r);
        }, t);
      }, 1);
    });
  }

  render() {
    const rotateAngle = this.currentItem * this.itemAngle;
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
