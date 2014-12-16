gm.minTime
==========

Directive for AngularJS that sets model validation based on a minimum time value. Useful for UI Bootstrap Timepickers or &lt;input type='time' /> elements

First, add the module to your app:

    angular.app('app', ['gm.minTime'])

Then, use in a form like so:

    <form name='myForm'>
      <input type='time' ng-model='startTime' />
      <input type='time' ng-model='endTime' min-time='startTime' />
    </form>

The form will become invalid if startTime equals or exceeds endTime.

<a href='http://plnkr.co/edit/4zSo2F?p=preview'>Demo on Plunker</a>
