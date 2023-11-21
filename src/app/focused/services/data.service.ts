import { Injectable } from '@angular/core';
import {catchError, lastValueFrom, map, of, throwError} from "rxjs";
import {PREPARE_DATA_PAYLOAD} from "../mocks/data.mock";

@Injectable({
  providedIn: 'root',
})
export class dataService {

  reload(loadOptions: any) {
    console.log('loadOptions', loadOptions);
    const data = PREPARE_DATA_PAYLOAD;
    if (loadOptions?.sort) {
      loadOptions.sort.forEach( (x: any) => {
        if (x?.selector == 'codigo') {
            if (x.desc! == false) {
              data.sort((a,b) => {
                return a?.codigo - b?.codigo
              });
            }
            else {
              data.sort((a,b) => {
                return b?.codigo - a?.codigo
              });
            }
        }
      });
    }
    const preparedData = data.slice(loadOptions.skip, loadOptions.skip + loadOptions.take);
    const loadData$ = of(preparedData).pipe(
      map((response: any) => {
        return {
          data: response,
          totalCount: PREPARE_DATA_PAYLOAD.length,
        };
      }),
      catchError((err) => {
        console.log('error loading', err);
        return throwError(() => err);
      })
    );
    return lastValueFrom(loadData$);
  }
}
