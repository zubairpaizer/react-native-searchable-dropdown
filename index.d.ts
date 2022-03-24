declare module 'react-native-searchable-dropdown' {
    import { Component, ReactNode } from "react";
    import {TextInputProps, ViewStyle, FlatListProps, ViewProps, FlatList} from "react-native";

    export type ItemType = {
        id: any,
        name?: string
    }

    /**
     * SearchableDropdownProps
     * @alias SearchableDropdownProps
     */
    export type SearchableDropdownProps<T extends ItemType = ItemType> = ViewProps & {
        /**
         * dropdown items
         */
        items: T[],

        /**
         * default selected index of items.
         */
        defaultIndex?: number,

        /**
         * called when the input receives focus.
         */
        onFocus?: () => void,

        /**
         * called when the focus moves to another component.
         */
        onBlur?: () => void,

        /**
         * on text change you can pass onTextChange and catch the input text.
         */
        onTextChange?: (text: string) => void,

        /**
         * on item selection you can pass onItemSelect and catch the input item.
         */
        onItemSelect?: (item: T) => void,

        /**
         * component container style
         */
        containerStyle?: ViewStyle,

        /**
         * TextInput style
         */
        textInputStyle?: ViewStyle,

        /**
         * items on dropdown
         */
        itemStyle?: ViewStyle,

        /**
         * item text
         */
        itemTextStyle?: ViewStyle,

        /**
         * reset textInput Value with true and false state
         */
        resetValue?: boolean,

        /**
         * textInput placeholder
         */
        placeholder?: string,

        /**
         * textInput placeholderTextColor
         */
        placeholderTextColor?: string,

        /**
         * items container style you can pass maxHeight to restrict the items dropdown height
         */
        itemsContainerStyle?: ViewStyle,

        /**
         * TextInput underline height
         */
        underlineColorAndroid?: string,

        /**
         * all supported (FlatList) props
         * @example listProps={ nestedScrollEnabled: true }
         */
        listProps?: Partial<FlatListProps<T>>,

        /**
         * all supported (TextInput) props
         * @example textInputProps={ underlineColorAndroid: 'transparent' }
         */
        textInputProps?: TextInputProps,

        /**
         * filter data on text changing
         * @example setSort={(item, searchedText)=> item.name.toLowerCase().startsWith(searchedText.toLowerCase())}
         */
        setSort?: (item: T, searchedText: string) => boolean,

        /**
         * toggle multi selection
         */
        multi?: boolean,

        /**
         * selectedItems of multi selection
         * <br><b>note:</b> work when if multi prop is true
         */
        selectedItems?: T[],

        /**
         * toggle chip display mode
         * <br><b>note:</b> work when if multi prop is true
         */
        chip?: boolean,

        /**
         * { (item, index) => { } }
         * <br><b>note:</b> work when if multi prop is true
         */
        onRemoveItem?: (item: T, index: number) => void
    }

    export type SearchableDropdownState<T extends ItemType = ItemType> = {
        item: Partial<T>,
        listItems: T[],
        focus: boolean
    }

    export default class SearchableDropdown<T extends ItemType = ItemType>
        extends Component<SearchableDropdownProps<T>, SearchableDropdownState<T>> {

        renderFlatList(): FlatList;

        renderItems(item: T, index: number): ReactNode;

        renderSelectedItems(): ReactNode;
    }

}
