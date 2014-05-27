/**
 * Created by andrewbrassington on 5/22/14.
 */
var Appointment = Backbone.Model.extend({
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
