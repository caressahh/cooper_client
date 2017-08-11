import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { PersonProvider } from '../../providers/person/person'
import { PerfomanceDataProvider } from '../../providers/perfomance-data/perfomance-data';
import { ResultsPage } from '../../pages/results/results'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  user: any = {};

  constructor(
    public navCtrl: NavController,
    public person: PersonProvider,
    public modalCtrl: ModalController,
    private _performanceData: PerfomanceDataProvider
) {
    this.user = { distance: 1000, age: 20, gender: 'female'};
  }

  calculate(user) {
    this.person.age = this.user.age;
    this.person.gender = this.user.gender;

    this.person.doAssessment(this.user, this.user.distance);

  }
  showResults() {
      this.modalCtrl.create(ResultsPage).present();
    }
    saveResults() {
    this._performanceData
      .saveData({ performance_data: { data: { message: this.person.assessmentMessage}}})
      .subscribe(data => console.log(data))
    }
}
