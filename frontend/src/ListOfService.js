import React from 'react';
import Autosuggest from 'react-autosuggest';
import serv from '../assets/json/list_of_services.json';
import _ from 'lodash';

let Types = serv.lists.map(function(word){
  return word;
});

let NamesObjects = serv.lists.map(function(word){
  return word.services;
});

let Names = [];
for(let elem in NamesObjects){
  Names = Names.concat(NamesObjects[elem]);
}

console.log(Types);

// https://developer.mozilla.org/en/docs/Web/JavaScript/Guide/Regular_Expressions#Using_Special_Characters
function escapeRegexCharacters(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function getTypesSuggestions(value) {
  const escapedValue = escapeRegexCharacters(value.trim());

  if (escapedValue === '') {
    return [];
  }

  const regex = new RegExp('^' + escapedValue, 'i');

  return Types.filter(Types => regex.test(Types.type));
}

function getServiceSuggestions(value) {
  const escapedValue = escapeRegexCharacters(value.trim());

  if (escapedValue === '') {
    return [];
  }

  const regex = new RegExp('^' + escapedValue, 'i');

  return Names.filter(Names => regex.test(Names.name));
}

///////////////////////
function getTypeSuggestionValue(suggestion) {
  return suggestion.type;
}

function getServiceSuggestionValue(suggestion) {
  return suggestion.name;
}
////////////////////////

////////////////////////
function renderTypeSuggestion(suggestion) {
  return (
    <span>{suggestion.type}</span>
  );
}

function renderServiceSuggestion(suggestion) {
  return (
    <span>{suggestion.name}</span>
  );
}

class ListOfTypes extends React.Component {
  constructor() {
    super();

    this.state = {
      value: '',
      suggestions: []
    };
  }

  onChange = (event, { newValue, method }) => {
    this.setState({
      value : newValue
    });
  };

  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: getTypesSuggestions(value)
    });
  };

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  render() {
    const { value, suggestions} = this.state;
    const inputProps = {
      placeholder: "Type in",
      value,
      onChange: this.onChange
    };
    return (
        <Autosuggest
          suggestions={suggestions}
          onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
          onSuggestionsClearRequested={this.onSuggestionsClearRequested}
          getSuggestionValue={getTypeSuggestionValue}
          renderSuggestion={renderTypeSuggestion}
          inputProps={inputProps} />
    );
  }
}


export default class ListOfService extends React.Component {
  constructor() {
    super();

    this.state = {
      value: '',
      suggestions: []
    };
  }

  onChange = (event, { newValue, method }) => {
    this.setState({
      value: newValue
    });
  };

  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: getServiceSuggestions(value)
    });
  };

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };
  ///////////////////

  render() {
    const { value, suggestions} = this.state;

    const inputProps = {
      placeholder: "Type in",
      value,
      onChange: this.onChange
    };

    return (
      <div>
        <Autosuggest
          suggestions={suggestions}
          onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
          onSuggestionsClearRequested={this.onSuggestionsClearRequested}
          getSuggestionValue={getServiceSuggestionValue}
          renderSuggestion={renderServiceSuggestion}
          inputProps={inputProps} />
        </div>
    );
  }
}
