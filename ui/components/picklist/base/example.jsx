// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import {
  ComboboxContainer,
  Listbox,
  ListboxItem,
  Option
} from '../../combobox/base/example';
import { ListboxPill } from '../../pills/listbox-of-pill-options/example';

/* -----------------------------------------------------------------------------
    Variables
----------------------------------------------------------------------------- */

const listboxSelectionsId = 'listbox-selections-unique-id';
const listboxOptionId00 = 'listbox-option-unique-id-00';
const listboxOptionId01 = 'listbox-option-unique-id-01';
const listboxOptionId02 = 'listbox-option-unique-id-02';
const listboxOptionId03 = 'listbox-option-unique-id-03';

/* -----------------------------------------------------------------------------
    Private
----------------------------------------------------------------------------- */

const ListboxDropdown = props => (
  <Listbox
    aria-label={props.heading ? props.heading : null}
    className="nds-dropdown nds-dropdown_fluid"
    vertical
  >
    {props.heading ? (
      <li role="presentation" className="nds-listbox__item">
        <span
          className="nds-media nds-listbox__option nds-listbox__option_plain"
          role="presentation"
          id={listboxOptionId00}
        >
          <h3 className="nds-text-title_caps" role="presentation">
            {props.heading}
          </h3>
        </span>
      </li>
    ) : null}
    <ListboxItem>
      <Option
        id={listboxOptionId01}
        title="Option A"
        focused={props.focused}
        selected={props.optionOneSelected}
      />
    </ListboxItem>
    <ListboxItem>
      <Option
        id={listboxOptionId02}
        title="Option B"
        selected={props.optionTwoSelected}
      />
    </ListboxItem>
    <ListboxItem>
      <Option
        id={listboxOptionId03}
        title="Option ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        selected={props.optionThreeSelected}
      />
    </ListboxItem>
  </Listbox>
);

/* -----------------------------------------------------------------------------
    Exports
----------------------------------------------------------------------------- */

// Demo wrapper
export const Context = props => (
  <div style={{ height: '14rem' }}>{props.children}</div>
);

// Default
export default (
  <ComboboxContainer
    className="nds-combobox-picklist"
    containerClassName="nds-size_small"
    inputIcon="right"
    inputIconRightSymbol="chevrondown"
    listbox={<ListboxDropdown />}
    readonly
  />
);

// States
export let states = [
  {
    id: 'focused',
    label: 'Focused',
    element: (
      <ComboboxContainer
        containerClassName="nds-size_small"
        isOpen
        inputIcon="right"
        inputIconRightSymbol="chevrondown"
        listbox={<ListboxDropdown />}
        readonly
      />
    ),
    script: `
      document.getElementById('combobox-unique-id').focus()
    `
  },
  {
    id: 'open-item-focused',
    label: 'Open - Item Focused',
    element: (
      <ComboboxContainer
        containerClassName="nds-size_small"
        isOpen
        inputIcon="right"
        inputIconRightSymbol="chevrondown"
        listbox={<ListboxDropdown focused />}
        aria-activedescendant={listboxOptionId01}
        readonly
      />
    )
  },
  {
    id: 'open-option-selected',
    label: 'Open - Option Selected',
    element: (
      <ComboboxContainer
        containerClassName="nds-size_small"
        isOpen
        inputIcon="right"
        inputIconRightSymbol="chevrondown"
        value="Option A"
        listbox={<ListboxDropdown optionOneSelected />}
        readonly
      />
    )
  },
  {
    id: 'open-options-selected',
    label: 'Open - Options Selected',
    element: (
      <ComboboxContainer
        containerClassName="nds-size_small"
        isOpen
        inputIcon="right"
        inputIconRightSymbol="chevrondown"
        value="2 Options Selected"
        listbox={<ListboxDropdown optionOneSelected optionTwoSelected />}
        readonly
      />
    )
  },
  {
    id: 'closed-option-selected',
    label: 'Closed - Option Selected',
    element: (
      <ComboboxContainer
        containerClassName="nds-size_small"
        inputIcon="right"
        inputIconRightSymbol="chevrondown"
        value="Option A"
        listbox={<ListboxDropdown focused optionOneSelected />}
        readonly
      />
    )
  },
  {
    id: 'closed-options-selected',
    label: 'Closed - Options Selected',
    element: (
      <ComboboxContainer
        containerClassName="nds-size_small"
        inputIcon="right"
        inputIconRightSymbol="chevrondown"
        value="2 Options Selected"
        listbox={<ListboxDropdown optionOneSelected optionTwoSelected />}
        readonly
      >
        <Listbox
          id={listboxSelectionsId}
          aria-label="Selected Options:"
          className="nds-p-top_xxx-small"
          horizontal
        >
          <ListboxItem>
            <ListboxPill label="Option A" tabIndex="0" />
          </ListboxItem>
          <ListboxItem>
            <ListboxPill label="Option B" />
          </ListboxItem>
        </Listbox>
      </ComboboxContainer>
    )
  },
  {
    id: 'group-heading',
    label: 'Group heading label',
    element: (
      <ComboboxContainer
        containerClassName="nds-size_small"
        isOpen
        inputIcon="right"
        inputIconRightSymbol="chevrondown"
        value="Option A"
        listbox={
          <ListboxDropdown optionOneSelected heading="Recently Viewed" />
        }
        readonly
      />
    )
  }
];