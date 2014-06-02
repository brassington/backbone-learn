/**
 * Created by andrewbrassington on 5/22/14.
 */

var Appointment = Backbone.Model.extend({
    urlRoot: '/appointments',
    defaults: function() {
      return {
        title: 'Checkup',
        date: new Date()
      };
    }
  },
  render: function() {
    var html = '<li>' + this.model.get('title') + '</li>';
    $(this.el).html(html);
  }
});

var appointment = new Appointment({description: 'My backbone hurts'});
appointment.set({title: 'Go to Doctor'});
var AppointmentView = Backbone.View.extend({});
var appointmentView = new AppointmentView({model: appointment});


appointmentView.render();
$('#app').html(appointmentView.el);

var appointment2 = new Appointment({id: 1});
appointment2.fetch();
appointment2.set({cancelled: true});
appointment2.save();
appointment2.on('change', function() {
  alert('Hey Dr. Goodparts, your appointment was cancelled!');
});
