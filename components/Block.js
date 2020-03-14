/* Creator   : ABDUL BASITH A */
/* Email     : ambalavanbasith@gmail.com */
/* github    : abdulbasitha */
/* More Info : https://techzia.in */
import React, { Component } from "react";
import { 
    View,
    StyleSheet
} from "react-native";
import * as theme from '../contants/theme';

class Block extends Component {
    
    render() {
        const { flex, row, center, middle, right, space, style, children, ...props } = this.props;
        const blockStyles = [
          styles.block,
          flex && { flex },
          flex === 'disabled' && { flex: 0 },
          center && styles.center,
          middle && styles.middle,
          right && styles.right,
          space && { justifyContent: `space-${space}` },
          row && styles.row,
          style,
        ];
    
        return (
          <View style={blockStyles} {...props}>
            {children}
          </View>
        )
      }
    }
    export default Block;
    const styles = StyleSheet.create({
      block: {
        flex: 1,
      },
      row: {
        flexDirection: 'row'
      },
      center: {
        alignItems: 'center'
      },
      middle: {
        justifyContent: 'center'
      },
      right: {
        justifyContent: 'flex-end'
      },
    });