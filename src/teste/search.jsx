import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SearchBarContainer, SuggestionsBox, ButtonSearchContainer, SearchButton, ListItem } from './searchstyle';
import { configuraVendedorSelecionadoF } from '../redux/Pages/Home/homeSlice'

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [inputFocused, setInputFocused] = useState(false); 

  // Obtém os cards do state usando o useSelector
  const vendedores = useSelector((state) => state.home.vendedores.listaVed);
  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    const vendInput = event.target.value;
    setQuery(vendInput);

    // Filtra os cards cujos nomes incluem a entrada do usuário
    const filteredVendedores = vendedores.filter((vend) =>
      vend.NOME.toLowerCase().includes(vendInput.toLowerCase())
    );
    const suggestionsList = filteredVendedores.map((vend) => `${vend.NOME} - ${vend.CONTAID}`);
    setSuggestions(suggestionsList);
  };

  const handleClickSuggestion = (suggestion) => {
    console.log('Selecionado: ' + suggestion);
    configuraVendedorSelecionadoF(dispatch, vendedores, suggestion);
    setQuery(suggestion);
    setSuggestions([]);
  };

  const handleInputFocus = () => {
    setInputFocused(true);
    if (suggestions.length <= 0) {
      setSuggestions(vendedores.map((vend) => `${vend.NOME} - ${vend.CONTAID}`));
    }
  };

  const handleInputBlur = () => {
    setInputFocused(false);
    // Limpa as sugestões apenas se o input não estiver focado
    if (!inputFocused) {
      setSuggestions([]);
    }
  };

  return (
    <SearchBarContainer>
      <ButtonSearchContainer>
        <input
          type="search"
          placeholder="Pesq vendedor..."
          value={query}
          onChange={(e) => handleInputChange(e)}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
        />
        <SearchButton type="submit" onClick={() => { console.log('Deu bom artista') }}>
          <i className='bx bx-search'></i>
        </SearchButton>
      </ButtonSearchContainer>
      {suggestions && suggestions.length > 0 && (
        <SuggestionsBox
          onMouseEnter={handleInputFocus}
          onMouseLeave={handleInputBlur}>
          {suggestions.map((suggestion, index) => (
            <ListItem
              key={index}
              onClick={() => handleClickSuggestion(suggestion)}>
              {suggestion}
            </ListItem>
          ))}
        </SuggestionsBox>
      )}
    </SearchBarContainer>
  );
};

export default SearchBar;
