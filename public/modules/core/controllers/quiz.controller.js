(function(module){
	'use strict';

	function QuizController($state, $timeout){
		this.technology = $state.params.technology;

		this.techologies = {
			javascript: {
				quizzes: [
					{
						question:'test 1',
						answers: [{id: 1, text:'Answer:test 1'}, {id: 2, text:'Answer:test 1'}, {id: 3, text:'Answer:test 1'}],
						answer: '1'
					},
					{
						question: 'test 2',
						answers: [{id: 1, text:'Answer:test 2'}, {id: 2, text:'Answer:test 2'}],
						answer: '2'
					},
					{
						question: 'test 3',
						answers: [{id: 1, text:'Answer:test 3'}, {id: 2, text:'Answer:test 3'}],
						answer: '3'
					}
					// {
					// 	question:'test 1',
					// 	answers: ['Answer:test 1', 'Answer:test 1'],
					// 	answer: '1'
					// },
					// {
					// 	question: 'test 2',
					// 	answers: ['Answer:test 1', 'Answer:test 1'],
					// 	answer: '2'
					// },
					// {
					// 	question: 'test 3',
					// 	answers: ['Answer:test 1', 'Answer:test 1'],
					// 	answer: '3'
					// },
					// {
					// 	question:'test 1',
					// 	answers: ['Answer:test 1', 'Answer:test 1'],
					// 	answer: '1'
					// },
					// {
					// 	question: 'test 2',
					// 	answers: ['Answer:test 1', 'Answer:test 1'],
					// 	answer: '2'
					// },
					// {
					// 	question: 'test 3',
					// 	answers: ['Answer:test 1', 'Answer:test 1'],
					// 	answer: '3'
					// },
					// {
					// 	question: 'test 3',
					// 	answers: ['Answer:test 1', 'Answer:test 1'],
					// 	answer: '3'
					// }
				]
			}
		};

		
		if ($state.params.technology) {
			this.quizzes = this.techologies[$state.params.technology].quizzes;

			this.currentQuiz = this.quizzes[0];
		}

		this.counter = 1;
		this.destroy = true;
		var vm = this;

		this.next = function(){

			if (this.counter >= this.quizzes.length) return;

			this.destroy = false;
			this.currentQuiz.answer = this.answer;

			console.log(this.answer, this.value);

			$timeout(function(){
				vm.currentQuiz = vm.quizzes[vm.counter++];
				vm.destroy = true;
			}, 550);


		};

		this.endQuizz = function(){
			// 
		};
	}

	QuizController.$inject = ['$state', '$timeout'];

	module.controller('QuizController', QuizController);

})(angular.module('core'));