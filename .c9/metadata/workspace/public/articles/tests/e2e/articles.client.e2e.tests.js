{"filter":false,"title":"articles.client.e2e.tests.js","tooltip":"/public/articles/tests/e2e/articles.client.e2e.tests.js","undoManager":{"mark":2,"position":2,"stack":[[{"group":"doc","deltas":[{"start":{"row":0,"column":0},"end":{"row":0,"column":383},"action":"insert","lines":["describe('Articles E2E Tests:', function() { describe('New Article Page', function() { it('Should not be able to create a new article', function() { browser.get('http://localhost:3000/#!/articles/create'); element(by.css('input[type=submit]')).click(); element(by.binding('error')).getText().then(function(errorText) { expect(errorText).toBe('User is not logged in'); }); }); }); });"]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":44},"end":{"row":1,"column":3},"action":"insert","lines":["","   "]},{"start":{"row":1,"column":45},"end":{"row":2,"column":7},"action":"insert","lines":["","       "]},{"start":{"row":2,"column":69},"end":{"row":3,"column":11},"action":"insert","lines":["","           "]},{"start":{"row":3,"column":68},"end":{"row":4,"column":11},"action":"insert","lines":["","           "]},{"start":{"row":4,"column":58},"end":{"row":5,"column":11},"action":"insert","lines":["","           "]},{"start":{"row":5,"column":77},"end":{"row":6,"column":15},"action":"insert","lines":["","               "]},{"start":{"row":6,"column":64},"end":{"row":7,"column":11},"action":"insert","lines":["","           "]},{"start":{"row":7,"column":15},"end":{"row":8,"column":7},"action":"insert","lines":["","       "]},{"start":{"row":8,"column":11},"end":{"row":9,"column":3},"action":"insert","lines":["","   "]},{"start":{"row":9,"column":7},"end":{"row":9,"column":8},"action":"remove","lines":[" "]},{"start":{"row":9,"column":7},"end":{"row":10,"column":0},"action":"insert","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":3,"column":25},"end":{"row":3,"column":46},"action":"remove","lines":["http://localhost:3000"]},{"start":{"row":3,"column":25},"end":{"row":3,"column":57},"action":"insert","lines":["https://mean-stack-btanne6.c9.io"]}]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":3,"column":57},"end":{"row":3,"column":57},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1421432405856,"hash":"88d63c678eb3eb4625652fca3a9929ea5dba5d4e"}