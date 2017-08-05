/*jslint indent: 2 */
/*global $: false, document: false, togglbutton: false*/
'use strict';

togglbutton.render('[name="name_form"]:not(.toggl)', {observe: true}, function (elem) {
  var link,
    description = $('.task-title span', elem).textContent,
    project = $('#projectDropdown span:nth-last-child(2)').textContent;
    console.log(description);
    console.log(project);
  link = togglbutton.createTimerLink({
    className: 'hacknplan',
    description: description,
    projectName: project
  });

  $('[name="name_form"]').appendChild(link);
});