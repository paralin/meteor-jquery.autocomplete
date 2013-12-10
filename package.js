Package.describe({
  summary: "Devbridge jQuery autocomplete implementation."
});

Package.on_use(function (api, where) {
  api.use('jquery', 'client');
  api.add_files('jquery.autocomplete.js', ['client']);
});

