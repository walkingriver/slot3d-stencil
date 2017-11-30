import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'wr-slot3d-item',
  styleUrl: 'slot3d-item.scss'
})
export class Slot3dItem {
  @Prop() imageUrl: string;
  @Prop() name: string;
  @Prop() hasOverflow = false;

  render() {
    // Todo: Calculate item height!
    const styles = {
      itemClass: 'text-item-wrap text-center mk-slot-item ' + this.hasOverflow ? 'mk-marqee' : '',
      itemStyle: {
        'line-height': '1em'
      },
      imgStyle: {height: '38px'}
    };

    return (
      <li class={styles.itemClass} style={styles.itemStyle}>
        <img style={styles.imgStyle} src={this.imageUrl} /><br/>
        <span class="mk-label">{this.name}</span>
      </li>
    );
  }
}
