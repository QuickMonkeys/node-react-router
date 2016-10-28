const filterBy = (item, fields, text) => fields.map ( (f) => item[f].toLowerCase().indexOf(text.toLowerCase()) != -1 ).reduce( (t,p) => t || p);

export { filterBy };