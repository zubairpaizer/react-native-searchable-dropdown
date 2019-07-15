[example-url]: https://i.imgur.com/mHGaOX5.gif
[screenshot-1]: https://i.imgur.com/OrsBmik.png
[screenshot-2]: https://i.imgur.com/yghQDw0.png
[npm-badge]: https://img.shields.io/npm/v/react-native-searchable-dropdown.svg?colorB=ff6d00
[npm-url]: https://npmjs.com/package/react-native-searchable-dropdown
[license-badge]: https://img.shields.io/npm/l/react-native-searchable-dropdown.svg?colorB=448aff

[![npm][npm-badge]][npm-url]
![license][license-badge]

# React Native Searchable Dropdown
Searchable Dropdown to help you search with in the list (`FlatList`), and you can pick single item and multiple items.

![example][example-url]
![example][screenshot-2]

## Installation

```bash
npm install --save react-native-searchable-dropdown
```
## Properties
<table>
	<tr>
		<th>Props</th>
		<th>Description</th>
	</tr>
	<tr>
	   <td>items</td>
	   <td>dropdown items</td>
   </tr>
	<tr>
	   <td>defaultIndex</td>
	   <td>Default selected index of items. (optional)</td>
   </tr>
	<tr>
		<td>onTextChange</td>
		<td>on text change you can passs onTextChange and catch the input text. (optional)</td>
   </tr>
   	<tr>
		<td>onItemSelect</td>
		<td>on item selection you can passs onItemSelect and catch the input item.   </td>
   </tr>
    <tr>
		<td>containerStyle</td>
		<td>component container style</td>
   </tr>
   <tr>
		<td>textInputStyle</td>
		<td>TextInput style</td>
   </tr>
    <tr>
		<td>itemStyle</td>
		<td>items on dropdown</td>
   </tr>
     <tr>
		<td>itemTextStyle</td>
		<td>item text</td>
   </tr>
     <tr>
		<td>resetValue</td>
		<td>reset textInput Value with true and false state</td>
   </tr>
   <tr>
		<td>placeholder</td>
		<td>textInput placeholder</td>
   </tr>        
   <tr>
		<td>placeholderTextColor</td>
		<td>textInput placeholderTextColor</td>
   </tr>        
   <tr>
	   <td>itemsContainerStyle</td>
	   <td>items container style you can pass maxHeight to restrict the items dropdown hieght</td>
   </tr>
    <tr>
	   <td>underlineColorAndroid</td>
	   <td>TextInput underline height</td>
   </tr>
    <tr>
	   <td>listProps</td>
     <td>
        all supported (FlatList) props example: listProps={ nestedScrollEnabled: true }
     </td>
	  <td>
    </td>
    <tr>
      <td>textInputProps</td>
      <td>
          all supported (TextInput) props example: textInputProps={ underlineColorAndroid: 'transparent' }
      </td>
   </tr>
   </tr>
    <tr>
	   <td>setSort</td>
	   <td>filter data on text changing example: setSort={(item, searchedText)=> item.name.toLowerCase().startsWith(searchedText.toLowerCase())}</td>
   </tr>
   <tr>
	   <td>multi</td>
	   <td>boolean toggle multi selection</td>
   </tr>
   <tr>
	   <td>selectedItems</td>
	   <td>selectedItems of multi selection note: work when if multi prop is true</td>
   </tr>
   <tr>
    <td>chip</td>
    <td>boolean toggle chip display mode note: work when if multi prop is true</td>
   </tr>
   <tr>
    <td>onRemoveItem</td>
    <td>{ (item, index) => { } } note: work when if multi prop is true</td>
   </tr>
</table>

# Example
```jsx
import React, { Component, Fragment } from 'react';
import SearchableDropdown from 'react-native-searchable-dropdown';

var items = [
  {
    id: 1,
    name: 'JavaScript',
  },
  {
    id: 2,
    name: 'Java',
  },
  {
    id: 3,
    name: 'Ruby',
  },
  {
    id: 4,
    name: 'React Native',
  },
  {
    id: 5,
    name: 'PHP',
  },
  {
    id: 6,
    name: 'Python',
  },
  {
    id: 7,
    name: 'Go',
  },
  {
    id: 8,
    name: 'Swift',
  },
];
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItems: [
        {
          id: 7,
          name: 'Go',
        },
        {
          id: 8,
          name: 'Swift',
        }
      ]
    }
  }
  render() {
  return (
        <Fragment>
          {/* Multi */}
          <SearchableDropdown
            multi={true}
            selectedItems={this.state.selectedItems}
            onItemSelect={(item) => {
              const items = this.state.selectedItems;
              items.push(item)
              this.setState({ selectedItems: items });
            }}
            containerStyle={{ padding: 5 }}
            onRemoveItem={(item, index) => {
              const items = this.state.selectedItems.filter((sitem) => sitem.id !== item.id);
              this.setState({ selectedItems: items });
            }}
            itemStyle={{
              padding: 10,
              marginTop: 2,
              backgroundColor: '#ddd',
              borderColor: '#bbb',
              borderWidth: 1,
              borderRadius: 5,
            }}
            itemTextStyle={{ color: '#222' }}
            itemsContainerStyle={{ maxHeight: 140 }}
            items={items}
            defaultIndex={2}
            chip={true}
            resetValue={false}
            textInputProps={
              {
                placeholder: "placeholder",
                underlineColorAndroid: "transparent",
                style: {
                    padding: 12,
                    borderWidth: 1,
                    borderColor: '#ccc',
                    borderRadius: 5,
                },
                onTextChange: text => alert(text)
              }
            }
            listProps={
              {
                nestedScrollEnabled: true,
              }
            }
          />
          {/* Single */}
          <SearchableDropdown
            onItemSelect={(item) => {
              const items = this.state.selectedItems;
              items.push(item)
              this.setState({ selectedItems: items });
            }}
            containerStyle={{ padding: 5 }}
            onRemoveItem={(item, index) => {
              const items = this.state.selectedItems.filter((sitem) => sitem.id !== item.id);
              this.setState({ selectedItems: items });
            }}
            itemStyle={{
              padding: 10,
              marginTop: 2,
              backgroundColor: '#ddd',
              borderColor: '#bbb',
              borderWidth: 1,
              borderRadius: 5,
            }}
            itemTextStyle={{ color: '#222' }}
            itemsContainerStyle={{ maxHeight: 140 }}
            items={items}
            defaultIndex={2}
            resetValue={false}
            textInputProps={
              {
                placeholder: "placeholder",
                underlineColorAndroid: "transparent",
                style: {
                    padding: 12,
                    borderWidth: 1,
                    borderColor: '#ccc',
                    borderRadius: 5,
                },
                onTextChange: text => alert(text)
              }
            }
            listProps={
              {
                nestedScrollEnabled: true,
              }
            }
        />
      </Fragment>
  );
  }
}
```
