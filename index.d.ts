import {
    IContextualMenuItem,
    IDropdownOption
  } from "office-ui-fabric-react";
  
  import {
    ContextualMenuItemType,
    DefaultButton,
    Dropdown,
    initializeIcons,
    loadTheme,
    PrimaryButton,
    Toggle
  } from "office-ui-fabric-react";
  
  export interface OfficeUiFabricReactBase {
    ContextualMenuItemType: typeof ContextualMenuItemType;
    DefaultButton: typeof DefaultButton;
    Dropdown: typeof Dropdown;
    initializeIcons: typeof initializeIcons;
    loadTheme: typeof loadTheme;
    PrimaryButton: typeof PrimaryButton;
    Toggle: typeof Toggle;
  }
  
  export { IContextualMenuItem, IDropdownOption };
  