angular.module('assessment', ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: './views/home.html'
            })
            .state('shop', {
                url: '/shop',
                templateUrl: './views/shop.html'
            })
            .state('blog', {
                url: '/blog',
                templateUrl: './views/blog.html'
            })
            .state('about', {
                url: '/about',
                templateUrl: './views/about.html'
            })
            .state('products', {
                url: '/products',
                templateUrl: './vews/product-details.html'
            });
        $urlRouterProvider
            .otherwise('./views/home.html');
    });
