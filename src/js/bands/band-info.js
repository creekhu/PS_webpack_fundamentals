import bandTemplate from './band-info.html';

export default app => {
    app.directive('bandInfo', bandList => {
        return {
            template: bandTemplate,
            restrict: 'E',
            controller: function($scope) {
                $scope.bands = bandList;
            }
        }
    })
}