import React, { Component } from 'react';
import {
  Text,
  FlatList,
  TextInput,
  View,
  TouchableOpacity,
  Keyboard
} from 'react-native';

const defaultItemValue = {
  name: '',
  id: 0
};

export default class SearchableDropDown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: {},
      listItems: [],
      focus: false
    };
  }

  renderFlatList = () => {
    if (this.state.focus) {
      const flatListPorps = { ...this.props.listProps };
      const oldSupport = [
        { key: 'keyboardShouldPersistTaps', val: 'always' }, 
        { key: 'nestedScrollEnabled', val : false },
        { key: 'style', val : { ...this.props.itemsContainerStyle } },
        { key: 'data', val : this.state.listItems },
        { key: 'keyExtractor', val : (item, index) => index.toString() },
        { key: 'renderItem', val : ({ item }) => this.renderItems(item) },
      ];
      oldSupport.forEach((kv) => {
        if(!Object.keys(flatListPorps).includes(kv.key)) {
          flatListPorps[kv.key] = kv.val;
        }
      });
      return (
        <FlatList
          { ...flatListPorps }
        />
      );
    }
  };

  componentDidMount = () => {
    const listItems = this.props.items;
    const defaultIndex = this.props.defaultIndex;

    if (defaultIndex && listItems.length > defaultIndex) {
      this.setState({
        listItems,
        item: listItems[defaultIndex]
      });
    } else {
      this.setState({ listItems });
    }
  };

  searchedItems = searchedText => {
    let setSort = this.props.setSort;
    if (!setSort && typeof setSort !== 'function') {
        setSort = item => item.name.toLowerCase().indexOf(searchedText.toLowerCase()) > -1;
    }
    var ac = this.props.items.filter((item) => {
      return setSort(item, searchedText);
    });
    let item = {
      id: -1,
      name: searchedText
    };
    this.setState({ listItems: ac, item: item });
    const onTextChange = this.props.onTextChange;

    if (onTextChange && typeof onTextChange === 'function') {
      setTimeout(() => {
        onTextChange(searchedText);
      }, 0);
    }
  };

  renderItems = item => {
    return (
      <TouchableOpacity
        style={{ ...this.props.itemStyle }}
        onPress={() => {
          this.setState({ item: item, focus: false });
          Keyboard.dismiss();
          setTimeout(() => {
            this.props.onItemSelect(item);

            if (this.props.resetValue) {
              this.setState({ focus: true, item: defaultItemValue });
              this.input.focus();
            }
          }, 0);
        }}
      >
        <Text style={{ ...this.props.itemTextStyle }}>{item.name}</Text>
      </TouchableOpacity>
    );
  };

  renderListType = () => {
    return this.renderFlatList();
  };

  render = () => {
    return (
      <View
        keyboardShouldPersist="always"
        style={{ ...this.props.containerStyle }}
      >
        <TextInput
          ref={e => (this.input = e)}
          underlineColorAndroid={this.props.underlineColorAndroid}
          onFocus={() => {
            this.props.onFocus && this.props.onFocus()
            this.setState({
              focus: true,
              item: defaultItemValue,
              listItems: this.props.items
            });
          }}
          onBlur={() => {
            this.props.onBlur && this.props.onBlur()
            this.setState({ focus: false })
          }}
          onChangeText={text => {
            this.searchedItems(text);
          }}
          value={this.state.item.name}
          style={{ ...this.props.textInputStyle }}
          placeholderTextColor={this.props.placeholderTextColor}
          placeholder={this.props.placeholder}
        />
        {this.renderListType()}
      </View>
    );
  };
}