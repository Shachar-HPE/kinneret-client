'use strict';
describe('TaskList Controller', function () {
    var ctrl, scope, httpBackend;


    beforeEach(function () {
        module('DemoApp', function () {
        });
        inject(function ($rootScope, $controller, $httpBackend) {
            httpBackend = $httpBackend;
            scope = $rootScope.$new();
            ctrl = $controller('MainCtrl', {$scope: scope});
            httpBackend.expectGET('/tasks').respond(200, []);

        });
    });

    function flushAndApply() {
        httpBackend.flush();
        scope.$apply();
    }

    afterEach(function () {
        scope.$destroy();
    });

    var addItem = function(itemName) {
        httpBackend.expectPOST( '/tasks',
          {'taskName': itemName,taskContent:'content'}).respond(200,{ id: '999',
              taskName: itemName,taskContent:'content'});
        scope.task  = itemName;
        scope.add();
        flushAndApply();
    }

    it('test #1: no tasks', function () {
        flushAndApply();
        expect(scope.tasks).toBeDefined();
        expect(scope.tasks.length).toBe(0);
    });

    it('test #2: add a new task', function () {
        var taskVal = 'task 2';
        addItem(taskVal);
        // verify resulting state of the scope
        expect(scope.tasks.length).toBe(1);
        expect(scope.tasks[0].taskName).toEqual(taskVal);
        expect(scope.tasks[0].id).toEqual('999');
    });

    it('test #3: delete a task', function () {
        var taskVal = 'task 2';
        addItem(taskVal);
        expect(scope.tasks.length).toBe(1);

        httpBackend.expectDELETE('/tasks/999').respond(200,{'id':999,'taskName':taskVal,'taskContent':'content'});
        httpBackend.expectGET('/tasks').respond(200, []);
        scope.deleteTask(scope.tasks.length-1);
        scope.getTask();
        flushAndApply();
        expect(scope.tasks.length).toBe(0);
    });

    it('test #4: get task by ID', function () {
        var taskVal = 'task 4';
        addItem(taskVal);
        httpBackend.expectGET('/tasks').respond(200, [{id: '999', taskName: 'task 4','taskContent':'content'}]);
        expect(scope.tasks.length).toBe(1);

        httpBackend.expectGET('/tasks/999').respond(200, [{id: '999', taskName: 'task 4','taskContent':'content'}]);
        scope.getTask(999);
        expect(scope.tasks.length).toBe(1);
    });

});

