import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PerfomanceDataProvider } from '../../providers/perfomance-data/perfomance-data';

@Component({
  selector: 'page-results',
  templateUrl: 'results.html',
})
export class ResultsPage {
  results = [];

  constructor(
    private _performanceData: PerfomanceDataProvider,
    public navCtrl: NavController,
    public navParams: NavParams
  ) {}

  ionViewDidLoad() {
    this._performanceData
    .getResults()
    .subscribe(data => (this.results = data.entries));
  }

}
