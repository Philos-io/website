(function(module){
  'use strict';

  function CommonController($http, $state){

    var self = this;

    this.suggest = function(){

      var info = {
        name: this.name,
        email: this.email,
        phone: this.phone,
        technology: this.technology,
        message: this.message
      };

      $http.post('api/suggest', {info: info}).then(success, error);

      function success(data){
        $state.transitionTo('workshops');
      }

      function error(err){
      }
    }


    function activate(){

      self.team = [
        {
          fullName: 'Maxime CZETWERTYNSKI',
          role: 'Head of Operation',
          twitter: '@maxczet',
          phone: '+32 489 38 10 72',
          picture: 'modules/assets/images/team/team_max.jpg',
          description: "Take a sport enthusiast with a passion for the digital world and for innovation, add a dose  of international experiences, shake hard and you should get something that resembles to Max. With a thing for problem solving, Max has this ability to come up with creative solutions to turn problems into opportunities. When Max is not leading the design of a product, you'll mostly find him on a football pitch helping his team moving forward.",
          media: [
            {
              url: 'https://twitter.com/maxczet',
              icon: 'fa fa-twitter'
            },
            {
              url: 'https://www.linkedin.com/profile/view?id=164239432',
              icon: 'fa fa-linkedin'
            },
            {
              url: 'https://angel.co/maxime-czetwertynski',
              icon: 'fa fa-angellist'
            }
          ]
        },
        {
          fullName: 'Mehdi Bouhjar',
          role: 'Art Director',
          twitter: '@mehdimitchel',
          phone: '+32 479 91 98 67',
          picture: 'modules/assets/images/team/team_mehdi.jpg',
          description: "As far we can remember, Mehdi has always been fascinated by drawing, building, designing and crafting things. Willing to discover the world, he went on to sharpen his skills in various companies on three different continents. These experiences combined to his lust for video games are most probably what keep his imagination flowing. Creative to the bone, his pieces of art won’t stop to astonish you.",
          media: [
            {
              url: 'https://twitter.com/mehdimitchel',
              icon: 'fa fa-twitter'
            },
            {
              url: 'w.linkedin.com/profile/view?id=37189326',
              icon: 'fa fa-linkedin'
            },
            {
              url: 'https://angel.co/mehdi-bouhjar',
              icon: 'fa fa-angellist'
            }
          ]
        },
        {
          fullName: 'Davy Engone',
          role: 'Software Engineer',
          twitter: '@davyengone',
          phone: '+32 488 79 03 41',
          picture: 'modules/assets/images/team/team_davy.jpg',
          description: "If not busy coding, testing, or building cool projects with the new tools he just learned, Davy is most probably playing basketball or training for his next run. Intrigued by the potiential of the web, he started digging into JavaScript more than 9 years ago. After contributing to many projects in Paris, London and San Francisco for companies like Famo.us, Alten he cofounded Philos to accelerate the adoption of web technologies everywhere possible.",
          media: [
            {
              url: 'https://twitter.com/davyengone',
              icon: 'fa fa-twitter'
            },
            {
              url: 'https://www.linkedin.com/profile/view?id=93011569',
              icon: 'fa fa-linkedin'
            },
            {
              url: 'https://angel.co/davyengone',
              icon: 'fa fa-angellist'
            }
          ]
        }];
    }

    activate();
  }


  CommonController.$inject = ['$http', '$state'];

  module.controller('CommonController', CommonController);

})(angular.module('core'));
