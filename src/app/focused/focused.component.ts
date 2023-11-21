import {AfterViewInit, Component, OnDestroy, ViewChild} from '@angular/core';
import CustomStore from 'devextreme/data/custom_store';
import {dataService} from "./services/data.service";
import {Subscription} from "rxjs";
import {DxDataGridComponent} from "devextreme-angular";


@Component({
  selector: 'app-focused',
  templateUrl: './focused.component.html',
  styleUrls: ['./focused.component.css']
})
export class FocusedComponent implements AfterViewInit, OnDestroy {
  @ViewChild('focusedGrid', { static: false }) fg: DxDataGridComponent | undefined;
  subscription$: Subscription = new Subscription();
  ds: CustomStore;
  constructor(private service: dataService) {
    this.ds =  new CustomStore({
      key: 'rnum',
      load: (loadOptions: any) => {
        return this.service.reload(loadOptions);
      },
    });
  }

  ngAfterViewInit(): void {
    if (this.fg) {
      this.subscription$ = this.fg.onFocusedRowChanged.subscribe( (z: any) => {console.log('FOCUSED', z)});
    }
    this.ds.on('loaded', ()=> {
      console.log('EO loaded');
      //this.fg!.focusedRowIndex = -1;
      //this.fg!.focusedRowIndex = 0;
    });
  }

  ngOnDestroy(): void {
    this.subscription$?.unsubscribe();
  }

}
