import { Component, Element, Prop } from '@stencil/core';

@Component({
  tag: 'wr-slot3d-item',
  styleUrl: 'slot3d-item.scss'
})
export class Slot3dItem {
  @Element() element: HTMLElement;
  @Prop() imageUrl: string;
  @Prop() name: string;
  @Prop() hasOverflow = false;

  getNextSiblingCount(elem) {
    var sibs = 0;
    while (elem = elem.nextSibling) {
      if (elem.nodeName === 'WR-SLOT3D-ITEM') { sibs++; }
    }
    return sibs;
  }

  getPreviousSiblingCount(elem: Node) {
    var sibs = 0;
    while (elem = elem.previousSibling) {
      if (elem.nodeName === 'WR-SLOT3D-ITEM') { sibs++; }
    }
    return sibs;
  }

  render() {
    const prevSiblings = this.getPreviousSiblingCount(this.element);
    // const nextSiblings = this.getNextSiblingCount(this.element);
    const panelSize = this.element.parentElement.clientHeight;
    const itemCount = this.element.parentElement.childElementCount;
    const itemAngle = 360 / itemCount;
    const tz = Math.round((panelSize / 2) / Math.tan(Math.PI / itemCount));
    const translateZ = `translateZ(${tz}px)`;
    const angle = prevSiblings * itemAngle;
    const rotate = `rotateX(${angle}deg)`;
    const transform = `${rotate} ${translateZ}`;

    const styles = {
      itemClass: 'text-item-wrap text-center mk-slot-item ' + (this.hasOverflow ? 'mk-marquee' : ''),
      itemStyle: {
        'line-height': '1em',
        transform: transform,
        '-webkit-transform': transform
      },
      imgStyle: { height: panelSize + 'px' }
    };


    return (
      <div class={styles.itemClass} style={styles.itemStyle}>
        <img style={styles.imgStyle} src={this.imageUrl} /><br />
        <span class="mk-label">{this.name}</span>
      </div>
    );
  }
}
