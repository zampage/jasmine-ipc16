describe('easy tests', function(){
	
	it('shows that 2 is 2', function(){
		expect(2).toEqual(2);
	});

	it('shows that two objects are equal', function(){
		var one = {a: 'a', b: 'b'};
		var two = {a: 'a', b: 'b'};
		expect(one).toEqual(two);
	});

	it('shows that something can NOT be a thing', function(){
		expect(42).not.toEqual(69);
	});

});

describe('medium tests', function(){

	it('shows that a string can match a regular expression', function(){
		expect('this wonderful string').toMatch(/.{6,}/);
	});

	it('shows that an array contains an element', function(){
		expect([1,2,3]).toContain(2);
	});

	it('shows that something is undefined', function(){
		var mybrain;
		expect(mybrain).toBeUndefined();
	});

});

describe('hard tests', function(){

	var mt;

	beforeEach(function(){
		mt = new MyTest();
	});

	afterEach(function(){
		mt = null;
	})

	it('show that a function will throw an error', function(){
		var makeMeFail = function(){
			throw('noooooo');
		}
		expect(makeMeFail).toThrow();
	});

	it('shows that i get a function back', function(){
		expect(mt.giveMeFunc()).toEqual(jasmine.any(Function));
	});

	it('shows that jasmine can check delay', function(){
		jasmine.clock().install();
		mt.makeDelay();
		jasmine.clock().tick(1000);
		expect(window.hasDelay).toBe(true);
		jasmine.clock().uninstall();
	});

	it('shows that jasmine can check async', function(done){
		mt.makeAsync(function(){
			expect(window.hasAsync).toBe(true);
			done();
		});
	});

	it('shows that alert was displayed', function(){
		spyOn(window, 'alert');
		mt.makeAlert();
		expect(window.alert).toHaveBeenCalled();
	});

});


//JQUERY
it('alerts the dom by jquery', function(){
	jasmine.getFixtures().set('<div class="changeme">Hello World!</div>');
	$('.changeme').text('Hello IPC!');
	expect($('.changeme').text()).toEqual('Hello IPC!');
});