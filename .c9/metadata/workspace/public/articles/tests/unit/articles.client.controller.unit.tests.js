{"filter":false,"title":"articles.client.controller.unit.tests.js","tooltip":"/public/articles/tests/unit/articles.client.controller.unit.tests.js","undoManager":{"mark":1,"position":1,"stack":[[{"group":"doc","deltas":[{"start":{"row":0,"column":0},"end":{"row":3,"column":103},"action":"insert","lines":["describe('Testing Articles Controller', function() { var _scope, ArticlesController; beforeEach(function() { module('mean');","jasmine.addMatchers({ toEqualData: function(util, customEqualityTesters) { return { compare: function(actual, expected) { return { pass: angular.equals(actual, expected) }; } }; } }); inject(function($rootScope, $controller) { _scope = $rootScope.$new(); ArticlesController = $controller('ArticlesController', { $scope: _scope }); }); }); it('Should have a find method that uses $resource to retrieve a list of articles', inject(function(Articles) { inject(function($httpBackend) { var sampleArticle = new Articles({ title: 'An Article about MEAN',","content: 'MEAN rocks!' }); var sampleArticles = [sampleArticle]; $httpBackend.expectGET('api/articles').respond(sampleArticles); _scope.find(); $httpBackend.flush(); expect(_scope.articles).toEqualData(sampleArticles); }); })); it('Should have a findOne method that uses $resource to retreive a single of article', inject(function(Articles) { inject(function($httpBackend, $routeParams) { var sampleArticle = new Articles({ title: 'An Article about MEAN', content: 'MEAN rocks!' }); $routeParams.articleId = 'abcdef123456789012345678'; $httpBackend.expectGET(/api\\/articles\\/([0-9a-fA-F]{24})$/).respond(sampleArticle);","_scope.findOne(); $httpBackend.flush(); expect(_scope.article).toEqualData(sampleArticle); }); })); });"]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":52},"end":{"row":1,"column":3},"action":"insert","lines":["","   "]},{"start":{"row":1,"column":35},"end":{"row":2,"column":3},"action":"insert","lines":["","   "]},{"start":{"row":2,"column":27},"end":{"row":3,"column":7},"action":"insert","lines":["","       "]},{"start":{"row":4,"column":0},"end":{"row":4,"column":8},"action":"insert","lines":["        "]},{"start":{"row":4,"column":29},"end":{"row":5,"column":11},"action":"insert","lines":["","           "]},{"start":{"row":5,"column":64},"end":{"row":6,"column":15},"action":"insert","lines":["","               "]},{"start":{"row":6,"column":24},"end":{"row":7,"column":19},"action":"insert","lines":["","                   "]},{"start":{"row":7,"column":57},"end":{"row":8,"column":23},"action":"insert","lines":["","                       "]},{"start":{"row":8,"column":32},"end":{"row":9,"column":27},"action":"insert","lines":["","                           "]},{"start":{"row":9,"column":66},"end":{"row":10,"column":23},"action":"insert","lines":["","                       "]},{"start":{"row":10,"column":26},"end":{"row":11,"column":19},"action":"insert","lines":["","                   "]},{"start":{"row":11,"column":21},"end":{"row":12,"column":15},"action":"insert","lines":["","               "]},{"start":{"row":12,"column":18},"end":{"row":13,"column":11},"action":"insert","lines":["","           "]},{"start":{"row":13,"column":13},"end":{"row":14,"column":7},"action":"insert","lines":["","       "]},{"start":{"row":14,"column":11},"end":{"row":15,"column":7},"action":"insert","lines":["","       "]},{"start":{"row":15,"column":50},"end":{"row":16,"column":11},"action":"insert","lines":["","           "]},{"start":{"row":16,"column":39},"end":{"row":17,"column":11},"action":"insert","lines":["","           "]},{"start":{"row":17,"column":68},"end":{"row":18,"column":15},"action":"insert","lines":["","               "]},{"start":{"row":18,"column":30},"end":{"row":19,"column":11},"action":"insert","lines":["","           "]},{"start":{"row":19,"column":15},"end":{"row":20,"column":7},"action":"insert","lines":["","       "]},{"start":{"row":20,"column":11},"end":{"row":21,"column":3},"action":"insert","lines":["","   "]},{"start":{"row":21,"column":7},"end":{"row":22,"column":3},"action":"insert","lines":["","   "]},{"start":{"row":22,"column":114},"end":{"row":23,"column":7},"action":"insert","lines":["","       "]},{"start":{"row":23,"column":39},"end":{"row":24,"column":11},"action":"insert","lines":["","           "]},{"start":{"row":24,"column":46},"end":{"row":25,"column":15},"action":"insert","lines":["","               "]},{"start":{"row":26,"column":0},"end":{"row":26,"column":16},"action":"insert","lines":["                "]},{"start":{"row":26,"column":38},"end":{"row":27,"column":11},"action":"insert","lines":["","           "]},{"start":{"row":27,"column":15},"end":{"row":28,"column":11},"action":"insert","lines":["","           "]},{"start":{"row":28,"column":49},"end":{"row":29,"column":11},"action":"insert","lines":["","           "]},{"start":{"row":29,"column":75},"end":{"row":30,"column":11},"action":"insert","lines":["","           "]},{"start":{"row":30,"column":26},"end":{"row":31,"column":11},"action":"insert","lines":["","           "]},{"start":{"row":31,"column":33},"end":{"row":32,"column":11},"action":"insert","lines":["","           "]},{"start":{"row":32,"column":64},"end":{"row":33,"column":7},"action":"insert","lines":["","       "]},{"start":{"row":33,"column":11},"end":{"row":34,"column":3},"action":"insert","lines":["","   "]},{"start":{"row":34,"column":8},"end":{"row":35,"column":3},"action":"insert","lines":["","   "]},{"start":{"row":35,"column":118},"end":{"row":36,"column":7},"action":"insert","lines":["","       "]},{"start":{"row":36,"column":53},"end":{"row":37,"column":11},"action":"insert","lines":["","           "]},{"start":{"row":37,"column":46},"end":{"row":38,"column":15},"action":"insert","lines":["","               "]},{"start":{"row":38,"column":47},"end":{"row":39,"column":15},"action":"insert","lines":["","               "]},{"start":{"row":39,"column":38},"end":{"row":40,"column":11},"action":"insert","lines":["","           "]},{"start":{"row":40,"column":15},"end":{"row":41,"column":11},"action":"insert","lines":["","           "]},{"start":{"row":41,"column":64},"end":{"row":42,"column":11},"action":"insert","lines":["","           "]},{"start":{"row":43,"column":0},"end":{"row":43,"column":12},"action":"insert","lines":["            "]},{"start":{"row":43,"column":29},"end":{"row":44,"column":11},"action":"insert","lines":["","           "]},{"start":{"row":44,"column":33},"end":{"row":45,"column":11},"action":"insert","lines":["","           "]},{"start":{"row":45,"column":62},"end":{"row":46,"column":7},"action":"insert","lines":["","       "]},{"start":{"row":46,"column":11},"end":{"row":47,"column":3},"action":"insert","lines":["","   "]},{"start":{"row":47,"column":8},"end":{"row":47,"column":9},"action":"remove","lines":[" "]},{"start":{"row":47,"column":8},"end":{"row":48,"column":0},"action":"insert","lines":["",""]}]}]]},"ace":{"folds":[],"scrolltop":360,"scrollleft":0,"selection":{"start":{"row":26,"column":38},"end":{"row":26,"column":38},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1421425654339,"hash":"5784794ccfa3143767dd72716ba8087eb3a71687"}