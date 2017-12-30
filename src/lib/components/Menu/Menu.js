/***
 * The main menu wrapper which takes your project as a child
 * @patr -- patrick@quantfive.org
 */

import React from 'react';

// Components
import Nav from './components/Nav';

// NPM Modules
import { StyleSheet, css } from 'aphrodite/no-important';

export default class Menu extends React.Component {
  /***
   * Renders the app, normally if the menu isn't active otherwise scaled
   */
  renderChildren = () => {
    return React.Children.map(this.props.children, (child, index) => {
      if (index === 0) {
        var classes = child.props.className;
        var activeClass = css(styles.app, this.props.active && styles.appScale);
        var propsClass = this.props.active && this.props.appClassName ? this.props.appClassName : '';
        return React.cloneElement(child, {
          className: `${classes} ${activeClass} ${propsClass}`,
        });
      } else {
        return child;
      }
    });
  }

  render() {
    return (
      <div
        className={css(styles.menu, this.props.active && styles.menuActive) + ` ${this.props.menuClassName ? this.props.menuClassName : ''}`}>
        <div className={` ${this.props.navWrapperClassName ? this.props.navWrapperClassName : ''} ` + css(styles.navWrapper, this.props.navWrapperClassName ? null : styles.navColor)}>
          <Nav
            nav={this.props.nav}
            navItemClassName={this.props.navItemClassName}
            linkClassName={this.props.linkClassName}
            reactRouter={this.props.reactRouter}
            closeMenu={this.props.closeMenu}
            navClassName={this.props.navClassName}
            tagLine={this.props.tagLine}
            extraComponent={this.props.extraComponent}
            navLinkStyle={this.props.navLinkStyle}
          />
        </div>
        { this.renderChildren() }
      </div>
    );
  }
}

const TRANSLATE = 230; // the translation amount

var styles = StyleSheet.create({
  menu: {
    position: 'relative',
    overflow: 'hidden',
    height: '100%',
  },
  app: {
    transition: 'all .4s cubic-bezier(.94,.06,.32,.95)',
    position: 'absolute',
    minHeight: '100vh',
    width: '100%',
    height: '100%',
    top: '0',
    left: '0',
    '-webkit-font-smoothing': 'subpixel-antialiased',
  },
  navWrapper: {
    display: 'flex',
    alignItems: 'center',
    height: '100%',
    width: '230px',
    minHeight: '100vh',
  },
  navColor: {
    background: '#272d34',
  },
  appScale: {
    transform: `translateX(${TRANSLATE}px)`,
  }
});
